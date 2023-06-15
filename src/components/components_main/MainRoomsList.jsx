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
                console.log('111', res.data.rooms)
                setRooms(res.data.rooms)
            })
        }
    }, [user])

    return (
        <ul className="rooms__list">

            {
                rooms?.map((room, index) =>
                    index < 10 && <RoomItem key={index} game={room}/>
                )
            }

        </ul>
    );
};

export default MainRoomsList;