import React from 'react';
import decor1 from "./../.././../assets/img/popups/decor-image-1.webp"
import decor2 from "./../.././../assets/img/popups/decor-image-2.webp"

const Decor = () => {
    return (
        <div className="login-popup__decor popup-decor">
            <div className="popup-decor__element _levitation" style={{animationDuration: "9s"}}>
                <picture>
                    <source srcSet={decor1} type="image/webp"/>
                    <img src={decor1} alt="" loading="lazy" width="0" height="0"
                         className="popup-decor__element--img"/>
                </picture>
            </div>
            <div className="popup-decor__element _levitation" style={{animationDuration: "11s"}}>
                <picture>
                    <source srcSet={decor2} type="image/webp"/>
                    <img src={decor2} alt="" loading="lazy" width="0" height="0"
                         className="popup-decor__element--img"/>
                </picture>
            </div>
        </div>
    );
};

export default Decor;