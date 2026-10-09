import {
  LaunchInputPayload,
  PortfolioSettings,
  SupportedLaunch,
} from '../types/portfolio';
import { DEFAULT_PORTFOLIO_SETTINGS } from '../utils/dateAndUrl';

export interface PortfolioResponse {
  settings: PortfolioSettings;
  launches: SupportedLaunch[];
}

export interface AuthStatusResponse {
  initialized: boolean;
  authenticated: boolean;
}

export const FALLBACK_VERIFIED_LAUNCHES: SupportedLaunch[] = [
  {
    id: 'verified-enia-code',
    name: 'Enia Code',
    productHuntUrl: 'https://www.producthunt.com/products/enia-code',
    ranking: 2,
    votes: 336,
  },
  {
    id: 'verified-storeclaw',
    name: 'StoreClaw',
    productHuntUrl: 'https://www.producthunt.com/products/storeclaw',
    ranking: 1,
    votes: 793,
  },
  {
    id: 'verified-eddie-ai-2-0',
    name: 'Eddie AI 2.0',
    productHuntUrl:
      'https://www.producthunt.com/products/eddie-your-ai-video-editor/launches/eddie-ai-2-0',
    ranking: 3,
    votes: 358,
  },
  {
    id: 'verified-ctruh-studio',
    name: 'Ctruh Studio',
    productHuntUrl: 'https://www.producthunt.com/products/ctruh-studio',
    ranking: 2,
    votes: 364,
  },
  {
    id: 'verified-hey-noah',
    name: 'Hey Noah',
    productHuntUrl: 'https://www.producthunt.com/products/hey-noah',
    ranking: 1,
    votes: 661,
  },
  {
    id: 'verified-ito-ai',
    name: 'Ito AI — Code Review That Runs Code',
    productHuntUrl:
      'https://www.producthunt.com/products/ito-ai-code-review-that-runs-code',
    ranking: 2,
    votes: 446,
  },
  {
    id: 'verified-browseract',
    name: 'BrowserAct',
    productHuntUrl: 'https://www.producthunt.com/products/browseract',
    ranking: 2,
    votes: 285,
  },
  {
    id: 'verified-clears',
    name: 'Clears',
    productHuntUrl: 'https://www.producthunt.com/products/clears?launch=clears',
    ranking: 3,
    votes: 371,
  },
  {
    id: 'verified-supernova-ai',
    name: 'Supernova AI',
    productHuntUrl:
      'https://www.producthunt.com/products/supernova-ai?launch=supernova-6',
    ranking: 2,
    votes: 326,
  },
  {
    id: 'verified-speko',
    name: 'Speko',
    productHuntUrl: 'https://www.producthunt.com/products/speko',
    ranking: 4,
    votes: 274,
  },
  {
    id: 'verified-openui-2',
    name: 'OpenUI 2',
    productHuntUrl: 'https://www.producthunt.com/posts/openui-2',
    ranking: 4,
    votes: 329,
  },
  {
    id: 'verified-your-next-store',
    name: 'Your Next Store',
    productHuntUrl: 'https://www.producthunt.com/posts/your-next-store-5',
    ranking: 4,
    votes: 340,
  },
  {
    id: 'verified-chronicle-2-0',
    name: 'Chronicle 2.0',
    productHuntUrl:
      'https://www.producthunt.com/products/chronicle-6?launch=chronicle-2-0',
    ranking: 2,
    weekRanking: 1,
    votes: 736,
  },
  {
    id: 'verified-morphmind',
    name: 'MorphMind',
    productHuntUrl:
      'https://www.producthunt.com/posts/morphmind-a-steerable-ai-platform',
    ranking: 10,
    votes: 102,
  },
  {
    id: 'verified-zooclaw',
    name: 'ZooClaw',
    productHuntUrl: 'https://www.producthunt.com/products/zooclaw',
    ranking: 2,
    votes: 290,
  },
  {
    id: 'verified-lessie-ai-2',
    name: 'Lessie AI 2',
    productHuntUrl: 'https://www.producthunt.com/posts/lessie-ai-2',
    ranking: 2,
    votes: 406,
  },
  {
    id: 'verified-nativebridge',
    name: 'NativeBridge',
    productHuntUrl: 'https://www.producthunt.com/products/nativebridge-2',
    ranking: 3,
    votes: 246,
  },
  {
    id: 'verified-naptick-ai',
    name: 'Naptick AI',
    productHuntUrl: 'https://www.producthunt.com/posts/naptick-ai',
    ranking: 2,
    votes: 475,
  },
  {
    id: 'verified-huddle01-cloud',
    name: 'Huddle01 Cloud',
    productHuntUrl: 'https://www.producthunt.com/posts/huddle01-cloud-2',
    ranking: 5,
    votes: 314,
  },
  {
    id: 'verified-mom-clock',
    name: 'Mom Clock',
    productHuntUrl: 'https://www.producthunt.com/posts/mom-clock',
    ranking: 1,
    votes: 735,
  },
  {
    id: 'verified-computable-gpu-index',
    name: 'Computable GPU Index (CGI)',
    productHuntUrl:
      'https://www.producthunt.com/posts/computable-gpu-index-cgi',
    ranking: 2,
    votes: 445,
  },
  {
    id: 'verified-brandjet',
    name: 'Brandjet',
    productHuntUrl: 'https://www.producthunt.com/posts/brandjet',
    ranking: 2,
    votes: 278,
  },
  {
    id: 'verified-olostep-2',
    name: 'Olostep 2',
    productHuntUrl: 'https://www.producthunt.com/posts/olostep-2',
    ranking: 3,
    votes: 236,
  },
  {
    id: 'verified-1752vc-pitch-deck-analyzer',
    name: '1752VC Pitch Deck Analyzer',
    productHuntUrl:
      'https://www.producthunt.com/posts/1752vc-pitch-deck-analyzer',
    ranking: 1,
    votes: 400,
  },
  {
    id: 'verified-caddi-3',
    name: 'Caddi 3',
    productHuntUrl: 'https://www.producthunt.com/posts/caddi-3',
    ranking: 2,
    votes: 308,
  },
  {
    id: 'verified-skydive',
    name: 'Skydive',
    productHuntUrl: 'https://www.producthunt.com/posts/skydive',
    ranking: 1,
    votes: 431,
  },
  {
    id: 'verified-irisgo-public-beta',
    name: 'IrisGo Public Beta',
    productHuntUrl: 'https://www.producthunt.com/products/irisgo-public-beta',
    ranking: 1,
    votes: 523,
    needsDateConfirmation: true,
  },
  {
    id: 'verified-rill',
    name: 'Rill',
    productHuntUrl: 'https://www.producthunt.com/products/rill-3',
    ranking: 1,
    votes: 440,
    needsDateConfirmation: true,
  },
  {
    id: 'verified-spira-ai',
    name: 'Spira AI',
    productHuntUrl: 'https://www.producthunt.com/products/spira-ai',
    ranking: 1,
    votes: 510,
    needsDateConfirmation: true,
  },
  {
    id: 'verified-zoowork',
    name: 'ZooWork',
    productHuntUrl: 'https://www.producthunt.com/products/zoowork',
    ranking: 1,
    votes: 324,
    needsDateConfirmation: true,
  },
  {
    id: 'verified-pexo',
    name: 'Pexo',
    productHuntUrl: 'https://www.producthunt.com/products/pexo-2',
    ranking: 1,
    votes: 465,
    needsDateConfirmation: true,
  },
];

function buildAuthHeaders(token: string | null, isJson = false): HeadersInit {
  const headers: Record<string, string> = {};
  if (isJson) {
    headers['Content-Type'] = 'application/json';
  }
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  return headers;
}

export async function fetchPortfolio(): Promise<PortfolioResponse> {
  try {
    const res = await fetch('/api/portfolio');
    const contentType = res.headers.get('content-type') || '';
    if (res.ok && contentType.includes('application/json')) {
      const data = await res.json();
      return {
        settings: data.settings || DEFAULT_PORTFOLIO_SETTINGS,
        launches:
          Array.isArray(data.launches) && data.launches.length > 0
            ? data.launches
            : FALLBACK_VERIFIED_LAUNCHES,
      };
    }
  } catch {
    // Fallback below if static mode
  }
  return {
    settings: DEFAULT_PORTFOLIO_SETTINGS,
    launches: FALLBACK_VERIFIED_LAUNCHES,
  };
}

export async function fetchAuthStatus(
  token: string | null
): Promise<AuthStatusResponse> {
  const res = await fetch('/api/auth/status', {
    headers: buildAuthHeaders(token),
  });
  if (!res.ok) {
    return { initialized: true, authenticated: false };
  }
  const data = await res.json().catch(() => ({}));
  return {
    initialized: Boolean(data.initialized),
    authenticated: Boolean(data.authenticated),
  };
}

export async function authenticateAdmin(
  passcode: string,
  isFirstTimeSetup: boolean
): Promise<{ token: string }> {
  const endpoint = isFirstTimeSetup ? '/api/auth/setup' : '/api/auth/login';
  const res = await fetch(endpoint, {
    method: 'POST',
    headers: buildAuthHeaders(null, true),
    body: JSON.stringify({ passcode }),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok || !data.token) {
    throw new Error(data.error || 'Authentication failed.');
  }
  return { token: data.token };
}

export async function logoutAdmin(token: string | null): Promise<void> {
  if (!token) return;
  await fetch('/api/auth/logout', {
    method: 'POST',
    headers: buildAuthHeaders(token),
  }).catch(() => {});
}

export async function createLaunchRecord(
  token: string | null,
  payload: LaunchInputPayload
): Promise<{ launch: SupportedLaunch; warning?: string }> {
  const res = await fetch('/api/launches', {
    method: 'POST',
    headers: buildAuthHeaders(token, true),
    body: JSON.stringify(payload),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error(data.error || 'Failed to add launch.');
  }
  return { launch: data.launch, warning: data.warning };
}

export async function updateLaunchRecord(
  token: string | null,
  id: string,
  payload: LaunchInputPayload
): Promise<{ launch: SupportedLaunch; warning?: string }> {
  const res = await fetch(`/api/launches/${encodeURIComponent(id)}`, {
    method: 'PUT',
    headers: buildAuthHeaders(token, true),
    body: JSON.stringify(payload),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error(data.error || 'Failed to update launch.');
  }
  return { launch: data.launch, warning: data.warning };
}

export async function deleteLaunchRecord(
  token: string | null,
  id: string
): Promise<void> {
  const res = await fetch(`/api/launches/${encodeURIComponent(id)}`, {
    method: 'DELETE',
    headers: buildAuthHeaders(token),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error(data.error || 'Failed to delete launch.');
  }
}

export async function updatePortfolioSettings(
  token: string | null,
  settings: PortfolioSettings
): Promise<PortfolioSettings> {
  const res = await fetch('/api/settings', {
    method: 'PUT',
    headers: buildAuthHeaders(token, true),
    body: JSON.stringify(settings),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error(data.error || 'Failed to save portfolio settings.');
  }
  return data.settings;
}
