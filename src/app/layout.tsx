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

const SITE_URL = 'https://jh-kreasi.id';
const SITE_NAME = 'JH Kreasi Studio';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: 'JH Kreasi Studio | Jasa Fit-Out Toko & Grand Opening Jakarta',
    template: '%s | JH Kreasi Studio',
  },
  description:
    'JH Kreasi Studio — spesialis landlord initiation, fit-out toko ritel premium, grand opening, dan brand activation di mall-mall Jakarta. Treasury Tower, SCBD, Jakarta.',
  keywords: [
    'JH Kreasi',
    'jasa fit out toko Jakarta',
    'kontraktor fit out mall Jakarta',
    'landlord initiation Jakarta',
    'grand opening toko Jakarta',
    'brand activation mall',
    'fit out ritel SCBD',
    'interior toko mall Jakarta',
    'jasa open toko Jakarta',
    'retail project management Jakarta',
    'JH Kreasi Studio',
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,

  /* ── Canonical & Alternates ── */
  alternates: {
    canonical: '/',
  },

  /* ── Favicon / Icons ── */
  icons: {
    icon: getAssetPath('/favicon.svg'),
    shortcut: getAssetPath('/favicon.svg'),
    apple: getAssetPath('/favicon.svg'),
  },

  /* ── Open Graph ── */
  openGraph: {
    title: 'JH Kreasi Studio | Jasa Fit-Out Toko & Grand Opening Jakarta',
    description:
      'Spesialis landlord initiation, fit-out toko ritel premium, grand opening, dan brand activation di mall-mall Jakarta.',
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: 'id_ID',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'JH Kreasi Studio — Luxury Retail Brand Services Jakarta',
      },
    ],
  },

  /* ── Twitter / X Card ── */
  twitter: {
    card: 'summary_large_image',
    title: 'JH Kreasi Studio | Jasa Fit-Out Toko & Grand Opening Jakarta',
    description:
      'Spesialis landlord initiation, fit-out toko ritel premium, grand opening, dan brand activation di mall-mall Jakarta.',
    images: ['/og-image.jpg'],
  },

  /* ── Robots ── */
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  /* ── Verification (isi setelah verifikasi Google Search Console) ── */
  // verification: {
  //   google: 'GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE',
  // },
};

/* ── JSON-LD Structured Data (LocalBusiness) ── */
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: SITE_NAME,
  description:
    'Spesialis landlord initiation, fit-out toko ritel premium, grand opening, dan brand activation di mall-mall Jakarta.',
  url: SITE_URL,
  telephone: '+6281908082775',
  email: 'jh.kreasi@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Treasury Tower 31st Floor, District 8, SCBD',
    addressLocality: 'Jakarta Selatan',
    addressRegion: 'DKI Jakarta',
    addressCountry: 'ID',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -6.2297,
    longitude: 106.8006,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
  ],
  sameAs: ['https://wa.me/6281908082775'],
  serviceArea: {
    '@type': 'GeoCircle',
    name: 'Jakarta, Indonesia',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Brand Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Landlord Initiation' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Store Fit-Out' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Grand Opening Event' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Brand Activation' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Private Dinner Event' } },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${cormorant.variable} ${plusJakarta.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body antialiased">
        {children}
      </body>
    </html>
  );
}
