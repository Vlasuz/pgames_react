import React, {useState} from 'react';
import PopupCross from "../PopupCross";
import PopupBgd from "../PopupBgd";
import OpenPopup from "../../../hooks/OpenPopup";
import PopupForgotPasswordForm from "./PopupForgotPasswordForm";

const PopupForgotPassword = () => {
    return (
        <div className="forgot-password-popup popup" id="forgot-password-popup">
            <div className="forgot-password-popup__wrapper popup-wrapper">
                <PopupBgd/>
                <div className="forgot-password-popup__body popup-body">
                    <div className="forgot-password-popup__container popup-container">
                        <PopupCross/>
                        <div className="forgot-password-popup__logo popup-logo">
                            <img src="images/logo.svg" width="100" height="38" alt="" className="popup-logo__img" />
                        </div>
                        <h2 className="forgot-password-popup__title popup-title section-title _center">
                            Забыли пароль?
                        </h2>
                        <div className="forgot-password-popup__text popup-text">
                            Введите ваш email и пароль будет отправлен вам на почту
                        </div>
                        <PopupForgotPasswordForm />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopupForgotPassword;