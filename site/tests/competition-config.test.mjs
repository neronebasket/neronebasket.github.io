import test from 'node:test';
import assert from 'node:assert/strict';
import { copyFileSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const testsRoot = dirname(fileURLToPath(import.meta.url));

test('un nuovo campionato appare nei dati e nella sitemap senza archivi CSV preesistenti', () => {
  const root = mkdtempSync(join(testsRoot, '_competition-fixture-'));
  try {
    for (const folder of ['scripts', 'data/players', 'content/news', 'public', 'lib']) mkdirSync(join(root, folder), { recursive: true });
    copyFileSync(join(testsRoot, '../scripts/build-data.mjs'), join(root, 'scripts/build-data.mjs'));
    writeFileSync(join(root, 'data/competitions.yaml'), 'current_season: 2027-28\nseasons:\n  - id: 2027-28\n    competitions:\n      - id: gold\n        name: Amatori Gold\n        teams: [nerone]\n      - id: silver\n        name: Amatori Silver\n        teams: [nerone]\n');
    writeFileSync(join(root, 'data/teams.yaml'), 'nerone:\n  name: Nerone Basket Anzio\n  short_name: Nerone\n');
    writeFileSync(join(root, 'data/players/example.yaml'), 'id: example\nname: Example\nbio: Test\n');
    writeFileSync(join(root, 'data/rosters.csv'), 'season,competition,team_id,player_id,number,role,active\n');
    execFileSync(process.execPath, [join(root, 'scripts/build-data.mjs')], { cwd: root });
    const generated = readFileSync(join(root, 'lib/generated-data.ts'), 'utf8');
    const sitemap = readFileSync(join(root, 'public/sitemap.xml'), 'utf8');
    assert.match(generated, /"id": "silver"/);
    assert.match(sitemap, /\/campionato\/silver\/28/);
    assert.match(sitemap, /\/partite\/gold\/28/);
  } finally {
    assert.ok(resolve(root).startsWith(`${resolve(testsRoot)}\\`) || resolve(root).startsWith(`${resolve(testsRoot)}/`));
    rmSync(root, { recursive: true, force: true });
  }
});

test('la stagione 2026/27 espone Platinum e Gold con i gironi ufficialmente comunicati', () => {
  const generated = readFileSync(join(testsRoot, '../lib/generated-data.ts'), 'utf8');
  const sitemap = readFileSync(join(testsRoot, '../public/sitemap.xml'), 'utf8');
  assert.match(generated, /"name": "Girone King B"/);
  assert.match(generated, /"name": "Girone Prime 3"/);
  assert.match(generated, /"team": "nerone-bounganvillae"/);
  assert.match(sitemap, /\/campionato\/platinum\/27/);
  assert.match(sitemap, /\/campionato\/gold\/27/);
  assert.match(sitemap, /\/partite\/platinum\/27/);
  assert.match(sitemap, /\/partite\/gold\/27/);
});

test('il calendario Gold 2026/27 contiene tutte le gare e le dieci partite del Nerone BGV', () => {
  const goldCsv = readFileSync(join(testsRoot, '../data/games/2026-27/gold.csv'), 'utf8');
  const rows = goldCsv.trim().split(/\r?\n/).slice(1);
  const regularSeason = rows.filter((row) => row.includes(',regular-season,'));
  const neroneBgvGames = regularSeason.filter((row) => row.includes('nerone-bounganvillae'));

  assert.equal(regularSeason.length, 30);
  assert.equal(neroneBgvGames.length, 10);
  assert.match(goldCsv, /2026-27-gold-264,2026-11-20,21:45,scheduled,r3-bombers,nerone-bounganvillae/);
  assert.match(goldCsv, /2026-27-gold-291,2027-02-18,21:15,scheduled,cor-basket-villa-flaminia,nerone-bounganvillae/);
});

test('il calendario Platinum 2026/27 contiene le sei gare del Girone King B', () => {
  const platinumCsv = readFileSync(join(testsRoot, '../data/games/2026-27/platinum.csv'), 'utf8');
  const rows = platinumCsv.trim().split(/\r?\n/).slice(1);
  const regularSeason = rows.filter((row) => row.includes(',regular-season,'));
  const neroneGames = regularSeason.filter((row) => /,nerone,|,nerone,,,/.test(row));

  assert.equal(regularSeason.length, 6);
  assert.equal(neroneGames.length, 4);
  assert.match(platinumCsv, /2026-27-platinum-98,2026-11-15,20:30,scheduled,nerone,cavese-93-blu/);
  assert.match(platinumCsv, /2026-27-platinum-103,2026-12-19,21:00,scheduled,supernova-fiumicino-a,cavese-93-blu/);
});

test('Francesco Menichelli usa il cognome corretto nei dati e nel roster', () => {
  const player = readFileSync(join(testsRoot, '../data/players/francesco.yaml'), 'utf8');
  const roster = readFileSync(join(testsRoot, '../data/rosters.csv'), 'utf8');

  assert.match(player, /id: francesco-menichelli/);
  assert.match(player, /name: Francesco Menichelli/);
  assert.match(roster, /francesco-menichelli/);
  assert.doesNotMatch(`${player}\n${roster}`, /menicucci/i);
});
