import React from 'react';
import i18n from 'i18next';
import {initReactI18next} from "react-i18next";
import Lang_RU from './../languages/ru.json';
import Lang_EN from './../languages/en.json';
import Lang_ES from './../languages/es.json';

const jsonLanguages = {
    ru: {translation: Lang_RU},
    en: {translation: Lang_EN},
    es: {translation: Lang_ES},
}

// Инициализация:
i18n.use(initReactI18next).init({
    resources: jsonLanguages,
    lng: "ru",
    fallbackLng: "ru"
});