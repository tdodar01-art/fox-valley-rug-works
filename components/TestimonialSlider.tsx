'use client';

import { useState, useEffect } from 'react';

const testimonials = [
  {
    quote:
      "We brought in a Persian rug that had been in the family for three generations. It came back looking like the day it was made. Truly exceptional work.",
    name: 'Margaret H.',
    city: 'Crystal Lake, IL',
  },
  {
    quote:
      "Our dog had an accident on our wool rug and the smell was terrible. Fox Valley Rug Works completely eliminated the odor. You'd never know it happened.",
    name: 'David & Karen T.',
    city: 'St. Charles, IL',
  },
  {
    quote:
      "The pickup and delivery made it so easy. They were careful, communicative, and the rug looks incredible. This is the only place we'll go from now on.",
    name: 'Lisa M.',
    city: 'Barrington, IL',
  },
];

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative max-w-3xl mx-auto text-center px-4">
      {testimonials.map((t, i) => (
        <div
          key={i}
          className={`transition-opacity duration-500 ${i === current ? 'opacity-100' : 'opacity-0 absolute inset-0'}`}
        >
          {/* Avatar placeholder */}
          <div className="w-16 h-16 rounded-full mx-auto mb-6" style={{
            background: 'linear-gradient(135deg, #C4993B40, #B7472A30)',
          }} />
          <blockquote className="font-[family-name:var(--font-playfair)] text-xl md:text-2xl italic text-[var(--color-charcoal)] leading-relaxed mb-6">
            &ldquo;{t.quote}&rdquo;
          </blockquote>
          <p className="font-[family-name:var(--font-libre-franklin)] text-sm font-semibold text-[var(--color-charcoal)]">
            {t.name}
          </p>
          <p className="font-[family-name:var(--font-libre-franklin)] text-xs text-[var(--color-slate)]">
            {t.city}
          </p>
        </div>
      ))}

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-8">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${
              i === current ? 'bg-[var(--color-rust)]' : 'bg-[var(--color-gold)]/30'
            }`}
            aria-label={`Show testimonial ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
