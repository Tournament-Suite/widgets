import { useEffect, useRef } from 'react';

const CDN_URL = 'https://cdn.tournamentsuite.com/widgets/v1/ts-widgets.js';

interface TsLeaderboardProps {
  tournamentId: string;
  apiKey: string;
  theme?: 'dark' | 'light';
  limit?: number;
}

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

export function TsLeaderboard({ tournamentId, apiKey, theme = 'dark', limit }: TsLeaderboardProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const el = containerRef.current;

    loadScript().then(() => {
      const ts = (window as unknown as { TournamentSuite: { mount: (el: HTMLElement, o: object) => void } }).TournamentSuite;
      ts.mount(el, { widget: 'leaderboard', tournament: tournamentId, apiKey, theme, limit });
    });
  }, [tournamentId, apiKey, theme, limit]);

  return <div ref={containerRef} />;
}