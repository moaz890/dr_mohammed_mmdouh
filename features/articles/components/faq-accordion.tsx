"use client";

import { useState } from "react";

import type { ArticleFaq } from "../types";

type FaqAccordionProps = {
  faqs: ArticleFaq[];
  sectionTitle: string;
};

export function FaqAccordion({ faqs, sectionTitle }: FaqAccordionProps) {
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({
    [faqs[0]?.id || ""]: true,
  });

  const toggle = (id: string) => {
    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  if (!faqs || faqs.length === 0) return null;

  return (
    <section className="my-10">
      <h2 className="mb-6 text-2xl font-black text-foreground">{sectionTitle}</h2>
      <div className="space-y-3">
        {faqs.map((faq) => {
          const isOpen = !!openIds[faq.id];
          return (
            <div key={faq.id} className="article-faq-item">
              <button
                type="button"
                onClick={() => toggle(faq.id)}
                className="article-faq-summary w-full text-start"
                aria-expanded={isOpen}
              >
                <span>{faq.question}</span>
                <span
                  className={`text-lg font-bold text-[var(--brand-blue)] transition-transform duration-200 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                >
                  ▾
                </span>
              </button>
              {isOpen && (
                <div className="article-faq-content">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
