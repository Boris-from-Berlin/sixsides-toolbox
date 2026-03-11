export const LOCALES = ["de", "en", "es", "pt"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "de";
export const LOCALE_COOKIE = "NEXT_LOCALE";

export const LOCALE_LABELS: Record<Locale, string> = {
  de: "DE",
  en: "EN",
  es: "ES",
  pt: "PT",
};

export const LOCALE_NAMES: Record<Locale, string> = {
  de: "Deutsch",
  en: "English",
  es: "Español",
  pt: "Português",
};
