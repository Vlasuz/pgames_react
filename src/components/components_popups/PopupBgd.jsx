import React from 'react';
import ClosePopup from "../../hooks/ClosePopup";

const PopupBgd = () => {
    return (
        <div onClick={ClosePopup} className="promocode-popup__bg popup-bg popup-close">

        </div>
    );
};

export default PopupBgd;