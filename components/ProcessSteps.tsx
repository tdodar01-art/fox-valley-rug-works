'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

interface Step {
  number: number;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

interface ProcessStepsProps {
  steps: Step[];
}

export default function ProcessSteps({ steps }: ProcessStepsProps) {
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.15 }
    );
    stepsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative">
      {/* Connecting line */}
      <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-[var(--color-gold)]/20 -translate-x-1/2 hidden md:block" />

      <div className="space-y-12 md:space-y-16">
        {steps.map((step, i) => {
          const isLeft = i % 2 === 0;
          return (
            <div
              key={step.number}
              ref={(el) => { stepsRef.current[i] = el; }}
              className="fade-in"
            >
              <div className={`md:grid md:grid-cols-2 md:gap-12 items-center ${isLeft ? '' : 'md:direction-rtl'}`}>
                <div className={`${isLeft ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12 md:order-2'} mb-6 md:mb-0`} style={{ direction: 'ltr' }}>
                  <div className={`flex items-center gap-4 mb-3 ${isLeft ? 'md:justify-end' : 'md:justify-start'}`}>
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--color-rust)] text-white flex items-center justify-center font-[family-name:var(--font-libre-franklin)] text-sm font-bold">
                      {step.number}
                    </div>
                    <h3 className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-[var(--color-charcoal)]">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-[var(--color-slate)] leading-relaxed">{step.description}</p>
                </div>
                <div className={`${isLeft ? '' : 'md:order-1'}`} style={{ direction: 'ltr' }}>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                    <Image
                      src={step.imageSrc}
                      alt={step.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
