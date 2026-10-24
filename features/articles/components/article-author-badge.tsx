import Image from "next/image";

import type { ArticleAuthor } from "../types";

type ArticleAuthorBadgeProps = {
  author: ArticleAuthor;
  publishedAt: string;
  readTimeMinutes: number;
  labels: {
    medicallyReviewedBy: string;
    readTime: string;
    publishedOn: string;
  };
};

export function ArticleAuthorBadge({
  author,
  publishedAt,
  readTimeMinutes,
  labels,
}: ArticleAuthorBadgeProps) {
  return (
    <div className="article-author-badge">
      <div className="article-author-avatar">
        <Image
          src={author.avatar}
          alt={author.name}
          width={64}
          height={64}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold text-[var(--brand-pink)] uppercase tracking-wider">
            ✓ {labels.medicallyReviewedBy}
          </span>
          <span className="text-xs text-muted-foreground">•</span>
          <span className="text-xs text-muted-foreground">
            ⏱️ {readTimeMinutes} {labels.readTime}
          </span>
          <span className="text-xs text-muted-foreground">•</span>
          <span className="text-xs text-muted-foreground">
            {labels.publishedOn} {publishedAt}
          </span>
        </div>
        <h4 className="article-author-name">{author.name}</h4>
        <p className="article-author-title">{author.title}</p>
        <p className="text-xs text-muted-foreground">{author.credentials}</p>
      </div>
    </div>
  );
}
