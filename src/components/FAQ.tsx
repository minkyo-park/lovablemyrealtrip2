import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  q: string;
  a: string;
}

const FAQ = ({ items, schemaId }: { items: FAQItem[]; schemaId?: string }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <section aria-labelledby={schemaId || "faq-heading"}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <h2 id={schemaId || "faq-heading"} className="text-2xl font-bold mb-6">
        자주 묻는 질문 (FAQ)
      </h2>
      <div className="space-y-0 rounded-xl border border-border overflow-hidden">
        {items.map((item, i) => (
          <div key={i} className="border-b border-border last:border-b-0">
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="flex w-full items-center justify-between px-5 py-4 text-left font-medium hover:bg-muted/50 transition-colors"
              aria-expanded={openIndex === i}
            >
              <span className="pr-4">{item.q}</span>
              <ChevronDown
                className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform ${
                  openIndex === i ? "rotate-180" : ""
                }`}
              />
            </button>
            {openIndex === i && (
              <div className="px-5 pb-4 text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
                {item.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
