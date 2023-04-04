import React, {useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";
import GlobalLink from "../../GlobalLink";

const MainGamesList = ({ games }) => {

    return (
        <div className="games__wrapper tab-list">


            {
                games?.map((catalog, catalogNum) =>
                    <div
                        key={catalogNum}
                        className={"games__wrapper--block tab-block " + (catalogNum === 0 ? "_active _visible" : "")}>
                        <ul className="games__list">

                            {
                                catalog.game.map((game, index) =>
                                    <li key={index} className="games__item" data-aos="fade-in" data-aos-delay="300">
                                        <NavLink to={"/games/" + game.slug}
                                                 className="games__link" title={game.name}>
                                            <picture>
                                                <img src={GlobalLink(`/${game.image}`)} loading="lazy" alt={game.name}
                                                     width="200" height="200" className="games__link--img"/>
                                            </picture>
                                        </NavLink>
                                    </li>
                                )
                            }


                        </ul>
                    </div>
                )
            }

        </div>
    );
};

export default MainGamesList;