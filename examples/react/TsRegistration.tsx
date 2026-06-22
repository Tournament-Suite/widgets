import { useEffect, useRef } from 'react';

const CDN_URL = 'https://cdn.tournamentsuite.com/widgets/v1/ts-widgets.js';

interface TsRegistrationProps {
  tournamentId: string;
  apiKey: string;
  theme?: 'dark' | 'light';
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

export function TsRegistration({ tournamentId, apiKey, theme = 'dark' }: TsRegistrationProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const el = containerRef.current;

    loadScript().then(() => {
      const ts = (window as unknown as { TournamentSuite: { mount: (el: HTMLElement, o: object) => void } }).TournamentSuite;
      ts.mount(el, { widget: 'registration', tournament: tournamentId, apiKey, theme });
    });
  }, [tournamentId, apiKey, theme]);

  return <div ref={containerRef} />;
}