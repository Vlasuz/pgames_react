import React, {Dispatch, SetStateAction, useContext, useEffect, useState} from 'react'
import decor1 from "./../../../assets/img/popups/decor-image-1.png"
import decor2 from "./../../../assets/img/popups/decor-image-2.png"
import logo from "./../../../assets/img/logo.svg"
import {PopupContext} from "../../../App";
import axios from "axios";
import {getApiLink} from "../../../functions/getApiLink";
import {getPlatform} from "../../../functions/getPlatform";
import {IAuth, IUser} from "../../../models";
import { useDispatch } from 'react-redux';
import {setUser} from "../../../storage/toolkit";

interface IPopupRegistrationProps {

}

export const PopupRegistration: React.FC<IPopupRegistrationProps> = () => {

    const setModal: Dispatch<SetStateAction<string>> = useContext(PopupContext)

    const dispatch = useDispatch()
    
    const [emailValue, setEmailValue] = useState<string>("")
    const [nameValue, setNameValue] = useState<string>("")
    const [passwordValue, setPasswordValue] = useState<string>("")
    const [repeatPasswordValue, setRepeatPasswordValue] = useState<string>("")

    const handleGoToLogin = () => {
        setModal("login")
    }
    
    const handleRegistration = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        getPlatform("post")
        axios.post<IAuth>(getApiLink(`/api/auth/sign_up/?email=${emailValue}&username=${nameValue}&password=${passwordValue}&confirm_password=${repeatPasswordValue}`)).then(({data}) => {
            console.log(data)
            dispatch(setUser(data.user))
        }).catch(er => console.log(er))
        
    }

    return (
        <div className="registration-popup__body popup-body">
            <div className="registration-popup__decor popup-decor">
                <div className="popup-decor__element _levitation" style={{animationDuration: "9s"}}>
                    <picture>
                        <img src={decor1} alt="" loading="lazy" width="0" height="0"
                             className="popup-decor__element--img"/>
                    </picture>
                </div>
                <div className="popup-decor__element _levitation" style={{animationDuration: "11s"}}>
                    <picture>
                        <img src={decor2} alt="" loading="lazy" width="0" height="0"
                             className="popup-decor__element--img"/>
                    </picture>
                </div>
            </div>
            <div className="registration-popup__container popup-container">
                <button type="button" className="registration-popup__close-btn popup-close-btn popup-close"
                        title="Закрыть">
                    <svg viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.7886 4.23486L4.59619 12.7049" stroke="#F9F1DF"/>
                        <path d="M4.59619 4.23486L13.7886 12.7049" stroke="#F9F1DF"/>
                    </svg>
                </button>
                <div className="registration-popup__logo popup-logo">
                    <img src={logo} width="100" height="38" alt="" className="popup-logo__img"/>
                </div>
                <h2 className="registration-popup__title popup-title section-title _center">
                    Регистрация
                </h2>
                <form onSubmit={handleRegistration} className="registration-popup__form popup-form">
                    <div className="registration-popup__form--list popup-form-list">
                        <label className="registration-popup__label popup-label">
                            <input onChange={e => setEmailValue(e.target.value)} value={emailValue} type="email" name="email" required placeholder="Email"
                                   className="registration-popup__input popup-input email-valid-input"/>
                                <span className="registration-popup__input-placeholder popup-input-placeholder">Email</span>
                        </label>
                        <label className="registration-popup__label popup-label">
                            <input onChange={e => setNameValue(e.target.value)} value={nameValue} type="text" name="name" required placeholder="Имя пользователя"
                                   className="registration-popup__input popup-input"/>
                                <span className="registration-popup__input-placeholder popup-input-placeholder">Имя пользователя</span>
                        </label>
                        <label className="registration-popup__label popup-label">
                            <input onChange={e => setPasswordValue(e.target.value)} value={passwordValue} type="password" name="password" required placeholder="Пароль"
                                   className="registration-popup__input popup-input"/>
                                <span
                                    className="registration-popup__input-placeholder popup-input-placeholder">Пароль</span>
                        </label>
                        <label className="registration-popup__label popup-label">
                            <input onChange={e => setRepeatPasswordValue(e.target.value)} value={repeatPasswordValue} type="password" name="password-repeat" required placeholder="Повторите пароль"
                                   className="registration-popup__input popup-input"/>
                                <span className="registration-popup__input-placeholder popup-input-placeholder">Повторите пароль</span>
                        </label>
                    </div>
                    <div className="registration-popup__checkbox popup-checkbox">
                        <label className="popup-checkbox__label">
                            <input type="checkbox" name="service-usage-rules" required
                                   className="popup-checkbox__input"/>
                                <span className="popup-checkbox__element"></span>
                                <span className="popup-checkbox__text">
                                        Я соглашаюсь со всеми <a href="index.html">правилами использования сервиса</a>
                                    </span>
                        </label>
                    </div>
                    <button type="submit" className="registration-popup__submit popup-submit btn _large _shadow">
                        Зарегистрироваться
                    </button>
                    <a onClick={handleGoToLogin} className="registration-popup__link popup-link popup-close open-popup">
                        У меня уже есть аккаунт
                    </a>
                    <div className="registration-popup__via popup-via">
                        <div className="popup-via__body">
                            <h3 className="popup-via__title">
                                Зарегестрироваться через
                            </h3>
                            <ul className="popup-via__list">
                                <li className="popup-via__item">
                                    <a href="#" className="popup-via__btn" title="Facebook">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4687H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3438 4.92187 17.3438 4.92187V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4687H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z"/>
                                        </svg>
                                    </a>
                                </li>
                                <li className="popup-via__item">
                                    <a href="#" className="popup-via__btn" title="Google">
                                        <svg width="20" height="20" version="1.1" xmlns="http://www.w3.org/2000/svg"
                                             viewBox="0 0 20 20">
                                            <path d="M19.8,10.2c0-0.7-0.1-1.4-0.2-2h-9.4V12h5.4c-0.2,1.2-0.9,2.3-2,3v0c-0.9,0.6-2.1,1-3.4,1
                                                    c-2.6,0-4.8-1.8-5.6-4.1h0l0,0c-0.4-1.2-0.4-2.6,0-3.8v0l0,0C5.4,5.7,7.6,4,10.2,4c1.4,0,2.8,0.5,3.8,1.5l2.9-2.9
                                                    C15.1,0.9,12.7,0,10.2,0C6.4,0,3,2.1,1.3,5.5h0c-1.4,2.8-1.4,6.2,0,9l0,0v0C3,17.9,6.4,20,10.2,20c2.7,0,5-0.9,6.6-2.4l0,0
                                                    C18.7,15.8,19.8,13.3,19.8,10.2z"/>
                                        </svg>
                                    </a>
                                </li>
                                <li className="popup-via__item">
                                    <a href="#" className="popup-via__btn" title="Apple">
                                        <svg width="16" height="18" viewBox="0 0 16 18" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M13.279 9.49609C13.2707 8.0625 13.9623 6.98047 15.3623 6.18359C14.579 5.13281 13.3957 4.55469 11.8332 4.44141C10.354 4.33203 8.73734 5.25 8.14567 5.25C7.52067 5.25 6.08734 4.48047 4.96234 4.48047C2.63734 4.51563 0.166504 6.21875 0.166504 9.68359C0.166504 10.707 0.366504 11.7643 0.766504 12.8555C1.29984 14.2891 3.22484 17.8047 5.23317 17.7461C6.28317 17.7227 7.02484 17.0469 8.3915 17.0469C9.7165 17.0469 10.404 17.7461 11.5748 17.7461C13.5998 17.7188 15.3415 14.5234 15.8498 13.0859C13.1332 11.8867 13.279 9.57031 13.279 9.49609ZM10.9207 3.08203C12.0582 1.81641 11.954 0.664063 11.9207 0.25C10.9165 0.304688 9.754 0.890625 9.0915 1.61328C8.36234 2.38672 7.93317 3.34375 8.02484 4.42188C9.11234 4.5 10.104 3.97656 10.9207 3.08203Z"/>
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </form>
            </div>
        </div>
)
}
