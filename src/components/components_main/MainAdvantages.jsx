import React from 'react';
import MainAdvantagesDecorLeft from "./MainAdvantagesDecorLeft";
import MainAdvantagesDecorRight from "./MainAdvantagesDecorRight";
import MainAdvantagesList from "./MainAdvantagesList";
import OpenPopup from "../../hooks/OpenPopup";
import {popupTitle} from "../../redux/actions";
import {useDispatch} from "react-redux";

const MainAdvantages = () => {
    const dispatch = useDispatch()
    return (
        <section className="advantages section-padding" id={"advantages-id"}>
            <div className="advantages__bg">
                <picture>
                    <source srcSet="images/main-page/advantages/bg.webp" type="image/webp"/>
                    <img src="images/main-page/advantages/bg.png" loading="lazy" alt="" width="0" height="0"
                         className="advantages__bg--img"/>
                </picture>
            </div>
            <div className="advantages__container container">
                <div className="advantages__header">
                    <MainAdvantagesDecorLeft/>
                    <div className="advantages__header--block" data-aos="fade-in" data-aos-delay="400">
                        <img src="images/logo.svg" height="60" alt="" className="advantages__logo"/>
                        <h2 className="advantages__title section-title _center">
                            Наши Преимущества
                        </h2>
                        <div className="advantages__subtext">
                            Стараемся ради твоей победы
                        </div>
                    </div>
                    <MainAdvantagesDecorRight/>
                </div>
                <MainAdvantagesList />
                <a onClick={_ => dispatch(popupTitle('mini-video'))} className="advantages__game large-game" data-aos="fade-in">
                    <div className="large-game__preview">
                        <picture>
                            <img src="images/main-page/advantages/super-game.jpg" loading="lazy" alt="" width="300"
                                 className="large-game__preview--img"/>
                        </picture>
                    </div>
                    <img src="images/icons/play.svg" width="42" height="42" alt=""
                         className="large-game__play-icon"/>
                    <h3 className="large-game__title">
                        Супер игра
                    </h3>
                </a>
            </div>
        </section>
    );
};

export default MainAdvantages;