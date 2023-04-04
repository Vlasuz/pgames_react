import React, {useState} from 'react';
import {Link} from "react-router-dom";
import MainGamesCatalog from "./MainGamesCatalog";
import MainGamesList from "./MainGamesList";
import {useSelector} from "react-redux";

const MainGames = () => {

    const games = useSelector(state => state.gamesListReducer.list)

    return (
        <section className="games section-padding">
            <div className="games__container container">
                <div className="games__header section-header" data-aos="fade-in">
                    <h2 className="games__title section-title">
                        Онлайн игры
                    </h2>
                    <Link to={"/games"} className="games__more-link more-link hide-on-table">
                        Все онлайн игры
                    </Link>
                </div>
                <div className="games__body tab-wrapper" data-aos="fade-in" data-aos-delay="300">
                    <MainGamesCatalog games={games} />
                    <MainGamesList games={games} />
                </div>
                <a href="online-games.html" className="games__more-btn alt-btn visible-on-table">
                    Все онлайн игры
                </a>
            </div>
        </section>
    );
};

export default MainGames;