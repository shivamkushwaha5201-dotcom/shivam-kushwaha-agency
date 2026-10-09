import React, { useState, useEffect } from 'react';
import {
  X,
  Plus,
  Pencil,
  Trash2,
  Lock,
  LogOut,
  AlertTriangle,
  CheckCircle2,
  Upload,
  Loader2,
} from 'lucide-react';
import {
  LaunchInputPayload,
  PortfolioSettings,
  SupportedLaunch,
} from '../../types/portfolio';
import {
  SUPPORTED_TIMEZONES,
  validateProductHuntUrl,
} from '../../utils/dateAndUrl';

interface AdminFormProps {
  isOpen: boolean;
  onClose: () => void;
  authInitialized: boolean;
  isAuthenticated: boolean;
  onLogin: (passcode: string, isSetup: boolean) => Promise<void>;
  onLogout: () => Promise<void>;
  launches: SupportedLaunch[];
  initialEditingLaunch: SupportedLaunch | null;
  initialDeletingLaunch: SupportedLaunch | null;
  onCreateLaunch: (payload: LaunchInputPayload) => Promise<{ warning?: string }>;
  onUpdateLaunch: (
    id: string,
    payload: LaunchInputPayload
  ) => Promise<{ warning?: string }>;
  onDeleteLaunch: (id: string) => Promise<void>;
  settings: PortfolioSettings;
  onSaveSettings: (newSettings: PortfolioSettings) => Promise<void>;
}

export const AdminForm: React.FC<AdminFormProps> = ({
  isOpen,
  onClose,
  authInitialized,
  isAuthenticated,
  onLogin,
  onLogout,
  launches,
  initialEditingLaunch,
  initialDeletingLaunch,
  onCreateLaunch,
  onUpdateLaunch,
  onDeleteLaunch,
  settings,
  onSaveSettings,
}) => {
  const [activeTab, setActiveTab] = useState<'form' | 'list' | 'settings'>(
    'form'
  );

  // Auth form state
  const [passcode, setPasscode] = useState('');
  const [authError, setAuthError] = useState<string | null>(null);
  const [authSubmitting, setAuthSubmitting] = useState(false);

  // Launch form state
  const [editingId, setEditingId] = useState<string | undefined>(undefined);
  const [name, setName] = useState('');
  const [productHuntUrl, setProductHuntUrl] = useState('');
  const [votes, setVotes] = useState('');
  const [ranking, setRanking] = useState('');
  const [weekRanking, setWeekRanking] = useState('');
  const [launchDate, setLaunchDate] = useState('');
  const [logoUrl, setLogoUrl] = useState('');
  const [logoPreviewError, setLogoPreviewError] = useState(false);
  const [confirmNonPhDomain, setConfirmNonPhDomain] = useState(false);

  // Delete confirmation state
  const [confirmDeleteTarget, setConfirmDeleteTarget] =
    useState<SupportedLaunch | null>(null);

  // Settings form state
  const [ownerName, setOwnerName] = useState(settings.ownerName);
  const [aboutText, setAboutText] = useState(settings.aboutText);
  const [phProfileUrl, setPhProfileUrl] = useState(
    settings.productHuntProfileUrl
  );
  const [timeZone, setTimeZone] = useState(settings.timeZone);

  // Feedback banners
  const [formError, setFormError] = useState<string | null>(null);
  const [formSuccess, setFormSuccess] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    setFormError(null);
    setFormSuccess(null);

    if (initialDeletingLaunch) {
      setConfirmDeleteTarget(initialDeletingLaunch);
      setActiveTab('list');
      return;
    }

    if (initialEditingLaunch) {
      populateFormForEdit(initialEditingLaunch);
      setActiveTab('form');
    } else {
      resetLaunchForm();
    }
  }, [isOpen, initialEditingLaunch, initialDeletingLaunch]);

  useEffect(() => {
    setOwnerName(settings.ownerName);
    setAboutText(settings.aboutText);
    setPhProfileUrl(settings.productHuntProfileUrl);
    setTimeZone(settings.timeZone);
  }, [settings]);

  const resetLaunchForm = () => {
    setEditingId(undefined);
    setName('');
    setProductHuntUrl('');
    setVotes('');
    setRanking('');
    setWeekRanking('');
    setLaunchDate('');
    setLogoUrl('');
    setLogoPreviewError(false);
    setConfirmNonPhDomain(false);
    setFormError(null);
  };

  const populateFormForEdit = (launch: SupportedLaunch) => {
    setEditingId(launch.id);
    setName(launch.name);
    setProductHuntUrl(launch.productHuntUrl);
    setVotes(String(launch.votes));
    setRanking(String(launch.ranking).replace(/^#/, ''));
    setWeekRanking(
      launch.weekRanking !== undefined ? String(launch.weekRanking) : ''
    );
    setLaunchDate(launch.launchDate || '');
    setLogoUrl(launch.logoUrl || '');
    setLogoPreviewError(false);
    setConfirmNonPhDomain(false);
    setFormError(null);
    setFormSuccess(null);
  };

  if (!isOpen) return null;

  const urlValidation = productHuntUrl.trim()
    ? validateProductHuntUrl(productHuntUrl, launches, editingId)
    : null;

  const handleAuthSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError(null);
    if (!passcode.trim()) {
      setAuthError('Please enter a passcode.');
      return;
    }

    setAuthSubmitting(true);
    try {
      await onLogin(passcode.trim(), !authInitialized);
      setPasscode('');
    } catch (err) {
      setAuthError(
        err instanceof Error ? err.message : 'Authentication failed.'
      );
    } finally {
      setAuthSubmitting(false);
    }
  };

  const handleLogoFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setFormError('Please select a valid image file (PNG, JPG, SVG, or WebP).');
      return;
    }
    if (file.size > 500 * 1024) {
      setFormError('Logo image must be smaller than 500 KB.');
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        setLogoUrl(reader.result);
        setLogoPreviewError(false);
        setFormError(null);
      }
    };
    reader.onerror = () => {
      setFormError('Failed to read image file.');
    };
    reader.readAsDataURL(file);
  };

  const handleLaunchFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);
    setFormSuccess(null);

    const trimmedName = name.trim();
    if (!trimmedName) {
      setFormError('Product name is required.');
      return;
    }

    const urlCheck = validateProductHuntUrl(
      productHuntUrl,
      launches,
      editingId
    );
    if (!urlCheck.valid) {
      setFormError(urlCheck.error || 'Invalid Product Hunt URL.');
      return;
    }

    if (!urlCheck.isProductHuntDomain && !confirmNonPhDomain) {
      setFormError(
        'This URL is not from producthunt.com. Please check the confirmation box below the URL field if you still wish to save it.'
      );
      return;
    }

    if (votes.trim() === '') {
      setFormError('Total votes is required.');
      return;
    }
    const parsedVotes = Number(votes);
    if (!Number.isInteger(parsedVotes) || parsedVotes < 0) {
      setFormError('Total votes must be a whole number (0 or greater).');
      return;
    }

    const cleanRankingStr = ranking.replace(/^#/, '').trim();
    if (!cleanRankingStr) {
      setFormError('Final ranking is required (e.g. 1 for #1).');
      return;
    }
    const parsedRanking = Number(cleanRankingStr);
    if (!Number.isInteger(parsedRanking) || parsedRanking < 1) {
      setFormError(
        'Final ranking must be a positive whole number (e.g. 1, 2, 3).'
      );
      return;
    }

    const cleanWeekRankingStr = weekRanking.replace(/^#/, '').trim();
    let parsedWeekRanking: number | undefined = undefined;
    if (cleanWeekRankingStr !== '') {
      parsedWeekRanking = Number(cleanWeekRankingStr);
      if (!Number.isInteger(parsedWeekRanking) || parsedWeekRanking < 1) {
        setFormError(
          'Week ranking must be a positive whole number when provided.'
        );
        return;
      }
    }

    const trimmedDate = launchDate.trim();
    if (trimmedDate !== '' && !/^\d{4}-\d{2}-\d{2}$/.test(trimmedDate)) {
      setFormError(
        'Internal launch date must be in YYYY-MM-DD format when provided.'
      );
      return;
    }

    setIsSubmitting(true);
    try {
      const payload: LaunchInputPayload = {
        name: trimmedName,
        productHuntUrl: productHuntUrl.trim(),
        votes: parsedVotes,
        ranking: parsedRanking,
        weekRanking: parsedWeekRanking,
        launchDate: trimmedDate || undefined,
        logoUrl: logoUrl.trim() || undefined,
      };

      if (editingId) {
        const res = await onUpdateLaunch(editingId, payload);
        setFormSuccess(
          `Updated "${trimmedName}" successfully.${
            res.warning ? ` (${res.warning})` : ''
          }`
        );
      } else {
        const res = await onCreateLaunch(payload);
        setFormSuccess(
          `Saved "${trimmedName}" to your portfolio.${
            res.warning ? ` (${res.warning})` : ''
          }`
        );
        resetLaunchForm();
      }
    } catch (err) {
      setFormError(
        err instanceof Error ? err.message : 'Failed to save launch.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleConfirmDelete = async () => {
    if (!confirmDeleteTarget) return;
    setFormError(null);
    setFormSuccess(null);
    setIsSubmitting(true);
    try {
      const deletedName = confirmDeleteTarget.name;
      await onDeleteLaunch(confirmDeleteTarget.id);
      if (editingId === confirmDeleteTarget.id) {
        resetLaunchForm();
      }
      setConfirmDeleteTarget(null);
      setFormSuccess(`Deleted "${deletedName}" from your portfolio.`);
    } catch (err) {
      setFormError(
        err instanceof Error ? err.message : 'Failed to delete launch.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSaveSettingsSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);
    setFormSuccess(null);
    if (!ownerName.trim()) {
      setFormError('Portfolio name cannot be empty.');
      return;
    }
    setIsSubmitting(true);
    try {
      await onSaveSettings({
        ownerName: ownerName.trim(),
        aboutText: aboutText.trim(),
        productHuntProfileUrl:
          phProfileUrl.trim() || 'https://www.producthunt.com',
        timeZone,
      });
      setFormSuccess('Portfolio settings saved.');
    } catch (err) {
      setFormError(
        err instanceof Error ? err.message : 'Failed to save settings.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="admin-modal-heading"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl bg-white border border-[#E5E7EB] rounded-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E5E7EB] bg-white shrink-0">
          <div className="flex items-center gap-2.5">
            <Lock size={16} className="text-[#DA552F]" />
            <h2
              id="admin-modal-heading"
              className="text-base font-bold text-[#1F2937]"
            >
              {isAuthenticated
                ? 'Portfolio Manager (Owner)'
                : authInitialized
                ? 'Owner Sign In'
                : 'Initialize Owner Passcode'}
            </h2>
          </div>

          <div className="flex items-center gap-2">
            {isAuthenticated && (
              <button
                type="button"
                onClick={onLogout}
                className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-medium text-[#6B7280] hover:text-[#1F2937] hover:bg-[#F7F7F7] transition-colors cursor-pointer"
              >
                <LogOut size={13} />
                <span>Lock</span>
              </button>
            )}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close modal"
              className="p-1.5 rounded-lg text-[#6B7280] hover:text-[#1F2937] hover:bg-[#F7F7F7] transition-colors cursor-pointer"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Unauthenticated View: Server-Backed Passcode Gate */}
        {!isAuthenticated ? (
          <form onSubmit={handleAuthSubmit} className="p-6 space-y-4">
            <p className="text-xs sm:text-sm text-[#6B7280] leading-relaxed">
              {authInitialized
                ? 'Enter your portfolio owner passcode to add, edit, or delete launches.'
                : 'First-time setup: Choose an admin passcode to protect write operations on your portfolio.'}
            </p>

            {authError && (
              <div
                role="alert"
                className="p-3 rounded-lg bg-[#FEF2F2] border border-[#DA552F]/30 text-xs font-medium text-[#DA552F] flex items-start gap-2"
              >
                <AlertTriangle size={15} className="shrink-0 mt-0.5" />
                <span>{authError}</span>
              </div>
            )}

            <div>
              <label
                htmlFor="admin-passcode-input"
                className="block text-xs font-semibold text-[#1F2937] mb-1.5"
              >
                {authInitialized
                  ? 'Admin Passcode'
                  : 'Create Admin Passcode (min 4 chars)'}
              </label>
              <input
                id="admin-passcode-input"
                type="password"
                required
                autoFocus
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                placeholder="••••••••"
                className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-[#E5E7EB] text-[#1F2937] focus:outline-none focus:border-[#DA552F]"
              />
            </div>

            <div className="flex items-center justify-end gap-2.5 pt-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-semibold text-[#6B7280] hover:text-[#1F2937] rounded-lg border border-[#E5E7EB] bg-white transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={authSubmitting}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#DA552F] hover:bg-[#C44623] disabled:opacity-60 rounded-lg transition-colors cursor-pointer"
              >
                {authSubmitting && (
                  <Loader2 size={14} className="animate-spin" />
                )}
                <span>
                  {authInitialized
                    ? 'Unlock Portfolio'
                    : 'Set Passcode & Unlock'}
                </span>
              </button>
            </div>
          </form>
        ) : (
          /* Authenticated Owner Console */
          <div className="flex flex-col flex-1 min-h-0">
            {/* Navigation Tabs */}
            <div className="flex items-center gap-1 px-6 pt-3 border-b border-[#E5E7EB] bg-[#F7F7F7]">
              <button
                type="button"
                onClick={() => {
                  setActiveTab('form');
                  setFormError(null);
                  setFormSuccess(null);
                }}
                className={`px-3.5 py-2 text-xs font-semibold rounded-t-lg border-b-2 transition-colors cursor-pointer ${
                  activeTab === 'form'
                    ? 'bg-white text-[#DA552F] border-[#DA552F]'
                    : 'text-[#6B7280] border-transparent hover:text-[#1F2937]'
                }`}
              >
                {editingId ? 'Edit Launch' : '+ Add Launch'}
              </button>
              <button
                type="button"
                onClick={() => {
                  setActiveTab('list');
                  setFormError(null);
                  setFormSuccess(null);
                }}
                className={`px-3.5 py-2 text-xs font-semibold rounded-t-lg border-b-2 transition-colors cursor-pointer ${
                  activeTab === 'list'
                    ? 'bg-white text-[#DA552F] border-[#DA552F]'
                    : 'text-[#6B7280] border-transparent hover:text-[#1F2937]'
                }`}
              >
                Manage Launches ({launches.length})
              </button>
              <button
                type="button"
                onClick={() => {
                  setActiveTab('settings');
                  setFormError(null);
                  setFormSuccess(null);
                }}
                className={`px-3.5 py-2 text-xs font-semibold rounded-t-lg border-b-2 transition-colors cursor-pointer ${
                  activeTab === 'settings'
                    ? 'bg-white text-[#DA552F] border-[#DA552F]'
                    : 'text-[#6B7280] border-transparent hover:text-[#1F2937]'
                }`}
              >
                Portfolio Settings
              </button>
            </div>

            {/* Scrollable Body */}
            <div className="p-6 overflow-y-auto space-y-4">
              {formError && (
                <div
                  role="alert"
                  className="p-3 rounded-lg bg-[#FEF2F2] border border-[#DA552F]/30 text-xs font-medium text-[#DA552F] flex items-start gap-2"
                >
                  <AlertTriangle size={15} className="shrink-0 mt-0.5" />
                  <span>{formError}</span>
                </div>
              )}

              {formSuccess && (
                <div
                  role="status"
                  className="p-3 rounded-lg bg-[#F0FDF4] border border-emerald-200 text-xs font-medium text-emerald-800 flex items-start gap-2"
                >
                  <CheckCircle2
                    size={15}
                    className="shrink-0 mt-0.5 text-emerald-600"
                  />
                  <span>{formSuccess}</span>
                </div>
              )}

              {/* TAB 1: Add or Edit Launch Form */}
              {activeTab === 'form' && (
                <form
                  onSubmit={handleLaunchFormSubmit}
                  className="space-y-4"
                  noValidate
                >
                  {editingId && (
                    <div className="flex items-center justify-between px-3 py-2 rounded-lg bg-[#F7F7F7] border border-[#E5E7EB] text-xs">
                      <span className="font-medium text-[#1F2937]">
                        Editing existing launch
                      </span>
                      <button
                        type="button"
                        onClick={resetLaunchForm}
                        className="text-[#DA552F] font-semibold hover:underline cursor-pointer"
                      >
                        Switch to New Launch
                      </button>
                    </div>
                  )}

                  <div>
                    <label
                      htmlFor="field-product-name"
                      className="block text-xs font-semibold text-[#1F2937] mb-1"
                    >
                      Product Name *
                    </label>
                    <input
                      id="field-product-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter product name"
                      className="w-full px-3.5 py-2 text-sm rounded-lg border border-[#E5E7EB] text-[#1F2937] focus:outline-none focus:border-[#DA552F]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="field-ph-url"
                      className="block text-xs font-semibold text-[#1F2937] mb-1"
                    >
                      Product Hunt Launch URL *
                    </label>
                    <input
                      id="field-ph-url"
                      type="url"
                      required
                      value={productHuntUrl}
                      onChange={(e) => {
                        setProductHuntUrl(e.target.value);
                        setConfirmNonPhDomain(false);
                      }}
                      placeholder="https://www.producthunt.com/products/your-product"
                      className="w-full px-3.5 py-2 text-sm rounded-lg border border-[#E5E7EB] text-[#1F2937] focus:outline-none focus:border-[#DA552F]"
                    />
                    {urlValidation && !urlValidation.valid && (
                      <p className="text-xs text-[#DA552F] mt-1.5">
                        {urlValidation.error}
                      </p>
                    )}

                    {urlValidation &&
                      urlValidation.valid &&
                      !urlValidation.isProductHuntDomain && (
                        <div className="mt-2 p-3 rounded-lg bg-amber-50 border border-amber-200 text-xs text-amber-900 space-y-2">
                          <div className="flex items-start gap-2">
                            <AlertTriangle
                              size={14}
                              className="shrink-0 mt-0.5 text-amber-600"
                            />
                            <span>{urlValidation.warning}</span>
                          </div>
                          <label className="flex items-center gap-2 font-medium cursor-pointer select-none">
                            <input
                              type="checkbox"
                              checked={confirmNonPhDomain}
                              onChange={(e) =>
                                setConfirmNonPhDomain(e.target.checked)
                              }
                              className="rounded border-amber-400 text-[#DA552F] focus:ring-[#DA552F]"
                            />
                            <span>
                              I confirm this non-Product Hunt URL is intentional
                            </span>
                          </label>
                        </div>
                      )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label
                        htmlFor="field-votes"
                        className="block text-xs font-semibold text-[#1F2937] mb-1"
                      >
                        Total Votes *
                      </label>
                      <input
                        id="field-votes"
                        type="number"
                        min={0}
                        step={1}
                        required
                        value={votes}
                        onChange={(e) => setVotes(e.target.value)}
                        placeholder="e.g. 336"
                        className="w-full px-3.5 py-2 text-sm rounded-lg border border-[#E5E7EB] text-[#1F2937] font-mono-tabular focus:outline-none focus:border-[#DA552F]"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="field-ranking"
                        className="block text-xs font-semibold text-[#1F2937] mb-1"
                      >
                        Day Ranking (#) *
                      </label>
                      <div className="relative">
                        <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-sm font-mono-tabular text-[#6B7280]">
                          #
                        </span>
                        <input
                          id="field-ranking"
                          type="number"
                          min={1}
                          step={1}
                          required
                          value={ranking}
                          onChange={(e) => setRanking(e.target.value)}
                          placeholder="2"
                          className="w-full pl-8 pr-3.5 py-2 text-sm rounded-lg border border-[#E5E7EB] text-[#1F2937] font-mono-tabular focus:outline-none focus:border-[#DA552F]"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="field-week-ranking"
                        className="block text-xs font-semibold text-[#1F2937] mb-1"
                      >
                        Week Ranking (Opt)
                      </label>
                      <div className="relative">
                        <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-sm font-mono-tabular text-[#6B7280]">
                          #
                        </span>
                        <input
                          id="field-week-ranking"
                          type="number"
                          min={1}
                          step={1}
                          value={weekRanking}
                          onChange={(e) => setWeekRanking(e.target.value)}
                          placeholder="Optional"
                          className="w-full pl-8 pr-3.5 py-2 text-sm rounded-lg border border-[#E5E7EB] text-[#1F2937] font-mono-tabular focus:outline-none focus:border-[#DA552F]"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="field-launch-date"
                      className="block text-xs font-semibold text-[#1F2937] mb-1"
                    >
                      Optional Internal Launch Date (for Recent Launches filtering)
                    </label>
                    <input
                      id="field-launch-date"
                      type="date"
                      value={launchDate}
                      onChange={(e) => setLaunchDate(e.target.value)}
                      className="w-full px-3.5 py-2 text-sm rounded-lg border border-[#E5E7EB] text-[#1F2937] font-mono-tabular focus:outline-none focus:border-[#DA552F]"
                    />
                    <p className="text-[11px] text-[#6B7280] mt-1">
                      Leave blank if unknown (the launch will appear in All Supported Launches only). Never displayed on public cards.
                    </p>
                  </div>

                  <div className="space-y-2 pt-1 border-t border-[#E5E7EB]">
                    <label
                      htmlFor="field-logo-url"
                      className="block text-xs font-semibold text-[#1F2937]"
                    >
                      Optional Product Logo or Thumbnail
                    </label>
                    <div className="flex items-center gap-2.5">
                      <input
                        id="field-logo-url"
                        type="url"
                        value={logoUrl.startsWith('data:image/') ? '' : logoUrl}
                        onChange={(e) => {
                          setLogoUrl(e.target.value);
                          setLogoPreviewError(false);
                        }}
                        placeholder="https://... or upload an image file"
                        className="flex-1 px-3.5 py-2 text-sm rounded-lg border border-[#E5E7EB] text-[#1F2937] focus:outline-none focus:border-[#DA552F]"
                      />
                      <label className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg border border-[#E5E7EB] bg-[#F7F7F7] hover:bg-[#E5E7EB]/60 text-xs font-medium text-[#1F2937] cursor-pointer shrink-0 transition-colors">
                        <Upload size={13} />
                        <span>Upload</span>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleLogoFileUpload}
                          className="sr-only"
                        />
                      </label>
                    </div>

                    {logoUrl && (
                      <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#F7F7F7] border border-[#E5E7EB]">
                        <div className="flex items-center gap-2.5">
                          {!logoPreviewError ? (
                            <img
                              src={logoUrl}
                              alt="Logo preview"
                              referrerPolicy="no-referrer"
                              onError={() => setLogoPreviewError(true)}
                              className="w-9 h-9 rounded-md object-cover border border-[#E5E7EB] bg-white"
                            />
                          ) : (
                            <div className="w-9 h-9 rounded-md border border-[#DA552F]/40 bg-[#FEF2F2] text-[#DA552F] text-[10px] font-bold flex items-center justify-center">
                              ERR
                            </div>
                          )}
                          <span className="text-xs text-[#6B7280]">
                            {logoPreviewError
                              ? 'Image failed to load — card will use clean initials fallback.'
                              : 'Logo preview ready'}
                          </span>
                        </div>
                        <button
                          type="button"
                          onClick={() => {
                            setLogoUrl('');
                            setLogoPreviewError(false);
                          }}
                          className="text-xs font-medium text-[#DA552F] hover:underline cursor-pointer"
                        >
                          Remove
                        </button>
                      </div>
                    )}
                  </div>

                  <div className="flex items-center justify-end gap-2.5 pt-3 border-t border-[#E5E7EB]">
                    <button
                      type="button"
                      onClick={onClose}
                      className="px-4 py-2 text-xs font-semibold text-[#6B7280] hover:text-[#1F2937] rounded-lg border border-[#E5E7EB] bg-white transition-colors cursor-pointer"
                    >
                      Close
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#DA552F] hover:bg-[#C44623] disabled:opacity-60 rounded-lg transition-colors cursor-pointer"
                    >
                      {isSubmitting ? (
                        <Loader2 size={14} className="animate-spin" />
                      ) : (
                        <Plus size={14} />
                      )}
                      <span>{editingId ? 'Save Changes' : 'Add Launch'}</span>
                    </button>
                  </div>
                </form>
              )}

              {/* TAB 2: Manage & Delete Launches with Confirmation */}
              {activeTab === 'list' && (
                <div className="space-y-4">
                  {confirmDeleteTarget && (
                    <div
                      role="alertdialog"
                      aria-labelledby="confirm-delete-heading"
                      className="p-4 rounded-xl bg-[#FEF2F2] border border-[#DA552F]/40 space-y-3"
                    >
                      <div
                        id="confirm-delete-heading"
                        className="text-xs font-bold text-[#1F2937]"
                      >
                        Confirm Deletion
                      </div>
                      <p className="text-xs text-[#6B7280]">
                        Are you sure you want to permanently delete{' '}
                        <strong className="text-[#1F2937]">
                          {confirmDeleteTarget.name}
                        </strong>{' '}
                        from your portfolio? This action cannot be undone.
                      </p>
                      <div className="flex items-center justify-end gap-2">
                        <button
                          type="button"
                          onClick={() => setConfirmDeleteTarget(null)}
                          className="px-3 py-1.5 text-xs font-semibold text-[#6B7280] bg-white border border-[#E5E7EB] rounded-lg hover:text-[#1F2937] cursor-pointer"
                        >
                          Cancel
                        </button>
                        <button
                          type="button"
                          disabled={isSubmitting}
                          onClick={handleConfirmDelete}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-[#DA552F] hover:bg-[#C44623] rounded-lg cursor-pointer"
                        >
                          {isSubmitting && (
                            <Loader2 size={12} className="animate-spin" />
                          )}
                          <span>Confirm Delete</span>
                        </button>
                      </div>
                    </div>
                  )}

                  {launches.length === 0 ? (
                    <div className="p-8 rounded-xl bg-[#F7F7F7] border border-[#E5E7EB] text-center space-y-3">
                      <p className="text-xs text-[#6B7280]">
                        Your launch collection is currently empty.
                      </p>
                      <button
                        type="button"
                        onClick={() => setActiveTab('form')}
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-[#DA552F] rounded-lg cursor-pointer"
                      >
                        <Plus size={14} />
                        <span>Add First Launch</span>
                      </button>
                    </div>
                  ) : (
                    <div className="divide-y divide-[#E5E7EB] border border-[#E5E7EB] rounded-xl overflow-hidden">
                      {launches.map((item) => (
                        <div
                          key={item.id}
                          className="p-3.5 bg-white flex items-center justify-between gap-3 text-xs"
                        >
                          <div className="min-w-0">
                            <div className="flex flex-wrap items-center gap-2">
                              <span className="font-bold text-[#1F2937] truncate">
                                {item.name}
                              </span>
                              {item.needsDateConfirmation && !item.launchDate && (
                                <span className="text-[11px] font-semibold text-[#DA552F]">
                                  • Needs Date Confirmation
                                </span>
                              )}
                            </div>
                            <div className="text-[#6B7280] font-mono-tabular mt-0.5">
                              Votes: {item.votes.toLocaleString()} •{' '}
                              {item.weekRanking
                                ? `Day Rank: #${item.ranking} • Week Rank: #${item.weekRanking}`
                                : `Ranking: #${String(item.ranking).replace(/^#/, '')}`}
                              {item.launchDate
                                ? ` • Confirmed Date: ${item.launchDate}`
                                : ''}
                            </div>
                          </div>

                          <div className="flex items-center gap-1.5 shrink-0">
                            <button
                              type="button"
                              onClick={() => {
                                populateFormForEdit(item);
                                setActiveTab('form');
                              }}
                              className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-md border border-[#E5E7EB] text-[#1F2937] hover:bg-[#F7F7F7] transition-colors cursor-pointer"
                            >
                              <Pencil size={12} />
                              <span>Edit</span>
                            </button>
                            <button
                              type="button"
                              onClick={() => setConfirmDeleteTarget(item)}
                              className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-md border border-[#E5E7EB] text-[#DA552F] hover:bg-[#FEF2F2] transition-colors cursor-pointer"
                            >
                              <Trash2 size={12} />
                              <span>Delete</span>
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* TAB 3: Portfolio Branding & Time Zone Settings */}
              {activeTab === 'settings' && (
                <form onSubmit={handleSaveSettingsSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="setting-owner-name"
                      className="block text-xs font-semibold text-[#1F2937] mb-1"
                    >
                      Portfolio Header Name / Logo *
                    </label>
                    <input
                      id="setting-owner-name"
                      type="text"
                      required
                      value={ownerName}
                      onChange={(e) => setOwnerName(e.target.value)}
                      className="w-full px-3.5 py-2 text-sm rounded-lg border border-[#E5E7EB] text-[#1F2937] focus:outline-none focus:border-[#DA552F]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="setting-timezone"
                      className="block text-xs font-semibold text-[#1F2937] mb-1"
                    >
                      Configured Time Zone (for Automatic Monthly Filtering)
                    </label>
                    <select
                      id="setting-timezone"
                      value={timeZone}
                      onChange={(e) => setTimeZone(e.target.value)}
                      className="w-full px-3.5 py-2 text-sm rounded-lg border border-[#E5E7EB] text-[#1F2937] bg-white focus:outline-none focus:border-[#DA552F]"
                    >
                      {SUPPORTED_TIMEZONES.map((tz) => (
                        <option key={tz.value} value={tz.value}>
                          {tz.label}
                        </option>
                      ))}
                    </select>
                    <p className="text-[11px] text-[#6B7280] mt-1">
                      Determines the current calendar month and year when filtering Recent Launches.
                    </p>
                  </div>

                  <div>
                    <label
                      htmlFor="setting-about"
                      className="block text-xs font-semibold text-[#1F2937] mb-1"
                    >
                      About Section Copy
                    </label>
                    <textarea
                      id="setting-about"
                      rows={3}
                      value={aboutText}
                      onChange={(e) => setAboutText(e.target.value)}
                      className="w-full px-3.5 py-2 text-sm rounded-lg border border-[#E5E7EB] text-[#1F2937] focus:outline-none focus:border-[#DA552F]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="setting-ph-profile"
                      className="block text-xs font-semibold text-[#1F2937] mb-1"
                    >
                      Your Product Hunt Profile Link
                    </label>
                    <input
                      id="setting-ph-profile"
                      type="url"
                      value={phProfileUrl}
                      onChange={(e) => setPhProfileUrl(e.target.value)}
                      className="w-full px-3.5 py-2 text-sm rounded-lg border border-[#E5E7EB] text-[#1F2937] focus:outline-none focus:border-[#DA552F]"
                    />
                  </div>

                  <div className="flex justify-end pt-3 border-t border-[#E5E7EB]">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#DA552F] hover:bg-[#C44623] disabled:opacity-60 rounded-lg transition-colors cursor-pointer"
                    >
                      {isSubmitting && (
                        <Loader2 size={14} className="animate-spin" />
                      )}
                      <span>Save Settings</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
