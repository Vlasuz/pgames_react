import React, {useState} from 'react';
import handleChangePopup from "../../../../../features/handleChangePopup";
import {useDispatch} from "react-redux";
import signIn from "../../../../../api/signIn";
import AuthViaSocials from "../../../components/AuthViaSocials";

const Form = () => {

    const dispatch = useDispatch()

    const [emailValue, setEmailValue] = useState("")
    const [passwordValue, setPasswordValue] = useState("")

    return (
        <form onSubmit={e => signIn(e, dispatch, {emailValue, passwordValue})} className="login-popup__form popup-form">
            <div className="login-popup__form--list popup-form-list">
                <label className="login-popup__label popup-label">
                    <input onChange={e => setEmailValue(e.target.value)} value={emailValue} type="email" name="email" required placeholder="Email"
                           className="login-popup__input popup-input email-valid-input"/>
                    <span
                        className="login-popup__input-placeholder popup-input-placeholder">Email</span>
                </label>
                <label className="login-popup__label popup-label">
                    <input onChange={e => setPasswordValue(e.target.value)} value={passwordValue} type="password" name="password" required placeholder="Пароль"
                           className="login-popup__input popup-input"/>
                    <span
                        className="login-popup__input-placeholder popup-input-placeholder">Пароль</span>
                </label>
            </div>
            <button type="submit" className="login-popup__submit popup-submit btn _large _shadow">
                Войти
            </button>
            <a href={"#"} onClick={_ => handleChangePopup(dispatch, "register-popup")} className="login-popup__link popup-link popup-close open-popup">
                Зарегестрироваться
            </a>
            <a href={"#"} onClick={_ => handleChangePopup(dispatch, "forgot-password-popup")} className="login-popup__link popup-link popup-close open-popup">
                Забыли пароль?
            </a>
            <AuthViaSocials/>
        </form>
    );
};

export default Form;