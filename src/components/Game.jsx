import React from 'react';
import {NavLink} from "react-router-dom";

const Game = ({title, image, link}) => {
    return (
        <li className="games__item" data-aos="fade-in" data-aos-delay="300">
            <NavLink to={link} className="games__link" title={title}>
                <picture>
                    <source srcSet={image} type="image/webp"/>
                    <img src={image} loading="lazy" alt=""
                         width="200"
                         height="200" className="games__link--img"/>
                </picture>
            </NavLink>
        </li>
    );
};

export default Game;