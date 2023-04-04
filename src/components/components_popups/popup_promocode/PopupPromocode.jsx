import React from 'react';
import PopupBgd from "../PopupBgd";
import PopupCross from "../PopupCross";
import PopupPromocodeForm from "./PopupPromocodeForm";

const PopupPromocode = () => {
    return (
        <div className="promocode-popup popup" id="promocode-popup">
            <div className="promocode-popup__wrapper popup-wrapper">
                <PopupBgd />
                <div className="promocode-popup__body popup-body">
                    <div className="promocode-popup__container popup-container">
                        <PopupCross />
                        <div className="promocode-popup__logo popup-logo">
                            <img src="../images/logo.svg" width="100" height="38" alt="" className="popup-logo__img" />
                        </div>
                        <h2 className="promocode-popup__title popup-title section-title _center">
                            Промокод
                        </h2>
                        <PopupPromocodeForm/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopupPromocode;