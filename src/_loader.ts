// Internal CDN loader — not part of public API
const CDN_URL = 'https://cdn.tournamentsuite.com/widgets/v1/ts-widgets.js';

declare global {
  interface Window {
    TournamentSuite?: {
      mount(container: string | HTMLElement, options: Record<string, unknown>): void;
      unmount(container: string | HTMLElement): void;
    };
    _tsSdkLoading?: Promise<void>;
  }
}

export function ensureLoaded(): Promise<void> {
  if (typeof window === 'undefined') return Promise.reject(new Error('widgets require a browser environment'));
  if (window.TournamentSuite) return Promise.resolve();
  if (window._tsSdkLoading) return window._tsSdkLoading;

  window._tsSdkLoading = new Promise<void>((resolve, reject) => {
    const existing = document.querySelector(`script[src="${CDN_URL}"]`);
    if (existing) {
      existing.addEventListener('load', () => resolve());
      return;
    }
    const script = document.createElement('script');
    script.src = CDN_URL;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Failed to load Tournament Suite widget script from ${CDN_URL}`));
    document.head.appendChild(script);
  });

  return window._tsSdkLoading;
}