import React from 'react';
import PopupBgd from "../PopupBgd";
import PopupCross from "../PopupCross";
import openPopup from "../../../hooks/OpenPopup";
import {popupTitle} from "../../../redux/actions";
import {useDispatch} from "react-redux";

const PopupForgotPasswordSent = () => {

    const dispatch = useDispatch()

    return (
        <div className="password-send-popup popup" id="password-send-popup">
            <div className="password-send-popup__wrapper popup-wrapper">
                <PopupBgd/>
                <div className="password-send-popup__body popup-body">
                    <div className="password-send-popup__container popup-container">
                        <PopupCross/>
                        <div className="password-send-popup__logo popup-logo">
                            <img src="images/logo.svg" width="100" height="38" alt="" className="popup-logo__img" />
                        </div>
                        <h2 className="password-send-popup__title popup-title section-title _center">
                            Забыли пароль?
                        </h2>
                        <div className="password-send-popup__text popup-text">
                            Ваш пароль будет выслан в течении пары минут вам на почту
                        </div>
                        <a onClick={_ => dispatch(popupTitle('login'))}
                           className="password-send-popup__btn btn _large _shadow popup-btn popup-close open-popup">
                            Войти в аккаунт
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopupForgotPasswordSent;