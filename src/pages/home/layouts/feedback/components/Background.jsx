import React from 'react';

import background from './../../../../../assets/img/main-page/feedback/bg.webp'

const Background = () => {
    return (
        <div className="feedback__bg">
            <picture>
                <source srcSet={background} type="image/webp"/>
                <img src={background} loading="lazy" alt="" width="0" height="0"
                     className="feedback__bg--img"/>
            </picture>
        </div>
    );
};

export default Background;