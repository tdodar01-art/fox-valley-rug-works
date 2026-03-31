import Link from 'next/link';

const companyLinks = [
  { href: '/about', label: 'Our Process' },
  { href: '/services', label: 'Services' },
  { href: '/rug-types', label: 'Rug Types' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
];

const serviceLinks = [
  { href: '/services', label: 'Area Rug Cleaning' },
  { href: '/services', label: 'Pet Stain & Odor Removal' },
  { href: '/services', label: 'Stain Removal' },
  { href: '/services', label: 'Rug Repair & Restoration' },
  { href: '/services', label: 'Pickup & Delivery' },
  { href: '/services', label: 'Rug Storage' },
];

const counties = [
  {
    name: 'McHenry County',
    cities: [
      { slug: 'crystal-lake', name: 'Crystal Lake' },
      { slug: 'mchenry', name: 'McHenry' },
      { slug: 'woodstock', name: 'Woodstock' },
      { slug: 'huntley', name: 'Huntley' },
      { slug: 'algonquin', name: 'Algonquin' },
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
    ],
  },
  {
    name: 'Lake County',
    cities: [
      { slug: 'barrington', name: 'Barrington' },
      { slug: 'lake-zurich', name: 'Lake Zurich' },
      { slug: 'libertyville', name: 'Libertyville' },
      { slug: 'mundelein', name: 'Mundelein' },
    ],
  },
  {
    name: 'Cook County',
    cities: [
      { slug: 'schaumburg', name: 'Schaumburg' },
      { slug: 'arlington-heights', name: 'Arlington Heights' },
      { slug: 'palatine', name: 'Palatine' },
      { slug: 'hoffman-estates', name: 'Hoffman Estates' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--color-dark-bg)] text-gray-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company */}
          <div>
            <div className="mb-6">
              <span className="font-[family-name:var(--font-playfair)] text-lg font-bold text-white">
                FOX VALLEY
              </span>
              <br />
              <span className="font-[family-name:var(--font-libre-franklin)] text-[10px] uppercase tracking-[0.3em] text-gray-400">
                Rug Works
              </span>
            </div>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
              Where Fine Rugs Are Restored.
            </p>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-[var(--color-gold)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-[family-name:var(--font-libre-franklin)] text-xs uppercase tracking-[0.2em] text-[var(--color-gold)] mb-6">
              Services
            </h3>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-[var(--color-gold)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Area */}
          <div className="lg:col-span-2">
            <h3 className="font-[family-name:var(--font-libre-franklin)] text-xs uppercase tracking-[0.2em] text-[var(--color-gold)] mb-6">
              Service Area
            </h3>
            <div className="grid grid-cols-2 gap-6">
              {counties.map((county) => (
                <div key={county.name}>
                  <h4 className="text-sm font-semibold text-gray-300 mb-2">{county.name}</h4>
                  <ul className="space-y-1">
                    {county.cities.map((city) => (
                      <li key={city.slug}>
                        <Link
                          href={`/rug-cleaning/${city.slug}`}
                          className="text-xs text-gray-400 hover:text-[var(--color-gold)] transition-colors"
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
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Fox Valley Rug Works. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-gray-500">
            <span>(847) 000-0000</span>
            <span>info@foxvalleyrugworks.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
