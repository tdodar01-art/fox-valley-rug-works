'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

const navLinks = [
  { href: '/services', label: 'Services' },
  { href: '/rug-types', label: 'Rug Types' },
  { href: '/about', label: 'Our Process' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 bg-[var(--color-cream)] border-b transition-shadow duration-300 ${
        scrolled ? 'shadow-md border-[var(--color-gold)]/20' : 'border-[var(--color-gold)]/10'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex flex-col leading-none">
            <span className="font-[family-name:var(--font-playfair)] text-xl font-bold tracking-wide text-[var(--color-charcoal)]">
              FOX VALLEY
            </span>
            <span className="font-[family-name:var(--font-libre-franklin)] text-[10px] uppercase tracking-[0.3em] text-[var(--color-slate)]">
              Rug Works
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-[family-name:var(--font-libre-franklin)] text-sm text-[var(--color-slate)] hover:text-[var(--color-rust)] transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="font-[family-name:var(--font-libre-franklin)] text-sm px-5 py-2 bg-[var(--color-rust)] text-white rounded hover:bg-[var(--color-rust-dark)] transition-colors"
            >
              Get Estimate
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 text-[var(--color-charcoal)]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile slide-in */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-[var(--color-gold)]/10 bg-[var(--color-cream)]">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block font-[family-name:var(--font-libre-franklin)] text-sm text-[var(--color-slate)] hover:text-[var(--color-rust)] transition-colors py-2"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block text-center font-[family-name:var(--font-libre-franklin)] text-sm px-5 py-2.5 bg-[var(--color-rust)] text-white rounded hover:bg-[var(--color-rust-dark)] transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Get Estimate
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
