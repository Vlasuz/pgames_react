import React, {useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";
import Pagination from "../Pagination";
import {useSelector} from "react-redux";
import RoomItem from "../RoomItem";
import PaginationHook from "../../hooks/PaginationHook";

const RoomsList = () => {

    const rooms = useSelector(state => {
        const { addRoomReducer } = state;
        return addRoomReducer.rooms
    })


    const {currentItems, pageCount, handlePageClick} = PaginationHook(rooms, 4)

    return (
        <>
            <ul className="page-rooms__list">

                {
                    currentItems && currentItems.map(room =>
                        <RoomItem key={room.id} data={room} />
                    )
                }

            </ul>

            <Pagination handlePageClick={handlePageClick} pageCount={pageCount} />
        </>
    );
};

export default RoomsList;