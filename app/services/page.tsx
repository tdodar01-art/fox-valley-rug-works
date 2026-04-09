import type { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/metadata';
import Image from 'next/image';
import CTABanner from '@/components/CTABanner';

export const metadata: Metadata = generatePageMetadata({
  title: 'Our Services — Area Rug Cleaning, Repair & More',
  description:
    'Full-service rug care: immersion cleaning, pet stain removal, stain treatment, moth damage repair, rug padding, pickup & delivery, and climate-controlled storage.',
  path: '/services',
});

const services = [
  {
    title: 'Area Rug Cleaning',
    description:
      'Full immersion plant cleaning for all rug types. Our core service. Pricing based on size and fiber type. Every rug is inspected, dusted, washed, rinsed, and dried using methods matched to its construction.',
    imageSrc: '/images/service-area-rug-cleaning.webp',
    imageAlt: 'Rug being washed flat in the immersion wash bay',
  },
  {
    title: 'Pet Stain & Odor Removal',
    description:
      'Enzymatic treatment plus full wash. We eliminate odor at the source \u2014 not just mask it. Uric acid crystals are broken down completely before the rug enters the wash bay.',
    imageSrc: '/images/service-pet-stain-odor.webp',
    imageAlt: 'Applying enzymatic treatment to a pet-stained rug section',
  },
  {
    title: 'Stain Removal',
    description:
      'Wine, coffee, food, ink, cosmetics. Each stain gets targeted treatment with chemistry matched to the fiber and dye before full immersion washing.',
    imageSrc: '/images/service-stain-removal.webp',
    imageAlt: 'Technician spot-treating a wine stain on a light wool rug',
  },
  {
    title: 'Moth & Insect Damage',
    description:
      'Treatment, cleaning, and repair recommendations for moth-eaten rugs. We eliminate the infestation, clean the affected fibers, and assess what restoration may be needed.',
    imageSrc: '/images/service-moth-insect-damage.webp',
    imageAlt: 'Close-up of moth damage on wool fibers, showing areas needing repair',
  },
  {
    title: 'Rug Repair & Restoration',
    description:
      'Fringe repair, binding, patching, re-dyeing. We handle minor repairs in-house and refer complex restoration to trusted specialists we\u2019ve worked with for years.',
    imageSrc: '/images/service-rug-repair-restoration.webp',
    imageAlt: 'Hand-repairing fringe on a Persian rug with needle and thread',
  },
  {
    title: 'Rug Padding',
    description:
      'Custom-cut rug pads for any size. Keeps your rug in place, prevents slipping, reduces wear, and extends its life. We recommend the right pad thickness and material for your floor type.',
    imageSrc: '/images/service-rug-padding.webp',
    imageAlt: 'Custom-cut rug pad being fitted under an area rug',
  },
  {
    title: 'Pickup & Delivery',
    description:
      'Free pickup and delivery within our service area. We come to you, carefully roll and transport your rug to our plant, and return it clean. Serving communities across McHenry, Kane, Lake, and northwest Cook counties.',
    imageSrc: '/images/service-pickup-delivery.webp',
    imageAlt: 'Delivery team carefully loading a wrapped rug into the van',
  },
  {
    title: 'Rug Storage',
    description:
      'Climate-controlled storage for seasonal rugs. Every rug is cleaned before storage, rolled with acid-free paper, and wrapped in breathable material. Pick up when you\u2019re ready.',
    imageSrc: '/images/service-rug-storage.webp',
    imageAlt: 'Wrapped rugs stored on racks in the climate-controlled storage room',
  },
  {
    title: 'Water Damage / Emergency',
    description:
      'Rug soaked in a flood or pipe burst? Bring it in ASAP. Time is critical \u2014 mold and mildew can start within 24\u201348 hours. We prioritize water damage cases to save your rug.',
    imageSrc: '/images/service-water-damage-emergency.webp',
    imageAlt: 'Water-damaged rug being unrolled for emergency assessment',
  },
];

export default function ServicesPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Fox Valley Rug Works',
    },
    serviceType: 'Area Rug Cleaning',
    areaServed: { '@type': 'State', name: 'Illinois' },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-[var(--color-charcoal)] mb-6">
            Our Services
          </h1>
          <p className="text-lg text-[var(--color-slate)] leading-relaxed max-w-2xl mx-auto">
            Everything your rug needs, under one roof. From routine cleaning to emergency water damage, we handle it all in our dedicated plant facility.
          </p>
          <div className="section-divider max-w-xs mx-auto mt-10" />
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-12">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="bg-white rounded-lg shadow-sm border border-[var(--color-gold)]/10 overflow-hidden"
            >
              <div className={`grid grid-cols-1 md:grid-cols-2 gap-0 ${i % 2 === 1 ? 'md:direction-rtl' : ''}`}>
                <div className="relative aspect-[4/3]">
                  <Image src={service.imageSrc} alt={service.imageAlt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                </div>
                <div className="p-8 md:p-10 flex flex-col justify-center" style={{ direction: 'ltr' }}>
                  <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[var(--color-charcoal)] mb-4">
                    {service.title}
                  </h2>
                  <p className="text-[var(--color-slate)] leading-relaxed">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTABanner
        headline="Need Your Rug Cleaned?"
        subheadline="Get a free estimate — drop off or schedule a pickup."
        buttonText="Contact Us"
        buttonHref="/contact"
      />
    </>
  );
}
