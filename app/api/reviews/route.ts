/**
 * GET /api/reviews
 *
 * Public debug/inspection endpoint — returns the same data that
 * Server Components get from `getGooglePlaceReviews()` in lib/google-reviews.ts.
 *
 * The actual review fetching logic lives in lib/google-reviews.ts and is
 * called directly by Server Components (no HTTP hop). This route exists
 * purely for testing: `curl http://localhost:3000/api/reviews | jq .`
 */

import { NextResponse } from "next/server";

import { getGooglePlaceReviews } from "@/lib/google-reviews";

// ISR: cache this response for 24 hours (same as the lib fetch)
export const revalidate = 86400;

export async function GET(): Promise<NextResponse> {
  const data = await getGooglePlaceReviews();

  if (!data) {
    return NextResponse.json(
      {
        error:
          "Could not fetch reviews. Check that SERP_API_KEY and GOOGLE_PLACE_ID are set in .env.local.",
      },
      { status: 503 },
    );
  }

  return NextResponse.json(data);
}
