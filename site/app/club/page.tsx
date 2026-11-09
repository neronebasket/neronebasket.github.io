import type { Metadata } from 'next';
import { ExternalLink, MapPin, Phone } from 'lucide-react';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { PageIntro } from '@/components/page-intro';
import { assetPath } from '@/lib/paths';

export const metadata: Metadata = { title: 'Club e contatti' };
export const dynamic = 'force-static';

const mapsUrl = 'https://www.google.com/maps/search/?api=1&query=Anzio+Basket+Club+Via+Olimpica+46B+Anzio';

const sponsors = [
  {
    name: 'Superette',
    logo: '/assets/sponsors/superette.png',
    description: 'La descrizione dello sponsor sarà disponibile a breve.',
    links: [
      { label: 'Facebook', href: 'https://www.facebook.com/p/Superette-alimentari-Lavinio-100037508118919/?locale=it_IT', type: 'link' },
      { label: 'Viale Ascanio, 6–8 · Anzio', href: 'https://www.google.com/maps/place//data=!4m2!3m1!1s0x1325bcfb4afb72ff:0x3ad0c04a69e31adf?sa=X&ved=1t:8290&ictx=111', type: 'map' },
      { label: '06 982 2718', href: 'tel:+39069822718', type: 'phone' },
    ],
  },
  {
    name: 'Officina Silvio Marsili',
    logo: '/assets/sponsors/silviomarsili.png',
    description: 'La descrizione dello sponsor sarà disponibile a breve.',
    links: [
      { label: 'autofficinamarsili.it', href: 'https://www.autofficinamarsili.it/', type: 'link' },
      { label: 'Via di Valle Schioia, 190 · Anzio', href: 'https://www.google.com/maps/place//data=!4m2!3m1!1s0x1325bcd877b3cea1:0x916e297de35109d4?sa=X&ved=1t:8290&ictx=111', type: 'map' },
      { label: '339 640 3704', href: 'tel:+393396403704', type: 'phone' },
    ],
  },
  {
    name: 'Maison Dalì',
    logo: '/assets/sponsors/maisondali.png',
    description: 'La descrizione dello sponsor sarà disponibile a breve.',
    links: [
      { label: 'dalicouture.it', href: 'https://www.dalicouture.it/', type: 'link' },
      { label: 'Instagram', href: 'https://www.instagram.com/dalicouture.it/', type: 'link' },
      { label: 'TikTok', href: 'https://www.tiktok.com/@mastroianni1997', type: 'link' },
    ],
  },
  {
    name: 'Luigi Mastroianni',
    subtitle: 'Costruzioni e restauri',
    logo: '/assets/sponsors/mastroianni.png',
    description: 'La descrizione dello sponsor sarà disponibile a breve.',
    links: [
      { label: '338 201 1585', href: 'tel:+393382011585', type: 'phone' },
    ],
  },
  {
    name: 'Laboradoro',
    logo: '/assets/sponsors/laboradoro.png',
    description: 'La descrizione dello sponsor sarà disponibile a breve.',
    links: [],
  },
  {
    name: 'Essence Academy',
    logo: '/assets/sponsors/essence.png',
    description: 'La descrizione dello sponsor sarà disponibile a breve.',
    links: [],
  },
] as const;

export default function ClubPage() {
  return (
    <main>
      <SiteHeader />
      <PageIntro eyebrow="Nerone Basket Anzio" title="La nostra squadra">
        <p>Casa, contatti e realtà che sostengono la squadra.</p>
      </PageIntro>
      <section className="page-section club-grid">
        <article className="club-story-card">
          <p className="eyebrow">Il nostro club</p>
          <h2>La nostra storia</h2>
          <p>
            Uno spazio dedicato alla nascita del Nerone Basket Anzio, alle persone
            che hanno costruito la squadra e alle stagioni che ne hanno segnato il percorso.
          </p>
          <p>La biografia completa del club sarà pubblicata qui.</p>
        </article>
        <div className="venue-card">
          <div className="venue-photo"><img src={assetPath('/assets/calendar-bg.jpg')} alt="Campo da basket" /></div>
          <div className="venue-copy">
            <p className="eyebrow dark">Come raggiungerci</p>
            <h2>Campo Quattro Casette (Anzio Basket Club)</h2>
            <p><MapPin size={18} /> Via Olimpica, 46B<br />00042 Anzio RM</p>
            <a className="button button-dark" href={mapsUrl} target="_blank" rel="noreferrer">Apri in Google Maps <ExternalLink size={17} /></a>
          </div>
        </div>
        <aside className="contact-card">
          <p className="eyebrow">Contatti</p>
          <p>Seguici su Instagram e YouTube oppure scrivici via email.</p>
          <a href="https://www.instagram.com/nerone_basket_anzio/" target="_blank" rel="noreferrer">Instagram · @nerone_basket_anzio</a>
          <a href="https://www.youtube.com/@NeroneBasketAnzio" target="_blank" rel="noreferrer">YouTube · Nerone Basket Anzio</a>
          <a href="mailto:nerone.basket@gmail.com">nerone.basket@gmail.com</a>
        </aside>
      </section>
      <section className="page-section sponsors-section" aria-labelledby="sponsors-title">
        <div className="sponsors-heading">
          <p className="eyebrow dark">Partner</p>
          <h2 id="sponsors-title">Sponsor</h2>
          <p>Le realtà che sostengono il Nerone Basket Anzio dentro e fuori dal campo.</p>
        </div>
        <div className="sponsors-grid">
          {sponsors.map((sponsor) => <article className="sponsor-card" key={sponsor.name}>
            <figure className="sponsor-logo">
              <img src={assetPath(sponsor.logo)} alt={`Logo ${sponsor.name}`} />
            </figure>
            <div className="sponsor-copy">
              <div>
                <h3>{sponsor.name}</h3>
                {'subtitle' in sponsor && <p className="sponsor-subtitle">{sponsor.subtitle}</p>}
              </div>
              <p className="sponsor-description">{sponsor.description}</p>
              {sponsor.links.length > 0 && <div className="sponsor-links" aria-label={`Contatti ${sponsor.name}`}>
                {sponsor.links.map((link) => <a href={link.href} key={link.label} target={link.type === 'phone' ? undefined : '_blank'} rel={link.type === 'phone' ? undefined : 'noreferrer'}>
                  {link.type === 'map' ? <MapPin size={17} /> : link.type === 'phone' ? <Phone size={17} /> : <ExternalLink size={17} />}
                  <span>{link.label}</span>
                </a>)}
              </div>}
            </div>
          </article>)}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
