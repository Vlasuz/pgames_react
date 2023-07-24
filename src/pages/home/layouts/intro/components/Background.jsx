import React from 'react';
import backgroundWebp from '../../../../../assets/img/main-page/intro/bg.webp'
import backgroundPng from '../../../../../assets/img/main-page/intro/bg.png'

const Background = () => {
    return (
        <div className="intro__bg">
            <div className="intro__bg--text">
                privat <br/> games
            </div>
            <div className="intro__bg--element">
                <picture>
                    <source srcSet={backgroundWebp} type="image/webp"/>
                    <img src={backgroundPng} alt="" loading="lazy" width="0" height="0"
                         className="intro__bg--img"/>
                </picture>
            </div>
        </div>
    );
};

export default Background;