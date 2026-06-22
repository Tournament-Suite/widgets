import { useEffect, useRef } from 'react';

const CDN_URL = 'https://cdn.tournamentsuite.com/widgets/v1/ts-widgets.js';

interface TsScheduleProps {
  tournamentId: string;
  apiKey: string;
  theme?: 'dark' | 'light';
  rounds?: number;
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

export function TsSchedule({ tournamentId, apiKey, theme = 'dark', rounds }: TsScheduleProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const el = containerRef.current;

    loadScript().then(() => {
      const ts = (window as unknown as { TournamentSuite: { mount: (el: HTMLElement, o: object) => void } }).TournamentSuite;
      ts.mount(el, { widget: 'schedule', tournament: tournamentId, apiKey, theme, rounds });
    });
  }, [tournamentId, apiKey, theme, rounds]);

  return <div ref={containerRef} />;
}