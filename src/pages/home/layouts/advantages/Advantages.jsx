import React from 'react';
import './style.scss';
import Background from "./components/Background";
import DecorLeft from "./components/DecorLeft";
import DecorRight from "./components/DecorRight";
import logo from '../../../../assets/img/logo.svg'
import List from "./components/List";
import MiniVideo from "../../components/MiniVideo";

import videoPoster from './../../../../assets/img/main-page/advantages/super-game.webp'

const Advantages = () => {
    return (
        <section className="advantages section-padding">
            <Background/>
            <div className="advantages__container container">
                <div className="advantages__header">
                    <DecorLeft/>
                    <div className="advantages__header--block" data-aos="fade-in" data-aos-delay="400">
                        <img src={logo} height="60" alt="" className="advantages__logo"/>
                        <h2 className="advantages__title section-title _center">
                            Наши Преимущества
                        </h2>
                        <div className="advantages__subtext">
                            Стараемся ради твоей победы
                        </div>
                    </div>
                    <DecorRight/>
                </div>
                <List/>
                <MiniVideo title={"Супер игра"} image={videoPoster}/>
            </div>
        </section>
    );
};

export default Advantages;