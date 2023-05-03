import React, {useState} from 'react';
import GamesSearchTop from "./GamesSearchTop";

const GamesSearchFalse = () => {
    return (
        <section className="online-games page-padding">
            <div className="online-games__container container">
                <GamesSearchTop/>
                <div className="online-games__main" data-aos="fade-in" data-aos-delay="200">
                    <div className="online-games__main--wrapper">
                        <div className="online-games__not-found">
                            <div className="online-games__not-found--body">
                                <img src="images/online-games/icon.svg" width="93" height="77" loading="lazy"
                                     alt="" className="online-games__not-found--icon" />
                                <h3 className="online-games__not-found--title section-title _center">
                                    Результаты не найдены
                                </h3>
                                <div className="online-games__not-found--text">
                                    Проверьте правильность ввода запроса
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GamesSearchFalse;