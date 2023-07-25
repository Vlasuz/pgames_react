import React from 'react';
import "./style.scss"
import GamesBlock from "../home/layouts/onlineGames/components/GamesBlock";
import Background from "./components/Background";
import GamesPageHeader from "../../components/gamesPageHeader/GamesPageHeader";


const Games = () => {
    return (
        <main className="main">
            <section className="online-games section-page-bg-wrapper page-padding">
                <Background/>
                <div className="online-games__container container">
                    <GamesPageHeader/>
                    <GamesBlock/>
                    <a href="#" className="online-games__more-btn alt-btn _transparent visible-on-table">
                        Показать ещё
                    </a>
                </div>
            </section>
        </main>
    );
};

export default Games;