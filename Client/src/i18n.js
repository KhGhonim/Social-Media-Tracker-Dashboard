import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import EN from "../locales/EN.json";
import AR from "../locales/AR.json";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: { translation: EN },
  ar: { translation: AR },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // React already escapes strings
    },
    detection: {
      order: [
        "querystring",
        "localStorage",
        "sessionStorage",
        "navigator",
        "htmlTag",
      ],
      caches: ["localStorage", "sessionStorage"], // Cache in multiple places
    },
    react: {
      useSuspense: false, // Render without waiting for translations
    },
  });

export default i18n;
