import React, {useEffect} from 'react';
import MainIntroSlider from "./MainIntroSlider";
import JsParallax from "../JS_Parallax";

const MainIntro = () => {

    useEffect(() => {
        JsParallax()
    })

    return (
        <section className="intro">
            <div className="intro__bg">
                <div className="intro__bg--text">
                    privat <br/> games
                </div>
                <div className="intro__bg--element">
                    <picture>
                        <source srcSet="images/main-page/intro/bg.webp" type="image/webp"/>
                        <img src="images/main-page/intro/bg.png" alt="" loading="lazy" width="0" height="0"
                             className="intro__bg--img"/>
                    </picture>
                </div>
            </div>
            <div className="intro__container container">
                <MainIntroSlider/>
            </div>
        </section>
    );
};

export default MainIntro;