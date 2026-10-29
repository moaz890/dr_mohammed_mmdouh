import Image from "next/image";
import { getTranslations } from "next-intl/server";

import { Link } from "@/i18n/navigation";

import type { ServiceConfig, ServiceItem, ServicesProps } from "./types";

/* ── Arrow Left (RTL-aware) Icon ─────────────────────────────────────────── */
const ArrowLeftIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="h-4 w-4 transition-transform duration-300 rtl:rotate-180 group-hover:translate-x-1 rtl:group-hover:-translate-x-1"
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const SERVICE_CONFIGS: ServiceConfig[] = [
  {
    id: "hysterectomy",
    image: "/services/hysterectomy.jpeg",
    categoryKey: "جراحة مناظير متقدمة",
    href: "/services/hysterectomy",
  },
  {
    id: "endometriosis",
    image: "/services/endometriosis.jpeg",
    categoryKey: "بطانة الرحم المهاجرة",
    href: "/services/endometriosis",
  },
  {
    id: "fibroids",
    image: "/services/fibroids.jpeg",
    categoryKey: "أورام الرحم الليفية",
    href: "/services/fibroids",
  },
  {
    id: "prp",
    image: "/services/prp.jpeg",
    categoryKey: "الخصوبة وتجديد المبيض",
    href: "/services/prp",
  },
  {
    id: "laparoscopy",
    image: "/services/laparoscopy.jpeg",
    categoryKey: "جراحة المناظير الدقيقة",
    href: "/services/laparoscopy",
  },
  {
    id: "hysteroscopy",
    image: "/services/hysteroscopy.jpeg",
    categoryKey: "مناظير تجويف الرحم",
    href: "/services/hysteroscopy",
  },
  {
    id: "adenomyosis",
    image: "/services/adenomyosis.jpeg",
    categoryKey: "التغدد وعضلات الرحم",
    href: "/services/adenomyosis",
  },
  {
    id: "c_section",
    image: "/services/c-section.jpeg",
    categoryKey: "رعاية الولادة الآمنة",
    href: "/services/c-section",
  },
  {
    id: "natural_birth",
    image: "/services/natural-birth.jpeg",
    categoryKey: "الولادة الطبيعية الميسرة",
    href: "/services/natural-birth",
  },
];

export async function Services({ className = "" }: ServicesProps) {
  const t = await getTranslations("home.servicesSection");

  const services: ServiceItem[] = SERVICE_CONFIGS.map((config) => ({
    ...config,
    category: config.categoryKey,
    title: t(`items.${config.id}.title`),
    description: t(`items.${config.id}.description`),
  }));

  return (
    <section
      id="services"
      className={`services-section reveal-section bg-light ${className}`}
      aria-labelledby="services-section-heading"
    >
      <div className="section-container container">
        {/* ── Section Title & Subtitle ───────────────────────────────────── */}
        <div className="section-title text-center" data-aos="fade-up">
          <div className="services-eyebrow-box">
            <span className="services-pulse-dot" />
            <span className="services-eyebrow">{t("eyebrow")}</span>
          </div>
          <h2 id="services-section-heading" className="services-main-heading">
            {t("title")}
          </h2>
          <p className="services-main-subtitle">{t("subtitle")}</p>
        </div>

        {/* ── 9 Services Responsive Grid (3 Columns) ─────────────────────── */}
        <div className="services-grid">
          {services.map((service, index) => (
            <article
              key={service.id}
              className={`service-card service-card-${service.id} stagger-child group`}
              style={{ "--stagger-i": index } as React.CSSProperties}
              data-aos="fade-up"
              data-aos-delay={((index % 3) + 1) * 100}
            >
              {/* Image with Category Badge */}
              <Link href={service.href} className="image-wrapper block">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={2048}
                  height={2048}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                  className="service-img"
                  decoding="async"
                  loading="lazy"
                />
                <span className="service-category-tag">{service.category}</span>
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-40"
                  aria-hidden="true"
                />
              </Link>

              {/* Card Content & Action Link */}
              <div className="content">
                <Link
                  href={service.href}
                  className="block group-hover:text-[var(--brand-blue)] transition-colors"
                >
                  <h3 className="service-card-title">{service.title}</h3>
                </Link>
                <p className="service-card-desc">{service.description}</p>
                <Link
                  href={service.href}
                  className="service-link"
                  aria-label={`${t("readMore")}: ${service.title}`}
                >
                  <span className="service-link-text">{t("readMore")}</span>
                  <span className="service-arrow-box" aria-hidden="true">
                    <ArrowLeftIcon />
                  </span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
