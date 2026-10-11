import { useSyncExternalStore } from 'react';

// Minimal path router: "/education" etc. are pages, "#about" stays an in-page anchor on the home page.
// Deep links rely on the SPA rewrite in vercel.json (Vite's dev/preview servers already fall back to index.html).
export type Route = '/' | '/education' | '/certifications' | '/volunteer';

const ROUTES: Route[] = ['/', '/education', '/certifications', '/volunteer'];

function asRoute(pathname: string): Route | null {
  const path = pathname.replace(/\/+$/, '') || '/';
  return ROUTES.includes(path as Route) ? (path as Route) : null;
}

// Tidy the address bar: old hash-route links ("/#/education", "/#/") move to real paths,
// and trailing slashes or unknown paths fall back to home. Runs on load and before any other hashchange listener.
function normalizeUrl() {
  const { pathname, search, hash } = window.location;
  let path: Route = asRoute(pathname) ?? '/';
  let nextHash = hash;
  if (hash.startsWith('#/')) {
    path = asRoute(hash.slice(1)) ?? '/';
    nextHash = '';
  }
  const next = path + search + nextHash;
  if (next !== pathname + search + hash) history.replaceState(history.state, '', next);
}
normalizeUrl();
window.addEventListener('hashchange', normalizeUrl);

const listeners = new Set<() => void>();

function subscribe(onChange: () => void) {
  listeners.add(onChange);
  window.addEventListener('popstate', onChange);
  window.addEventListener('hashchange', onChange);
  return () => {
    listeners.delete(onChange);
    window.removeEventListener('popstate', onChange);
    window.removeEventListener('hashchange', onChange);
  };
}

const getSnapshot = () => window.location.pathname + window.location.hash;

export function useLocation(): { route: Route; hash: string } {
  const loc = useSyncExternalStore(subscribe, getSnapshot);
  const i = loc.indexOf('#');
  const pathname = i === -1 ? loc : loc.slice(0, i);
  return { route: asRoute(pathname) ?? '/', hash: i === -1 ? '' : loc.slice(i) };
}

// Scroll to the "#id" target, or to the very top when there is no hash.
export function scrollToHash(hash: string, behavior: ScrollBehavior) {
  const el = hash.length > 1 ? document.getElementById(decodeURIComponent(hash.slice(1))) : null;
  if (el) el.scrollIntoView({ behavior });
  else window.scrollTo({ top: 0, behavior });
}

export function navigate(to: string) {
  const url = new URL(to, window.location.href);
  const next = url.pathname + url.hash;
  if (next === getSnapshot()) {
    // Already here (e.g. Home clicked while on "/"): no new history entry, just scroll back to the target
    scrollToHash(url.hash, 'smooth');
    return;
  }
  history.pushState(null, '', next);
  listeners.forEach((l) => l());
}

// Route plain left-clicks on internal links through navigate(), so pages switch without a reload.
// New-tab clicks, target="_blank", downloads and files like the resume PDF are left to the browser.
export function interceptLinkClicks() {
  const onClick = (e: MouseEvent) => {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    const a = (e.target as Element | null)?.closest?.('a');
    if (!a || (a.target && a.target !== '_self') || a.hasAttribute('download')) return;
    const url = new URL(a.href, window.location.href);
    if (url.origin !== window.location.origin || !asRoute(url.pathname)) return;
    e.preventDefault();
    navigate(url.pathname + url.hash);
  };
  document.addEventListener('click', onClick);
  return () => document.removeEventListener('click', onClick);
}
