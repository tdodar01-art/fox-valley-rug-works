'use client';

import { useEffect, useState } from 'react';
import { User, onAuthStateChanged } from 'firebase/auth';
import { auth, isAdminEmail } from '@/lib/firebase';
import { useRouter, usePathname } from 'next/navigation';

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!auth) {
      setLoading(false);
      return;
    }

    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser && isAdminEmail(firebaseUser.email)) {
        setUser(firebaseUser);
      } else if (firebaseUser && !isAdminEmail(firebaseUser.email)) {
        // User is signed in but not whitelisted
        setUser(null);
        if (pathname?.startsWith('/admin') && pathname !== '/admin/login') {
          router.push('/admin/login?error=unauthorized');
        }
      } else {
        setUser(null);
        if (pathname?.startsWith('/admin') && pathname !== '/admin/login') {
          router.push('/admin/login');
        }
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [router, pathname]);

  return { user, loading };
}
