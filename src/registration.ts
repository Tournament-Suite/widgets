import { ensureLoaded } from './_loader';

export interface RegistrationOptions {
  /** Tournament ID */
  tournamentId: string;
  /** Your public API key */
  apiKey: string;
  /** Visual theme. Defaults to 'dark' */
  theme?: 'dark' | 'light';
  /** Locale for date/time formatting. Defaults to browser locale */
  locale?: string;
  /** Redirect URL after successful registration */
  successRedirect?: string;
  /** Show team roster fields. Auto-detected from tournament type if not specified. */
  teamMode?: boolean;
}

/**
 * Mount a tournament registration form widget.
 *
 * @example
 * ```html
 * <div id="registration"></div>
 * <script type="module">
 *   import { mountRegistration } from '@tournamentsuite/widgets';
 *   mountRegistration('#registration', { tournamentId: 'TOURNAMENT_ID', apiKey: 'PUBLIC_API_KEY' });
 * </script>
 * ```
 */
export async function mountRegistration(container: string | HTMLElement, options: RegistrationOptions): Promise<void> {
  await ensureLoaded();
  window.TournamentSuite!.mount(container, { widget: 'registration', ...options });
}

export function unmountRegistration(container: string | HTMLElement): void {
  window.TournamentSuite?.unmount(container);
}