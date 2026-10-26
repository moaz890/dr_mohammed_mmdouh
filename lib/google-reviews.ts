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
// SerpApi response types (google_maps_reviews engine)
// ---------------------------------------------------------------------------
interface SerpApiReview {
  user: {
    name: string;
    thumbnail?: string;
  };
  rating: number;
  date: string;
  snippet?: string;
}

interface SerpApiResponse {
  place_info?: {
    rating?: number;
    reviews?: number;
  };
  reviews?: SerpApiReview[];
  error?: string;
}

// ---------------------------------------------------------------------------
// Main export
// ---------------------------------------------------------------------------

/**
 * Fetches Google Maps reviews from SerpApi.
 *
 * - Filters to ≥ 4 stars only.
 * - SerpApi returns results sorted newest-first (sort_by=newestFirst).
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
      engine: "google_maps_reviews",
      place_id: placeId,
      sort_by: "newestFirst",
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

    // Filter: only 4★ and 5★ reviews that have actual text
    const reviews: GoogleReviewItem[] = (data.reviews ?? [])
      .filter((r) => r.rating >= 4 && r.snippet && r.snippet.trim().length > 0)
      .map((r) => ({
        authorName: r.user.name,
        authorPhoto: r.user.thumbnail ?? undefined,
        rating: r.rating,
        relativeTime: r.date,
        text: r.snippet ?? "",
      }));

    return {
      rating: data.place_info?.rating ?? 5.0,
      userRatingsTotal: data.place_info?.reviews ?? reviews.length,
      reviews,
    };
  } catch (error) {
    console.error("[SerpApi] Fetch failed:", error);
    return null;
  }
}
