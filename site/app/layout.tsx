import type { Metadata } from 'next';
import './globals.css';
import { absoluteSiteUrl, SITE_URL } from '@/lib/seo';

export const metadata: Metadata = {
  metadataBase: new URL(`${SITE_URL}/`),
  title: {
    default: 'Nerone Basket Anzio',
    template: '%s · Nerone Basket Anzio',
  },
  description: 'Risultati, classifiche, calendario, roster e notizie del Nerone Basket Anzio.',
  alternates: { canonical: './' },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    locale: 'it_IT',
    siteName: 'Nerone Basket Anzio',
    title: 'Nerone Basket Anzio',
    description: 'Risultati, classifiche, calendario, roster e notizie del Nerone Basket Anzio.',
    url: absoluteSiteUrl('/'),
    images: [{
      url: absoluteSiteUrl('/assets/social-preview.png'),
      width: 1200,
      height: 630,
      alt: 'Nerone Basket Anzio',
      type: 'image/png',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nerone Basket Anzio',
    description: 'Risultati, classifiche, calendario, roster e notizie del Nerone Basket Anzio.',
    images: [absoluteSiteUrl('/assets/social-preview.png')],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const organization = {
    '@context': 'https://schema.org',
    '@type': 'SportsOrganization',
    name: 'Nerone Basket Anzio',
    url: absoluteSiteUrl('/'),
    logo: absoluteSiteUrl('/assets/logo-testo-bianco.png'),
    email: 'nerone.basket@gmail.com',
    sameAs: [
      'https://www.instagram.com/nerone_basket_anzio/',
      'https://www.youtube.com/@NeroneBasketAnzio',
    ],
  };

  return <html lang="it"><head>
    <link rel="sitemap" type="application/xml" href={absoluteSiteUrl('/sitemap.xml')} />
  </head><body>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }} />
    {children}
  </body></html>;
}
