import React from 'react';
import './style.scss';
import {NavLink} from "react-router-dom";
import GamesBlock from "./components/GamesBlock";

const OnlineGames = () => {
    return (
        <section className="games section-padding">
            <div className="games__container container">
                <div className="games__header section-header" data-aos="fade-in">
                    <h2 className="games__title section-title">
                        Онлайн игры
                    </h2>
                    <NavLink to={"/games"} className="games__more-link more-link hide-on-table">
                        Все онлайн игры
                    </NavLink>
                </div>

                <GamesBlock/>

                <NavLink to={"/games"} className="games__more-btn alt-btn visible-on-table">
                    Все онлайн игры
                </NavLink>
            </div>
        </section>
    );
};

export default OnlineGames;