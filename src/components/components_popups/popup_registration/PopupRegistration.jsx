import React from 'react';
import PopupBgd from "../PopupBgd";
import PopupCross from "../PopupCross";
import PopupRegisterLoginDecor from "../PopupRegisterLoginDecor";
import openPopup from "../../../hooks/OpenPopup";
import PopupViaSocials from "../PopupViaSocials";
import PopupRegistrationForm from "./PopupRegistrationForm";

const PopupRegistration = () => {
    return (
        <div className="registration-popup popup" id="registration-popup">
            <div className="registration-popup__wrapper popup-wrapper">
                <PopupBgd/>
                <div className="registration-popup__body popup-body">
                    <PopupRegisterLoginDecor/>
                    <div className="registration-popup__container popup-container">

                        <PopupCross/>

                        <div className="registration-popup__logo popup-logo">
                            <img src="../images/logo.svg" width="100" height="38" alt="" className="popup-logo__img" />
                        </div>
                        <h2 className="registration-popup__title popup-title section-title _center">
                            Регистрация
                        </h2>
                        <PopupRegistrationForm />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopupRegistration;