"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { useTranslation } from "@/contexts/LanguageContext";

interface CookieConsent {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  timestamp: string;
}

const CONSENT_KEY = "sixsides_cookie_consent";

function getStoredConsent(): CookieConsent | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(CONSENT_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function storeConsent(consent: CookieConsent) {
  localStorage.setItem(CONSENT_KEY, JSON.stringify(consent));
  const maxAge = 365 * 24 * 60 * 60;
  document.cookie = `cookie_consent=true; path=/; max-age=${maxAge}; SameSite=Lax`;
}

function revokeConsent() {
  const consent: CookieConsent = {
    necessary: true,
    analytics: false,
    marketing: false,
    timestamp: new Date().toISOString(),
  };
  storeConsent(consent);

  const gaCookies = document.cookie.split(";").filter((c) => c.trim().startsWith("_ga"));
  for (const c of gaCookies) {
    const name = c.split("=")[0].trim();
    document.cookie = `${name}=; path=/; max-age=0; domain=${window.location.hostname}`;
    document.cookie = `${name}=; path=/; max-age=0; domain=.${window.location.hostname}`;
  }

  document.cookie = `_fbp=; path=/; max-age=0; domain=.${window.location.hostname}`;

  window.dispatchEvent(new CustomEvent("cookie-consent", { detail: consent }));
}

export default function CookieBanner() {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const existing = getStoredConsent();
      if (!existing) setVisible(true);
    }, 800);

    const reopenHandler = () => {
      const existing = getStoredConsent();
      if (existing) {
        setAnalytics(existing.analytics);
        setMarketing(existing.marketing);
      }
      setShowDetails(true);
      setVisible(true);
    };
    window.addEventListener("cookie-settings-open", reopenHandler);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("cookie-settings-open", reopenHandler);
    };
  }, []);

  const saveConsent = useCallback(
    (consent: Omit<CookieConsent, "necessary" | "timestamp">) => {
      const full: CookieConsent = {
        necessary: true,
        analytics: consent.analytics,
        marketing: consent.marketing,
        timestamp: new Date().toISOString(),
      };
      storeConsent(full);
      setVisible(false);

      if (!consent.analytics && !consent.marketing) {
        revokeConsent();
      }

      window.dispatchEvent(
        new CustomEvent("cookie-consent", { detail: full })
      );
    },
    []
  );

  const acceptAll = () => saveConsent({ analytics: true, marketing: true });
  const acceptSelected = () => saveConsent({ analytics, marketing });
  const rejectOptional = () => saveConsent({ analytics: false, marketing: false });

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9999] p-4 md:p-6 animate-fade-up">
      <div className="max-w-[720px] mx-auto bg-bg dark:bg-zinc-900 border border-border dark:border-zinc-700 rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.08)] dark:shadow-[0_8px_40px_rgba(0,0,0,0.4)] p-6">
        {/* Main text */}
        <div className="mb-4">
          <p className="text-sm text-text-secondary dark:text-zinc-400 leading-relaxed">
            {t("cookies.text")}{" "}
            <Link
              href="/datenschutz"
              className="text-text-primary dark:text-zinc-100 hover:underline"
            >
              {t("cookies.learnMore")}
            </Link>
          </p>
        </div>

        {/* Details toggle */}
        {showDetails && (
          <div className="mb-4 space-y-3">
            {/* Necessary - always on */}
            <label className="flex items-center justify-between p-3 rounded-xl bg-surface dark:bg-zinc-800">
              <div>
                <span className="text-sm font-medium text-text-primary dark:text-zinc-100">
                  {t("cookies.necessaryTitle")}
                </span>
                <p className="text-xs text-text-muted dark:text-zinc-500 mt-0.5">
                  {t("cookies.necessaryDesc")}
                </p>
              </div>
              <div className="relative">
                <div className="w-10 h-6 bg-text-primary dark:bg-zinc-100 rounded-full" />
                <div className="absolute top-1 right-1 w-4 h-4 bg-bg dark:bg-zinc-900 rounded-full" />
              </div>
            </label>

            {/* Analytics */}
            <label className="flex items-center justify-between p-3 rounded-xl bg-surface dark:bg-zinc-800 cursor-pointer">
              <div>
                <span className="text-sm font-medium text-text-primary dark:text-zinc-100">
                  {t("cookies.analyticsTitle")}
                </span>
                <p className="text-xs text-text-muted dark:text-zinc-500 mt-0.5">
                  {t("cookies.analyticsDesc")}
                </p>
              </div>
              <button
                type="button"
                role="switch"
                aria-checked={analytics}
                onClick={() => setAnalytics(!analytics)}
                className={`relative w-10 h-6 rounded-full transition-colors ${
                  analytics
                    ? "bg-text-primary dark:bg-zinc-100"
                    : "bg-surface-hover dark:bg-zinc-600"
                }`}
              >
                <span
                  className={`absolute top-1 w-4 h-4 bg-bg dark:bg-zinc-900 rounded-full transition-transform ${
                    analytics ? "right-1" : "left-1"
                  }`}
                />
              </button>
            </label>

            {/* Marketing */}
            <label className="flex items-center justify-between p-3 rounded-xl bg-surface dark:bg-zinc-800 cursor-pointer">
              <div>
                <span className="text-sm font-medium text-text-primary dark:text-zinc-100">
                  {t("cookies.marketingTitle")}
                </span>
                <p className="text-xs text-text-muted dark:text-zinc-500 mt-0.5">
                  {t("cookies.marketingDesc")}
                </p>
              </div>
              <button
                type="button"
                role="switch"
                aria-checked={marketing}
                onClick={() => setMarketing(!marketing)}
                className={`relative w-10 h-6 rounded-full transition-colors ${
                  marketing
                    ? "bg-text-primary dark:bg-zinc-100"
                    : "bg-surface-hover dark:bg-zinc-600"
                }`}
              >
                <span
                  className={`absolute top-1 w-4 h-4 bg-bg dark:bg-zinc-900 rounded-full transition-transform ${
                    marketing ? "right-1" : "left-1"
                  }`}
                />
              </button>
            </label>
          </div>
        )}

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
          <button
            onClick={acceptAll}
            className="px-5 py-2.5 bg-text-primary dark:bg-zinc-100 text-bg dark:text-zinc-900 text-sm font-medium rounded-full hover:opacity-90 transition-opacity"
          >
            {t("cookies.acceptAll")}
          </button>

          {showDetails ? (
            <button
              onClick={acceptSelected}
              className="px-5 py-2.5 border border-border dark:border-zinc-600 text-sm font-medium rounded-full text-text-primary dark:text-zinc-100 hover:bg-surface dark:hover:bg-zinc-800 transition-colors"
            >
              {t("cookies.saveSelection")}
            </button>
          ) : (
            <button
              onClick={() => setShowDetails(true)}
              className="px-5 py-2.5 border border-border dark:border-zinc-600 text-sm font-medium rounded-full text-text-primary dark:text-zinc-100 hover:bg-surface dark:hover:bg-zinc-800 transition-colors"
            >
              {t("cookies.settings")}
            </button>
          )}

          <button
            onClick={rejectOptional}
            className="px-5 py-2.5 text-sm text-text-muted dark:text-zinc-500 hover:text-text-primary dark:hover:text-zinc-100 transition-colors"
          >
            {t("cookies.rejectOptional")}
          </button>
        </div>
      </div>
    </div>
  );
}

export function openCookieSettings() {
  window.dispatchEvent(new Event("cookie-settings-open"));
}
