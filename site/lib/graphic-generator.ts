import { assetPath } from '@/lib/paths';

export type GraphicType = 'calendario' | 'week' | 'matchday' | 'risultato';
export type WeekFormat = 'post' | 'story';
export type WeekLayout = 'glass' | 'poster';
export type GlassLayer = 'behind' | 'front';
export type Appointment = { id: string; club: 'nerone' | 'nerone-bounganvillae'; date: string; time: string; opponent: string; atHome: boolean };
export type WeekMatch = {
  gameId: string; title: string; homeTeam: string; awayTeam: string; homeLogo: string; awayLogo: string;
  round: string; dateTime: string; address: string;
};
export const DEFAULT_WEEK_MATCH_FONT_SIZES = { title: 55, round: 36, dateTime: 38, address: 34 };
export const DEFAULT_WEEK_HEADER_FONT_SIZES = { title: 60, poweredBy: 18 };
export const DEFAULT_WEEK_DETAILS_GAP = 18;
export type WeekMatchFontSizes = typeof DEFAULT_WEEK_MATCH_FONT_SIZES;
type GlassBase = { id: string; x: number; y: number; width: number; height: number; layer: GlassLayer };
export type MatchGlass = GlassBase & { kind: 'match'; match: WeekMatch; fontSizes: WeekMatchFontSizes; detailsGap: number };
export type SponsorGlass = GlassBase & { kind: 'sponsor'; sponsorId: string };
export type Glass = MatchGlass | SponsorGlass;
export type GraphicState = {
  type: GraphicType; month: string; leftName: string; rightName: string; appointments: Appointment[];
  calendarLeftX: number; calendarRightX: number; calendarTopGap: number; calendarMatchGap: number;
  sponsor: string; photo: string; subjectPhoto: string; photoX: number; photoY: number; photoZoom: number;
  weekFormat: WeekFormat; weekLayout: WeekLayout; weekTitle: string; weekHeaderFontSizes: typeof DEFAULT_WEEK_HEADER_FONT_SIZES; backgroundBlur: number;
  weekPoster: { subject: string; x: number; y: number; zoom: number; sponsorId: string; titleSize: number; sponsorLabelSize: number };
  glasses: Glass[]; homeTeam: string; awayTeam: string;
  homeLogo: string; awayLogo: string; competition: string; dateTime: string; address: string;
  homeScore: string; awayScore: string; resultClubSide: 'home' | 'away' | 'none';
  matchdayBackground: string; matchdaySubject: string; matchdayTeamName: string; matchdayPlayerName: string;
  matchdayDate: string; matchdayTime: string; matchdaySubjectX: number; matchdaySubjectY: number; matchdaySubjectZoom: number;
  matchdayShadowX: number; matchdayShadowY: number; matchdayShadowWidth: number; matchdayShadowHeight: number;
  matchdayShadowBlur: number; matchdayShadowOpacity: number;
};

export const SPONSORS = [
  { id: 'maisondali', name: 'Maison Dalì', logo: '/assets/sponsors/maisondali.png' },
  { id: 'superette', name: 'Superettè', logo: '/assets/sponsors/superette.png' },
  { id: 'silviomarsili', name: 'Silvio Marsili', logo: '/assets/sponsors/neg/silviomarsili_white.png' },
  { id: 'mastroianni', name: 'Mastroianni', logo: '/assets/sponsors/mastroianni.png' },
  { id: 'laboradoro', name: 'Laboradoro', logo: '/assets/sponsors/neg/laboradoro_w.png' },
  { id: 'essence-academy', name: 'Essence Academy', logo: '/assets/sponsors/essence.png' },
] as const;
export const LOGOS = [
  { id: 'nerone', name: 'Nerone', logo: '/assets/logo-testo-bianco.png', mono: '/assets/teams/2026-27/mono_white/nerone_white_text.png' },
  { id: 'nerone-bounganvillae', name: 'Nerone BGV', logo: '/assets/bgv-logo-testo-bianco.png', mono: '/assets/teams/2026-27/mono_white/nerone_bgv_white_text.png' },
  { id: 'samurai-csi', name: 'Samurai', logo: '/assets/teams/2026-27/samurai.png', mono: '' },
  { id: 'evergreen-la-squad', name: 'La Squad (Ciampino)', logo: '', mono: '/assets/teams/2026-27/mono_white/ciampino_white.png' },
  { id: 'cavese-93-blu', name: 'Cavese Blu', logo: '', mono: '/assets/teams/2026-27/mono_white/cavese.png' },
  { id: 'cavese-93-bianco', name: 'Cavese Bianco', logo: '', mono: '/assets/teams/2026-27/mono_white/cavese.png' },
  { id: 'delfino-basket-anzio', name: 'Delfino Anzio', logo: '', mono: '/assets/teams/2026-27/mono_white/delfino.png' },
  { id: 'boys-90-fiumicino', name: 'Boys 90', logo: '', mono: '/assets/teams/2026-27/mono_white/boys.png' },
  { id: 'supernova-fiumicino-a', name: 'Supernova A', logo: '', mono: '/assets/teams/2026-27/mono_white/fiumicino.png' },
  { id: 'elite-roma-all-saints', name: 'EBR All Saints', logo: '', mono: '/assets/teams/2026-27/mono_white/ebr_as.png' },
  { id: 'elite-roma-young', name: 'EBR Young', logo: '', mono: '/assets/teams/2026-27/mono_white/ebr_young.png' },
  { id: 'cor-basket-villa-flaminia', name: 'Villa Flaminia', logo: '', mono: '/assets/teams/2026-27/mono_white/villa_flaminia.png' },
  { id: 'r3-bombers', name: 'R3 Bombers', logo: '', mono: '/assets/teams/2026-27/mono_white/bombers.png' },
  { id: 'monteverde-parrots', name: 'Monteverde Parrots', logo: '', mono: '/assets/teams/2026-27/mono_white/parrots.png' },
] as const;

export const MATCHDAY_WHITE_LOGOS = [
  { id: 'nerone', name: 'Nerone · con scritta', logo: '/assets/teams/2026-27/mono_white/nerone_white_text.png' },
  { id: 'nerone-bounganvillae', name: 'Nerone BGV · con scritta', logo: '/assets/teams/2026-27/mono_white/nerone_bgv_white_text.png' },
  { id: 'evergreen-la-squad', name: 'La Squad', logo: '/assets/teams/2026-27/mono_white/ciampino_white.png' },
  { id: 'cavese-93-blu', name: 'Cavese 93', logo: '/assets/teams/2026-27/mono_white/cavese.png' },
  { id: 'delfino-basket-anzio', name: 'Delfino Basket Anzio', logo: '/assets/teams/2026-27/mono_white/delfino.png' },
  { id: 'boys-90-fiumicino', name: 'Boys 90', logo: '/assets/teams/2026-27/mono_white/boys.png' },
  { id: 'supernova-fiumicino-a', name: 'Supernova Fiumicino', logo: '/assets/teams/2026-27/mono_white/fiumicino.png' },
  { id: 'elite-roma-all-saints', name: 'EBR All Saints', logo: '/assets/teams/2026-27/mono_white/ebr_as.png' },
  { id: 'elite-roma-young', name: 'EBR Young', logo: '/assets/teams/2026-27/mono_white/ebr_young.png' },
  { id: 'cor-basket-villa-flaminia', name: 'Villa Flaminia', logo: '/assets/teams/2026-27/mono_white/villa_flaminia.png' },
  { id: 'r3-bombers', name: 'R3 Bombers', logo: '/assets/teams/2026-27/mono_white/bombers.png' },
  { id: 'monteverde-parrots', name: 'Monteverde Parrots', logo: '/assets/teams/2026-27/mono_white/parrots.png' },
] as const;

export function matchdayLogo(teamId: string) {
  const normalizedId = teamId === 'cavese-93-bianco' ? 'cavese-93-blu' : teamId;
  return MATCHDAY_WHITE_LOGOS.find(item => item.id === normalizedId)?.logo ?? '';
}

function neroneTeamId(name: string) {
  if (!/^nerone\b/i.test(name.trim())) return '';
  return /\b(?:bgv|bounganvillae)\b/i.test(name) ? 'nerone-bounganvillae' : 'nerone';
}

export function matchdayClubLogo(teamName: string) {
  return matchdayLogo(neroneTeamId(teamName));
}

function opponentName(homeTeam: string, awayTeam: string) {
  const opponent = neroneTeamId(awayTeam) && !neroneTeamId(homeTeam) ? homeTeam : awayTeam;
  return opponent.trim();
}

const imageCache = new Map<string, Promise<HTMLImageElement>>();
function image(src: string): Promise<HTMLImageElement> {
  const url = src.startsWith('data:') || src.startsWith('blob:') ? src : assetPath(src);
  if (!imageCache.has(url)) imageCache.set(url, new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => { imageCache.delete(url); reject(new Error(`Impossibile caricare ${src}`)); };
    img.src = url;
  }));
  return imageCache.get(url)!;
}
async function optionalImage(src: string) { try { return src ? await image(src) : null; } catch { return null; } }

function contain(ctx: CanvasRenderingContext2D, img: HTMLImageElement, x: number, y: number, w: number, h: number) {
  const scale = Math.min(w / img.width, h / img.height);
  const width = img.width * scale, height = img.height * scale;
  const top = y + (h - height) / 2;
  ctx.drawImage(img, x + (w - width) / 2, top, width, height);
  return { top, scale };
}
const visibleBoundsCache = new WeakMap<HTMLImageElement, { x: number; y: number; w: number; h: number }>();
function visibleBounds(img: HTMLImageElement) {
  let bounds = visibleBoundsCache.get(img);
  if (!bounds) {
    const mask = document.createElement('canvas');
    mask.width = img.naturalWidth; mask.height = img.naturalHeight;
    const maskCtx = mask.getContext('2d', { willReadFrequently: true });
    bounds = { x: 0, y: 0, w: img.naturalWidth, h: img.naturalHeight };
    if (maskCtx) {
      maskCtx.drawImage(img, 0, 0);
      try {
        const pixels = maskCtx.getImageData(0, 0, mask.width, mask.height).data;
        let left = mask.width, top = mask.height, right = -1, bottom = -1;
        for (let py = 0; py < mask.height; py++) for (let px = 0; px < mask.width; px++) {
          if (pixels[(py * mask.width + px) * 4 + 3] <= 24) continue;
          left = Math.min(left, px); top = Math.min(top, py);
          right = Math.max(right, px); bottom = Math.max(bottom, py);
        }
        if (right >= left) bounds = { x: left, y: top, w: right - left + 1, h: bottom - top + 1 };
      } catch { /* Use the full image when pixel access is unavailable. */ }
    }
    visibleBoundsCache.set(img, bounds);
  }
  return bounds;
}
function containVisible(ctx: CanvasRenderingContext2D, img: HTMLImageElement, x: number, y: number, w: number, h: number) {
  const bounds = visibleBounds(img);
  const scale = Math.min(w / bounds.w, h / bounds.h);
  const dw = bounds.w * scale, dh = bounds.h * scale;
  ctx.drawImage(img, bounds.x, bounds.y, bounds.w, bounds.h, x + (w - dw) / 2, y + (h - dh) / 2, dw, dh);
}
function cover(ctx: CanvasRenderingContext2D, img: HTMLImageElement, x: number, y: number, w: number, h: number, zoom = 1, panX = 0, panY = 0) {
  const scale = Math.max(w / img.width, h / img.height) * zoom;
  const width = img.width * scale, height = img.height * scale;
  const maxX = Math.max(0, (width - w) / 2), maxY = Math.max(0, (height - h) / 2);
  ctx.drawImage(img, x + (w - width) / 2 + maxX * panX / 100, y + (h - height) / 2 + maxY * panY / 100, width, height);
}
function text(ctx: CanvasRenderingContext2D, value: string, x: number, y: number, maxWidth: number, size: number, family: string, weight = '400', align: CanvasTextAlign = 'left', minSize = 20) {
  ctx.textAlign = align;
  ctx.textBaseline = 'top';
  const string = value.trim() || ' ';
  for (let fontSize = size; fontSize >= minSize; fontSize -= 1) {
    ctx.font = `${weight} ${fontSize}px ${family}`;
    if (ctx.measureText(string).width <= maxWidth || fontSize === minSize) { ctx.fillText(string, x, y, maxWidth); return; }
  }
}
function lines(ctx: CanvasRenderingContext2D, value: string, x: number, y: number, width: number, maxLines: number, size: number, lineHeight: number, family: string, weight = '400', align: CanvasTextAlign = 'left') {
  const words = value.trim().split(/\s+/).filter(Boolean);
  if (!words.length) return;
  for (let fontSize = size; fontSize >= 17; fontSize -= 1) {
    ctx.font = `${weight} ${fontSize}px ${family}`;
    const rows: string[] = [];
    let row = '';
    for (const word of words) {
      const next = row ? `${row} ${word}` : word;
      if (ctx.measureText(next).width <= width || !row) row = next;
      else { rows.push(row); row = word; }
    }
    if (row) rows.push(row);
    if (rows.length > maxLines && fontSize > 17) continue;
    ctx.textAlign = align; ctx.textBaseline = 'top';
    rows.slice(0, maxLines).forEach((line, i) => ctx.fillText(line, x, y + i * lineHeight, width));
    return;
  }
}
function weekRoundLabel(value: string) {
  const round = value.trim();
  return /^\d/.test(round) ? `Giornata ${round}` : round;
}

function weekDetails(ctx: CanvasRenderingContext2D, { match, fontSizes }: MatchGlass, centerX: number, top: number, width: number, height: number) {
  const opponent = opponentName(match.homeTeam, match.awayTeam);
  const matchup = [weekRoundLabel(match.round), opponent && `vs ${opponent}`].filter(Boolean).join(' ');
  const fields = [
    { value: matchup, size: fontSizes.round },
    { value: match.dateTime.toLocaleUpperCase('it-IT'), size: fontSizes.dateTime },
    { value: match.address, size: fontSizes.address },
  ].filter(field => field.value.trim());
  if (!fields.length) return;
  const family = 'Arial, sans-serif';
  const gap = 12;
  const fitted = fields.map(({ value, size }) => {
    ctx.font = `${size}px ${family}`;
    const widthScale = Math.min(1, width / ctx.measureText(value).width);
    return { value, size: Math.max(12, Math.floor(size * widthScale)) };
  });
  const textHeight = fitted.reduce((sum, field) => sum + field.size * 1.2, 0);
  const gapsHeight = gap * (fitted.length - 1);
  const heightScale = Math.min(1, (height - gapsHeight) / textHeight);
  let cursorY = top;
  ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
  for (const { value, size } of fitted) {
    ctx.font = `${size * heightScale}px ${family}`;
    const ascent = ctx.measureText(value).actualBoundingBoxAscent;
    ctx.fillText(value, centerX, cursorY + ascent, width);
    cursorY += size * heightScale * 1.2 + gap;
  }
}
function roundRect(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
  ctx.beginPath(); ctx.roundRect(x, y, w, h, r);
}
function house(ctx: CanvasRenderingContext2D, x: number, y: number, size: number) {
  ctx.save(); ctx.translate(x, y); ctx.scale(size / 40, size / 40);
  ctx.fillStyle = '#fff'; ctx.beginPath(); ctx.moveTo(2, 18); ctx.lineTo(20, 2); ctx.lineTo(38, 18); ctx.lineTo(34, 18); ctx.lineTo(34, 38); ctx.lineTo(24, 38); ctx.lineTo(24, 26); ctx.lineTo(16, 26); ctx.lineTo(16, 38); ctx.lineTo(6, 38); ctx.lineTo(6, 18); ctx.closePath(); ctx.fill(); ctx.restore();
}
function car(ctx: CanvasRenderingContext2D, x: number, y: number, size: number) {
  ctx.save(); ctx.translate(x, y); ctx.scale(size / 48, size / 48);
  ctx.fillStyle = '#fff';
  ctx.beginPath(); ctx.moveTo(3, 22); ctx.lineTo(10, 11); ctx.lineTo(35, 11); ctx.lineTo(43, 22); ctx.lineTo(46, 23); ctx.lineTo(46, 33); ctx.lineTo(2, 33); ctx.lineTo(2, 24); ctx.closePath(); ctx.fill();
  ctx.fillStyle = '#303030'; ctx.fillRect(12, 14, 10, 7); ctx.fillRect(25, 14, 9, 7);
  for (const wheelX of [11, 37]) {
    ctx.beginPath(); ctx.arc(wheelX, 34, 6, 0, Math.PI * 2); ctx.fillStyle = '#171717'; ctx.fill();
    ctx.beginPath(); ctx.arc(wheelX, 34, 4.2, 0, Math.PI * 2); ctx.fillStyle = '#fff'; ctx.fill();
  }
  ctx.restore();
}
export function compareCalendarAppointments(a: Pick<Appointment, 'date' | 'time'>, b: Pick<Appointment, 'date' | 'time'>) {
  if (!a.date || !b.date) return Number(!a.date) - Number(!b.date);
  const dateOrder = a.date.localeCompare(b.date);
  if (dateOrder) return dateOrder;
  const timeKey = (time: string) => time.replace(/^(\d):/, '0$1:') || '24:00';
  return timeKey(a.time).localeCompare(timeKey(b.time));
}

function dateLabel(date: string, time: string) {
  if (!date) return time || 'Data e ora';
  const parsed = new Date(`${date}T12:00:00`);
  const label = Number.isNaN(parsed.getTime()) ? date : new Intl.DateTimeFormat('it-IT', { day: 'numeric', month: 'long' }).format(parsed);
  return `${label}, ${time || '--:--'}`;
}
async function calendario(ctx: CanvasRenderingContext2D, s: GraphicState) {
  const bg = await image('/assets/elementi_social/calendario_bg.png');
  ctx.drawImage(bg, 0, 0, 1080, 1350);
  ctx.fillStyle = '#fff';
  text(ctx, 'CALENDARIO', 540, 265, 700, 104, '"Bebas Neue", Impact, sans-serif', '700', 'center', 70);
  text(ctx, s.month.toUpperCase(), 540, 365, 600, 60, '"Bebas Neue", Impact, sans-serif', '700', 'center', 40);
  text(ctx, s.leftName.toUpperCase(), 61, 472, 450, 70, '"Bebas Neue", Impact, sans-serif', '700', 'left', 38);
  const rightName = s.rightName.toUpperCase();
  if (rightName.endsWith(' BGV')) {
    const family = '"Bebas Neue", Impact, sans-serif';
    let size = 70;
    ctx.font = `700 ${size}px ${family}`;
    while (ctx.measureText(rightName).width > 450 && size > 38) {
      ctx.font = `700 ${--size}px ${family}`;
    }
    const bgvWidth = ctx.measureText('BGV').width;
    ctx.textAlign = 'right'; ctx.textBaseline = 'top';
    ctx.fillText(rightName.slice(0, -3), 1020 - bgvWidth, 472);
    ctx.fillStyle = '#ff00bf';
    ctx.fillText('BGV', 1020, 472);
    ctx.fillStyle = '#fff';
  } else {
    text(ctx, rightName, 1020, 472, 450, 70, '"Bebas Neue", Impact, sans-serif', '700', 'right', 38);
  }
  text(ctx, 'UISP PLATINUM', 61, 536, 450, 26, 'Arimo, Arial, sans-serif', '700', 'left', 20);
  text(ctx, 'UISP GOLD', 1020, 536, 450, 26, 'Arimo, Arial, sans-serif', '700', 'right', 20);
  const groups = [s.appointments.filter(a => a.club === 'nerone'), s.appointments.filter(a => a.club === 'nerone-bounganvillae')];
  groups.forEach((group, column) => {
    group.sort(compareCalendarAppointments).forEach((a, i) => {
      const y = 536 + s.calendarTopGap + i * s.calendarMatchGap;
      const atRight = column === 1;
      const x = atRight ? s.calendarRightX : s.calendarLeftX;
      ctx.fillStyle = '#fff';
      const label = dateLabel(a.date, a.time);
      text(ctx, label, x, y, 395, 34, 'Arimo, Arial, sans-serif', '400', atRight ? 'right' : 'left', 23);
      const measure = ctx.measureText(label).width;
      const iconSize = a.atHome ? 32 : 40;
      const iconX = atRight ? Math.max(550, x - measure - iconSize - 18) : Math.min(448, x + measure + 18);
      (a.atHome ? house : car)(ctx, iconX, y + (a.atHome ? -4 : -10), iconSize);
      text(ctx, a.opponent.toUpperCase(), x, y + 47, 430, 35, 'Arimo, Arial, sans-serif', '700', atRight ? 'right' : 'left', 22);
    });
  });
  const sponsor = SPONSORS.find(item => item.id === s.sponsor) ?? SPONSORS[0];
  text(ctx, 'presented by:', 540, 1138, 400, 31, 'Arimo, Arial, sans-serif', '400', 'center');
  const logo = await optionalImage(sponsor.logo);
  if (logo) contain(ctx, logo, 340, 1180, 400, 82);
  ctx.fillStyle = '#999';
  text(ctx, '*Ogni data ed orario sono variabili in base alla disponibilità delle altre squadre e provvedimenti UISP*', 540, 1288, 960, 20, 'Arimo, Arial, sans-serif', 'italic', 'center', 16);
}
async function week(ctx: CanvasRenderingContext2D, s: GraphicState) {
  const canvasHeight = s.weekFormat === 'story' ? 1920 : 1350;
  ctx.fillStyle = '#171717'; ctx.fillRect(0, 0, 1080, canvasHeight);
  const photo = await optionalImage(s.photo);
  const originalCanvas = document.createElement('canvas'); originalCanvas.width = 1080; originalCanvas.height = canvasHeight;
  const original = originalCanvas.getContext('2d')!;
  if (photo) {
    cover(original, photo, 0, 0, 1080, canvasHeight, s.photoZoom, s.photoX, s.photoY);
    ctx.drawImage(originalCanvas, 0, 0);
    ctx.save(); ctx.filter = `blur(${s.backgroundBlur}px)`; ctx.drawImage(originalCanvas, 0, 0); ctx.restore();
  }
  const blurCanvas = document.createElement('canvas'); blurCanvas.width = 1080; blurCanvas.height = canvasHeight;
  const blur = blurCanvas.getContext('2d')!;
  if (photo) { blur.filter = 'blur(24px)'; blur.drawImage(originalCanvas, 0, 0); }
  const logos = await Promise.all(s.glasses.map(async g => g.kind === 'match'
    ? { home: await optionalImage(g.match.homeLogo), away: await optionalImage(g.match.awayLogo), sponsor: null }
    : { home: null, away: null, sponsor: await optionalImage((SPONSORS.find(item => item.id === g.sponsorId) ?? SPONSORS[3]).logo) }));
  const drawGlass = (g: Glass, index: number) => {
    const { x, y, width: w, height: h } = g;
    ctx.save(); ctx.shadowColor = '#0009'; ctx.shadowBlur = 16; ctx.shadowOffsetY = 9;
    roundRect(ctx, x, y, w, h, 42); ctx.fillStyle = '#ffffff12'; ctx.fill(); ctx.restore();
    ctx.save(); roundRect(ctx, x, y, w, h, 42); ctx.clip();
    if (photo) ctx.drawImage(blurCanvas, x, y, w, h, x, y, w, h);
    ctx.fillStyle = 'rgba(40,49,59,.38)'; ctx.fillRect(x, y, w, h);
    const reflection = ctx.createLinearGradient(x, y, x + w, y + h);
    reflection.addColorStop(0, '#ffffff38'); reflection.addColorStop(.35, '#ffffff05'); reflection.addColorStop(1, '#ffffff16');
    ctx.fillStyle = reflection; ctx.fillRect(x, y, w, h);
    ctx.restore();
    ctx.save(); ctx.shadowColor = '#fff8'; ctx.shadowBlur = 9; ctx.strokeStyle = '#ffffff9c'; ctx.lineWidth = 1.5; roundRect(ctx, x + 1, y + 1, w - 2, h - 2, 41); ctx.stroke(); ctx.restore();
    ctx.save(); roundRect(ctx, x, y, w, h, 42); ctx.clip(); ctx.fillStyle = '#fff';
    if (g.kind === 'sponsor') {
      const scale = Math.min(w / 964, h / 166);
      const titleFamily = 'Aharoni, "Archivo Black", "Arial Black", Arial, sans-serif';
      const title = 'QUESTA SETTIMANA';
      const titleBox = { x: x + 28 * scale, y: y + 18 * scale, w: w * .655 - 56 * scale, h: h - 36 * scale };
      let titleSize = s.weekHeaderFontSizes.title;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'alphabetic';
      for (; titleSize >= 12; titleSize--) {
        ctx.font = `700 ${titleSize}px ${titleFamily}`;
        const metrics = ctx.measureText(title);
        const titleHeight = metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent;
        if (metrics.width <= titleBox.w && titleHeight <= titleBox.h) {
          const baseline = titleBox.y + (titleBox.h + metrics.actualBoundingBoxAscent - metrics.actualBoundingBoxDescent) / 2;
          ctx.fillText(title, titleBox.x + titleBox.w / 2, baseline);
          break;
        }
      }
      ctx.fillStyle = '#ffffff55';
      ctx.fillRect(x + w * .655, y + 23, 1.5, h - 46);
      ctx.fillStyle = '#fff';
      const poweredBySize = Math.min(s.weekHeaderFontSizes.poweredBy, Math.floor(h * .2));
      text(ctx, 'POWERED BY', x + w * .82, y + h * .16, w * .28, poweredBySize, '"DM Sans", Arial, sans-serif', '700', 'center', 10);
      if (logos[index].sponsor) containVisible(ctx, logos[index].sponsor!, x + w * .685, y + h * .38, w * .27, h * .45);
      ctx.restore();
      return;
    }
    const inset = Math.max(18, w * .075);
    const textWidth = w - inset * 2;
    const titleSize = Math.min(g.fontSizes.title, Math.floor(h * .12));
    text(ctx, g.match.title, x + w / 2, y + h * .055, textWidth, titleSize, 'Aharoni, "Archivo Black", "Arial Black", Arial, sans-serif', '700', 'center', 12);
    const logoGap = Math.max(12, w * .06);
    const logoWidth = (textWidth - logoGap) / 2;
    const logoTop = y + h * .185;
    const logoHeight = h * .275;
    let logosBottom = logoTop;
    [logos[index].home, logos[index].away].forEach((logo, side) => {
      if (!logo) return;
      const { top, scale } = contain(ctx, logo, x + inset + side * (logoWidth + logoGap), logoTop, logoWidth, logoHeight);
      const bounds = visibleBounds(logo);
      logosBottom = Math.max(logosBottom, top + (bounds.y + bounds.h) * scale);
    });
    const detailsTop = logosBottom + g.detailsGap;
    weekDetails(ctx, g, x + w / 2, detailsTop, textWidth, y + h * .94 - detailsTop);
    ctx.restore();
  };
  s.glasses.forEach((g, index) => { if (g.layer === 'behind') drawGlass(g, index); });
  const subject = await optionalImage(s.subjectPhoto);
  if (subject) cover(ctx, subject, 0, 0, 1080, canvasHeight, s.photoZoom, s.photoX, s.photoY);
  s.glasses.forEach((g, index) => { if (g.layer === 'front') drawGlass(g, index); });
}

function posterDateTime(value: string) {
  const label = value.trim().toLocaleUpperCase('it-IT');
  const parts = label.match(/^(?:(.*?)(?:,\s*|\s+))?(\d{1,2}:\d{2}|ORARIO DA DEFINIRE)$/);
  const date = parts ? (parts[1] ?? '').trim() : label;
  const words = date.match(/^(\p{L}+)\s+(\d{1,2})\s+(\p{L}+)$/u);
  return {
    date: words ? `${words[1].slice(0, 3)} ${words[2].padStart(2, '0')} ${words[3].slice(0, 3)}` : date || 'DATA DA DEFINIRE',
    time: parts?.[2] || 'ORARIO DA DEFINIRE',
  };
}

async function weekPoster(ctx: CanvasRenderingContext2D, s: GraphicState, height: number) {
  const story = s.weekFormat === 'story';
  const width = 1080;
  const margin = 50;
  const headingY = story ? 144 : 48;
  const cardsBottom = height - (story ? 240 : 140);
  const cards = s.glasses.filter(glass => glass.kind === 'match');
  const available = height * .36;
  const gap = Math.min(18, available / Math.max(1, cards.length) * .14);
  const rowHeight = Math.min(128, (available + gap) / Math.max(1, cards.length) - gap);
  const cardsTop = cardsBottom - Math.max(0, cards.length * (rowHeight + gap) - gap);
  const { subject, x, y, zoom, sponsorId, titleSize, sponsorLabelSize } = s.weekPoster;
  const sponsor = SPONSORS.find(item => item.id === sponsorId);
  const [players, sponsorLogo, matchLogos] = await Promise.all([
    optionalImage(subject),
    optionalImage(sponsor?.logo ?? ''),
    Promise.all(cards.map(({ match }) => Promise.all([optionalImage(match.homeLogo), optionalImage(match.awayLogo)]))),
  ]);

  ctx.fillStyle = '#151515';
  ctx.fillRect(0, 0, width, height);
  const bandY = story ? 100 : 20;
  const bandDepth = story ? 765 : 545;
  const band = ctx.createLinearGradient(0, bandY + 440, width, bandY);
  band.addColorStop(0, '#6e1e25');
  band.addColorStop(1, '#a02b34');
  ctx.fillStyle = band;
  ctx.beginPath();
  ctx.moveTo(0, bandY + 405);
  ctx.lineTo(width, bandY);
  ctx.lineTo(width, bandY + bandDepth);
  ctx.lineTo(0, bandY + 405 + bandDepth);
  ctx.closePath();
  ctx.fill();

  const titleFont = '"Archivo Black", "Arial Black", Arial, sans-serif';
  const infoFont = '"DM Sans", Arial, sans-serif';
  const playerTop = headingY + 50 + titleSize * 2;
  if (players) {
    const bounds = visibleBounds(players);
    const playerBottom = Math.min(cardsBottom, cardsTop + 28);
    const playerHeight = playerBottom - playerTop;
    const scale = Math.min((width - 76) / bounds.w, playerHeight / bounds.h) * zoom;
    const dw = bounds.w * scale, dh = bounds.h * scale;
    ctx.save();
    ctx.beginPath();
    ctx.rect(0, playerTop - 18, width, playerBottom - playerTop + 18);
    ctx.clip();
    ctx.drawImage(players, bounds.x, bounds.y, bounds.w, bounds.h, (width - dw) / 2 + x, playerBottom - dh + y, dw, dh);
    ctx.restore();
  }

  ctx.fillStyle = '#f7f3ed';
  text(ctx, 'NERONE BASKET ANZIO', margin, headingY, width - margin * 2, 28, infoFont, '800');
  text(ctx, 'QUESTA', margin - 5, headingY + 45, width - margin * 2, titleSize, titleFont, '900');
  text(ctx, 'SETTIMANA', margin - 5, headingY + 45 + titleSize * .91, width - margin * 2, titleSize, titleFont, '900');

  for (const [index, { match, fontSizes }] of cards.entries()) {
    const top = cardsTop + index * (rowHeight + gap);
    const size = rowHeight / 128;
    const dateWidth = 194;
    const contentLeft = margin + dateWidth;
    const { date, time } = posterDateTime(match.dateTime);
    const setSize = (value: number) => Math.max(1, Math.floor(value * size));
    const write = (label: string, left: number, lineTop: number, maxWidth: number, fontSize: number, weight: string, align: CanvasTextAlign = 'left') => {
      text(ctx, label, left, top + rowHeight * lineTop, maxWidth, setSize(fontSize), infoFont, weight, align, 1);
    };
    ctx.fillStyle = '#f3f0e9';
    ctx.fillRect(margin, top, width - 2 * margin, rowHeight);
    ctx.fillStyle = '#a32a34';
    ctx.fillRect(margin, top, dateWidth, rowHeight);
    ctx.fillStyle = '#fff';
    const timeSize = Math.min(fontSizes.dateTime, 46);
    write(date, margin + dateWidth / 2, .18, dateWidth - 18, timeSize * .68, '700', 'center');
    write(time, margin + dateWidth / 2, .45, dateWidth - 18, timeSize, '900', 'center');

    const emblems = matchLogos[index].filter(logo => logo !== null);
    const emblemSize = Math.min(58, rowHeight * .55);
    const emblemStart = contentLeft + 20;
    for (const [side, logo] of emblems.entries()) {
      const lx = emblemStart + side * (emblemSize + 6);
      const ly = top + (rowHeight - emblemSize) / 2;
      ctx.fillStyle = '#ded9d2';
      ctx.beginPath();
      ctx.arc(lx + emblemSize / 2, ly + emblemSize / 2, emblemSize / 2, 0, Math.PI * 2);
      ctx.fill();
      containVisible(ctx, logo, lx + 7 * size, ly + 7 * size, emblemSize - 14 * size, emblemSize - 14 * size);
    }
    const left = emblemStart + emblems.length * (emblemSize + 6) + (emblems.length ? 13 : 0);
    const lineWidth = width - margin - left - 18;
    ctx.fillStyle = '#65242a';
    const competition = [match.title, weekRoundLabel(match.round)].filter(Boolean).join(' · ');
    if (competition) write(competition.toLocaleUpperCase('it-IT'), left, .10, lineWidth, Math.min(fontSizes.title * .43, 30), '700');
    ctx.fillStyle = '#171717';
    const matchup = [match.homeTeam, match.awayTeam].map(name => name.trim()).filter(Boolean).join(' VS ');
    if (matchup) write(matchup.toLocaleUpperCase('it-IT'), left, .34, lineWidth, Math.min(fontSizes.round, 42), '900');
    ctx.fillStyle = '#35302e';
    if (match.address.trim()) write(match.address, left, .70, lineWidth, Math.min(fontSizes.address * .65, 29), '500');
  }

  if (sponsorLogo) {
    const sponsorTop = cardsBottom + 32;
    ctx.fillStyle = '#f7f3ed';
    text(ctx, 'POWERED BY', width / 2 - 19, sponsorTop + 18, 235, sponsorLabelSize, infoFont, '700', 'right', 12);
    containVisible(ctx, sponsorLogo, width / 2 + 14, sponsorTop - 2, 204, 65);
  }
}

let matchdayGrain: HTMLCanvasElement | null = null;
function drawMatchdayGrain(ctx: CanvasRenderingContext2D) {
  if (!matchdayGrain) {
    matchdayGrain = document.createElement('canvas');
    matchdayGrain.width = 1080; matchdayGrain.height = 1350;
    const grainCtx = matchdayGrain.getContext('2d')!;
    const pixels = grainCtx.createImageData(1080, 1350);
    let seed = 2026;
    for (let i = 0; i < pixels.data.length; i += 4) {
      seed = (Math.imul(seed, 1664525) + 1013904223) | 0;
      const value = seed >>> 24;
      pixels.data[i] = pixels.data[i + 1] = pixels.data[i + 2] = value > 127 ? 255 : 0;
      pixels.data[i + 3] = 3 + (value & 15);
    }
    grainCtx.putImageData(pixels, 0, 0);
  }
  ctx.drawImage(matchdayGrain, 0, 0);
}
function trackedText(ctx: CanvasRenderingContext2D, value: string, centerX: number, y: number, maxWidth: number, tracking: number) {
  const letters = [...value.toUpperCase()];
  const naturalWidth = letters.reduce((sum, letter) => sum + ctx.measureText(letter).width, 0) + tracking * (letters.length - 1);
  const factor = Math.min(1, maxWidth / naturalWidth);
  ctx.save(); ctx.translate(centerX, y); ctx.scale(factor, 1); ctx.textAlign = 'left'; ctx.textBaseline = 'top';
  let x = -naturalWidth / 2;
  for (const letter of letters) { ctx.fillText(letter, x, 0); x += ctx.measureText(letter).width + tracking; }
  ctx.restore();
}
function matchdayDateLabel(value: string) {
  const date = new Date(`${value}T12:00:00`);
  return Number.isNaN(date.getTime()) ? 'DATA DA DEFINIRE'
    : new Intl.DateTimeFormat('it-IT', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' }).format(date).toUpperCase();
}
async function matchday(ctx: CanvasRenderingContext2D, s: GraphicState) {
  ctx.fillStyle = /^#[0-9a-f]{6}$/i.test(s.matchdayBackground) ? s.matchdayBackground : '#c80b1d';
  ctx.fillRect(0, 0, 1080, 1350);
  const vignette = ctx.createRadialGradient(540, 560, 80, 540, 650, 940);
  vignette.addColorStop(0, '#ffffff0d'); vignette.addColorStop(1, '#1900083d');
  ctx.fillStyle = vignette; ctx.fillRect(0, 0, 1080, 1350);
  drawMatchdayGrain(ctx);

  ctx.fillStyle = '#f7f3ee';
  ctx.font = 'italic 700 22px Georgia, serif';
  trackedText(ctx, s.matchdayTeamName || 'NERONE BASKET ANZIO', 540, 62, 850, 7);
  ctx.save();
  ctx.font = '400 290px Anton, Impact, sans-serif';
  const titleMetrics = ctx.measureText('GAME DAY');
  const glyphHeight = titleMetrics.actualBoundingBoxAscent + titleMetrics.actualBoundingBoxDescent || 290;
  ctx.translate(540, 150); ctx.scale(1, 400 / glyphHeight);
  ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
  ctx.fillText('GAME DAY', 0, titleMetrics.actualBoundingBoxAscent, 880);
  ctx.restore();

  ctx.fillStyle = '#fff';
  ctx.font = 'italic 700 30px Georgia, serif';
  text(ctx, matchdayDateLabel(s.matchdayDate), 767, 594, 263, 30, 'Georgia, serif', 'italic 700', 'left', 23);
  text(ctx, s.matchdayTime || 'ORARIO DA DEFINIRE', 767, 634, 263, 30, 'Georgia, serif', 'italic 700', 'left', 23);
  lines(ctx, s.address || 'LUOGO DA DEFINIRE', 767, 679, 265, 3, 25, 31, 'Georgia, serif', 'italic 700');
  const [home, away] = await Promise.all([
    optionalImage(matchdayClubLogo(s.homeTeam) || s.homeLogo),
    optionalImage(matchdayClubLogo(s.awayTeam) || s.awayLogo),
  ]);
  if (home) containVisible(ctx, home, 766, 785, 104, 100);
  if (away) containVisible(ctx, away, 900, 785, 104, 100);
  const opponent = opponentName(s.homeTeam, s.awayTeam);
  if (opponent) text(ctx, `vs ${opponent}`, 885, 898, 265, 25, 'Georgia, serif', 'italic 700', 'center', 14);

  ctx.fillStyle = '#f7f3ee';
  ctx.font = '700 21px "DM Sans", Arial, sans-serif';
  trackedText(ctx, 'POWERED BY', 206, 626, 270, 3);
  const sponsor = SPONSORS.find(item => item.id === s.sponsor) ?? SPONSORS[1];
  const sponsorLogo = await optionalImage(sponsor.logo);
  if (sponsorLogo) containVisible(ctx, sponsorLogo, 78, 666, 255, 90);

  const subject = await optionalImage(s.matchdaySubject);
  if (subject) {
    const bounds = visibleBounds(subject);
    const scale = Math.min(450 / bounds.w, 885 / bounds.h) * s.matchdaySubjectZoom;
    const width = bounds.w * scale, height = bounds.h * scale;
    const x = 540 - width / 2 + s.matchdaySubjectX;
    const y = 1200 - height + s.matchdaySubjectY;
    ctx.save();
    ctx.filter = `blur(${s.matchdayShadowBlur}px)`;
    ctx.fillStyle = `rgba(16, 0, 4, ${s.matchdayShadowOpacity / 100})`;
    ctx.beginPath();
    ctx.ellipse(x + width / 2 + s.matchdayShadowX, y + height + s.matchdayShadowY,
      s.matchdayShadowWidth / 2, s.matchdayShadowHeight / 2, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
    ctx.save();
    ctx.drawImage(subject, bounds.x, bounds.y, bounds.w, bounds.h, x, y, width, height);
    ctx.restore();
  } else {
    ctx.save(); ctx.strokeStyle = '#ffffff55'; ctx.lineWidth = 2; ctx.setLineDash([10, 12]);
    ctx.strokeRect(374, 754, 330, 335); ctx.setLineDash([]);
    ctx.fillStyle = '#fff9'; text(ctx, 'CARICA IL PNG DEL GIOCATORE', 540, 905, 290, 25, '"DM Sans", Arial, sans-serif', '700', 'center', 18);
    ctx.restore();
  }

  ctx.fillStyle = '#f7f3ee';
  ctx.font = 'italic 700 25px Georgia, serif';
  trackedText(ctx, s.matchdayPlayerName || 'NOME GIOCATORE', 540, 1276, 815, 5);
}
async function risultato(ctx: CanvasRenderingContext2D, s: GraphicState) {
  const stripCenterX = 847;
  ctx.fillStyle = '#171717'; ctx.fillRect(0, 0, 1080, 1350);
  const photo = await optionalImage(s.photo);
  if (photo) cover(ctx, photo, 0, 0, 1080, 1350, s.photoZoom, s.photoX, s.photoY);
  ctx.drawImage(await image('/assets/elementi_social/black_strip.png'), 655, 0, 384, 1350);
  ctx.fillStyle = '#fff';
  lines(ctx, s.competition.toUpperCase(), stripCenterX, 34, 290, 3, 29, 34, '"DM Sans", Arial, sans-serif', '700', 'center');
  const home = await optionalImage(s.homeLogo), away = await optionalImage(s.awayLogo);
  if (home) containVisible(ctx, home, stripCenterX - 90, 200, 180, 170);
  const drawScore = (value: string, centerY: number, side: 'home' | 'away') => {
    const isNerone = s.resultClubSide === side;
    const score = value || '0';
    ctx.save();
    ctx.font = '150px Anton, Impact, sans-serif';
    ctx.textAlign = 'left'; ctx.textBaseline = 'alphabetic';
    ctx.lineJoin = 'round';
    const metrics = ctx.measureText(score);
    const scoreX = stripCenterX + (metrics.actualBoundingBoxLeft - metrics.actualBoundingBoxRight) / 2;
    const baseline = centerY + (metrics.actualBoundingBoxAscent - metrics.actualBoundingBoxDescent) / 2;
    if (!isNerone) {
      ctx.strokeStyle = '#fff'; ctx.lineWidth = 9;
      ctx.strokeText(score, scoreX, baseline);
    }
    ctx.fillStyle = isNerone ? '#fff' : '#111';
    ctx.fillText(score, scoreX, baseline);
    ctx.restore();
  };
  drawScore(s.homeScore, 485, 'home');
  drawScore(s.awayScore, 740, 'away');
  if (away) containVisible(ctx, away, stripCenterX - 90, 855, 180, 170);
  text(ctx, 'PRESENTED BY', stripCenterX, 1090, 270, 27, '"DM Sans", Arial, sans-serif', '700', 'center');
  const sponsor = SPONSORS.find(item => item.id === s.sponsor) ?? SPONSORS[2];
  const logo = await optionalImage(sponsor.logo);
  if (logo) containVisible(ctx, logo, stripCenterX - 110, 1137, 220, 190);
}
export async function drawGraphic(canvas: HTMLCanvasElement, state: GraphicState) {
  canvas.width = 1080; canvas.height = state.type === 'week' && state.weekFormat === 'story' ? 1920 : 1350;
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('Canvas non disponibile nel browser.');
  await document.fonts.ready;
  if (state.type === 'calendario') await calendario(ctx, state);
  if (state.type === 'week') {
    if (state.weekLayout === 'poster') await weekPoster(ctx, state, canvas.height);
    else await week(ctx, state);
  }
  if (state.type === 'matchday') await matchday(ctx, state);
  if (state.type === 'risultato') await risultato(ctx, state);
}
