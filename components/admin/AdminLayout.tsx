'use client';

import { useAuth } from '@/hooks/useAuth';
import { signOut } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { ReactNode } from 'react';

interface AdminLayoutProps {
  children: ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const { user, loading } = useAuth();
  const pathname = usePathname();
  const router = useRouter();

  const handleSignOut = async () => {
    if (auth) {
      await signOut(auth);
    }
    router.push('/admin/login');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[var(--color-cream)] flex items-center justify-center">
        <div className="text-[var(--color-slate)]">Loading...</div>
      </div>
    );
  }

  const navItems = [
    { label: 'Dashboard', href: '/admin' },
    { label: 'GSC', href: '/admin/gsc' },
    { label: 'Ads', href: '/admin/ads' },
    { label: 'Activity', href: '/admin/activity' },
    { label: 'Pages', href: '/admin/pages' },
  ];

  return (
    <div className="min-h-screen bg-[var(--color-cream)]">
      {/* Header */}
      <header className="bg-white border-b border-[var(--color-gold)]/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/admin" className="flex items-center">
              <span className="font-[family-name:var(--font-playfair)] text-xl font-bold text-[var(--color-charcoal)]">
                Fox Valley Rug Works
              </span>
              <span className="ml-2 text-xs font-[family-name:var(--font-libre-franklin)] text-[var(--color-slate)] uppercase tracking-wider">
                Admin
              </span>
            </Link>

            {/* Nav */}
            <nav className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`font-[family-name:var(--font-libre-franklin)] text-sm transition-colors ${
                    pathname === item.href
                      ? 'text-[var(--color-rust)] font-semibold'
                      : 'text-[var(--color-slate)] hover:text-[var(--color-rust)]'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* User */}
            {user && (
              <div className="flex items-center gap-4">
                <div className="hidden sm:block text-right">
                  <div className="text-sm font-[family-name:var(--font-libre-franklin)] text-[var(--color-charcoal)]">
                    {user.displayName || 'Admin'}
                  </div>
                  <div className="text-xs text-[var(--color-slate)]">{user.email}</div>
                </div>
                <button
                  onClick={handleSignOut}
                  className="font-[family-name:var(--font-libre-franklin)] text-sm px-4 py-2 bg-[var(--color-slate)] text-white rounded hover:bg-[var(--color-charcoal)] transition-colors"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Mobile Nav */}
      <div className="md:hidden bg-white border-b border-[var(--color-gold)]/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex gap-4 py-2 overflow-x-auto">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`font-[family-name:var(--font-libre-franklin)] text-sm whitespace-nowrap px-3 py-1.5 rounded transition-colors ${
                  pathname === item.href
                    ? 'bg-[var(--color-rust)] text-white'
                    : 'text-[var(--color-slate)] hover:bg-[var(--color-cream)]'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">{children}</main>
    </div>
  );
}
