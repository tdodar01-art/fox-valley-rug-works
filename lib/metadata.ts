import type { Metadata } from 'next';

const BASE_URL = 'https://foxvalleyrugworks.com';

export function generatePageMetadata({
  title,
  description,
  path = '',
}: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  const url = `${BASE_URL}${path}`;
  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      type: 'website',
      siteName: 'Fox Valley Rug Works',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

export { BASE_URL };
