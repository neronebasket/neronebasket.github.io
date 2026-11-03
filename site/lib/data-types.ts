export type Team = {
  name: string; short_name: string; logo?: string; logo_on_dark?: string;
  home_venue?: string; home_address?: string; home_day?: string; home_time?: string;
  recovery_venue?: string; recovery_address?: string; recovery_day?: string; recovery_time?: string;
};
export type Player = { id: string; name: string; birth_date?: string; instagram?: string; photo?: string; bio: string; social_urls?: string[] };
export type RosterEntry = { season: string; competition: string; team_id: string; player_id: string; number: number | null; role: string; active: boolean };
export type Game = {
  id: string; date: string; time: string; status: string; home_team: string; away_team: string;
  home_score: number | null; away_score: number | null; venue: string; address: string;
  instagram_url: string; youtube_url?: string; social_urls: string[]; notes?: string; phase?: string; round?: string; competition: string;
};
export type PlayerStat = {
  game_id: string; player_id: string; minutes: string; points: number; fouls: number;
  three_pointers_made: number; two_pointers_made: number; free_throws_made: number;
  rebounds_off: number; rebounds_def: number; assists: number; turnovers: number;
};
export type Standing = {
  team_id: string; name: string; played: number; wins: number; losses: number;
  points_for: number; points_against: number; difference: number; table_points: number | null;
};
export type PostseasonGroupRow = { team_id: string; wins: number; losses: number; difference: number; qualified: boolean };
export type PostseasonGroup = { id: string; name: string; rows: PostseasonGroupRow[] };
export type PostseasonData = {
  title: string;
  closing_note?: string;
  play_in: { title: string; note?: string; groups: PostseasonGroup[] };
  bracket: { title: string; semifinal_game_ids: string[]; final_game_id: string; champion_team_id: string };
};
export type CompetitionGroup = { name: string; teams: string[] };
export type CompetitionData = {
  id: string; name: string; team?: string; teams?: string[]; standings_points: { win: number | null; loss: number | null };
  description?: string; notice?: string; source_url?: string; groups?: CompetitionGroup[];
  games: Game[]; playerStats: PlayerStat[]; standings: Standing[]; postseason?: PostseasonData;
};
export type SeasonData = { id: string; competitions: CompetitionData[] };
export type NewsItem = { slug: string; title: string; date: string; cover?: string | null; players?: string[]; games?: string[]; excerpt?: string; body: string };
export type SportsData = {
  season: string; teams: Record<string, Team>; players: Player[]; rosters: RosterEntry[];
  competitions: CompetitionData[]; seasons: SeasonData[]; news: NewsItem[];
};
