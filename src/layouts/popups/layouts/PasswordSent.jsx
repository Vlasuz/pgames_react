import React from 'react';
import handleChangePopup from "../../../features/handleChangePopup";
import {useDispatch} from "react-redux";
import logo from "./../../../assets/img/logo.svg"
import Cross from "../components/Cross";

const PasswordSent = () => {

    const dispatch = useDispatch()

    return (
        <div className="password-send-popup__body popup-body">
            <div className="password-send-popup__container popup-container">
                <Cross/>
                <div className="password-send-popup__logo popup-logo">
                    <img src={logo} width="100" height="38" alt="" className="popup-logo__img"/>
                </div>
                <h2 className="password-send-popup__title popup-title section-title _center">
                    Забыли пароль?
                </h2>
                <div className="password-send-popup__text popup-text">
                    Ваш пароль будет выслан в течении пары минут вам на почту
                </div>
                <a href="#" onClick={_ => handleChangePopup(dispatch, "login-popup")} className="password-send-popup__btn btn _large _shadow popup-btn popup-close open-popup">
                    Войти в аккаунт
                </a>
            </div>
        </div>
    );
};

export default PasswordSent;