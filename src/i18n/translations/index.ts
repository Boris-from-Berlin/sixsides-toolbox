import de from "./de";
import en from "./en";
import es from "./es";
import pt from "./pt";
import type { Locale } from "../types";
import type { TranslationKeys } from "./de";

export const translations: Record<Locale, TranslationKeys> = { de, en, es, pt };
export type { TranslationKeys };
