import React from 'react';

const MainIntroDecorRight = () => {
    return (
        <div className="intro__decor" data-aos="fade-down" data-aos-delay="600">
            <div className="intro__decor--image parallax-scene _levitation"
                 style={{animationDuration: "6s"}}>
                <div className="intro__decor--image-item" data-depth="0.3"
                     style={{width: "max(100px, 65%)"}}>
                    <picture className="hide-on-table">
                        <source srcSet="images/main-page/intro/decor/item-2-1.webp"
                                type="image/webp"/>
                        <img src="images/main-page/intro/decor/item-2-1.png" loading="lazy" alt=""
                             style={{transform: "translate(0%,0%)"}}
                             className="intro__decor--img"/>
                    </picture>
                </div>
                <div className="intro__decor--image-item" data-depth="0.5"
                     style={{width: "max(60px, 45%)"}}>
                    <picture className="hide-on-table">
                        <source srcSet="images/main-page/intro/decor/item-2-2.webp"
                                type="image/webp"/>
                        <img src="images/main-page/intro/decor/item-2-2.png" loading="lazy" alt=""
                             style={{transform: "translate(50%,145%)"}}
                             className="intro__decor--img"/>
                    </picture>
                </div>
                <div className="intro__decor--image-item" data-depth="0.7"
                     style={{width: "max(60px, 45%)"}}>
                    <picture className="hide-on-table">
                        <source srcSet="images/main-page/intro/decor/item-2-3.webp"
                                type="image/webp"/>
                        <img src="images/main-page/intro/decor/item-2-3.png" loading="lazy" alt=""
                             style={{transform: "translate(130%,105%)"}}
                             className="intro__decor--img"/>
                    </picture>
                </div>
                <div className="intro__decor--image-item" data-depth="0.3"
                     style={{width: "max(100px, 65%)"}}>
                    <picture className="visible-on-table">
                        <source srcSet="images/main-page/intro/decor/item-2-1.webp"
                                type="image/webp"/>
                        <img src="images/main-page/intro/decor/item-2-1.png" loading="lazy" alt=""
                             style={{transform: "translate(50%,0%)"}}
                             className="intro__decor--img"/>
                    </picture>
                </div>
                <div className="intro__decor--image-item" data-depth="0.7"
                     style={{width: "max(30px, 35%)"}}>
                    <picture className="visible-on-table">
                        <source srcSet="images/main-page/intro/decor/item-2-2.webp"
                                type="image/webp"/>
                        <img src="images/main-page/intro/decor/item-2-2.png" loading="lazy" alt=""
                             style={{transform: "translate(150%,175%)"}}
                             className="intro__decor--img"/>
                    </picture>
                </div>
            </div>
        </div>
    );
};

export default MainIntroDecorRight;