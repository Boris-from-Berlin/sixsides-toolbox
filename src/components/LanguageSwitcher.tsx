"use client";

import { useState, useRef, useEffect } from "react";
import { Globe } from "lucide-react";
import { useTranslation } from "@/contexts/LanguageContext";
import { LOCALES, LOCALE_LABELS, LOCALE_NAMES, type Locale } from "@/i18n/types";

export default function LanguageSwitcher() {
  const { locale, setLocale } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    if (open) document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex items-center gap-1.5 text-sm text-text-muted hover:text-text-primary dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
        aria-label="Switch language"
      >
        <Globe className="w-3.5 h-3.5" />
        {LOCALE_LABELS[locale]}
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 bg-bg dark:bg-zinc-900 border border-border dark:border-zinc-700 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)] py-1 min-w-[140px] z-50">
          {LOCALES.map((loc: Locale) => (
            <button
              key={loc}
              onClick={() => {
                setLocale(loc);
                setOpen(false);
              }}
              className={`w-full text-left px-4 py-2 text-sm transition-colors flex items-center justify-between ${
                loc === locale
                  ? "text-text-primary dark:text-zinc-100 font-medium bg-surface dark:bg-zinc-800"
                  : "text-text-secondary dark:text-zinc-400 hover:text-text-primary dark:hover:text-zinc-100 hover:bg-surface dark:hover:bg-zinc-800"
              }`}
            >
              <span>{LOCALE_NAMES[loc]}</span>
              <span className="text-xs text-text-muted dark:text-zinc-500">{LOCALE_LABELS[loc]}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
