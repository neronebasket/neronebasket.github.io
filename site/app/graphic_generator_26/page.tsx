import type { Metadata } from 'next';
import { sportsData } from '@/lib/generated-data';
import { isClubTeam } from '@/lib/site-data';
import { GraphicGenerator, type SiteGame } from '@/components/graphic-generator';

export const metadata: Metadata = {
  title: 'Graphic Generator 2026',
  robots: { index: false, follow: false },
};
export const dynamic = 'force-static';

export default function GraphicGeneratorPage() {
  const games: SiteGame[] = sportsData.competitions.flatMap(competition => competition.games)
    .filter(game => isClubTeam(game.home_team) || isClubTeam(game.away_team))
    .map(game => ({
      id: game.id, date: game.date, time: game.time,
      club: (isClubTeam(game.home_team) ? game.home_team : game.away_team) as SiteGame['club'],
      homeId: game.home_team, awayId: game.away_team,
      home: sportsData.teams[game.home_team]?.short_name ?? game.home_team,
      away: sportsData.teams[game.away_team]?.short_name ?? game.away_team,
      homeLogo: sportsData.teams[game.home_team]?.logo_on_dark ?? sportsData.teams[game.home_team]?.logo ?? '',
      awayLogo: sportsData.teams[game.away_team]?.logo_on_dark ?? sportsData.teams[game.away_team]?.logo ?? '',
      competition: game.phase === 'friendly' ? 'Amichevole' : 'Campionato Amatori UISP',
      round: game.round || (game.phase === 'friendly' ? 'Amichevole' : ''),
      address: game.address || game.venue,
      homeScore: game.home_score, awayScore: game.away_score,
    }));
  const teamLogos = Object.entries(sportsData.teams).filter(([, team]) => team.logo || team.logo_on_dark)
    .map(([id, team]) => ({ id, name: team.short_name || team.name, logo: team.logo_on_dark || team.logo || '' }));
  return <GraphicGenerator games={games} teamLogos={teamLogos} />;
}
