const de = {
  cookies: {
    text: "Wir verwenden Cookies und ähnliche Technologien, um die Funktionalität unserer Website sicherzustellen und unser Angebot zu verbessern.",
    learnMore: "Mehr erfahren",
    necessaryTitle: "Notwendig",
    necessaryDesc: "Grundfunktionen, Spracheinstellungen, Theme-Speicherung",
    analyticsTitle: "Analyse",
    analyticsDesc: "Nutzungsstatistiken, Seitenaufrufe, Conversion-Tracking",
    marketingTitle: "Marketing",
    marketingDesc: "Personalisierte Werbung, Retargeting, Social-Media-Pixel",
    acceptAll: "Alle akzeptieren",
    saveSelection: "Auswahl speichern",
    settings: "Einstellungen",
    rejectOptional: "Nur notwendige",
  },
  footer: {
    impressum: "Impressum",
    datenschutz: "Datenschutz",
    cookieSettings: "Cookie-Einstellungen",
    backToHome: "← Zurück zur Startseite",
    allRightsReserved: "Alle Rechte vorbehalten.",
  },
};

export default de;

type DeepStringRecord<T> = {
  [K in keyof T]: T[K] extends string ? string : DeepStringRecord<T[K]>;
};

export type TranslationKeys = DeepStringRecord<typeof de>;
