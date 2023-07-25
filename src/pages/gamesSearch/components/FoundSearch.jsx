import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper/modules";
import Game from "../../../components/Game";
import GamesCount from "./GamesCount";

const FoundSearch = ({ games }) => {


    return (
        <div className="online-games__main" data-aos="fade-in" data-aos-delay="200">
            <div className="online-games__search-result">
                <h3 className="online-games__search-result--title section-title _decor-none">
                    Игра
                </h3>
                <span className="online-games__search-result--value">
                    <GamesCount games={games}/>
                </span>
            </div>
            <div className="online-games__main--wrapper">
                <div className={"online-games__slider " + (games.length < 4 && "_little")}>
                    <Swiper
                        spaceBetween={16}
                        navigation={{
                            nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button-prev",
                        }}
                        slidesPerView={4}
                        modules={[Navigation]}
                    >

                        {
                            games.map(game =>
                                <SwiperSlide>
                                    <Game
                                        title={game.name}
                                        link={`/${game.slug}`}
                                        image={game.image}
                                    />
                                </SwiperSlide>
                            )
                        }

                    </Swiper>

                    {games.length > 4 && <button className="online-games__slider--arrow swiper-button-prev"
                                                 type="button"></button>}
                    {games.length > 4 && <button className="online-games__slider--arrow swiper-button-next"
                                                 type="button"></button>}
                </div>
            </div>
        </div>
    );
};

export default FoundSearch;