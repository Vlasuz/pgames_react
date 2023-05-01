import React, {useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import RoomItem from "../RoomItem";
import axios from "axios";
import GlobalLink from "../../GlobalLink";

const MainRoomsList = () => {

    const [rooms, setRooms] = useState([])
    const games = useSelector(state => state.gamesListReducer.list)

    useEffect(() => {
        if(games[0]?.game[0]?.slug){
            axios.get(GlobalLink(`/api/game/get/${games[0]?.game[0]?.slug}/`)).then(res => {
                console.log('rooms', res.data)
                setRooms(res.data.room)
            })
        }
    }, [games])

    return (
        <ul className="rooms__list">

            {
                rooms?.map((game, index) =>
                    index < 10 && <RoomItem key={index} game={game} />
                )
            }

        </ul>
    );
};

export default MainRoomsList;