import React from 'react';
import decor1 from '../../../../../assets/img/main-page/intro/decor/item-2-1.webp'
import decor2 from '../../../../../assets/img/main-page/intro/decor/item-2-2.webp'
import decor3 from '../../../../../assets/img/main-page/intro/decor/item-2-3.webp'

const DecorRight = () => {
    return (
        <div className="intro__decor" data-aos="fade-down" data-aos-delay="600">
            <div className="intro__decor--image parallax-scene _levitation"
                 style={{animationDuration: "6s"}}>
                <div className="intro__decor--image-item" data-depth="0.3"
                     style={{width: "max(100px, 65%)"}}>
                    <picture className="hide-on-table">
                        <source srcSet={decor1}
                                type="image/webp"/>
                        <img src={decor1} loading="lazy"
                             alt=""
                             style={{width: "100%", transform: "translate(0%,0%)"}}
                             className="intro__decor--img"/>
                    </picture>
                </div>
                <div className="intro__decor--image-item" data-depth="0.5"
                     style={{width: "max(60px, 45%)"}}>
                    <picture className="hide-on-table">
                        <source srcSet={decor2}
                                type="image/webp"/>
                        <img src={decor2} loading="lazy"
                             alt=""
                             style={{width: "100%", transform: "translate(50%,145%)"}}
                             className="intro__decor--img"/>
                    </picture>
                </div>
                <div className="intro__decor--image-item" data-depth="0.7"
                     style={{width: "max(60px, 45%)"}}>
                    <picture className="hide-on-table">
                        <source srcSet={decor3}
                                type="image/webp"/>
                        <img src={decor3} loading="lazy"
                             alt=""
                             style={{width: "100%", transform: "translate(130%,105%)"}}
                             className="intro__decor--img"/>
                    </picture>
                </div>
                <div className="intro__decor--image-item" data-depth="0.3"
                     style={{width: "max(100px, 65%)"}}>
                    <picture className="visible-on-table">
                        <source srcSet={decor1}
                                type="image/webp"/>
                        <img src={decor1} loading="lazy"
                             alt=""
                             style={{width: "100%", transform: "translate(50%,0%)"}}
                             className="intro__decor--img"/>
                    </picture>
                </div>
                <div className="intro__decor--image-item" data-depth="0.7"
                     style={{width: "max(30px, 35%)"}}>
                    <picture className="visible-on-table">
                        <source srcSet={decor2}
                                type="image/webp"/>
                        <img src={decor2} loading="lazy"
                             alt=""
                             style={{width: "100%", transform: "translate(150%,175%)"}}
                             className="intro__decor--img"/>
                    </picture>
                </div>
            </div>
        </div>
    );
};

export default DecorRight;