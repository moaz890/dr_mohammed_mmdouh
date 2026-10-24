import type { ArticleFear } from "../types";

type FearsCardProps = {
  fears: ArticleFear[];
  labels: {
    sectionTitle: string;
    sectionSubtitle: string;
    fearLabel: string;
    realityLabel: string;
    evidenceSource: string;
  };
};

export function FearsCard({ fears, labels }: FearsCardProps) {
  if (!fears || fears.length === 0) return null;

  return (
    <section className="article-fears-section">
      <div className="mb-6">
        <h2 className="article-fears-title">{labels.sectionTitle}</h2>
        <p className="article-fears-subtitle">{labels.sectionSubtitle}</p>
      </div>

      <div className="space-y-4">
        {fears.map((item) => (
          <div key={item.id} className="article-fears-card">
            {/* Fear Side */}
            <div className="article-fear-side">
              <span className="article-fear-label">
                <span>⚠️</span>
                <span>{labels.fearLabel}</span>
              </span>
              <p className="article-fear-text">&ldquo;{item.fear}&rdquo;</p>
            </div>

            {/* Reality / Scientific Evidence Side */}
            <div className="article-reality-side">
              <span className="article-reality-label">
                <span>✓</span>
                <span>{labels.realityLabel}</span>
              </span>
              <p className="article-reality-text">{item.reality}</p>
              {item.sourceTag && (
                <div className="mt-2">
                  <span className="article-source-tag">
                    {labels.evidenceSource}: {item.sourceTag}
                  </span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
