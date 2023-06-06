import React, {useState} from 'react';
import GamesSearchTop from "./GamesSearchTop";
import {useSelector} from "react-redux";
import {GamesListReducer} from "../../redux/reducers/gamesListReducer";
import {NavLink} from "react-router-dom";
import GamesSearchGames from "./GamesSearchGames";
import GamesSearchRooms from "./GamesSearchRooms";

const GamesSearchTrue = () => {

    // const games = useSelector(state => {
    //     const {GamesListReducer} = state;
    //     return GamesListReducer.games;
    // })
    // const rooms = useSelector(state => {
    //     const {addRoomReducer} = state;
    //     return addRoomReducer.rooms;
    // })
    // const searchText = useSelector(state => {
    //     const {GamesSearchReducer} = state
    //     return GamesSearchReducer.text
    // })

    return (
        <section className="online-games page-padding">
            <div className="online-games__container container">
                <GamesSearchTop/>
                <GamesSearchGames/>
            </div>
            <div className="online-games__rooms">
                {/*{rooms.filter(item => item.title.toLowerCase().includes(searchText.toLowerCase())).length ? <GamesSearchRooms/> : ""}*/}
                {/*<GamesSearchRooms/>*/}
            </div>
        </section>
    );
};

export default GamesSearchTrue;