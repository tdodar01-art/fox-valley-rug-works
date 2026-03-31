import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getCityBySlug, getAllCitySlugs } from '@/lib/cities';
import CityPageTemplate from '@/components/CityPageTemplate';

interface CityPageProps {
  params: Promise<{ city: string }>;
}

export async function generateStaticParams() {
  return getAllCitySlugs().map((slug) => ({ city: slug }));
}

export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
  const { city: slug } = await params;
  const city = getCityBySlug(slug);
  if (!city) return {};

  return {
    title: city.meta.title,
    description: city.meta.description,
    alternates: {
      canonical: `https://foxvalleyrugworks.com/rug-cleaning/${city.slug}`,
    },
    openGraph: {
      title: city.meta.title,
      description: city.meta.description,
      url: `https://foxvalleyrugworks.com/rug-cleaning/${city.slug}`,
      type: 'website',
      siteName: 'Fox Valley Rug Works',
    },
    twitter: {
      card: 'summary_large_image',
      title: city.meta.title,
      description: city.meta.description,
    },
  };
}

export default async function CityPage({ params }: CityPageProps) {
  const { city: slug } = await params;
  const city = getCityBySlug(slug);
  if (!city) notFound();

  return <CityPageTemplate city={city} />;
}
