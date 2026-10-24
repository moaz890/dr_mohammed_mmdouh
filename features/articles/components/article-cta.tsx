import { routePaths } from "@/config/routes";
import { Link } from "@/i18n/navigation";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

type ArticleCtaProps = {
  articleTitle: string;
  labels: {
    title: string;
    subtitle: string;
    whatsappBtn: string;
    bookAppointmentBtn: string;
    whatsappMessagePrefix: string;
  };
};

export function ArticleCta({ articleTitle, labels }: ArticleCtaProps) {
  const whatsappUrl = buildWhatsAppUrl(
    `${labels.whatsappMessagePrefix}: "${articleTitle}"`,
  );

  return (
    <div className="article-cta-banner">
      <h3 className="article-cta-title">{labels.title}</h3>
      <p className="article-cta-subtitle">{labels.subtitle}</p>
      <div className="article-cta-actions">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="article-cta-btn-primary"
        >
          <span>💬</span>
          <span>{labels.whatsappBtn}</span>
        </a>

        <Link href={routePaths.clinics} className="article-cta-btn-secondary">
          <span>📍</span>
          <span>{labels.bookAppointmentBtn}</span>
        </Link>
      </div>
    </div>
  );
}
