import { useEffect, useState } from 'react';

// Minimal hash router: "#/education" etc. are pages, plain "#about" stays an in-page anchor
// on the home page. Hash routing works on any static host without extra rewrite config.
export type Route = '/' | '/education' | '/certifications' | '/volunteer';

const PAGES: Route[] = ['/education', '/certifications', '/volunteer'];

export function routeFromHash(hash: string): Route {
  if (hash.startsWith('#/')) {
    const path = hash.slice(1) as Route;
    if (PAGES.includes(path)) return path;
  }
  return '/';
}

export function useHash(): string {
  const [hash, setHash] = useState(() => window.location.hash);

  useEffect(() => {
    const onChange = () => setHash(window.location.hash);
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);

  return hash;
}
