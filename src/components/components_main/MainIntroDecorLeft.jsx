import React from 'react';

const MainIntroDecorLeft = () => {
    return (
        <div className="intro__decor" data-aos="fade-up" data-aos-delay="400">
            <div className="intro__decor--image parallax-scene _levitation"
                 style={{animationDuration: "7s"}}>
                <div className="intro__decor--image-item" data-depth="0.3"
                     style={{width: "max(147px, 80%)"}}>
                    <picture className="hide-on-table">
                        <source srcSet="images/main-page/intro/decor/item-1-2.webp"
                                type="image/webp"/>
                        <img src="../images/main-page/intro/decor/item-1-2.png" loading="lazy" alt=""
                             className="intro__decor--img"
                             style={{transform: "translate(15%,0%)"}}/>
                    </picture>
                </div>
                <div className="intro__decor--image-item" data-depth="0.5"
                     style={{width: "max(30%, 50px)"}}>
                    <picture className="hide-on-table">
                        <source srcSet="images/main-page/intro/decor/item-1-1.webp"
                                type="image/webp"/>
                        <img src="../images/main-page/intro/decor/item-1-1.png" loading="lazy" alt=""
                             style={{transform: "translate(25%,100%)"}}
                             className="intro__decor--img"/>
                    </picture>
                </div>
                <div className="intro__decor--image-item" data-depth="0.9"
                     style={{width: "max(40px, 25%)"}}>
                    <picture className="hide-on-table">
                        <source srcSet="images/main-page/intro/decor/item-1-3.webp"
                                type="image/webp"/>
                        <img src="../images/main-page/intro/decor/item-1-3.png" loading="lazy" alt=""
                             style={{transform: "translate(320%,90%)"}}
                             className="intro__decor--img"/>
                    </picture>
                </div>
                <div className="intro__decor--image-item" data-depth="0.3" style={{width: "50%"}}>
                    <picture className="visible-on-table">
                        <source srcSet="images/main-page/intro/decor/item-1-2.webp"
                                type="image/webp"/>
                        <img src="../images/main-page/intro/decor/item-1-2.png" loading="lazy" alt=""
                             style={{transform: "translate(0%,0%)"}}
                             className="intro__decor--img"/>
                    </picture>
                </div>
                <div className="intro__decor--image-item" data-depth="0.9" style={{width: "15%"}}>
                    <picture className="visible-on-table">
                        <source srcSet="images/main-page/intro/decor/item-1-3.webp"
                                type="image/webp"/>
                        <img src="../images/main-page/intro/decor/item-1-3.png" loading="lazy" alt=""
                             style={{transform: "translate(250%,50%)"}}
                             className="intro__decor--img"/>
                    </picture>
                </div>
                <div className="intro__decor--image-item" data-depth="0.5" style={{width: "25%"}}>
                    <picture className="visible-on-table">
                        <source srcSet="images/main-page/intro/decor/item-1-1.webp"
                                type="image/webp"/>
                        <img src="../images/main-page/intro/decor/item-1-1.png" loading="lazy" alt=""
                             style={{transform: "translate(250%,100%)"}}
                             className="intro__decor--img"/>
                    </picture>
                </div>
                <div className="intro__decor--image-item" data-depth="0.5" style={{width: "35%"}}>
                    <picture className="visible-on-table">
                        <source srcSet="images/main-page/intro/decor/item-2-3.webp"
                                type="image/webp"/>
                        <img src="../images/main-page/intro/decor/item-2-3.png" loading="lazy" alt=""
                             style={{transform: "translate(270%,130%)"}}
                             className="intro__decor--img"/>
                    </picture>
                </div>
            </div>
        </div>
    );
};

export default MainIntroDecorLeft;