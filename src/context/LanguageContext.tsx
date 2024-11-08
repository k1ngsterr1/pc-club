import React, { createContext, useState, useContext, useEffect } from 'react';
import { getLocales } from 'expo-localization';
import { I18n } from 'i18n-js';

// Локализации
const translations = {
    en: { cards: 'Payment method', city: 'Your City', language: 'Language', settings: 'Settings', payment: 'Payment cards' },
    ru: { cards: 'Cпособ оплаты', city: 'Ваш Город', language: 'Язык', settings: 'Настройки', payment: 'Платежные карты' },
    kz: { cards: 'Төлем әдісі', city: 'Қалаңыз', language: 'Тіл', settings: 'Параметрлер', payment: 'Төлем карталары' },
};
const i18n = new I18n(translations);

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(getLocales()[0].languageCode);

    useEffect(() => {
        i18n.locale = language;
    }, [language]);

    const changeLanguage = (newLanguage) => {
        setLanguage(newLanguage);
    };

    return (
        <LanguageContext.Provider value={{ language, changeLanguage, i18n }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
