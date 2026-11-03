import { invoke } from '@tauri-apps/api/core';

export type ProjectInfo = { root: string; branch: string; remote: string; changedFiles: string[]; lastSync: string | null };
export type TeamDefaults = { venue: string; address: string; day: string; time: string };
export type Catalog = { teams: string[]; teamDetails: Record<string, TeamDefaults>; players: string[]; games: string[] };
export type Draft = { relative: string; content: string; savedAt: number };
export type ValidationReport = { errors: string[]; warnings: string[]; games: number; players: number; news: number };
export type PublicationPreview = { branch: string; remote: string; files: string[]; diff: string; errors: string[]; canPublish: boolean; ahead: number | null; behind: number | null };
export type PublicationResult = { commit: string; commitUrl: string; actionsUrl: string; siteUrl: string; deployStatus: string };
export type BackupResult = { written: number; skipped: string[] };

export async function call<T>(command: string, args: Record<string, unknown> = {}): Promise<T> {
  try { return await invoke<T>(command, args); }
  catch (error) { throw new Error(typeof error === 'string' ? error : error instanceof Error ? error.message : String(error)); }
}
