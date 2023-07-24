import React from 'react';
import AllIcons from "../../../features/allIcons";

const MiniVideo = ({title, image}) => {
    return (
        <a href="#" className="advantages__game large-game" data-aos="fade-in">
            <div className="large-game__preview">
                <picture>
                    <source srcSet={image} type="image/webp"/>
                    <img src={image} loading="lazy" alt="" width="300"
                         className="large-game__preview--img"/>
                </picture>
            </div>
            <img src={AllIcons("play")} width="42" height="42" alt="" className="large-game__play-icon"/>
            <h3 className="large-game__title">
                {title}
            </h3>
        </a>
    );
};

export default MiniVideo;