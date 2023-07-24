import React from 'react';

import decor1 from './../../../../../assets/img/main-page/feedback/image-1-2.webp'
import decor2 from './../../../../../assets/img/main-page/feedback/image-1-1.webp'

const DecorLeft = () => {
    return (
        <div className="feedback__decor hide-on-table" data-aos="fade-in" data-aos-delay="700">
            <div className="feedback__decor--body">
                <div className="feedback__decor--item _levitation"
                     style={{left: "0", top: "0", width: "70%", animationDuration: "6s"}}>
                    <picture className="hide-on-table">
                        <source srcSet={decor1} type="image/webp"/>
                        <img src={decor1} loading="lazy" alt=""
                             width="200"
                             height="335" className="feedback__decor--img"/>
                    </picture>
                </div>
                <div className="feedback__decor--item _levitation" style={{left: "0", bottom: "0", width: "50%"}}>
                    <picture className="hide-on-table">
                        <source srcSet={decor2} type="image/webp"/>
                        <img src={decor2} loading="lazy"
                             style={{transform: "translate(0,25%)"}} alt="" width="200" height="335"
                             className="feedback__decor--img"/>
                    </picture>
                </div>
            </div>
        </div>
    );
};

export default DecorLeft;