'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={i}
            className="bg-white rounded-lg shadow-sm border border-[var(--color-gold)]/10 overflow-hidden"
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-50 transition-colors"
              aria-expanded={isOpen}
            >
              <span className="font-[family-name:var(--font-playfair)] text-lg font-semibold text-[var(--color-charcoal)] pr-4">
                {item.question}
              </span>
              <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center text-[var(--color-rust)] text-xl font-light">
                {isOpen ? '−' : '+'}
              </span>
            </button>
            <div
              className={`transition-all duration-300 ease-in-out ${
                isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              } overflow-hidden`}
            >
              <div className="px-6 pb-5 text-[var(--color-slate)] leading-relaxed">
                {item.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
