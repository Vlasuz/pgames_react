import React from 'react';
import {Link, NavLink} from "react-router-dom";
import RoomsTop from "../components/components_rooms/RoomsTop";
import RoomsList from "../components/components_rooms/RoomsList";

const Rooms = () => {

    return (
        <main className="main">
            <section className="page-rooms page-padding">
                <div className="page-rooms__container container">
                    <RoomsTop />
                    <div className="page-rooms__main" data-aos="fade-in" data-aos-delay="400">
                        <div className="page-rooms__main--header">
                            <h3 className="page-rooms__main--title">
                                Выберите комнату
                            </h3>
                            <Link to={"/create-room"}
                               className="page-rooms__main--create-btn btn _large-2 _min-fs hide-on-table">
                                Добавить комнату
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M0 8C0 3.58125 3.58125 0 8 0C12.4187 0 16 3.58125 16 8C16 12.4187 12.4187 16 8 16C3.58125 16 0 12.4187 0 8ZM8 11.5C8.41563 11.5 8.75 11.1656 8.75 10.75V8.75H10.75C11.1656 8.75 11.5 8.41563 11.5 8C11.5 7.58437 11.1656 7.25 10.75 7.25H8.75V5.25C8.75 4.83437 8.41563 4.5 8 4.5C7.58437 4.5 7.25 4.83437 7.25 5.25V7.25H5.25C4.83437 7.25 4.5 7.58437 4.5 8C4.5 8.41563 4.83437 8.75 5.25 8.75H7.25V10.75C7.25 11.1656 7.58437 11.5 8 11.5Z"
                                        fill="#F9F1DF"/>
                                </svg>
                            </Link>
                        </div>
                        <RoomsList />
                    </div>
                </div>
                <NavLink to={'/create-room'} className="page-rooms__create-min-btn visible-on-table"
                   title="Добавить комнату">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M0 8C0 3.58125 3.58125 0 8 0C12.4187 0 16 3.58125 16 8C16 12.4187 12.4187 16 8 16C3.58125 16 0 12.4187 0 8ZM8 11.5C8.41563 11.5 8.75 11.1656 8.75 10.75V8.75H10.75C11.1656 8.75 11.5 8.41563 11.5 8C11.5 7.58437 11.1656 7.25 10.75 7.25H8.75V5.25C8.75 4.83437 8.41563 4.5 8 4.5C7.58437 4.5 7.25 4.83437 7.25 5.25V7.25H5.25C4.83437 7.25 4.5 7.58437 4.5 8C4.5 8.41563 4.83437 8.75 5.25 8.75H7.25V10.75C7.25 11.1656 7.58437 11.5 8 11.5Z"
                            fill="#F9F1DF"/>
                    </svg>
                </NavLink>
            </section>
        </main>
    );
};

export default Rooms;