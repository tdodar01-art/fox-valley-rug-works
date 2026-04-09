import Link from 'next/link';
import Image from 'next/image';
import CTABanner from './CTABanner';
import type { City } from '@/lib/cities';
import { getCityBySlug } from '@/lib/cities';

interface CityPageTemplateProps {
  city: City;
}

const keyServices = [
  {
    title: 'Area Rug Cleaning',
    description: 'Full immersion plant cleaning for every rug type — from heirloom Persians to everyday synthetics.',
    href: '/services',
  },
  {
    title: 'Pet Stain & Odor Removal',
    description: 'Enzymatic treatment that eliminates odor at the source, not just masks it.',
    href: '/services',
  },
  {
    title: 'Pickup & Delivery',
    description: 'Free pickup and delivery throughout our service area. We come to you.',
    href: '/services',
  },
  {
    title: 'Rug Repair & Restoration',
    description: 'Fringe repair, binding, patching, and restoration for damaged rugs.',
    href: '/services',
  },
];

export default function CityPageTemplate({ city }: CityPageTemplateProps) {
  const nearbyCities = city.nearby
    .map((slug) => getCityBySlug(slug))
    .filter((c): c is City => c !== undefined);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Fox Valley Rug Works',
    description: `Expert area rug cleaning for ${city.name}, Illinois homeowners.`,
    url: `https://foxvalleyrugworks.com/rug-cleaning/${city.slug}`,
    telephone: '(847) 000-0000',
    email: 'info@foxvalleyrugworks.com',
    areaServed: {
      '@type': 'City',
      name: city.name,
      containedInPlace: {
        '@type': 'State',
        name: 'Illinois',
      },
    },
    serviceType: 'Area Rug Cleaning',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-[var(--color-charcoal)] mb-6 text-center">
            Rug Cleaning in {city.name}, Illinois
          </h1>
          <p className="text-lg text-[var(--color-slate)] leading-relaxed text-center max-w-3xl mx-auto mb-4">
            Fox Valley Rug Works provides expert area rug cleaning for {city.name} homeowners. Whether you have a treasured Persian rug, a durable wool area rug, or a synthetic rug that needs freshening up — our dedicated plant facility delivers a level of clean that in-home cleaning simply can&apos;t match. We offer free pickup and delivery throughout {city.name} and surrounding communities.
          </p>
          <p className="text-[var(--color-slate)] leading-relaxed text-center max-w-3xl mx-auto">
            {city.description}
          </p>
          <div className="section-divider max-w-xs mx-auto mt-10" />
        </div>
      </section>

      {/* Why Plant Cleaning */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[var(--color-charcoal)] mb-6">
                Why {city.name} Homeowners Choose Plant Cleaning
              </h2>
              <p className="text-[var(--color-slate)] leading-relaxed mb-4">
                In-home carpet cleaners use portable equipment designed for wall-to-wall carpet — not area rugs. They can&apos;t fully immerse your rug, can&apos;t mechanically remove embedded grit, and can&apos;t control the drying environment. The result? Surface cleaning at best.
              </p>
              <p className="text-[var(--color-slate)] leading-relaxed">
                At Fox Valley Rug Works, your rug is cleaned in our dedicated 1,800 SF plant with professional equipment: mechanical dusters, a full immersion wash bay, a centrifuge for water extraction, and a climate-controlled drying room. It&apos;s how rug cleaning is supposed to be done.
              </p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src="/images/plant-interior-wash-bay.webp"
                alt="Interior of the Fox Valley Rug Works plant showing the wash bay and drying area"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[var(--color-charcoal)] mb-10 text-center">
            Services for {city.name} Residents
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {keyServices.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="bg-white rounded-lg p-6 shadow-sm border border-[var(--color-gold)]/10 hover:shadow-md transition-shadow"
              >
                <h3 className="font-[family-name:var(--font-playfair)] text-lg font-semibold text-[var(--color-charcoal)] mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-[var(--color-slate)] leading-relaxed">{service.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[var(--color-charcoal)] mb-10 text-center">
            Our Process
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Inspect', desc: 'We assess fiber, dye, and condition.' },
              { step: '2', title: 'Dust & Wash', desc: 'Mechanical dusting, then full immersion wash.' },
              { step: '3', title: 'Dry & Groom', desc: 'Climate-controlled drying and pile grooming.' },
              { step: '4', title: 'Return', desc: 'Wrapped and delivered or ready for pickup.' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 rounded-full bg-[var(--color-rust)] text-white flex items-center justify-center font-[family-name:var(--font-libre-franklin)] font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-[family-name:var(--font-playfair)] font-semibold text-[var(--color-charcoal)] mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-[var(--color-slate)]">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/about"
              className="font-[family-name:var(--font-libre-franklin)] text-sm text-[var(--color-rust)] hover:text-[var(--color-rust-dark)] transition-colors underline underline-offset-4"
            >
              See Our Full Process &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Nearby Communities */}
      {nearbyCities.length > 0 && (
        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[var(--color-charcoal)] mb-8">
              Serving {city.name} and Nearby Communities
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {nearbyCities.map((nearby) => (
                <Link
                  key={nearby.slug}
                  href={`/rug-cleaning/${nearby.slug}`}
                  className="px-4 py-2 border border-[var(--color-gold)]/30 rounded-full text-sm font-[family-name:var(--font-libre-franklin)] text-[var(--color-charcoal)] hover:bg-[var(--color-rust)] hover:text-white hover:border-[var(--color-rust)] transition-colors"
                >
                  {nearby.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABanner
        headline={`Get Your Free Estimate in ${city.name}`}
        subheadline="Drop off your rug or schedule a free pickup. We'll take it from there."
        buttonText="Contact Us"
        buttonHref="/contact"
      />
    </>
  );
}
