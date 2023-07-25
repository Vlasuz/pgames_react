import React, {useEffect, useState} from 'react';
import GamesPageHeader from "../../components/gamesPageHeader/GamesPageHeader";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination, Scrollbar, A11y} from 'swiper/modules';

import "./style.scss"
import Game from "../../components/Game";
import Room from "../../components/Room";
import Background from "../games/components/Background";
import image1 from "../../assets/img/main-page/games/image-1.webp";
import {useParams} from "react-router-dom";
import axios from "axios";
import ApiLink from "../../constants/ApiLink";
import FoundSearch from "./components/FoundSearch";
import EmptySearch from "./components/EmptySearch";

const GamesSearch = () => {

    const {value} = useParams()

    const [games, setGames] = useState([])

    useEffect(() => {
        axios.get(ApiLink(`api/game/search/?query=${value}`)).then(({data}) => {
            console.log(data)
            setGames(data)
        })
    }, [value])

    return (
        <main className="main">
            <section className="online-games online-games-search page-padding">
                <Background/>
                <div className="online-games__container container">
                    <GamesPageHeader
                        value={value}
                    />
                    {!!games.length ? <FoundSearch games={games}/> : <EmptySearch/>}
                </div>

            </section>
        </main>
    );
};

export default GamesSearch;