import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import RoomItem from "../RoomItem";
import axios from "axios";
import Pagination from "../../hooks/Pagination";
import GlobalLink from "../../GlobalLink";

const RoomsList = () => {

    const [rooms, setRooms] = useState([])
    const [pagination, setPagination] = useState({})
    const [pages, setPages] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const user = useSelector(state => state.userInfoReducer.data)

    useEffect(() => {

        if(Object.keys(user).length) {
            axios.get(GlobalLink(`/api/room/list/?page=${currentPage}`)).then(res => {

                setRooms(res.data.rooms)
                setPagination(res.data.paginator)
                setPages(
                    Array.from(
                        Array(res.data.paginator.page_count).keys()
                    )
                )

            }).catch(er => console.log(er))

            const socket = new WebSocket(`wss://board-games.sonisapps.com/ws/api/room/ws/game/all/`)
            socket.onopen = () => console.log('open')

            socket.onmessage = (e) => {
                const data = JSON.parse(JSON.parse(JSON.parse(e.data)).data)

                console.log(data)
                setRooms(prev => [...prev, data])
            }
        }

    }, [user, currentPage])

    return (
        <>
            <ul className="page-rooms__list">

                {
                    rooms.length ? rooms.sort((a, b) => a.players_count - b.players_count).map(room =>
                        <RoomItem key={room.id} game={room}/>
                    ) : "Комнат нет"
                }

            </ul>

            {pages.length > 1 && <Pagination
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                pagination={pagination}
                pages={pages}
            />}
        </>
    );
};

export default RoomsList;