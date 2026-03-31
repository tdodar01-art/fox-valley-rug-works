import type { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/metadata';
import RugTypeCard from '@/components/RugTypeCard';
import CTABanner from '@/components/CTABanner';

export const metadata: Metadata = generatePageMetadata({
  title: 'Rug Types We Clean — Persian, Oriental, Wool, Silk & More',
  description:
    'We clean all rug types: Persian, Turkish, Afghan, Indian, Chinese, Navajo, Moroccan, wool, silk, jute, sisal, and machine-made. Each gets care matched to its construction.',
  path: '/rug-types',
});

const rugTypes = [
  {
    title: 'Persian Rugs',
    description:
      'Hand-knotted with natural dyes. Often the most valuable rugs in a home. We clean them with extra care for dye stability and pile direction.',
    photo: 'Photo: Rich, detailed Persian rug with traditional medallion pattern',
  },
  {
    title: 'Turkish Rugs',
    description:
      'Double-knotted construction, vibrant colors. Known for durability but still require proper pH-balanced cleaning.',
    photo: 'Photo: Turkish rug with bold geometric patterns in red and blue',
  },
  {
    title: 'Afghan & Tribal Rugs',
    description:
      'Bold geometric designs, often with natural dyes. Prone to color bleeding if cleaned improperly.',
    photo: 'Photo: Afghan Bokhara rug with distinctive elephant foot patterns',
  },
  {
    title: 'Indian Rugs',
    description:
      'Wide range from hand-knotted to tufted. We identify construction type first to determine the right method.',
    photo: 'Photo: Indian hand-knotted rug with intricate floral motifs',
  },
  {
    title: 'Chinese & Tibetan Rugs',
    description:
      'Thick pile, sculpted designs. Often require special attention to maintain texture and sheen.',
    photo: 'Photo: Chinese sculpted rug with raised floral patterns',
  },
  {
    title: 'Navajo & Southwestern Rugs',
    description:
      'Flat-woven, often made of churro wool. Very different cleaning approach than pile rugs.',
    photo: 'Photo: Navajo flat-weave rug with classic diamond and stripe pattern',
  },
  {
    title: 'Moroccan Rugs',
    description:
      'Shag-style Beni Ourain and flat-woven kilims. Each requires a different approach.',
    photo: 'Photo: Plush Moroccan Beni Ourain rug with diamond lattice design',
  },
  {
    title: 'Machine-Made Rugs',
    description:
      'Polypropylene, nylon, polyester. We clean these efficiently without the hand-care premium.',
    photo: 'Photo: Modern machine-made area rug with contemporary pattern',
  },
  {
    title: 'Silk Rugs',
    description:
      'Extremely delicate. Low pH, low agitation, careful drying. We handle these with extra caution.',
    photo: 'Photo: Lustrous silk rug showing fine knot detail and sheen',
  },
  {
    title: 'Wool Rugs',
    description:
      'The most common natural fiber. Durable but sensitive to high pH and heat.',
    photo: 'Photo: Hand-knotted wool rug showing natural texture and lanolin sheen',
  },
  {
    title: 'Jute & Sisal',
    description:
      'Natural plant fibers. Water-sensitive \u2014 we use controlled moisture methods.',
    photo: 'Photo: Natural jute area rug showing woven plant fiber texture',
  },
  {
    title: 'Antique & Heirloom Rugs',
    description:
      'Age, fragility, and sentimental value demand the most careful approach. We assess each one individually.',
    photo: 'Photo: Delicate antique rug with aged patina and intricate hand-knotted detail',
  },
];

export default function RugTypesPage() {
  return (
    <>
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-[var(--color-charcoal)] mb-6">
            Rug Types We Clean
          </h1>
          <p className="text-lg text-[var(--color-slate)] leading-relaxed max-w-2xl mx-auto">
            Every rug is different. Construction, fiber, dye method, and age all determine how it should be cleaned. We&apos;re trained to handle them all.
          </p>
          <div className="section-divider max-w-xs mx-auto mt-10" />
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rugTypes.map((rug) => (
              <RugTypeCard
                key={rug.title}
                title={rug.title}
                description={rug.description}
                photo={rug.photo}
              />
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        headline="Not Sure About Your Rug Type?"
        subheadline="Bring it in or send us a photo. We'll identify it and give you a free estimate."
        buttonText="Contact Us"
        buttonHref="/contact"
      />
    </>
  );
}
