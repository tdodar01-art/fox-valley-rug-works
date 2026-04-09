import type { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/metadata';
import ProcessSteps from '@/components/ProcessSteps';
import CTABanner from '@/components/CTABanner';

export const metadata: Metadata = generatePageMetadata({
  title: 'Our Process — How We Clean Your Rugs',
  description:
    'Learn about our proven multi-step rug cleaning process: inspection, dusting, washing, drying, and final quality check. Every rug gets the care it deserves.',
  path: '/about',
});

const steps = [
  {
    number: 1,
    title: 'Intake & Inspection',
    description:
      'We photograph your rug, measure it, identify the fiber type, dye stability, and construction method. We note any pre-existing conditions \u2014 stains, wear, damage, odor \u2014 so you know exactly what we\u2019re working with.',
    imageSrc: '/images/process-intake-inspection.webp',
    imageAlt: 'Technician inspecting a rug under bright light, noting conditions on a clipboard',
  },
  {
    number: 2,
    title: 'Dusting',
    description:
      'Before any water touches your rug, we remove dry soil mechanically. A single rug can hold pounds of grit embedded in its foundation. Skipping this step is the #1 mistake in rug cleaning.',
    imageSrc: '/images/process-dusting-machine.webp',
    imageAlt: 'Rug on the mechanical dusting machine with visible dust clouds',
  },
  {
    number: 3,
    title: 'Pre-Treatment',
    description:
      'Stains and high-traffic areas get targeted pre-treatment with solutions matched to the fiber and dye type. Pet contamination gets enzymatic treatment to break down uric acid crystals.',
    imageSrc: '/images/process-pre-treatment.webp',
    imageAlt: 'Hand-applying pre-treatment solution to a stained area of a wool rug',
  },
  {
    number: 4,
    title: 'Washing',
    description:
      'Full immersion wash in our wash bay. Oriental and handmade rugs are washed flat with controlled water flow and pH-balanced cleaning solutions. Synthetic and machine-made rugs may be cleaned with our automated equipment for efficiency.',
    imageSrc: '/images/process-immersion-washing.webp',
    imageAlt: 'Rug being washed flat in the wash bay with water flowing across the surface',
  },
  {
    number: 5,
    title: 'Rinse & Extract',
    description:
      'Thorough rinsing removes all cleaning solution and suspended soil. Our centrifuge extracts water quickly and evenly \u2014 dramatically reducing dry time and preventing color migration.',
    imageSrc: '/images/process-rinse-extract.webp',
    imageAlt: 'Industrial centrifuge extracting water from a freshly washed rug',
  },
  {
    number: 6,
    title: 'Drying',
    description:
      'Rugs are dried flat or hung in our climate-controlled drying area. Controlled airflow and temperature prevent mildew, shrinkage, and dye bleed. Most rugs dry in 24\u201348 hours.',
    imageSrc: '/images/process-drying-tower.webp',
    imageAlt: 'Multiple rugs hanging in the drying tower with fans and airflow visible',
  },
  {
    number: 7,
    title: 'Grooming & Final Inspection',
    description:
      'Once dry, we groom the pile, hand-clean the fringe if applicable, and do a final quality check. We photograph the finished rug and compare it to intake photos.',
    imageSrc: '/images/process-grooming-inspection.webp',
    imageAlt: 'Craftsman grooming pile with a specialized brush, fringe laid flat',
  },
  {
    number: 8,
    title: 'Pickup or Delivery',
    description:
      'Your rug is rolled, wrapped in protective paper, and either stored for pickup or delivered back to your home.',
    imageSrc: '/images/process-wrapped-for-delivery.webp',
    imageAlt: 'Finished rug wrapped in clean paper, ready for delivery',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-[var(--color-charcoal)] mb-6">
            How We Clean Your Rugs
          </h1>
          <p className="text-lg text-[var(--color-slate)] leading-relaxed max-w-2xl mx-auto">
            Every rug that enters Fox Valley Rug Works goes through a proven multi-step process. We don&apos;t cut corners &mdash; because your rug is worth doing right.
          </p>
          <div className="section-divider max-w-xs mx-auto mt-10" />
        </div>
      </section>

      {/* Process Steps */}
      <section className="pb-16 md:pb-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ProcessSteps steps={steps} />
        </div>
      </section>

      <CTABanner
        headline="Ready to See the Difference?"
        subheadline="Drop off your rug or schedule a free pickup today."
        buttonText="Get Your Free Estimate"
        buttonHref="/contact"
      />
    </>
  );
}
