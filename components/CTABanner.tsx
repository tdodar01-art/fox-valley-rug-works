import Link from 'next/link';

interface CTABannerProps {
  headline: string;
  subheadline?: string;
  buttonText: string;
  buttonHref: string;
  variant?: 'dark' | 'rust';
}

export default function CTABanner({
  headline,
  subheadline,
  buttonText,
  buttonHref,
  variant = 'dark',
}: CTABannerProps) {
  const bg = variant === 'dark' ? 'bg-[var(--color-dark-bg)]' : 'bg-[var(--color-rust)]';

  return (
    <section className={`${bg} py-16 md:py-20`}>
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-white mb-4">
          {headline}
        </h2>
        {subheadline && (
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">{subheadline}</p>
        )}
        <Link
          href={buttonHref}
          className={`inline-flex items-center justify-center font-[family-name:var(--font-libre-franklin)] text-sm px-8 py-3 rounded transition-colors ${
            variant === 'dark'
              ? 'bg-[var(--color-rust)] text-white hover:bg-[var(--color-rust-dark)]'
              : 'bg-white text-[var(--color-rust)] hover:bg-gray-100'
          }`}
        >
          {buttonText}
        </Link>
      </div>
    </section>
  );
}
