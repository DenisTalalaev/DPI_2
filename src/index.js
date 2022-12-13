import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import en from './data/translations/en.json'
import ru from './data/translations/ru.json';
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'flag-icon-css/css/flag-icons.min.css'
// import 'animate.css';
// import WOW from 'wow.js';
import './index.css';

i18n.use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: en
            },
            ru: {
                translation: ru
            }
        },
        fallbackLng: "ru",
        lng: "ru",
    });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);
