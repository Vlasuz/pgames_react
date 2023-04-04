import React from 'react';
import {NavLink} from "react-router-dom";
import MainLastNewsList from "./MainLastNewsList";
import OpenPopup from "../../hooks/OpenPopup";
import {useSelector} from "react-redux";

const MainLastNews = (props) => {

    return (
        <section className="last-news section-padding">
            <div className="last-news__container container">
                <div className="last-news__row">
                    <div className="last-news__header section-header" data-aos="fade-in">
                        <h2 className="last-news__title section-title">
                            Новости комании
                        </h2>
                        <NavLink to={"/news"} className="last-news__more-link more-link hide-on-table">
                            Все новости
                        </NavLink>
                    </div>

                    <MainLastNewsList />

                </div>
                <a onClick={OpenPopup} href={"#mini-video-popup"} className="last-news__game large-game" data-aos="fade-in" data-aos-delay="600">
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
            </div>
        </section>
    );
};

export default MainLastNews;