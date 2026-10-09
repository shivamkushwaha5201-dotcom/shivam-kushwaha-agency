import express, { Request, Response, NextFunction } from 'express';
import { createServer as createViteServer } from 'vite';
import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import dotenv from 'dotenv';

dotenv.config();

const PORT = 3000;
const DATA_DIR = path.resolve(process.cwd(), 'data');
const PORTFOLIO_FILE = path.join(DATA_DIR, 'portfolio.json');
const AUTH_FILE = path.join(DATA_DIR, 'admin-auth.json');

export interface LaunchRecord {
  id: string;
  name: string;
  productHuntUrl: string;
  votes: number;
  ranking: number;
  weekRanking?: number;
  /**
   * Optional YYYY-MM-DD internal launch date used strictly for monthly filtering.
   * When omitted, the launch appears in All Supported Launches and is not assumed recent.
   */
  launchDate?: string;
  /**
   * Indicates that a record intended for Recent Launches is missing its actual
   * launch date and requires date confirmation before being classified as recent.
   */
  needsDateConfirmation?: boolean;
  logoUrl?: string;
  createdAt: string;
  updatedAt: string;
}

export interface PortfolioSettings {
  ownerName: string;
  aboutText: string;
  productHuntProfileUrl: string;
  timeZone: string;
}

interface PortfolioDatabase {
  settings: PortfolioSettings;
  launches: LaunchRecord[];
}

interface StoredAdminAuth {
  salt: string;
  hash: string;
  createdAt: string;
}

/**
 * All 31 verified launch records provided by the user (3 initial + 23 added + 5 flagged for Recent Launches date confirmation).
 * No launchDate is invented so they appear in All Supported Launches without
 * falsely appearing in Recent Launches unless an actual current-month date is confirmed.
 */
const VERIFIED_USER_LAUNCHES: Array<{
  id: string;
  name: string;
  productHuntUrl: string;
  ranking: number;
  weekRanking?: number;
  votes: number;
  needsDateConfirmation?: boolean;
}> = [
  // Existing 3 verified launches
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
  // 23 previously added verified launches
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
  // 5 new launches submitted under Recent Launches without an explicit date (flagged for date confirmation)
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

const DEFAULT_DATABASE: PortfolioDatabase = {
  settings: {
    ownerName: 'My Launch Portfolio',
    aboutText:
      'Product Hunt launches I have supported, hunted, and advised from early positioning through launch day.',
    productHuntProfileUrl: 'https://www.producthunt.com/@shivam_kushwaha16',
    timeZone: process.env.PORTFOLIO_TIMEZONE || 'America/Los_Angeles',
  },
  launches: [],
};

// Active server-side admin sessions: token -> expiry timestamp
const activeSessions = new Map<string, number>();
const SESSION_TTL_MS = 1000 * 60 * 60 * 12; // 12 hours

function ensureDataDir() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
}

function writeDatabase(db: PortfolioDatabase): void {
  ensureDataDir();
  const tempFile = `${PORTFOLIO_FILE}.tmp`;
  fs.writeFileSync(tempFile, JSON.stringify(db, null, 2), 'utf-8');
  fs.renameSync(tempFile, PORTFOLIO_FILE);
}

/**
 * Ensures all 31 user-verified launches exist in the database without duplicating
 * existing records. Updates matching records (by ID, URL, or name) in place while
 * preserving all other launch records.
 */
function syncVerifiedLaunches(db: PortfolioDatabase): boolean {
  let modified = false;
  const nowIso = new Date().toISOString();

  for (const verified of VERIFIED_USER_LAUNCHES) {
    const existingIndex = db.launches.findIndex(
      (item) =>
        item.id === verified.id ||
        item.productHuntUrl.toLowerCase() ===
          verified.productHuntUrl.toLowerCase() ||
        item.name.trim().toLowerCase() === verified.name.trim().toLowerCase()
    );

    if (existingIndex !== -1) {
      const current = db.launches[existingIndex];
      const expectedNeedsConfirm = current.launchDate
        ? false
        : Boolean(verified.needsDateConfirmation);

      if (
        current.name !== verified.name ||
        current.productHuntUrl !== verified.productHuntUrl ||
        current.votes !== verified.votes ||
        current.ranking !== verified.ranking ||
        current.weekRanking !== verified.weekRanking ||
        Boolean(current.needsDateConfirmation) !== expectedNeedsConfirm
      ) {
        db.launches[existingIndex] = {
          ...current,
          name: verified.name,
          productHuntUrl: verified.productHuntUrl,
          votes: verified.votes,
          ranking: verified.ranking,
          ...(verified.weekRanking !== undefined
            ? { weekRanking: verified.weekRanking }
            : {}),
          needsDateConfirmation: expectedNeedsConfirm,
          updatedAt: nowIso,
        };
        modified = true;
      }
    } else {
      db.launches.push({
        id: verified.id,
        name: verified.name,
        productHuntUrl: verified.productHuntUrl,
        votes: verified.votes,
        ranking: verified.ranking,
        ...(verified.weekRanking !== undefined
          ? { weekRanking: verified.weekRanking }
          : {}),
        ...(verified.needsDateConfirmation
          ? { needsDateConfirmation: true }
          : {}),
        createdAt: nowIso,
        updatedAt: nowIso,
      });
      modified = true;
    }
  }

  return modified;
}

function readDatabase(): PortfolioDatabase {
  ensureDataDir();
  let db: PortfolioDatabase;

  if (!fs.existsSync(PORTFOLIO_FILE)) {
    db = structuredClone(DEFAULT_DATABASE);
    syncVerifiedLaunches(db);
    writeDatabase(db);
    return db;
  }

  try {
    const raw = fs.readFileSync(PORTFOLIO_FILE, 'utf-8');
    const parsed = JSON.parse(raw) as Partial<PortfolioDatabase>;
    db = {
      settings: {
        ...DEFAULT_DATABASE.settings,
        ...(parsed.settings || {}),
      },
      launches: Array.isArray(parsed.launches) ? parsed.launches : [],
    };
    return db;
  } catch (err) {
    console.error('Failed to read portfolio database:', err);
    throw new Error('Database read error');
  }
}

function initializeDatabaseWithVerifiedLaunches(): void {
  try {
    const db = readDatabase();
    if (syncVerifiedLaunches(db)) {
      writeDatabase(db);
    }
  } catch (err) {
    console.error('Failed to initialize verified launches:', err);
  }
}

function isAuthInitialized(): boolean {
  if (
    process.env.ADMIN_PASSCODE &&
    process.env.ADMIN_PASSCODE.trim().length > 0
  ) {
    return true;
  }
  return fs.existsSync(AUTH_FILE);
}

function verifyPasscode(passcode: string): boolean {
  if (
    process.env.ADMIN_PASSCODE &&
    process.env.ADMIN_PASSCODE.trim().length > 0
  ) {
    const expected = Buffer.from(process.env.ADMIN_PASSCODE.trim());
    const provided = Buffer.from(passcode.trim());
    if (expected.length !== provided.length) return false;
    return crypto.timingSafeEqual(expected, provided);
  }

  if (!fs.existsSync(AUTH_FILE)) return false;
  try {
    const stored = JSON.parse(
      fs.readFileSync(AUTH_FILE, 'utf-8')
    ) as StoredAdminAuth;
    const derived = crypto
      .scryptSync(passcode.trim(), stored.salt, 64)
      .toString('hex');
    const expectedBuf = Buffer.from(stored.hash, 'hex');
    const derivedBuf = Buffer.from(derived, 'hex');
    if (expectedBuf.length !== derivedBuf.length) return false;
    return crypto.timingSafeEqual(expectedBuf, derivedBuf);
  } catch {
    return false;
  }
}

function initializePasscode(passcode: string): void {
  ensureDataDir();
  const salt = crypto.randomBytes(16).toString('hex');
  const hash = crypto.scryptSync(passcode.trim(), salt, 64).toString('hex');
  const payload: StoredAdminAuth = {
    salt,
    hash,
    createdAt: new Date().toISOString(),
  };
  fs.writeFileSync(AUTH_FILE, JSON.stringify(payload, null, 2), 'utf-8');
}

function createSessionToken(): string {
  const token = crypto.randomBytes(32).toString('hex');
  activeSessions.set(token, Date.now() + SESSION_TTL_MS);
  return token;
}

function isValidSessionToken(token: string | undefined): boolean {
  if (!token) return false;
  const expiry = activeSessions.get(token);
  if (!expiry) return false;
  if (Date.now() > expiry) {
    activeSessions.delete(token);
    return false;
  }
  return true;
}

function extractBearerToken(req: Request): string | undefined {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) return undefined;
  return authHeader.slice('Bearer '.length).trim();
}

function requireAdminAuth(req: Request, res: Response, next: NextFunction) {
  const token = extractBearerToken(req);
  if (!isValidSessionToken(token)) {
    res.status(401).json({
      error: 'Unauthorized. Please sign in as portfolio owner to modify data.',
    });
    return;
  }
  next();
}

export interface UrlValidationResult {
  valid: boolean;
  error?: string;
  isProductHuntDomain: boolean;
  warning?: string;
}

function validateLaunchUrl(rawUrl: string): UrlValidationResult {
  if (!rawUrl || typeof rawUrl !== 'string' || !rawUrl.trim()) {
    return {
      valid: false,
      error: 'Product Hunt launch URL is required.',
      isProductHuntDomain: false,
    };
  }

  let parsed: URL;
  try {
    parsed = new URL(rawUrl.trim());
  } catch {
    return {
      valid: false,
      error:
        'Malformed URL. Please enter a complete URL starting with https://',
      isProductHuntDomain: false,
    };
  }

  if (parsed.protocol !== 'http:' && parsed.protocol !== 'https:') {
    return {
      valid: false,
      error: 'URL must use http:// or https:// protocol.',
      isProductHuntDomain: false,
    };
  }

  const host = parsed.hostname.toLowerCase();
  const isPh =
    host === 'producthunt.com' ||
    host === 'www.producthunt.com' ||
    host.endsWith('.producthunt.com');

  const cleanPath = parsed.pathname.replace(/\/+$/, '');
  if (isPh && cleanPath === '') {
    return {
      valid: false,
      error:
        'Please provide a specific Product Hunt launch page URL (e.g. https://www.producthunt.com/products/your-product), not the generic Product Hunt homepage.',
      isProductHuntDomain: true,
    };
  }

  if (!isPh) {
    return {
      valid: true,
      isProductHuntDomain: false,
      warning: `Warning: "${parsed.hostname}" is not a standard producthunt.com domain.`,
    };
  }

  return {
    valid: true,
    isProductHuntDomain: true,
  };
}

function validateLaunchPayload(
  body: Record<string, unknown>,
  existingLaunches: LaunchRecord[],
  editingId?: string
): {
  valid: boolean;
  error?: string;
  warning?: string;
  sanitized?: Omit<LaunchRecord, 'id' | 'createdAt' | 'updatedAt'>;
} {
  const name = typeof body.name === 'string' ? body.name.trim() : '';
  if (!name) {
    return { valid: false, error: 'Product name is required.' };
  }
  if (name.length > 120) {
    return {
      valid: false,
      error: 'Product name must be 120 characters or fewer.',
    };
  }

  const productHuntUrl =
    typeof body.productHuntUrl === 'string' ? body.productHuntUrl.trim() : '';
  const urlCheck = validateLaunchUrl(productHuntUrl);
  if (!urlCheck.valid) {
    return { valid: false, error: urlCheck.error };
  }

  const duplicateUrlLaunch = existingLaunches.find(
    (item) =>
      item.id !== editingId &&
      item.productHuntUrl.toLowerCase() === productHuntUrl.toLowerCase()
  );
  if (duplicateUrlLaunch) {
    return {
      valid: false,
      error: `This URL is already used by "${duplicateUrlLaunch.name}". Every launch must have its own unique Product Hunt URL.`,
    };
  }

  const rawVotes = body.votes;
  if (rawVotes === undefined || rawVotes === null || rawVotes === '') {
    return { valid: false, error: 'Total votes is required.' };
  }
  const votes = Number(rawVotes);
  if (!Number.isInteger(votes) || votes < 0) {
    return {
      valid: false,
      error: 'Total votes must be a whole number (0 or greater).',
    };
  }

  const rawRanking = body.ranking;
  if (rawRanking === undefined || rawRanking === null || rawRanking === '') {
    return { valid: false, error: 'Final ranking is required.' };
  }
  const parsedRanking =
    typeof rawRanking === 'string'
      ? Number(rawRanking.replace(/^#/, '').trim())
      : Number(rawRanking);

  if (!Number.isInteger(parsedRanking) || parsedRanking < 1) {
    return {
      valid: false,
      error: 'Final ranking must be a positive integer (e.g. 1 for #1).',
    };
  }

  const rawWeekRanking = body.weekRanking;
  let parsedWeekRanking: number | undefined = undefined;
  if (
    rawWeekRanking !== undefined &&
    rawWeekRanking !== null &&
    rawWeekRanking !== ''
  ) {
    parsedWeekRanking =
      typeof rawWeekRanking === 'string'
        ? Number(rawWeekRanking.replace(/^#/, '').trim())
        : Number(rawWeekRanking);

    if (!Number.isInteger(parsedWeekRanking) || parsedWeekRanking < 1) {
      return {
        valid: false,
        error: 'Week ranking must be a positive integer when provided.',
      };
    }
  }

  const rawLaunchDate =
    typeof body.launchDate === 'string' ? body.launchDate.trim() : '';
  let launchDate: string | undefined = undefined;
  if (rawLaunchDate !== '') {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(rawLaunchDate)) {
      return {
        valid: false,
        error:
          'Internal launch date must be in YYYY-MM-DD format when provided.',
      };
    }
    const parsedDate = new Date(`${rawLaunchDate}T00:00:00Z`);
    if (Number.isNaN(parsedDate.getTime())) {
      return { valid: false, error: 'Invalid calendar date for launch date.' };
    }
    launchDate = rawLaunchDate;
  }

  const logoUrl =
    typeof body.logoUrl === 'string' && body.logoUrl.trim() !== ''
      ? body.logoUrl.trim()
      : undefined;

  if (logoUrl && !logoUrl.startsWith('data:image/')) {
    try {
      const parsedLogo = new URL(logoUrl);
      if (parsedLogo.protocol !== 'http:' && parsedLogo.protocol !== 'https:') {
        return {
          valid: false,
          error:
            'Optional logo URL must be a valid http(s) URL or uploaded image.',
        };
      }
    } catch {
      return {
        valid: false,
        error: 'Optional logo URL is malformed.',
      };
    }
  }

  return {
    valid: true,
    warning: urlCheck.warning,
    sanitized: {
      name,
      productHuntUrl,
      votes,
      ranking: parsedRanking,
      weekRanking: parsedWeekRanking,
      launchDate,
      needsDateConfirmation: launchDate
        ? false
        : Boolean(body.needsDateConfirmation),
      logoUrl,
    },
  };
}

async function startServer() {
  // Ensure all 31 user-verified launches are present on startup without duplicating
  initializeDatabaseWithVerifiedLaunches();

  const app = express();
  app.use(express.json({ limit: '2mb' }));

  // --- API ROUTES ---

  app.get('/api/portfolio', (_req: Request, res: Response) => {
    try {
      const db = readDatabase();
      res.json({
        settings: db.settings,
        launches: db.launches,
      });
    } catch (err) {
      res.status(500).json({
        error:
          err instanceof Error
            ? err.message
            : 'Failed to load portfolio database.',
      });
    }
  });

  app.get('/api/auth/status', (req: Request, res: Response) => {
    const token = extractBearerToken(req);
    res.json({
      initialized: isAuthInitialized(),
      authenticated: isValidSessionToken(token),
    });
  });

  app.post('/api/auth/setup', (req: Request, res: Response) => {
    if (isAuthInitialized()) {
      res.status(400).json({
        error: 'Admin passcode is already configured. Please sign in.',
      });
      return;
    }

    const passcode =
      typeof req.body?.passcode === 'string' ? req.body.passcode.trim() : '';
    if (passcode.length < 4) {
      res.status(400).json({
        error: 'Passcode must be at least 4 characters long.',
      });
      return;
    }

    initializePasscode(passcode);
    const token = createSessionToken();
    res.json({
      authenticated: true,
      token,
      message: 'Admin passcode configured and session started.',
    });
  });

  app.post('/api/auth/login', (req: Request, res: Response) => {
    const passcode =
      typeof req.body?.passcode === 'string' ? req.body.passcode.trim() : '';
    if (!passcode) {
      res.status(400).json({ error: 'Please enter your admin passcode.' });
      return;
    }

    if (!verifyPasscode(passcode)) {
      res.status(401).json({ error: 'Invalid admin passcode.' });
      return;
    }

    const token = createSessionToken();
    res.json({
      authenticated: true,
      token,
    });
  });

  app.post('/api/auth/logout', (req: Request, res: Response) => {
    const token = extractBearerToken(req);
    if (token) {
      activeSessions.delete(token);
    }
    res.json({ authenticated: false });
  });

  // Create or Upsert Launch (Protected)
  app.post('/api/launches', requireAdminAuth, (req: Request, res: Response) => {
    try {
      const db = readDatabase();
      const rawUrl =
        typeof req.body?.productHuntUrl === 'string'
          ? req.body.productHuntUrl.trim()
          : '';
      const rawName =
        typeof req.body?.name === 'string' ? req.body.name.trim() : '';

      const existingMatch = db.launches.find(
        (item) =>
          (rawUrl &&
            item.productHuntUrl.toLowerCase() === rawUrl.toLowerCase()) ||
          (rawName && item.name.toLowerCase() === rawName.toLowerCase())
      );

      const validation = validateLaunchPayload(
        req.body || {},
        db.launches,
        existingMatch?.id
      );

      if (!validation.valid || !validation.sanitized) {
        res.status(400).json({ error: validation.error });
        return;
      }

      const nowIso = new Date().toISOString();

      if (existingMatch) {
        const updatedRecord: LaunchRecord = {
          ...existingMatch,
          ...validation.sanitized,
          updatedAt: nowIso,
        };
        const idx = db.launches.findIndex((l) => l.id === existingMatch.id);
        db.launches[idx] = updatedRecord;
        writeDatabase(db);
        res.status(200).json({
          launch: updatedRecord,
          warning: validation.warning,
        });
        return;
      }

      const newRecord: LaunchRecord = {
        id: crypto.randomUUID(),
        ...validation.sanitized,
        createdAt: nowIso,
        updatedAt: nowIso,
      };

      db.launches.push(newRecord);
      writeDatabase(db);

      res.status(201).json({
        launch: newRecord,
        warning: validation.warning,
      });
    } catch (err) {
      res.status(500).json({
        error:
          err instanceof Error
            ? err.message
            : 'Failed to save launch to database.',
      });
    }
  });

  // Update an existing launch (Protected)
  app.put(
    '/api/launches/:id',
    requireAdminAuth,
    (req: Request, res: Response) => {
      try {
        const { id } = req.params;
        const db = readDatabase();
        const index = db.launches.findIndex((item) => item.id === id);

        if (index === -1) {
          res.status(404).json({ error: 'Launch not found.' });
          return;
        }

        const validation = validateLaunchPayload(
          req.body || {},
          db.launches,
          id
        );
        if (!validation.valid || !validation.sanitized) {
          res.status(400).json({ error: validation.error });
          return;
        }

        const updatedRecord: LaunchRecord = {
          ...db.launches[index],
          ...validation.sanitized,
          updatedAt: new Date().toISOString(),
        };

        db.launches[index] = updatedRecord;
        writeDatabase(db);

        res.json({
          launch: updatedRecord,
          warning: validation.warning,
        });
      } catch (err) {
        res.status(500).json({
          error:
            err instanceof Error
              ? err.message
              : 'Failed to update launch in database.',
        });
      }
    }
  );

  // Delete a launch (Protected)
  app.delete(
    '/api/launches/:id',
    requireAdminAuth,
    (req: Request, res: Response) => {
      try {
        const { id } = req.params;
        const db = readDatabase();
        const exists = db.launches.some((item) => item.id === id);
        if (!exists) {
          res.status(404).json({ error: 'Launch not found.' });
          return;
        }

        db.launches = db.launches.filter((item) => item.id !== id);
        writeDatabase(db);
        res.json({ deletedId: id });
      } catch (err) {
        res.status(500).json({
          error:
            err instanceof Error
              ? err.message
              : 'Failed to delete launch from database.',
        });
      }
    }
  );

  // Update portfolio settings & timezone (Protected)
  app.put('/api/settings', requireAdminAuth, (req: Request, res: Response) => {
    try {
      const db = readDatabase();
      const ownerName =
        typeof req.body?.ownerName === 'string'
          ? req.body.ownerName.trim()
          : '';
      const aboutText =
        typeof req.body?.aboutText === 'string'
          ? req.body.aboutText.trim()
          : '';
      const productHuntProfileUrl =
        typeof req.body?.productHuntProfileUrl === 'string'
          ? req.body.productHuntProfileUrl.trim()
          : '';
      const timeZone =
        typeof req.body?.timeZone === 'string' && req.body.timeZone.trim()
          ? req.body.timeZone.trim()
          : 'America/Los_Angeles';

      if (!ownerName) {
        res.status(400).json({ error: 'Portfolio name cannot be empty.' });
        return;
      }

      try {
        Intl.DateTimeFormat(undefined, { timeZone });
      } catch {
        res.status(400).json({ error: `Invalid time zone: ${timeZone}` });
        return;
      }

      db.settings = {
        ownerName,
        aboutText,
        productHuntProfileUrl:
          productHuntProfileUrl || 'https://www.producthunt.com',
        timeZone,
      };

      writeDatabase(db);
      res.json({ settings: db.settings });
    } catch (err) {
      res.status(500).json({
        error:
          err instanceof Error
            ? err.message
            : 'Failed to save portfolio settings.',
      });
    }
  });

  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req: Request, res: Response) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
