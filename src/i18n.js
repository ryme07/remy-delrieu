import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import translationEN from "./locales/en/translation.json";
import translationFR from "./locales/fr/translation.json";
const resources = {
  en: {
    translation: translationEN,
  },
  fr: {
    translation: translationFR,
  },
};

i18n
  .use(Backend)
  .use(initReactI18next)

  .init({
    fallbackLng: "en",
    debug: false,
    lng: "en",
    resources,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
