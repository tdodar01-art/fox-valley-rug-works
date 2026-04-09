import Link from 'next/link';
import Image from 'next/image';
import Hero from '@/components/Hero';
import TestimonialSlider from '@/components/TestimonialSlider';
import CTABanner from '@/components/CTABanner';

const services = [
  {
    title: 'Full Immersion Wash',
    description: 'Deep cleaning in our wash bay using pH-balanced solutions matched to your rug\u2019s fibers.',
    icon: '\u2248',
  },
  {
    title: 'Dust & Soil Removal',
    description: 'Mechanical dusting removes pounds of embedded grit that vacuuming can\u2019t reach.',
    icon: '\u25CB',
  },
  {
    title: 'Stain & Odor Treatment',
    description: 'Pet stains, wine, food \u2014 we treat each stain with targeted chemistry before washing.',
    icon: '\u2736',
  },
  {
    title: 'Fringe & Repair',
    description: 'Hand cleaning of fringe, binding repair, and moth damage restoration.',
    icon: '\u2261',
  },
];

const rugTypes = [
  'Persian', 'Turkish', 'Afghan', 'Indian', 'Chinese', 'Tibetan',
  'Navajo', 'Pakistani', 'Moroccan', 'Machine-Made', 'Synthetic',
  'Wool', 'Silk', 'Cotton', 'Jute', 'Sisal',
];

const counties: { name: string; cities: { slug: string; name: string }[] }[] = [
  {
    name: 'McHenry County',
    cities: [
      { slug: 'crystal-lake', name: 'Crystal Lake' },
      { slug: 'mchenry', name: 'McHenry' },
      { slug: 'woodstock', name: 'Woodstock' },
      { slug: 'huntley', name: 'Huntley' },
      { slug: 'algonquin', name: 'Algonquin' },
      { slug: 'cary', name: 'Cary' },
      { slug: 'lake-in-the-hills', name: 'Lake in the Hills' },
      { slug: 'marengo', name: 'Marengo' },
    ],
  },
  {
    name: 'Kane County',
    cities: [
      { slug: 'st-charles', name: 'St. Charles' },
      { slug: 'geneva', name: 'Geneva' },
      { slug: 'batavia', name: 'Batavia' },
      { slug: 'elgin', name: 'Elgin' },
      { slug: 'south-elgin', name: 'South Elgin' },
      { slug: 'carpentersville', name: 'Carpentersville' },
      { slug: 'hampshire', name: 'Hampshire' },
    ],
  },
  {
    name: 'Lake County',
    cities: [
      { slug: 'barrington', name: 'Barrington' },
      { slug: 'lake-zurich', name: 'Lake Zurich' },
      { slug: 'libertyville', name: 'Libertyville' },
      { slug: 'mundelein', name: 'Mundelein' },
      { slug: 'wauconda', name: 'Wauconda' },
      { slug: 'grayslake', name: 'Grayslake' },
      { slug: 'fox-lake', name: 'Fox Lake' },
    ],
  },
  {
    name: 'Cook County',
    cities: [
      { slug: 'schaumburg', name: 'Schaumburg' },
      { slug: 'arlington-heights', name: 'Arlington Heights' },
      { slug: 'palatine', name: 'Palatine' },
      { slug: 'hoffman-estates', name: 'Hoffman Estates' },
      { slug: 'mount-prospect', name: 'Mount Prospect' },
      { slug: 'des-plaines', name: 'Des Plaines' },
      { slug: 'park-ridge', name: 'Park Ridge' },
    ],
  },
  {
    name: 'DuPage County',
    cities: [
      { slug: 'naperville', name: 'Naperville' },
      { slug: 'wheaton', name: 'Wheaton' },
      { slug: 'carol-stream', name: 'Carol Stream' },
      { slug: 'glen-ellyn', name: 'Glen Ellyn' },
      { slug: 'bloomingdale', name: 'Bloomingdale' },
      { slug: 'west-chicago', name: 'West Chicago' },
    ],
  },
];

export default function HomePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Fox Valley Rug Works',
    description: 'Expert area rug cleaning plant serving the northwest Chicago suburbs.',
    url: 'https://foxvalleyrugworks.com',
    telephone: '(847) 000-0000',
    email: 'info@foxvalleyrugworks.com',
    areaServed: [
      { '@type': 'State', name: 'Illinois' },
    ],
    serviceType: 'Area Rug Cleaning',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <Hero
        headline="Expert Rug Cleaning. Done Right."
        subheadline="Fox Valley Rug Works is a dedicated rug cleaning plant serving the northwest Chicago suburbs. We clean, restore, and protect fine area rugs of every type — from heirloom Persians to everyday wool rugs."
        primaryCTA={{ label: 'Get a Free Estimate', href: '/contact' }}
        secondaryCTA={{ label: 'See Our Process', href: '/about' }}
        photoSrc="/images/hero-rugs-drying-in-plant.webp"
        photoAlt="Aerial view of vibrant clean rugs drying in the Fox Valley Rug Works plant"
      />

      {/* Trust Bar */}
      <section className="bg-white border-y border-[var(--color-gold)]/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { stat: '1,800 SF', label: 'Dedicated Plant' },
              { stat: 'Trained', label: 'in Oriental Rug Care' },
              { stat: 'Free', label: 'Pickup & Delivery' },
              { stat: '40+', label: 'Communities Served' },
            ].map((item) => (
              <div key={item.label}>
                <p className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[var(--color-rust)]">
                  {item.stat}
                </p>
                <p className="font-[family-name:var(--font-libre-franklin)] text-xs uppercase tracking-wider text-[var(--color-slate)] mt-1">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-[var(--color-charcoal)] mb-4">
              How It Works
            </h2>
            <div className="section-divider max-w-xs mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                step: '01',
                title: 'Drop Off or Schedule Pickup',
                desc: 'Bring your rug to our plant, or we\u2019ll pick it up from your home. We serve communities across McHenry, Kane, Lake, and northwest Cook counties.',
              },
              {
                step: '02',
                title: 'Professional Plant Cleaning',
                desc: 'Every rug is inspected, dusted, washed, and dried in our climate-controlled facility using methods matched to its fiber, dye, and construction.',
              },
              {
                step: '03',
                title: 'Inspect & Return',
                desc: 'We inspect every rug before it leaves. You get it back clean, fresh, and looking like new.',
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-14 h-14 rounded-full bg-[var(--color-rust)] text-white flex items-center justify-center font-[family-name:var(--font-libre-franklin)] text-lg font-bold mx-auto mb-5">
                  {item.step}
                </div>
                <h3 className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-[var(--color-charcoal)] mb-3">
                  {item.title}
                </h3>
                <p className="text-[var(--color-slate)] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider max-w-5xl mx-auto" />

      {/* Services Preview */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-[var(--color-charcoal)] mb-4">
              Our Services
            </h2>
            <div className="section-divider max-w-xs mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-white rounded-lg p-6 shadow-sm border border-[var(--color-gold)]/10 hover:shadow-md transition-shadow"
              >
                <div className="text-3xl text-[var(--color-rust)] mb-4">{s.icon}</div>
                <h3 className="font-[family-name:var(--font-playfair)] text-lg font-semibold text-[var(--color-charcoal)] mb-2">
                  {s.title}
                </h3>
                <p className="text-sm text-[var(--color-slate)] leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/services"
              className="font-[family-name:var(--font-libre-franklin)] text-sm text-[var(--color-rust)] hover:text-[var(--color-rust-dark)] transition-colors underline underline-offset-4"
            >
              View All Services &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Rug Types Preview */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-[var(--color-charcoal)] mb-4">
              Rug Types We Clean
            </h2>
            <div className="section-divider max-w-xs mx-auto" />
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {rugTypes.map((type) => (
              <Link
                key={type}
                href="/rug-types"
                className="px-4 py-2 border border-[var(--color-gold)]/30 rounded-full text-sm font-[family-name:var(--font-libre-franklin)] text-[var(--color-charcoal)] hover:bg-[var(--color-rust)] hover:text-white hover:border-[var(--color-rust)] transition-colors"
              >
                {type}
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/rug-types"
              className="font-[family-name:var(--font-libre-franklin)] text-sm text-[var(--color-rust)] hover:text-[var(--color-rust-dark)] transition-colors underline underline-offset-4"
            >
              Learn About Each Type &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* City Pages CTA */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-[var(--color-charcoal)] mb-4">
              Serving 40+ Communities in the Fox Valley &amp; Beyond
            </h2>
            <div className="section-divider max-w-xs mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {counties.map((county) => (
              <div key={county.name}>
                <h3 className="font-[family-name:var(--font-libre-franklin)] text-xs uppercase tracking-[0.15em] text-[var(--color-rust)] font-semibold mb-3">
                  {county.name}
                </h3>
                <ul className="space-y-1.5">
                  {county.cities.map((city) => (
                    <li key={city.slug}>
                      <Link
                        href={`/rug-cleaning/${city.slug}`}
                        className="text-sm text-[var(--color-slate)] hover:text-[var(--color-rust)] transition-colors"
                      >
                        {city.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-[var(--color-charcoal)] mb-4">
              What Our Customers Say
            </h2>
            <div className="section-divider max-w-xs mx-auto" />
          </div>
          <TestimonialSlider />
        </div>
      </section>

      {/* Photo Section */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image src="/images/hand-washing-persian-rug.webp" alt="Close-up of hand-washing a Persian rug" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image src="/images/drying-room-rugs-hanging.webp" alt="Rugs hanging in the climate-controlled drying room" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image src="/images/before-after-wool-rug-cleaning.webp" alt="Before and after comparison of a cleaned wool rug" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTABanner
        headline="Your Rug Deserves Better Than a Steam Cleaner."
        subheadline="Bring it to the plant. See the difference."
        buttonText="Get Your Free Estimate"
        buttonHref="/contact"
      />
    </>
  );
}
