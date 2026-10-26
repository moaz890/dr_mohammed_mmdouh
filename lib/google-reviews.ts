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

/**
 * Default fallback Place ID query for Tagamo Clinic:
 * Can be overridden in .env via GOOGLE_PLACE_ID
 */
const DEFAULT_PLACE_QUERY = "الدكتور محمد ممدوح صالح مدرس واستشاري النساء والتوليد";

/**
 * Fetches real-time reviews from Google Places API (Legacy or New).
 * Uses Next.js Incremental Static Regeneration (revalidate every 1 hour)
 * to prevent quota exhaustion and maximize speed.
 */
export async function getGooglePlaceReviews(): Promise<GooglePlaceReviewsData | null> {
  const apiKey = process.env.GOOGLE_API_KEY;
  if (!apiKey || apiKey.trim() === "") {
    return null;
  }

  try {
    let placeId = process.env.GOOGLE_PLACE_ID?.trim();

    // 1. Resolve Place ID if not directly provided
    if (!placeId) {
      const searchUrl = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${encodeURIComponent(
        DEFAULT_PLACE_QUERY,
      )}&inputtype=textquery&fields=place_id&key=${apiKey}`;

      const searchRes = await fetch(searchUrl, {
        next: { revalidate: 86400 }, // Cache search query for 24h
      });

      if (!searchRes.ok) {
        return null;
      }

      const searchJson = await searchRes.json();
      if (
        searchJson.status === "OK" &&
        searchJson.candidates &&
        searchJson.candidates.length > 0
      ) {
        placeId = searchJson.candidates[0].place_id;
      }
    }

    if (!placeId) {
      return null;
    }

    // 2. Fetch Place Details with Reviews
    const detailsUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,user_ratings_total,reviews&language=ar&key=${apiKey}`;

    const detailsRes = await fetch(detailsUrl, {
      next: { revalidate: 3600 }, // Revalidate every 1 hour
    });

    if (!detailsRes.ok) {
      return null;
    }

    const detailsJson = await detailsRes.json();
    if (detailsJson.status !== "OK" || !detailsJson.result) {
      return null;
    }

    const result = detailsJson.result;
    const rawReviews = result.reviews || [];

    const reviews: GoogleReviewItem[] = rawReviews.map(
      (r: {
        author_name: string;
        profile_photo_url?: string;
        rating: number;
        relative_time_description?: string;
        text: string;
      }) => ({
        authorName: r.author_name,
        authorPhoto: r.profile_photo_url,
        rating: r.rating || 5,
        relativeTime: r.relative_time_description || "",
        text: r.text || "",
      }),
    );

    return {
      rating: result.rating || 5.0,
      userRatingsTotal: result.user_ratings_total || reviews.length,
      reviews,
    };
  } catch (error) {
    // Non-blocking error handling
    console.error("[Google Reviews Fetch Error]:", error);
    return null;
  }
}
