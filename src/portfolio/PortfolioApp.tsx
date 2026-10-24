import React, { useState, useMemo, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, type Variants } from 'motion/react';
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

const NAV_SECTION_ORDER: NavSectionId[] = [
  'all-launches',
  'recent-launches',
  'about',
];

const sectionSlideVariants: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 56 : -56,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: {
      x: { type: 'spring', stiffness: 310, damping: 30, mass: 0.85 },
      opacity: { duration: 0.28, ease: [0.16, 1, 0.3, 1] },
    },
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -56 : 56,
    opacity: 0,
    transition: {
      x: { duration: 0.2, ease: [0.4, 0, 1, 1] },
      opacity: { duration: 0.16 },
    },
  }),
};

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

  // Navigation, Slide Direction & Modal states
  const [activeNav, setActiveNav] = useState<NavSectionId>('all-launches');
  const [slideDirection, setSlideDirection] = useState<number>(1);
  const [hasNavigated, setHasNavigated] = useState<boolean>(false);
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

  const switchSection = useCallback(
    (sectionId: NavSectionId) => {
      setActiveNav((prev) => {
        if (prev !== sectionId) {
          const prevIdx = NAV_SECTION_ORDER.indexOf(prev);
          const nextIdx = NAV_SECTION_ORDER.indexOf(sectionId);
          setSlideDirection(nextIdx >= prevIdx ? 1 : -1);
          setHasNavigated(true);
        }
        return sectionId;
      });
    },
    []
  );

  const handleNavigate = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: NavSectionId
  ) => {
    e.preventDefault();
    switchSection(sectionId);
    const stageEl = document.getElementById('portfolio-sections-stage');
    const targetEl = document.getElementById(sectionId);
    if (sectionId === 'about' && targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (stageEl) {
      stageEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
    <div className="min-h-screen bg-[#FFFFFF] text-[#111111] flex flex-col overflow-x-hidden font-sans selection:bg-[#459B45]/20 selection:text-[#111111]">
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
              className="p-4 rounded-xl bg-[#F7F9F7] border border-red-300 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-sm"
            >
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[#111111]">
                <AlertCircle size={18} className="shrink-0 mt-0.5 text-red-500" />
                <span>{loadError}</span>
              </div>
              <button
                type="button"
                onClick={loadPortfolioData}
                className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold text-[#111111] bg-[#FFFFFF] border border-[#E5E9E5] hover:bg-[#F7F9F7] transition-colors cursor-pointer shrink-0"
              >
                <RefreshCw size={13} />
                <span>Retry Loading</span>
              </button>
            </div>
          </div>
        )}

        {/* Cohesive Section Switcher Bar + Horizontally Animated Section Stage */}
        <div
          id="portfolio-sections-stage"
          className="scroll-mt-16 bg-[#FFFFFF] border-b border-[#E5E9E5]"
        >
          <div className="max-w-[1080px] mx-auto px-4 sm:px-6 pt-6 pb-2 flex flex-wrap items-center justify-between gap-4">
            <div
              role="tablist"
              aria-label="Portfolio Sections"
              className="inline-flex items-center p-1 rounded-full bg-[#F7F9F7] border border-[#E5E9E5] shadow-2xs"
            >
              {(
                [
                  {
                    id: 'all-launches',
                    label: 'All Launches',
                    count: launches.length,
                  },
                  {
                    id: 'recent-launches',
                    label: 'Recent Launches',
                    count: recentLaunches.length,
                  },
                  {
                    id: 'about',
                    label: 'About',
                  },
                ] as { id: NavSectionId; label: string; count?: number }[]
              ).map((tab) => {
                const isSelected = activeNav === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() => switchSection(tab.id)}
                    className={`relative px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-colors duration-200 cursor-pointer flex items-center gap-2 ${
                      isSelected
                        ? 'text-white'
                        : 'text-[#555B55] hover:text-[#111111]'
                    }`}
                  >
                    {isSelected && (
                      <motion.span
                        layoutId="portfolio-stage-active-pill"
                        transition={{
                          type: 'spring',
                          stiffness: 360,
                          damping: 30,
                        }}
                        className="absolute inset-0 rounded-full bg-[#459B45] shadow-xs shadow-[#459B45]/20 -z-0"
                      />
                    )}
                    <span className="relative z-10">{tab.label}</span>
                    {typeof tab.count === 'number' && !isLoading && (
                      <span
                        className={`relative z-10 text-[11px] px-1.5 py-0.2 rounded-full font-mono ${
                          isSelected
                            ? 'bg-white/25 text-white'
                            : 'bg-[#E5F5E5] text-[#246B32]'
                        }`}
                      >
                        {tab.count}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="relative overflow-hidden">
            <AnimatePresence
              mode="wait"
              initial={false}
              custom={slideDirection}
            >
              <motion.div
                key={activeNav}
                custom={slideDirection}
                variants={sectionSlideVariants}
                initial={hasNavigated ? 'enter' : false}
                animate="center"
                exit="exit"
                className="will-change-transform"
              >
                {activeNav === 'recent-launches' ? (
                  <>
                    <RecentLaunchesSection
                      recentLaunches={recentLaunches}
                      pendingConfirmationLaunches={pendingConfirmationLaunches}
                      isLoading={isLoading}
                      isAdmin={isAuthenticated}
                      onEdit={handleEditLaunch}
                      onRequestDelete={handleRequestDeleteLaunch}
                    />
                    <AllLaunchesSection
                      launches={launches}
                      isLoading={isLoading}
                      isAdmin={isAuthenticated}
                      onEdit={handleEditLaunch}
                      onRequestDelete={handleRequestDeleteLaunch}
                    />
                    <AboutSection settings={settings} />
                  </>
                ) : activeNav === 'about' ? (
                  <>
                    <AboutSection settings={settings} />
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
                  </>
                ) : (
                  <>
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
                  </>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
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
