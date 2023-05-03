import React from 'react';

const PopupRegisterLoginDecor = () => {
    return (
        <div className="registration-popup__decor popup-decor">
            <div className="popup-decor__element _levitation" style={{animationDuration: "9s"}}>
                <picture>
                    <img src="images/popups/decor-image-1.png" alt="" loading="lazy" width="0"
                         height="0"
                         className="popup-decor__element--img" />
                </picture>
            </div>
            <div className="popup-decor__element _levitation" style={{animationDuration: "11s"}}>
                <picture>
                    <img src="images/popups/decor-image-2.png" alt="" loading="lazy" width="0"
                         height="0"
                         className="popup-decor__element--img" />
                </picture>
            </div>
        </div>
    );
};

export default PopupRegisterLoginDecor;