import React from 'react';

import decor1 from './../../../../../assets/img/main-page/feedback/image-2-1.webp';
import decor2 from './../../../../../assets/img/main-page/feedback/image-2-2.webp';
import decor3 from './../../../../../assets/img/main-page/feedback/image-2-3.webp';
import decor4 from './../../../../../assets/img/main-page/feedback/image-1-1.webp';
import decor5 from './../../../../../assets/img/main-page/feedback/image-1-2.webp';

const DecorRight = () => {
    return (
        <div className="feedback__decor" data-aos="fade-in" data-aos-delay="700">
            <div className="feedback__decor--body">
                <div className="feedback__decor--item _levitation"
                     style={{right: "50%", top: "0", width: "35%", animationDuration: "4.5s"}}>
                    <picture className="hide-on-table">
                        <source srcSet={decor1} type="image/webp"/>
                        <img src={decor1} loading="lazy" alt=""
                             width="200"
                             height="335" className="feedback__decor--img"/>
                    </picture>
                </div>
                <div className="feedback__decor--item _levitation" style={{right: "5%", top: "15%", width: "55%"}}>
                    <picture className="hide-on-table">
                        <source srcSet={decor2} type="image/webp"/>
                        <img src={decor2} loading="lazy"
                             style={{transform: "translate(0,25%)"}} alt="" width="200" height="335"
                             className="feedback__decor--img"/>
                    </picture>
                </div>
                <div className="feedback__decor--item _levitation"
                     style={{right: "40%", bottom: "-15%", width: "50%", animationDuration: "5.5s"}}>
                    <picture className="hide-on-table">
                        <source srcSet={decor3} type="image/webp"/>
                        <img src={decor3} loading="lazy"
                             style={{transform: "translate(0,25%)"}} alt="" width="200" height="335"
                             className="feedback__decor--img"/>
                    </picture>
                </div>
                <div className="feedback__decor--item _levitation"
                     style={{right: "25%", top: "15%", width: "80px", animationDuration: "4.5s"}}>
                    <picture className="visible-on-table">
                        <source srcSet={decor1} type="image/webp"/>
                        <img src={decor1} loading="lazy" alt=""
                             width="200"
                             height="335" className="feedback__decor--img"/>
                    </picture>
                </div>
                <div className="feedback__decor--item _levitation"
                     style={{right: "35%", top: "15%", width: "110px"}}>
                    <picture className="visible-on-table">
                        <source srcSet={decor5} type="image/webp"/>
                        <img src={decor5} loading="lazy"
                             style={{transform: "translate(0,25%)"}} alt="" width="200" height="335"
                             className="feedback__decor--img"/>
                    </picture>
                </div>
                <div className="feedback__decor--item _levitation"
                     style={{right: "45%", bottom: "-30%", width: "100px", animationDuration: "5.5s"}}>
                    <picture className="visible-on-table">
                        <source srcSet={decor4} type="image/webp"/>
                        <img src={decor4} loading="lazy"
                             style={{transform: "translate(0,25%)"}} alt="" width="200" height="335"
                             className="feedback__decor--img"/>
                    </picture>
                </div>
            </div>
        </div>
    );
};

export default DecorRight;