"use client";

import { useState } from "react";

import { cn } from "@/lib/utils";

interface TestimonialAvatarProps {
  author: string;
  authorPhoto?: string;
  initial: string;
  avatarColor: "pink" | "blue" | "teal" | "purple";
  className?: string;
}

/**
 * Reviewer avatar with intelligent image fallback:
 * - If an avatar image is provided and loads successfully, displays it.
 * - If no image is provided, or if the image fails to load (403, 404, etc.),
 *   falls back to displaying the first letter (initial) of the reviewer's name.
 * - Includes referrerPolicy="no-referrer" to prevent Google CDN 403 Forbidden errors.
 */
export function TestimonialAvatar({
  author,
  authorPhoto,
  initial,
  avatarColor,
  className,
}: TestimonialAvatarProps) {
  const [hasError, setHasError] = useState(false);

  const hasPhoto = Boolean(authorPhoto && authorPhoto.trim() !== "" && !hasError);

  return (
    <div
      className={cn(
        "testimonial-avatar",
        `testimonial-avatar-${avatarColor}`,
        "relative overflow-hidden flex items-center justify-center shrink-0",
        className,
      )}
      aria-hidden="true"
    >
      {hasPhoto ? (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          src={authorPhoto}
          alt={author}
          referrerPolicy="no-referrer"
          loading="lazy"
          className="size-full object-cover"
          onError={() => setHasError(true)}
        />
      ) : (
        <span className="select-none font-bold uppercase">{initial}</span>
      )}
    </div>
  );
}
