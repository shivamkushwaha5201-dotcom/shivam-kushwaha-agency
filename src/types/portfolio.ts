export interface SupportedLaunch {
  id: string;
  name: string;
  productHuntUrl: string;
  votes: number;
  ranking: number;
  /**
   * Optional weekly ranking (e.g. #1 of the Week for Chronicle 2.0),
   * displayed as a separate metric when present.
   */
  weekRanking?: number;
  /**
   * Optional YYYY-MM-DD launch date used strictly for internal monthly filtering
   * in Recent Launches. Never displayed on public launch cards.
   */
  launchDate?: string;
  /**
   * Flagged true when a launch was submitted for Recent Launches without an
   * explicit calendar date, awaiting actual launch date confirmation.
   */
  needsDateConfirmation?: boolean;
  /**
   * Optional product logo or thumbnail URL / data URI.
   */
  logoUrl?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface PortfolioSettings {
  ownerName: string;
  aboutText: string;
  productHuntProfileUrl: string;
  timeZone: string;
}

export interface LaunchInputPayload {
  name: string;
  productHuntUrl: string;
  votes: number;
  ranking: number;
  weekRanking?: number;
  launchDate?: string;
  needsDateConfirmation?: boolean;
  logoUrl?: string;
}

export type NavSectionId = 'all-launches' | 'recent-launches' | 'about';
