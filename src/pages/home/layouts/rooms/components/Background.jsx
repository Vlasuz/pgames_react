import React from 'react';
import background from "../../../../../assets/img/main-page/rooms/bg.webp";
import backgroundMob from "../../../../../assets/img/main-page/rooms/bg-mob.webp";

const Background = () => {
    return (
        <div className="rooms__bg">
            <picture>
                <source srcSet={background} media="(min-width: 426px)" type="image/webp"/>
                <source srcSet={backgroundMob} type="image/webp"/>
                <img src={background} loading="lazy" alt="" width="0" height="0"
                     className="rooms__bg--img"/>
            </picture>
        </div>
    );
};

export default Background;