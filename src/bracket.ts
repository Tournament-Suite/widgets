import { ensureLoaded } from './_loader';

export interface BracketOptions {
  /** Tournament ID to display */
  tournamentId: string;
  /** Your public API key */
  apiKey: string;
  /** Visual theme. Defaults to 'dark' */
  theme?: 'dark' | 'light';
  /** Locale for date/time formatting. Defaults to browser locale */
  locale?: string;
  /** Show third-place match. Defaults to true */
  showThirdPlace?: boolean;
  /** Auto-refresh interval in milliseconds. 0 = disabled */
  refreshInterval?: number;
}

/**
 * Mount a live bracket widget into a container element.
 *
 * @example
 * ```html
 * <div id="bracket"></div>
 * <script type="module">
 *   import { mountBracket } from '@tournamentsuite/widgets';
 *   mountBracket('#bracket', { tournamentId: 'TOURNAMENT_ID', apiKey: 'PUBLIC_API_KEY' });
 * </script>
 * ```
 */
export async function mountBracket(container: string | HTMLElement, options: BracketOptions): Promise<void> {
  await ensureLoaded();
  window.TournamentSuite!.mount(container, { widget: 'bracket', ...options });
}

/**
 * Unmount a bracket widget and clean up listeners.
 */
export function unmountBracket(container: string | HTMLElement): void {
  window.TournamentSuite?.unmount(container);
}