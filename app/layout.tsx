import type { Metadata } from 'next';
import { Playfair_Display, Source_Sans_3, Libre_Franklin } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  display: 'swap',
});

const sourceSans = Source_Sans_3({
  variable: '--font-source-sans',
  subsets: ['latin'],
  display: 'swap',
});

const libreFranklin = Libre_Franklin({
  variable: '--font-libre-franklin',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://foxvalleyrugworks.com'),
  title: {
    default: 'Fox Valley Rug Works — Expert Area Rug Cleaning in the Northwest Chicago Suburbs',
    template: '%s | Fox Valley Rug Works',
  },
  description:
    'Fox Valley Rug Works is a dedicated rug cleaning plant serving the northwest Chicago suburbs. Professional cleaning, restoration, and protection for fine area rugs of every type.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Fox Valley Rug Works',
    title: 'Fox Valley Rug Works — Expert Area Rug Cleaning',
    description:
      'Dedicated rug cleaning plant serving the northwest Chicago suburbs. Professional cleaning for Persian, Oriental, wool, silk, and all area rug types.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fox Valley Rug Works — Expert Area Rug Cleaning',
    description:
      'Dedicated rug cleaning plant serving the northwest Chicago suburbs.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${sourceSans.variable} ${libreFranklin.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        {/* Google Analytics placeholder:
        <Script src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'GA_MEASUREMENT_ID');`}
        </Script>
        */}
      </body>
    </html>
  );
}
