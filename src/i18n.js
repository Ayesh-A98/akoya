import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Main translations
import enTranslation from "./locates/en/translation.json";
import urTranslation from "./locates/ur/translation.json";

// LandingPage2 translations
import enTranslation1 from "./locates/en/translation1.json";
import urTranslation1 from "./locates/ur/translation1.json";

// LandingPage3 translations
import enTranslation2 from "./locates/en/translation2.json";
import urTranslation2 from "./locates/ur/translation2.json";

// LandingPage1 translations
import enTranslation3 from "./locates/en/translation3.json";
import urTranslation3 from "./locates/ur/translation3.json";

// Aboutbar translations
import enTranslation4 from "./locates/en/translation4.json";
import urTranslation4 from "./locates/ur/translation4.json";

// Narbarser (services/booking section) translations
import enTranslation5 from "./locates/en/translation5.json";
import urTranslation5 from "./locates/ur/translation5.json";

// Vision (Vision & Mission page) translations
import enTranslation6 from "./locates/en/translation6.json";
import urTranslation6 from "./locates/ur/translation6.json";

// Contact page translations
import enTranslation7 from "./locates/en/translation7.json";
import urTranslation7 from "./locates/ur/translation7.json";

// Client (login) page translations
import enTranslation8 from "./locates/en/translation8.json";
import urTranslation8 from "./locates/ur/translation8.json";

// AkoyaBooking (booking/order page) translations
import enTranslation9 from "./locates/en/translation9.json";
import urTranslation9 from "./locates/ur/translation9.json";

// Create (register/sign up page) translations
import enTranslation10 from "./locates/en/translation10.json";
import urTranslation10 from "./locates/ur/translation10.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslation,
        translation1: enTranslation1,
        translation2: enTranslation2,
        translation3: enTranslation3,
        translation4: enTranslation4,
        translation5: enTranslation5,
        translation6: enTranslation6,
        translation7: enTranslation7,
        translation8: enTranslation8,
        translation9: enTranslation9,
        translation10: enTranslation10,
      },
      ur: {
        translation: urTranslation,
        translation1: urTranslation1,
        translation2: urTranslation2,
        translation3: urTranslation3,
        translation4: urTranslation4,
        translation5: urTranslation5,
        translation6: urTranslation6,
        translation7: urTranslation7,
        translation8: urTranslation8,
        translation9: urTranslation9,
        translation10: urTranslation10,
      },
    },

    ns: [
      "translation",
      "translation1",
      "translation2",
      "translation3",
      "translation4",
      "translation5",
      "translation6",
      "translation7",
      "translation8",
      "translation9",
      "translation10",
    ],
    defaultNS: "translation",

    fallbackLng: "en",

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;