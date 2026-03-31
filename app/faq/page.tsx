import type { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/metadata';
import FAQAccordion from '@/components/FAQAccordion';
import CTABanner from '@/components/CTABanner';

export const metadata: Metadata = generatePageMetadata({
  title: 'FAQ — Frequently Asked Questions About Rug Cleaning',
  description:
    'Answers to common questions about rug cleaning timelines, pickup & delivery, plant vs. in-home cleaning, pet stain removal, pricing, and our service area.',
  path: '/faq',
});

const faqs = [
  {
    question: 'How long does rug cleaning take?',
    answer:
      'Most rugs are ready in 7\u201310 business days. Rush service may be available \u2014 ask when you drop off.',
  },
  {
    question: 'Do you pick up and deliver?',
    answer:
      'Yes. Free pickup and delivery within our service area \u2014 most of McHenry, Kane, Lake, and northwest Cook counties.',
  },
  {
    question: 'How is plant cleaning different from in-home cleaning?',
    answer:
      'In-home carpet cleaners use portable equipment that can\u2019t fully wash a rug. Our plant has a dedicated wash bay, mechanical dusting equipment, a centrifuge for water extraction, and a climate-controlled drying room. It\u2019s a completely different level of clean.',
  },
  {
    question: 'Can you remove pet stains and odor?',
    answer:
      'Yes. We use enzymatic treatments that break down uric acid crystals \u2014 the actual source of pet odor. This combined with full immersion washing is the only way to truly eliminate pet contamination from a rug.',
  },
  {
    question: 'Will cleaning damage my rug?',
    answer:
      'Not when done properly. We test every rug for dye stability before washing and match our cleaning method to the fiber, dye, and construction type.',
  },
  {
    question: 'What types of rugs do you clean?',
    answer:
      'All types \u2014 Persian, Turkish, Afghan, Indian, Chinese, Navajo, Moroccan, machine-made, wool, silk, cotton, jute, sisal, and more.',
  },
  {
    question: 'How do I know if my rug needs cleaning?',
    answer:
      'If it hasn\u2019t been professionally cleaned in 2\u20133 years, it\u2019s overdue. Signs: dull colors, trapped odor, visible soil, flattened pile, or allergies worsening at home.',
  },
  {
    question: 'Do you repair rugs?',
    answer:
      'We handle minor repairs \u2014 fringe repair, binding, patching. For major restoration (re-weaving, re-dyeing), we refer to trusted specialists.',
  },
  {
    question: 'How should I store a rug I\u2019m not using?',
    answer:
      'Clean it first (never store a dirty rug \u2014 it attracts moths). Roll it with acid-free paper, wrap in breathable material, and store in a cool, dry place. We offer climate-controlled storage.',
  },
  {
    question: 'What\u2019s your service area?',
    answer:
      'We serve communities across McHenry, Kane, Lake, and northwest Cook counties. See our full list of service areas on our city pages.',
  },
];

export default function FAQPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
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
            Frequently Asked Questions
          </h1>
          <div className="section-divider max-w-xs mx-auto mt-10" />
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CTABanner
        headline="Still Have Questions?"
        subheadline="We're happy to help. Give us a call or send us a message."
        buttonText="Contact Us"
        buttonHref="/contact"
      />
    </>
  );
}
