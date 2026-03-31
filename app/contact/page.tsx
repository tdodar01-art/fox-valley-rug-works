import type { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/metadata';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = generatePageMetadata({
  title: 'Contact Us — Get Your Free Rug Cleaning Estimate',
  description:
    'Drop off your rug, send photos for a remote estimate, or schedule a free pickup. Fox Valley Rug Works serves the northwest Chicago suburbs.',
  path: '/contact',
});

export default function ContactPage() {
  return (
    <>
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-[var(--color-charcoal)] mb-6">
            Get Your Free Estimate
          </h1>
          <p className="text-lg text-[var(--color-slate)] leading-relaxed max-w-2xl mx-auto">
            Drop off your rug at our plant, send us photos for a remote estimate, or schedule a free pickup.
          </p>
          <div className="section-divider max-w-xs mx-auto mt-10" />
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-white rounded-lg shadow-sm border border-[var(--color-gold)]/10 p-8">
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[var(--color-charcoal)] mb-6">
                Request an Estimate
              </h2>
              <ContactForm />
            </div>

            {/* Plant Info */}
            <div className="space-y-8">
              <div>
                <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[var(--color-charcoal)] mb-6">
                  Visit Our Plant
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-[family-name:var(--font-libre-franklin)] text-xs uppercase tracking-wider text-[var(--color-rust)] font-semibold mb-1">
                      Address
                    </h3>
                    <p className="text-[var(--color-slate)]">Fox Valley Rug Works<br />Northwest Suburbs, IL</p>
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-libre-franklin)] text-xs uppercase tracking-wider text-[var(--color-rust)] font-semibold mb-1">
                      Phone
                    </h3>
                    <p className="text-[var(--color-slate)]">(847) 000-0000</p>
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-libre-franklin)] text-xs uppercase tracking-wider text-[var(--color-rust)] font-semibold mb-1">
                      Email
                    </h3>
                    <p className="text-[var(--color-slate)]">info@foxvalleyrugworks.com</p>
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-libre-franklin)] text-xs uppercase tracking-wider text-[var(--color-rust)] font-semibold mb-1">
                      Drop-Off Hours
                    </h3>
                    <p className="text-[var(--color-slate)]">
                      Monday&ndash;Friday: 8am&ndash;5pm<br />
                      Saturday: 9am&ndash;1pm
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-gray-100 rounded-lg border border-[var(--color-gold)]/10 aspect-video flex items-center justify-center">
                <p className="text-sm text-[var(--color-slate)] italic">Google Map Embed</p>
              </div>

              <div className="bg-[var(--color-gold)]/10 rounded-lg p-6">
                <h3 className="font-[family-name:var(--font-playfair)] text-lg font-semibold text-[var(--color-charcoal)] mb-2">
                  Free Pickup &amp; Delivery
                </h3>
                <p className="text-sm text-[var(--color-slate)] leading-relaxed">
                  Can&apos;t make it to the plant? No problem. We offer free pickup and delivery throughout McHenry, Kane, Lake, and northwest Cook counties. Just mention it when you request your estimate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
