import React from 'react';

import bg1 from "./../../../assets/img/online-games/bg-1.png";
import bg2 from "./../../../assets/img/online-games/bg-2.png";

const Background = () => {
    return (
        <div className="online-games__bg section-page-bg" data-aos="fade-in" data-aos-delay="600">
            <div className="section-page-bg__element">
                <picture>
                    <source srcSet={bg1} type="image/webp"/>
                    <img src={bg1} loading="lazy" alt="" width="0" height="0"
                         className="section-page-bg__img"/>
                </picture>
            </div>
            <div className="section-page-bg__element">
                <picture>
                    <source srcSet={bg2} type="image/webp"/>
                    <img src={bg2} loading="lazy" alt="" width="0" height="0"
                         className="section-page-bg__img"/>
                </picture>
            </div>
        </div>
    );
};

export default Background;