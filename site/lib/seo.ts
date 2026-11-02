export const SITE_URL = 'https://neronebasket.github.io';

export function absoluteSiteUrl(path = '/') {
  if (path === '/') return `${SITE_URL}/`;
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}
