import { ArrowLeft } from 'lucide-react';
import { CompetitionFilters } from '@/components/competition-filters';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import Link from '@/components/site-link';
import type { Game } from '@/lib/data-types';
import { sportsData } from '@/lib/generated-data';
import { assetPath, sitePath } from '@/lib/paths';
import { archivePath, competitions, isClubTeam, type Competition } from '@/lib/site-data';

const monthNames = ['gennaio', 'febbraio', 'marzo', 'aprile', 'maggio', 'giugno', 'luglio', 'agosto', 'settembre', 'ottobre', 'novembre', 'dicembre'];

function formatGameDate(date: string) {
  if (!date) return 'Data non disponibile';
  const [year, month, day] = date.split('-').map(Number);
  return `${day} ${monthNames[month - 1]} ${year}`;
}

function orderedGames(games: Game[]) {
  return [...games].sort((first, second) => {
    if (first.date && second.date) return second.date.localeCompare(first.date);
    if (first.date) return -1;
    if (second.date) return 1;
    return second.id.localeCompare(first.id, 'it', { numeric: true });
  });
}

function ResultCard({ game, featured = false }: { game: Game; featured?: boolean }) {
  const home = sportsData.teams[game.home_team];
  const away = sportsData.teams[game.away_team];
  const isFriendly = game.phase === 'friendly';
  const hasDetailPage = !isFriendly || Boolean(game.youtube_url);
  const homeLogo = featured ? home?.logo_on_dark || home?.logo : home?.logo;
  const awayLogo = featured ? away?.logo_on_dark || away?.logo : away?.logo;
  const classes = `result-card${featured ? ' result-card-featured' : ''}`;
  const body = <>
    <span>{formatGameDate(game.date)}{game.time ? ` · ${game.time}` : ''}{game.notes ? ` · ${game.notes}` : ''}{game.venue ? ` · ${game.venue}` : ''}{game.round ? ` · ${game.round}` : ''}</span>
    <div className="result-match">
      <div className="result-team-list">
        <div className="result-team"><img src={assetPath(homeLogo || '/assets/logo-nero.png')} alt="" /><strong>{home?.short_name ?? game.home_team}</strong></div>
        <div className="result-team"><img src={assetPath(awayLogo || '/assets/logo-nero.png')} alt="" /><strong>{away?.short_name ?? game.away_team}</strong></div>
      </div>
      {!isFriendly && <b>{game.home_score ?? '–'} : {game.away_score ?? '–'}</b>}
    </div>
  </>;

  return hasDetailPage
    ? <Link className={classes} href={sitePath(`/partite/${game.id}`)}>{body}</Link>
    : <article className={classes}>{body}</article>;
}

export function GamesPageView({ competition, seasonId }: { competition: Competition; seasonId: string }) {
  const selectedSeason = sportsData.seasons.find((season) => season.id === seasonId);
  const data = selectedSeason?.competitions.find((item) => item.id === competition.slug);
  const competitionName = data?.name ?? competition.name;
  const availableSeasons = sportsData.seasons.filter((season) => season.competitions.some((item) => item.id === competition.slug));
  const seasonOptions = availableSeasons.map((season) => {
    const targetCompetition = season.competitions.some((item) => item.id === competition.slug)
      ? competition.slug
      : season.competitions[0]?.id ?? competition.slug;
    return { id: season.id, href: archivePath('partite', targetCompetition, season.id) };
  });
  const competitionOptions = competitions
    .filter((item) => selectedSeason?.competitions.some((dataItem) => dataItem.id === item.slug))
    .map((item) => ({ id: item.slug, label: item.shortName, href: archivePath('partite', item.slug, seasonId) }));
  const neroneGames = data?.games.filter((game) => isClubTeam(game.home_team) || isClubTeam(game.away_team)) ?? [];
  const otherGames = orderedGames(data?.games.filter((game) => !isClubTeam(game.home_team) && !isClubTeam(game.away_team)) ?? []);
  const today = new Date().toISOString().slice(0, 10);
  const nextGame = [...neroneGames]
    .filter((game) => game.status === 'scheduled' && game.date >= today)
    .sort((first, second) => `${first.date}T${first.time}`.localeCompare(`${second.date}T${second.time}`))[0];
  const groups = [
    { id: 'upcoming', title: 'Prossima partita', games: nextGame ? [nextGame] : [] },
    { id: 'finals', title: 'Fasi finali', games: orderedGames(neroneGames.filter((game) => game.phase === 'final-four' || game.phase === 'play-in')) },
    { id: 'regular-season', title: 'Stagione regolare', games: orderedGames(neroneGames.filter((game) => (!game.phase || game.phase === 'regular-season') && game.id !== nextGame?.id)) },
    { id: 'friendly', title: 'Amichevoli', games: orderedGames(neroneGames.filter((game) => game.phase === 'friendly' && game.id !== nextGame?.id)) },
  ].filter((group) => group.games.length > 0);

  return <main>
    <SiteHeader />
    <section className="league-hero games-hero">
      <img className="league-hero-bg" alt="" src={assetPath('/assets/calendar-bg.jpg')} />
      <p className="eyebrow">{competitionName} · {seasonId.replace('-', '/')}</p>
      <span className="league-hero-code">{competition.code}</span>
      <h1>Partite</h1>
    </section>

    <section className="page-section league-content">
      <div className="archive-toolbar">
        <CompetitionFilters current={competition.slug} season={seasonId} seasonOptions={seasonOptions} competitionOptions={competitionOptions} />
        <Link className="button archive-link" href={sitePath(archivePath('campionato', competition.slug, seasonId))}><ArrowLeft size={17} /> Classifiche e fasi finali</Link>
      </div>

      <div className="games-archive-layout">
        <div className="games-primary">
          <div className="content-heading">
            <p className="eyebrow dark">Le nostre squadre</p>
            <h2>Tutte le partite</h2>
          </div>
          {groups.length ? groups.map((group) => <section className={`game-phase${group.id === 'upcoming' ? ' game-phase-upcoming' : ''}`} key={group.id}>
            <h3>{group.title}</h3>
            <div className="result-list">{group.games.map((game) => <ResultCard game={game} featured={group.id === 'upcoming'} key={game.id} />)}</div>
          </section>) : <div className="empty-result"><img src={assetPath('/assets/logo-nero.png')} alt="" /><strong>Calendario in aggiornamento</strong><p>Qui troverai tutte le partite della stagione.</p></div>}
        </div>

        <aside className="results-panel other-games-panel">
          <div className="content-heading">
            <p className="eyebrow dark">Campionato</p>
            <h2>Altri risultati</h2>
          </div>
          {otherGames.length ? <div className="other-results archive-other-results">{otherGames.map((game) => (
            <div key={game.id}>
              <span>{sportsData.teams[game.home_team]?.short_name ?? game.home_team}</span>
              <b>{game.home_score ?? '–'}–{game.away_score ?? '–'}</b>
              <span>{sportsData.teams[game.away_team]?.short_name ?? game.away_team}</span>
              <small>{formatGameDate(game.date)}{game.round ? ` · ${game.round}` : ''}</small>
            </div>
          ))}</div> : <p className="archive-empty-note">I risultati delle altre squadre compariranno qui quando saranno disponibili.</p>}
        </aside>
      </div>
    </section>
    <SiteFooter />
  </main>;
}
