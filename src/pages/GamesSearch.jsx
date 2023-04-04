import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {searchGames} from "../redux/actions";
import GamesSearchTrue from "../components/components_games/GamesSearchTrue";
import GamesSearchFalse from "../components/components_games/GamesSearchFalse";

const GamesSearch = () => {

    const oldInput = useSelector(state => {
        const {GamesSearchReducer} = state
        return GamesSearchReducer.text
    })
    const games = useSelector(state => {
        const {GamesListReducer} = state;
        return GamesListReducer.games;
    })
    const rooms = useSelector(state => {
        const {addRoomReducer} = state;
        return addRoomReducer.rooms;
    })

    return (
        <main className="main">
            {
                rooms.filter(item => item.title.toLowerCase().includes(oldInput.toLowerCase())).length ||
                games.filter(item => item.title.toLowerCase().includes(oldInput.toLowerCase())).length && oldInput.length ?
                    <GamesSearchTrue/> :
                    <GamesSearchFalse/>
            }

        </main>
    );
};

export default GamesSearch;