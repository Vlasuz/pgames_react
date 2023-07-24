import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import handleChangePopup from "../../../features/handleChangePopup";
import logo from "./../../../assets/img/logo.svg"
import Cross from "../components/Cross";

const ForgotPassword = () => {

    const dispatch = useDispatch()
    const [emailValue, setEmailValue] = useState('')

    const handleSend = (e) => {
        e.preventDefault()
        if(!(/\S+@\S+\.\S+/.test(emailValue))) return null;

        handleChangePopup(dispatch, "password-sent-popup")
    }

    return (
        <div className="forgot-password-popup__body popup-body">
            <div className="forgot-password-popup__container popup-container">
                <Cross/>
                <div className="forgot-password-popup__logo popup-logo">
                    <img src={logo} width="100" height="38" alt="" className="popup-logo__img"/>
                </div>
                <h2 className="forgot-password-popup__title popup-title section-title _center">
                    Забыли пароль?
                </h2>
                <div className="forgot-password-popup__text popup-text">
                    Введите ваш email и пароль будет отправлен вам на почту
                </div>
                <form onSubmit={handleSend} className="forgot-password-popup__form popup-form">
                    <div className="forgot-password-popup__form--list popup-form-list">
                        <label className="forgot-password-popup__label popup-label">
                            <input onChange={e => setEmailValue(e.target.value)} value={emailValue} type="email" name="email" required placeholder="Email"
                                   className="forgot-password-popup__input popup-input email-valid-input"/>
                                <span
                                    className="forgot-password-popup__input-placeholder popup-input-placeholder">Email</span>
                        </label>
                    </div>
                    <button type="submit" disabled={!(/\S+@\S+\.\S+/.test(emailValue))} className={"forgot-password-popup__submit popup-submit btn _large _shadow" + (!(/\S+@\S+\.\S+/.test(emailValue)) ? " _disabled" : "")}>
                        Отправить
                    </button>
                    <a href="#" onClick={_ => handleChangePopup(dispatch, "login-popup")} className="forgot-password-popup__link popup-link popup-close open-popup">
                        Назад
                    </a>
                </form>
            </div>
        </div>
    );
};

export default ForgotPassword;