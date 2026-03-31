import type { MetadataRoute } from 'next';
import { getAllCitySlugs } from '@/lib/cities';

const BASE_URL = 'https://foxvalleyrugworks.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { path: '', changeFrequency: 'monthly' as const, priority: 1 },
    { path: '/about', changeFrequency: 'monthly' as const, priority: 0.8 },
    { path: '/services', changeFrequency: 'monthly' as const, priority: 0.9 },
    { path: '/rug-types', changeFrequency: 'monthly' as const, priority: 0.8 },
    { path: '/pricing', changeFrequency: 'monthly' as const, priority: 0.8 },
    { path: '/faq', changeFrequency: 'monthly' as const, priority: 0.7 },
    { path: '/contact', changeFrequency: 'monthly' as const, priority: 0.9 },
  ];

  const staticEntries = staticPages.map((page) => ({
    url: `${BASE_URL}${page.path}`,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));

  const cityEntries = getAllCitySlugs().map((slug) => ({
    url: `${BASE_URL}/rug-cleaning/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticEntries, ...cityEntries];
}
