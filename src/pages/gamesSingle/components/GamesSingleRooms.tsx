import React, {Dispatch, SetStateAction, useEffect, useState} from 'react'
import {Room} from "../../../components/room/Room";
import {IRoom} from "../../../models";
import axios from "axios";
import {getApiLink} from "../../../functions/getApiLink";
import {useParams} from "react-router-dom";

interface IGamesSingleRoomsProps {
    setIsCreateGame: Dispatch<SetStateAction<boolean>>
}

export const GamesSingleRooms: React.FC<IGamesSingleRoomsProps> = ({setIsCreateGame}) => {

    const {gameSlug} = useParams()

    const handleCreateRoom = () => {
        setIsCreateGame(true)
    }

    const [roomsList, setRoomsList] = useState<IRoom[]>([])

    useEffect(() => {
        axios.get(getApiLink(`/api/room/list/${gameSlug}/`)).then(({data}) => {
            setRoomsList(data.rooms)
        })
    }, [])

    return (
        <div className="page-game__rooms">
            <div className="page-rooms__main--header">
                <h3 className="page-rooms__main--title">
                    Выберите комнату
                </h3>
                <a onClick={handleCreateRoom}
                   className="page-rooms__main--create-btn btn _large-2 _min-fs hide-on-table">
                    Добавить комнату
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M0 8C0 3.58125 3.58125 0 8 0C12.4187 0 16 3.58125 16 8C16 12.4187 12.4187 16 8 16C3.58125 16 0 12.4187 0 8ZM8 11.5C8.41563 11.5 8.75 11.1656 8.75 10.75V8.75H10.75C11.1656 8.75 11.5 8.41563 11.5 8C11.5 7.58437 11.1656 7.25 10.75 7.25H8.75V5.25C8.75 4.83437 8.41563 4.5 8 4.5C7.58437 4.5 7.25 4.83437 7.25 5.25V7.25H5.25C4.83437 7.25 4.5 7.58437 4.5 8C4.5 8.41563 4.83437 8.75 5.25 8.75H7.25V10.75C7.25 11.1656 7.58437 11.5 8 11.5Z"
                            fill="#F9F1DF"/>
                    </svg>
                </a>
            </div>
            <ul className="page-rooms__list">

                {
                    roomsList.filter(room => room.game.slug === gameSlug).map(room => <Room key={room.id} data={room}/>)
                }

            </ul>
            <a href="#" className="page-rooms__more-btn alt-btn _transparent visible-on-table">
                Показать ещё
            </a>
        </div>
    )
}
