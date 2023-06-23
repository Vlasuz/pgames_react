import React, {useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import RoomItem from "../RoomItem";
import axios from "axios";
import GlobalLink from "../../GlobalLink";

const MainRoomsList = () => {

    const [rooms, setRooms] = useState([])
    const user = useSelector(state => state.userInfoReducer.data)

    useEffect(() => {
        if(Object.keys(user).length) {
            axios.get(GlobalLink(`/api/room/list/?page=1`)).then(res => {
                setRooms(res.data.rooms)
            })

            const socket = new WebSocket(`wss://board-games.sonisapps.com/ws/api/room/ws/game/all/`)
            socket.onopen = () => console.log('open')

            socket.onmessage = (e) => {
                const data = JSON.parse(JSON.parse(JSON.parse(e.data)).data)

                console.log(data)
                setRooms(prev => [...prev, data])
            }
        }
    }, [user])

    return (
        <ul className="rooms__list">

            {
                rooms.length ? rooms?.map((room, index) =>
                    index < 10 && <RoomItem key={index} game={room}/>
                ) : "Комнат нет"
            }

        </ul>
    );
};

export default MainRoomsList;