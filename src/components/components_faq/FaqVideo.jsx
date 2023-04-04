import React from 'react';
import OpenPopup from "../../hooks/OpenPopup";

const FaqVideo = () => {
    return (
        <a onClick={OpenPopup} href={"#mini-video-popup"} className="faq__game large-game" data-aos="fade-in">
            <div className="large-game__preview">
                <picture>
                    <img src="../images/main-page/news/game.jpg" loading="lazy" alt="" width="300"
                         className="large-game__preview--img"/>
                </picture>
            </div>
            <img src="../images/icons/play.svg" width="42" height="42" alt=""
                 className="large-game__play-icon"/>
            <h3 className="large-game__title">
                Шахматные игры
            </h3>
        </a>
    );
};

export default FaqVideo;