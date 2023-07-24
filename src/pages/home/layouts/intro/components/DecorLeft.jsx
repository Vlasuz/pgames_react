import React from 'react';
import decor1 from '../../../../../assets/img/main-page/intro/decor/item-1-1.webp'
import decor2 from '../../../../../assets/img/main-page/intro/decor/item-1-2.webp'
import decor3 from '../../../../../assets/img/main-page/intro/decor/item-1-3.webp'
import decor4 from '../../../../../assets/img/main-page/intro/decor/item-2-3.webp'

const DecorLeft = () => {
    return (
        <div className="intro__decor" data-aos="fade-up" data-aos-delay="400">
            <div className="intro__decor--image parallax-scene _levitation"
                 style={{animationDuration: "7s"}}>
                <div className="intro__decor--image-item" data-depth="0.3"
                     style={{width: "max(147px, 80%)"}}>
                    <picture className="hide-on-table">
                        <source srcSet={decor2}
                                type="image/webp"/>
                        <img src={decor2} loading="lazy"
                             alt=""
                             style={{width: "100%", transform: "translate(15%,0%)"}}
                             className="intro__decor--img"/>
                    </picture>
                </div>
                <div className="intro__decor--image-item" data-depth="0.5"
                     style={{width: "max(30%, 50px)"}}>
                    <picture className="hide-on-table">
                        <source srcSet={decor1}
                                type="image/webp"/>
                        <img src={decor1} loading="lazy"
                             alt=""
                             style={{width: "100%", transform: "translate(25%,150%)"}}
                             className="intro__decor--img"/>
                    </picture>
                </div>
                <div className="intro__decor--image-item" data-depth="0.9"
                     style={{width: "max(40px, 25%)"}}>
                    <picture className="hide-on-table">
                        <source srcSet={decor3}
                                type="image/webp"/>
                        <img src={decor3} loading="lazy"
                             alt=""
                             style={{width: "100%", transform: "translate(320%,90%)"}}
                             className="intro__decor--img"/>
                    </picture>
                </div>
                <div className="intro__decor--image-item" data-depth="0.3" style={{width: "50%"}}>
                    <picture className="visible-on-table">
                        <source srcSet={decor2}
                                type="image/webp"/>
                        <img src={decor2} loading="lazy"
                             alt=""
                             style={{width: "100%", transform: "translate(0%,0%)"}}
                             className="intro__decor--img"/>
                    </picture>
                </div>
                <div className="intro__decor--image-item" data-depth="0.9" style={{width: "15%"}}>
                    <picture className="visible-on-table">
                        <source srcSet={decor3}
                                type="image/webp"/>
                        <img src={decor3} loading="lazy"
                             alt=""
                             style={{width: "100%", transform: "translate(250%,50%)"}}
                             className="intro__decor--img"/>
                    </picture>
                </div>
                <div className="intro__decor--image-item" data-depth="0.5" style={{width: "25%"}}>
                    <picture className="visible-on-table">
                        <source srcSet={decor1}
                                type="image/webp"/>
                        <img src={decor1} loading="lazy"
                             alt=""
                             style={{width: "100%", transform: "translate(250%,100%)"}}
                             className="intro__decor--img"/>
                    </picture>
                </div>
                <div className="intro__decor--image-item" data-depth="0.5" style={{width: "35%"}}>
                    <picture className="visible-on-table">
                        <source srcSet={decor4}
                                type="image/webp"/>
                        <img src={decor4} loading="lazy"
                             alt=""
                             style={{width: "100%", transform: "translate(270%,130%)"}}
                             className="intro__decor--img"/>
                    </picture>
                </div>
            </div>
        </div>
    );
};

export default DecorLeft;