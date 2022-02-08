import i18n from 'i18next';
import en from './en/translation.json';
import pl from './pl/translation.json';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

export const resources = {
    en: {
        translation: en
    },
    pl: {
        translation: pl
    }
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources
    });

export default i18n;