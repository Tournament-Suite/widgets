const CDN_URL = 'https://cdn.tournamentsuite.com/widgets/v1/ts-widgets.js';

function loadScript(): Promise<void> {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${CDN_URL}"]`)) {
      resolve();
      return;
    }
    const script = document.createElement('script');
    script.src = CDN_URL;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error('Failed to load TournamentSuite widgets script'));
    document.head.appendChild(script);
  });
}

export interface LeaderboardOptions {
  tournament: string;
  apiKey: string;
  theme?: 'dark' | 'light';
  limit?: number;
}

export async function mount(selector: string | HTMLElement, options: LeaderboardOptions): Promise<void> {
  await loadScript();
  const ts = (window as unknown as { TournamentSuite: { mount: (s: string | HTMLElement, o: object) => void } }).TournamentSuite;
  ts.mount(selector, {
    widget: 'leaderboard',
    tournament: options.tournament,
    apiKey: options.apiKey,
    theme: options.theme ?? 'dark',
    limit: options.limit,
  });
}