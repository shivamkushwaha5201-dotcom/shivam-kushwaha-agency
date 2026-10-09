import React, { useState, useMemo, useEffect, useCallback } from 'react';
import { AlertCircle, RefreshCw } from 'lucide-react';
import {
  LaunchInputPayload,
  NavSectionId,
  PortfolioSettings,
  SupportedLaunch,
} from '../types/portfolio';
import {
  DEFAULT_PORTFOLIO_SETTINGS,
  isLaunchInCurrentMonth,
} from '../utils/dateAndUrl';
import {
  authenticateAdmin,
  createLaunchRecord,
  deleteLaunchRecord,
  fetchAuthStatus,
  fetchPortfolio,
  logoutAdmin,
  updateLaunchRecord,
  updatePortfolioSettings,
} from '../services/portfolioApi';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AllLaunchesSection } from './components/AllLaunchesSection';
import { RecentLaunchesSection } from './components/RecentLaunchesSection';
import { AboutSection } from './components/AboutSection';
import { AdminForm } from './components/AdminForm';
import { Footer } from './components/Footer';
import { SEOHead } from '../components/SEOHead';

const SESSION_TOKEN_STORAGE_KEY = 'ph_portfolio_admin_session_token';

export function PortfolioApp() {
  const [launches, setLaunches] = useState<SupportedLaunch[]>([]);
  const [settings, setSettings] = useState<PortfolioSettings>(
    DEFAULT_PORTFOLIO_SETTINGS
  );

  // Loading & error states
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [loadError, setLoadError] = useState<string | null>(null);

  // Auth states
  const [sessionToken, setSessionToken] = useState<string | null>(() => {
    try {
      return sessionStorage.getItem(SESSION_TOKEN_STORAGE_KEY);
    } catch {
      return null;
    }
  });
  const [authInitialized, setAuthInitialized] = useState<boolean>(true);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  // Navigation & Modal states
  const [activeNav, setActiveNav] = useState<NavSectionId>('all-launches');
  const [isAdminModalOpen, setIsAdminModalOpen] = useState<boolean>(false);
  const [editingLaunch, setEditingLaunch] = useState<SupportedLaunch | null>(
    null
  );
  const [deletingLaunch, setDeletingLaunch] = useState<SupportedLaunch | null>(
    null
  );

  // Minute tick so automatic monthly filtering stays accurate across month boundaries
  const [clockTick, setClockTick] = useState<number>(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
    const interval = setInterval(() => {
      setClockTick((prev) => prev + 1);
    }, 60_000);
    return () => clearInterval(interval);
  }, []);

  const loadPortfolioData = useCallback(async () => {
    setIsLoading(true);
    setLoadError(null);
    try {
      const data = await fetchPortfolio();
      setLaunches(data.launches);
      if (data.settings) {
        setSettings((prev) => ({ ...prev, ...data.settings }));
      }
    } catch (err) {
      setLoadError(
        err instanceof Error
          ? err.message
          : 'Unable to load portfolio launches from the server.'
      );
    } finally {
      setIsLoading(false);
    }
  }, []);

  const verifyAuth = useCallback(async (token: string | null) => {
    try {
      const status = await fetchAuthStatus(token);
      setAuthInitialized(status.initialized);
      setIsAuthenticated(status.authenticated);
      if (!status.authenticated && token) {
        sessionStorage.removeItem(SESSION_TOKEN_STORAGE_KEY);
        setSessionToken(null);
      }
    } catch {
      // Keep unauthenticated on network failure
    }
  }, []);

  useEffect(() => {
    loadPortfolioData();
    verifyAuth(sessionToken);
  }, [loadPortfolioData, verifyAuth, sessionToken]);

  // Allow owner to open the Admin sign-in modal via #admin URL hash
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#admin') {
        setIsAdminModalOpen(true);
      }
    };
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Automatically filter launches belonging to the current calendar month & year in the configured time zone
  const recentLaunches = useMemo(() => {
    void clockTick;
    return launches.filter((launch) =>
      isLaunchInCurrentMonth(launch.launchDate, settings.timeZone)
    );
  }, [launches, settings.timeZone, clockTick]);

  // Launches flagged as needing actual launch date confirmation before being classified as recent
  const pendingConfirmationLaunches = useMemo(() => {
    return launches.filter(
      (launch) => Boolean(launch.needsDateConfirmation) && !launch.launchDate
    );
  }, [launches]);

  const handleNavigate = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: NavSectionId
  ) => {
    e.preventDefault();
    setActiveNav(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleLogin = async (passcode: string, isSetup: boolean) => {
    const { token } = await authenticateAdmin(passcode, isSetup);
    sessionStorage.setItem(SESSION_TOKEN_STORAGE_KEY, token);
    setSessionToken(token);
    setAuthInitialized(true);
    setIsAuthenticated(true);
  };

  const handleLogout = async () => {
    await logoutAdmin(sessionToken);
    sessionStorage.removeItem(SESSION_TOKEN_STORAGE_KEY);
    setSessionToken(null);
    setIsAuthenticated(false);
    setEditingLaunch(null);
    setDeletingLaunch(null);
    setIsAdminModalOpen(false);
  };

  const handleCreateLaunch = async (payload: LaunchInputPayload) => {
    const res = await createLaunchRecord(sessionToken, payload);
    await loadPortfolioData();
    return { warning: res.warning };
  };

  const handleUpdateLaunch = async (id: string, payload: LaunchInputPayload) => {
    const res = await updateLaunchRecord(sessionToken, id, payload);
    await loadPortfolioData();
    return { warning: res.warning };
  };

  const handleDeleteLaunch = async (id: string) => {
    await deleteLaunchRecord(sessionToken, id);
    await loadPortfolioData();
  };

  const handleSaveSettings = async (newSettings: PortfolioSettings) => {
    const updated = await updatePortfolioSettings(sessionToken, newSettings);
    setSettings(updated);
  };

  const handleOpenAdminNew = () => {
    setEditingLaunch(null);
    setDeletingLaunch(null);
    setIsAdminModalOpen(true);
  };

  const handleEditLaunch = (launch: SupportedLaunch) => {
    setEditingLaunch(launch);
    setDeletingLaunch(null);
    setIsAdminModalOpen(true);
  };

  const handleRequestDeleteLaunch = (launch: SupportedLaunch) => {
    setDeletingLaunch(launch);
    setEditingLaunch(null);
    setIsAdminModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-[#1F2937] flex flex-col overflow-x-hidden font-sans selection:bg-[#DA552F]/15 selection:text-[#DA552F]">
      <SEOHead
        title={`${settings.ownerName} — Product Hunt Launch Portfolio`}
        description="A collection of products I've helped during their Product Hunt launches, along with their final votes and rankings."
        canonicalUrl="https://axentailabs.com/portfolio"
        keywords="Product Hunt launch portfolio, Product Hunt launches supported, startup launch rankings, Product Hunt votes"
      />

      <Header
        ownerName={settings.ownerName}
        activeNav={activeNav}
        onNavigate={handleNavigate}
        isAuthenticated={isAuthenticated}
        onOpenAdmin={handleOpenAdminNew}
      />

      <main className="flex-1">
        <HeroSection onExploreClick={handleNavigate} />

        {loadError && (
          <div className="max-w-[1080px] mx-auto px-4 sm:px-6 pt-8">
            <div
              role="alert"
              className="p-4 rounded-xl bg-[#FEF2F2] border border-[#DA552F]/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
            >
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[#DA552F]">
                <AlertCircle size={18} className="shrink-0 mt-0.5" />
                <span>{loadError}</span>
              </div>
              <button
                type="button"
                onClick={loadPortfolioData}
                className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold text-[#1F2937] bg-white border border-[#E5E7EB] hover:bg-[#F7F7F7] transition-colors cursor-pointer shrink-0"
              >
                <RefreshCw size={13} />
                <span>Retry Loading</span>
              </button>
            </div>
          </div>
        )}

        <AllLaunchesSection
          launches={launches}
          isLoading={isLoading}
          isAdmin={isAuthenticated}
          onEdit={handleEditLaunch}
          onRequestDelete={handleRequestDeleteLaunch}
        />

        <RecentLaunchesSection
          recentLaunches={recentLaunches}
          pendingConfirmationLaunches={pendingConfirmationLaunches}
          isLoading={isLoading}
          isAdmin={isAuthenticated}
          onEdit={handleEditLaunch}
          onRequestDelete={handleRequestDeleteLaunch}
        />

        <AboutSection settings={settings} />
      </main>

      <Footer
        ownerName={settings.ownerName}
        isAuthenticated={isAuthenticated}
        onOpenAdmin={handleOpenAdminNew}
      />

      <AdminForm
        isOpen={isAdminModalOpen}
        onClose={() => {
          setIsAdminModalOpen(false);
          setEditingLaunch(null);
          setDeletingLaunch(null);
          if (window.location.hash === '#admin') {
            window.history.replaceState(null, '', window.location.pathname);
          }
        }}
        authInitialized={authInitialized}
        isAuthenticated={isAuthenticated}
        onLogin={handleLogin}
        onLogout={handleLogout}
        launches={launches}
        initialEditingLaunch={editingLaunch}
        initialDeletingLaunch={deletingLaunch}
        onCreateLaunch={handleCreateLaunch}
        onUpdateLaunch={handleUpdateLaunch}
        onDeleteLaunch={handleDeleteLaunch}
        settings={settings}
        onSaveSettings={handleSaveSettings}
      />
    </div>
  );
}
export default PortfolioApp;
