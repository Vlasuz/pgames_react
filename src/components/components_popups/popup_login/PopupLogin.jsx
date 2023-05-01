import React from 'react';
import PopupRegisterLoginDecor from "../PopupRegisterLoginDecor";
import PopupBgd from "../PopupBgd";
import PopupCross from "../PopupCross";
import openPopup from "../../../hooks/OpenPopup";
import PopupLoginForm from "./PopupLoginForm";

const PopupLogin = () => {

    return (
        <div className="login-popup popup" id="login-popup">
            <div className="login-popup__wrapper popup-wrapper">
                <PopupBgd/>
                <div className="login-popup__body popup-body">
                    <PopupRegisterLoginDecor/>
                    <div className="login-popup__container popup-container">
                        <PopupCross/>
                        <div className="login-popup__logo popup-logo">
                            <img src="../images/logo.svg" width="100" height="38" alt="" className="popup-logo__img" />
                        </div>
                        <h2 className="login-popup__title popup-title section-title _center">
                            Вход
                        </h2>
                        <PopupLoginForm />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopupLogin;