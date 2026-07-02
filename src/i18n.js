import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Main translations
import enTranslation from "./locates/en/translation.json";
import urTranslation from "./locates/ur/translation.json";

// LandingPage2 translations
import enTranslation1 from "./locates/en/translation1.json";
import urTranslation1 from "./locates/ur/translation1.json";
//landing page3
import enTranslation2 from "./locates/en/translation2.json";
import urTranslation2 from "./locates/ur/translation2.json";


i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslation,
        translation1: enTranslation1,
         translation2: enTranslation2,
      },
      ur: {
        translation: urTranslation,
        translation1: urTranslation1,
        translation2: urTranslation2,
      },
    },

    ns: ["translation", "translation1","translation2"],
    defaultNS: "translation",

    fallbackLng: "en",

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;