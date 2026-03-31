import Link from 'next/link';
import PhotoPlaceholder from './PhotoPlaceholder';

interface HeroProps {
  headline: string;
  subheadline: string;
  primaryCTA?: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
  photoDescription?: string;
}

export default function Hero({
  headline,
  subheadline,
  primaryCTA,
  secondaryCTA,
  photoDescription,
}: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-[var(--color-cream)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-charcoal)] leading-tight mb-6">
              {headline}
            </h1>
            <p className="font-[family-name:var(--font-body)] text-lg text-[var(--color-slate)] leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              {subheadline}
            </p>
            {(primaryCTA || secondaryCTA) && (
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                {primaryCTA && (
                  <Link
                    href={primaryCTA.href}
                    className="inline-flex items-center justify-center font-[family-name:var(--font-libre-franklin)] text-sm px-8 py-3 bg-[var(--color-rust)] text-white rounded hover:bg-[var(--color-rust-dark)] transition-colors"
                  >
                    {primaryCTA.label}
                  </Link>
                )}
                {secondaryCTA && (
                  <Link
                    href={secondaryCTA.href}
                    className="inline-flex items-center justify-center font-[family-name:var(--font-libre-franklin)] text-sm px-8 py-3 border-2 border-[var(--color-charcoal)] text-[var(--color-charcoal)] rounded hover:bg-[var(--color-charcoal)] hover:text-white transition-colors"
                  >
                    {secondaryCTA.label}
                  </Link>
                )}
              </div>
            )}
          </div>
          {photoDescription && (
            <div>
              <PhotoPlaceholder description={photoDescription} aspectRatio="4:3" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
