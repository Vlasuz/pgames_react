import React, {useState} from 'react';
import PopupBgd from "../PopupBgd";
import PopupCross from "../PopupCross";
import PopupSubscribeForm from "./PopupSubscribeForm";

const PopupSubscribe = () => {

    return (
        <div className="subscribe-popup popup" id="subscribe-popup">
            <div className="subscribe-popup__wrapper popup-wrapper">
                <PopupBgd/>
                <div className="subscribe-popup__body popup-body">
                    <div className="subscribe-popup__container popup-container">
                        <PopupCross/>
                        <div className="subscribe-popup__logo popup-logo">
                            <img src="../images/logo.svg" width="100" height="38" alt="" className="popup-logo__img" />
                        </div>
                        <h2 className="subscribe-popup__title popup-title section-title _center">
                            Подпишитесь!
                        </h2>
                        <div className="subscribe-popup__text popup-text">
                            Получайте все новости нашего сервиса первыми! И удача всегда будет с вами!
                        </div>
                        <PopupSubscribeForm />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopupSubscribe;