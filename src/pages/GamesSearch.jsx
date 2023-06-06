import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {searchGames} from "../redux/actions";
import GamesSearchTrue from "../components/components_games/GamesSearchTrue";
import GamesSearchFalse from "../components/components_games/GamesSearchFalse";

const GamesSearch = () => {

    // const games = useSelector(state => state.gamesListReducer.games)
    // const rooms = useSelector(state => state.addRoomReducer.rooms)

    return (
        <main className="main">
            {/*{*/}
            {/*    rooms.filter(item => item.title.toLowerCase().includes(oldInput.toLowerCase())).length ||*/}
            {/*    games.filter(item => item.title.toLowerCase().includes(oldInput.toLowerCase())).length && oldInput.length ?*/}
            {/*        <GamesSearchTrue/> :*/}
            {/*        <GamesSearchFalse/>*/}
            {/*}*/}

            <GamesSearchTrue/>

        </main>
    );
};

export default GamesSearch;