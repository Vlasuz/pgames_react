import React from 'react';
import background from '../../../../../assets/img/main-page/advantages/bg.webp'

const Background = () => {
    return (
        <div className="advantages__bg">
            <picture>
                <source srcSet={background} type="image/webp"/>
                <img src={background} loading="lazy" alt="" width="0" height="0"
                     className="advantages__bg--img"/>
            </picture>
        </div>
    );
};

export default Background;