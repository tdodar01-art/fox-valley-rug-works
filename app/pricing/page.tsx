import type { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/metadata';
import Link from 'next/link';
import CTABanner from '@/components/CTABanner';

export const metadata: Metadata = generatePageMetadata({
  title: 'Pricing & Estimates — Area Rug Cleaning Rates',
  description:
    'Rug cleaning starting at $2/sq ft for synthetic, $3/sq ft for wool, $4/sq ft for hand-knotted Oriental, $6/sq ft for silk. Free estimates and free pickup & delivery.',
  path: '/pricing',
});

const pricing = [
  { service: 'Wool Area Rug Cleaning', price: '$3.00 / sq ft' },
  { service: 'Synthetic / Machine-Made', price: '$2.00 / sq ft' },
  { service: 'Hand-Knotted Oriental', price: '$4.00 / sq ft' },
  { service: 'Silk Rug Cleaning', price: '$6.00 / sq ft' },
  { service: 'Pet Stain Treatment', price: '$1.50 / sq ft (add-on)' },
  { service: 'Rug Padding', price: '$2.50 / sq ft' },
  { service: 'Fringe Cleaning (hand)', price: '$3.00 / linear ft' },
  { service: 'Pickup & Delivery', price: 'Free within service area' },
];

export default function PricingPage() {
  return (
    <>
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-[var(--color-charcoal)] mb-6">
            Pricing &amp; Estimates
          </h1>
          <p className="text-lg text-[var(--color-slate)] leading-relaxed max-w-2xl mx-auto">
            Every rug is priced based on its size, fiber type, and condition. Below are our starting rates. For an exact quote, bring your rug in or send us photos.
          </p>
          <div className="section-divider max-w-xs mx-auto mt-10" />
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-sm border border-[var(--color-gold)]/10 overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[var(--color-gold)]/10">
                  <th className="text-left px-6 py-4 font-[family-name:var(--font-libre-franklin)] text-xs uppercase tracking-wider text-[var(--color-slate)]">
                    Service
                  </th>
                  <th className="text-right px-6 py-4 font-[family-name:var(--font-libre-franklin)] text-xs uppercase tracking-wider text-[var(--color-slate)]">
                    Starting At
                  </th>
                </tr>
              </thead>
              <tbody>
                {pricing.map((row, i) => (
                  <tr
                    key={row.service}
                    className={`${i !== pricing.length - 1 ? 'border-b border-gray-100' : ''}`}
                  >
                    <td className="px-6 py-4 text-[var(--color-charcoal)] font-[family-name:var(--font-playfair)]">
                      {row.service}
                    </td>
                    <td className="px-6 py-4 text-right text-[var(--color-rust)] font-semibold font-[family-name:var(--font-libre-franklin)]">
                      {row.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 bg-[var(--color-gold)]/10 rounded-lg p-6 text-center">
            <p className="text-[var(--color-charcoal)] font-semibold mb-1">
              Minimum charge: $75
            </p>
            <p className="text-sm text-[var(--color-slate)]">
              Exact pricing depends on inspection. We&apos;ll always give you a firm quote before we start.
            </p>
          </div>

          <div className="text-center mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center font-[family-name:var(--font-libre-franklin)] text-sm px-8 py-3 bg-[var(--color-rust)] text-white rounded hover:bg-[var(--color-rust-dark)] transition-colors"
            >
              Get Your Free Estimate
            </Link>
          </div>
        </div>
      </section>

      <CTABanner
        headline="Questions About Pricing?"
        subheadline="Send us photos of your rug for a quick remote estimate. Or drop it off for an in-person quote."
        buttonText="Contact Us"
        buttonHref="/contact"
        variant="rust"
      />
    </>
  );
}
