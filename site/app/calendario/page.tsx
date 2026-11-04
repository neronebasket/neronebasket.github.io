import type { Metadata } from 'next';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { PageIntro } from '@/components/page-intro';
import { SeasonCalendar } from '@/components/season-calendar';
import { sportsData } from '@/lib/generated-data';
import { isClubTeam } from '@/lib/site-data';

export const metadata: Metadata = { title: 'Calendario' };
export const dynamic = 'force-static';

export default function CalendarPage() {
  const games = sportsData.competitions.flatMap((competition) => competition.games
    .filter((game) => isClubTeam(game.home_team) || isClubTeam(game.away_team))
    .map((game) => ({
    id: game.id,
    date: game.date,
    time: game.time,
    competition: game.phase === 'friendly' ? 'Amichevole' : competition.name,
    home: sportsData.teams[game.home_team]?.short_name ?? game.home_team,
    away: sportsData.teams[game.away_team]?.short_name ?? game.away_team,
    homeScore: game.home_score,
    awayScore: game.away_score,
    venue: game.venue,
    address: game.address,
    clubTeamId: isClubTeam(game.home_team) ? game.home_team : isClubTeam(game.away_team) ? game.away_team : '',
    isNerone: isClubTeam(game.home_team) || isClubTeam(game.away_team),
    isHome: isClubTeam(game.home_team),
    isFriendly: game.phase === 'friendly',
    hasDetailPage: game.phase !== 'friendly' || Boolean(game.youtube_url),
    calendarLabel: `${isClubTeam(game.home_team) ? (game.home_team === 'nerone' ? 'NER' : 'BGV') : (game.away_team === 'nerone' ? 'NER' : 'BGV')} · ${sportsData.teams[isClubTeam(game.home_team) ? game.away_team : game.home_team]?.short_name ?? (isClubTeam(game.home_team) ? game.away_team : game.home_team)}`,
  })));
  return (
    <main>
      <SiteHeader />
      <PageIntro eyebrow="Stagione 2026/27" title="Calendario">
        <p>Partite passate e prossimi appuntamenti del Nerone in Platinum e del Nerone BGV in Gold.</p>
      </PageIntro>
      <section className="page-section calendar-section"><SeasonCalendar games={games} /></section>
      <SiteFooter />
    </main>
  );
}
