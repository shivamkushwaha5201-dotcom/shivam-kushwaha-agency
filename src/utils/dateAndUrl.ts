import { PortfolioSettings, SupportedLaunch } from '../types/portfolio';

export const DEFAULT_PORTFOLIO_SETTINGS: PortfolioSettings = {
  ownerName: 'My Launch Portfolio',
  aboutText:
    'Product Hunt launches I have supported, hunted, and advised from early positioning through launch day.',
  productHuntProfileUrl: 'https://www.producthunt.com/@shivam_kushwaha16',
  timeZone: 'America/Los_Angeles',
};

export const SUPPORTED_TIMEZONES = [
  {
    value: 'America/Los_Angeles',
    label: 'Pacific Time — Product Hunt HQ (America/Los_Angeles)',
  },
  { value: 'America/New_York', label: 'Eastern Time (America/New_York)' },
  { value: 'UTC', label: 'Coordinated Universal Time (UTC)' },
  { value: 'Europe/London', label: 'London (Europe/London)' },
  { value: 'Europe/Berlin', label: 'Central European Time (Europe/Berlin)' },
  { value: 'Asia/Kolkata', label: 'India Standard Time (Asia/Kolkata)' },
  { value: 'Asia/Tokyo', label: 'Japan Standard Time (Asia/Tokyo)' },
];

/**
 * Returns the current { year, month } (month 1..12) in the configured IANA time zone.
 */
export function getCurrentYearMonthInTimeZone(timeZone: string): {
  year: number;
  month: number;
} {
  try {
    const formatter = new Intl.DateTimeFormat('en-CA', {
      timeZone: timeZone || 'America/Los_Angeles',
      year: 'numeric',
      month: '2-digit',
    });
    const parts = formatter.formatToParts(new Date());
    const yearPart = parts.find((p) => p.type === 'year')?.value;
    const monthPart = parts.find((p) => p.type === 'month')?.value;
    const year = yearPart ? parseInt(yearPart, 10) : new Date().getFullYear();
    const month = monthPart
      ? parseInt(monthPart, 10)
      : new Date().getMonth() + 1;
    return { year, month };
  } catch {
    const now = new Date();
    return { year: now.getFullYear(), month: now.getMonth() + 1 };
  }
}

/**
 * Returns today's date string in YYYY-MM-DD in the configured time zone.
 */
export function getTodayIsoInTimeZone(timeZone: string): string {
  try {
    const formatter = new Intl.DateTimeFormat('en-CA', {
      timeZone: timeZone || 'America/Los_Angeles',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    });
    const parts = formatter.formatToParts(new Date());
    const y = parts.find((p) => p.type === 'year')?.value;
    const m = parts.find((p) => p.type === 'month')?.value;
    const d = parts.find((p) => p.type === 'day')?.value;
    if (y && m && d) return `${y}-${m}-${d}`;
  } catch {
    // fallback to UTC ISO date
  }
  return new Date().toISOString().slice(0, 10);
}

/**
 * Determines whether a stored YYYY-MM-DD launchDate is present and falls within
 * the current calendar month and year in the configured time zone.
 * If no launchDate is provided, returns false (never assumes a launch is recent).
 */
export function isLaunchInCurrentMonth(
  launchDate: string | undefined,
  timeZone: string
): boolean {
  if (!launchDate || typeof launchDate !== 'string') return false;
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(launchDate.trim());
  if (!match) return false;

  const launchYear = parseInt(match[1], 10);
  const launchMonth = parseInt(match[2], 10);

  const { year: currentYear, month: currentMonth } =
    getCurrentYearMonthInTimeZone(timeZone);

  return launchYear === currentYear && launchMonth === currentMonth;
}

export interface ClientUrlValidation {
  valid: boolean;
  error?: string;
  warning?: string;
  isProductHuntDomain: boolean;
}

/**
 * Validates a launch URL before saving.
 * Rejects malformed URLs, generic Product Hunt homepages, and duplicate URLs.
 * Warns if the URL is not hosted on producthunt.com.
 */
export function validateProductHuntUrl(
  rawUrl: string,
  existingLaunches: SupportedLaunch[],
  editingId?: string
): ClientUrlValidation {
  const trimmed = rawUrl.trim();
  if (!trimmed) {
    return {
      valid: false,
      error: 'Product Hunt launch URL is required.',
      isProductHuntDomain: false,
    };
  }

  let parsed: URL;
  try {
    parsed = new URL(trimmed);
  } catch {
    return {
      valid: false,
      error: 'Malformed URL. Enter a full web address starting with https://',
      isProductHuntDomain: false,
    };
  }

  if (parsed.protocol !== 'http:' && parsed.protocol !== 'https:') {
    return {
      valid: false,
      error: 'URL must start with https:// or http://',
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
        'Cannot link to the generic Product Hunt homepage. Please enter the specific launch page URL (e.g. https://www.producthunt.com/products/product-name).',
      isProductHuntDomain: true,
    };
  }

  const duplicate = existingLaunches.find(
    (item) =>
      item.id !== editingId &&
      item.productHuntUrl.toLowerCase() === trimmed.toLowerCase()
  );

  if (duplicate) {
    return {
      valid: false,
      error: `This URL is already assigned to "${duplicate.name}". Every launch must have its own unique URL.`,
      isProductHuntDomain: isPh,
    };
  }

  if (!isPh) {
    return {
      valid: true,
      isProductHuntDomain: false,
      warning: `Domain notice: "${parsed.hostname}" is not from producthunt.com. Confirm below that this is the intended launch page before saving.`,
    };
  }

  return {
    valid: true,
    isProductHuntDomain: true,
  };
}
