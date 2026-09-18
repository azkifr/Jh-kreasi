import type { Metadata } from 'next';
import { Cormorant_Garamond, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { getAssetPath } from '@/lib/utils';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-heading',
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'JH Kreasi Studio | Elevating Brands in Prime Spaces — Jakarta',
  description:
    'Luxury-grade brand services in Jakarta: Landlord initiation, turnkey store fit-outs, store openings, and brand activations in top-tier malls.',
  keywords: [
    'JH Kreasi',
    'luxury retail',
    'brand services',
    'store fit out',
    'mall Jakarta',
    'landlord initiation',
    'grand opening',
    'brand activation',
    'SCBD Jakarta',
  ],
  authors: [{ name: 'JH Kreasi Studio' }],
  icons: {
    icon: getAssetPath('/favicon.svg'),
  },
  openGraph: {
    title: 'JH Kreasi Studio | Elevating Brands in Prime Spaces',
    description:
      'Luxury-grade brand services in Jakarta: Landlord initiation, turnkey store fit-outs, store openings, and brand activations in top-tier malls.',
    url: 'https://jhkreasi.com',
    siteName: 'JH Kreasi Studio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JH Kreasi Studio | Elevating Brands in Prime Spaces',
    description:
      'Luxury-grade brand services in Jakarta: Landlord initiation, turnkey store fit-outs, store openings, and brand activations in top-tier malls.',
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
    <html lang="en" className={`${cormorant.variable} ${plusJakarta.variable}`}>
      <body className="font-body antialiased">
        {children}
      </body>
    </html>
  );
}
