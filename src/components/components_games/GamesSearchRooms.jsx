import React from 'react';
import {useSelector} from "react-redux";
import {addRoomReducer} from "../../redux/reducers/addRoomReducer";
import {NavLink} from "react-router-dom";
import RoomItem from "../RoomItem";

const GamesSearchRooms = () => {

    const searchText = useSelector(state => {
        const {GamesSearchReducer} = state
        return GamesSearchReducer.text
    })

    const rooms = useSelector(state => {
        const {addRoomReducer} = state
        return addRoomReducer.rooms
    })

    function countOfRooms(length) {
        let text;
        switch(true) {
            case length === 1:
                text = 'комната'
                break;
            case length >= 2 && length <= 4:
                text = "комнаты"
                break;
            case length >= 5 && length <= 20:
                text = "комнат"
                break;
            default:
                text = "комната"
                break;
        }
        return length + " " + text
    }

    return (
        <>
        <div className="online-games__rooms--container container hide-blocks-wrapper">
            <div className="online-games__rooms--header">
                <h3 className="online-games__rooms--title section-title _decor-none">
                    Команты
                </h3>
                <span className="online-games__rooms--value">
                    {countOfRooms(rooms.filter(item => item.title.toLowerCase().includes(searchText.toLowerCase())).length)}
                </span>
            </div>
            <ul className="online-games__rooms--list hide-blocks-list">

                {
                    rooms.filter(item => item.title.toLowerCase().includes(searchText.toLowerCase())).map(room =>
                        <RoomItem data={room} />
                    )
                }

            </ul>
            <div className="online-games__footer" data-aos="fade-in">
                <button
                    className="online-games__rooms--more-btn alt-btn _transparent hide-blocks-btn visible-on-table"
                    type="button">
                    Показать ещё
                </button>
            </div>
        </div>
        </>
    );
};

export default GamesSearchRooms;