import React, {useEffect, useState} from 'react';
import ActiveDropdown from "../../hooks/ActiveDropdown";
import {initReactI18next, useTranslation} from "react-i18next";
import Lang_RU from "../../languages/ru.json";
import Lang_EN from "../../languages/en.json";
import Lang_ES from "../../languages/es.json";
import i18n from "i18next";


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

const HeaderLanguages = () => {

    const {i18n} = useTranslation();
    const handleChangeLanguages = (e, lang) => {
        e.preventDefault()
        document.querySelector('.header__language--target span').innerText = e.target.closest('a').innerText
        i18n.changeLanguage(lang)
    }

    const [isOpen, setIsOpen] = useState(false)
    ActiveDropdown(setIsOpen, ".header__language")

    return (
        <div className={"header__nav--language header__language header__drop-down" + (isOpen ? " _active" : "")}>
            <button
                type="button"
                className="header__language--target header__drop-down--target"
                onClick={() => setIsOpen(prev => !prev)}
            >
                <span>Ru</span>
                <svg width="7" height="5" viewBox="0 0 7 5" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M3.49991 4.75C3.35065 4.75 3.20132 4.69507 3.08757 4.5852L0.170898 1.7727C-0.0569661 1.55298 -0.0569661 1.19702 0.170898 0.977295C0.398763 0.757568 0.767904 0.757568 0.995768 0.977295L3.49991 3.39297L6.0046 0.977734C6.23246 0.758008 6.6016 0.758008 6.82947 0.977734C7.05733 1.19746 7.05733 1.55342 6.82947 1.77314L3.9128 4.58564C3.79887 4.69551 3.64939 4.75 3.49991 4.75Z"
                        fill="#F9F1DF"/>
                </svg>
            </button>
            <div className="header__drop-down--block">
                <div className="header__drop-down--body">
                    <ul className="header__drop-down--list">
                        <li className="header__drop-down--item">
                            <a href="#" onClick={e => handleChangeLanguages(e, 'ru')} className="header__drop-down--link">
                                Ru
                            </a>
                        </li>
                        <li className="header__drop-down--item">
                            <a href="#" onClick={e => handleChangeLanguages(e, 'en')} className="header__drop-down--link">
                                En
                            </a>
                        </li>
                        <li className="header__drop-down--item">
                            <a href="#" onClick={e => handleChangeLanguages(e, 'es')} className="header__drop-down--link">
                                Es
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default HeaderLanguages;