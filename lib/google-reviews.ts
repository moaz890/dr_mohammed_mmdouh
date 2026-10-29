/**
 * google-reviews.ts
 *
 * Server-side helper that fetches Google Maps reviews via SerpApi.
 * Called directly from Server Components — no internal HTTP hop needed.
 *
 * SerpApi: free tier, 250 searches/month, no credit card required.
 * Sign up at https://serpapi.com
 *
 * Caching: uses Next.js `fetch` with `next: { revalidate: 86400 }` so
 * SerpApi is called at most once per day regardless of traffic.
 */

// ---------------------------------------------------------------------------
// Public types (unchanged — TestimonialsSection imports these)
// ---------------------------------------------------------------------------
export interface GoogleReviewItem {
  authorName: string;
  authorPhoto?: string;
  rating: number;
  relativeTime: string;
  text: string;
}

export interface GooglePlaceReviewsData {
  rating: number;
  userRatingsTotal: number;
  reviews: GoogleReviewItem[];
}

// ---------------------------------------------------------------------------
// SerpApi response types
// ---------------------------------------------------------------------------
interface SerpApiGoogleMapsReview {
  username?: string;
  user_thumbnail?: string;
  rating?: number;
  date?: string;
  description?: string;
}

interface SerpApiGoogleMapsReviewsReview {
  user?: {
    name?: string;
    thumbnail?: string;
  };
  rating?: number;
  date?: string;
  snippet?: string;
}

interface SerpApiResponse {
  place_results?: {
    rating?: number;
    reviews?: number;
    user_reviews?: {
      most_relevant?: SerpApiGoogleMapsReview[];
    };
  };
  place_info?: {
    rating?: number;
    reviews?: number;
  };
  reviews?: SerpApiGoogleMapsReviewsReview[];
  error?: string;
}

// ---------------------------------------------------------------------------
// Main export
// ---------------------------------------------------------------------------

/**
 * Fetches Google Maps reviews from SerpApi.
 *
 * - Uses `engine: "google_maps"` which returns up to 8 authentic, full-text reviews
 *   (with author photos, dates, and ratings) from patients.
 * - No time period or date limit is enforced — all reviews from recent weeks to past months are included.
 * - Filters to ≥ 4 stars only and excludes reviews without written text.
 * - Results are cached for 24 hours via Next.js fetch ISR.
 *
 * Returns `null` when SERP_API_KEY / GOOGLE_PLACE_ID is missing or on error.
 */
export async function getGooglePlaceReviews(): Promise<GooglePlaceReviewsData | null> {
  const serpApiKey = process.env.SERP_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!serpApiKey?.trim() || !placeId?.trim()) {
    return null;
  }

  try {
    const params = new URLSearchParams({
      engine: "google_maps",
      place_id: placeId,
      hl: "ar",
      api_key: serpApiKey,
    });

    const res = await fetch(`https://serpapi.com/search.json?${params.toString()}`, {
      // Next.js ISR: cache this response for 24 hours.
      // SerpApi is only called once per day, not on every page render.
      next: { revalidate: 86400 },
    });

    if (!res.ok) {
      console.error(`[SerpApi] HTTP ${res.status}:`, await res.text());
      return null;
    }

    const data = (await res.json()) as SerpApiResponse;

    if (data.error) {
      console.error("[SerpApi] API error:", data.error);
      return null;
    }

    // 1. Try extracting rich user reviews from place_results.user_reviews.most_relevant
    const rawGoogleMapsReviews = data.place_results?.user_reviews?.most_relevant ?? [];
    let reviews: GoogleReviewItem[] = rawGoogleMapsReviews
      .filter(
        (r) => (r.rating ?? 0) >= 4 && r.description && r.description.trim().length > 0,
      )
      .map((r) => ({
        authorName: r.username ?? "مريض / مراجِع",
        authorPhoto: r.user_thumbnail,
        rating: r.rating ?? 5,
        relativeTime: r.date ?? "",
        text: r.description ?? "",
      }));

    // 2. Fallback to standard reviews array if google_maps place_results was empty
    if (reviews.length === 0 && data.reviews) {
      reviews = data.reviews
        .filter((r) => (r.rating ?? 0) >= 4 && r.snippet && r.snippet.trim().length > 0)
        .map((r) => ({
          authorName: r.user?.name ?? "مريض / مراجِع",
          authorPhoto: r.user?.thumbnail,
          rating: r.rating ?? 5,
          relativeTime: r.date ?? "",
          text: r.snippet ?? "",
        }));
    }

    const rating = data.place_results?.rating ?? data.place_info?.rating ?? 4.9;
    const userRatingsTotal =
      data.place_results?.reviews ?? data.place_info?.reviews ?? reviews.length;

    return {
      rating,
      userRatingsTotal,
      reviews,
    };
  } catch (error) {
    console.error("[SerpApi] Fetch failed:", error);
    return null;
  }
}
