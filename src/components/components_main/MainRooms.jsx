import React from 'react';
import {Link, NavLink} from "react-router-dom";
import MainRoomsList from "./MainRoomsList";

const MainRooms = () => {
    
    return (
        <section className="rooms section-padding">
            <div className="rooms__bg">
                <picture>
                    <img src="../images/main-page/rooms/bg.png" loading="lazy" alt="" width="0" height="0"
                         className="rooms__bg--img"/>
                </picture>
            </div>
            <div className="rooms__container container">
                <div className="rooms__header section-header" data-aos="fade-in">
                    <h2 className="rooms__title section-title">
                        Комнаты
                    </h2>
                    <Link to={"/rooms"} className="rooms__more-link more-link hide-on-table">
                        Все комнаты
                    </Link>
                </div>

                <MainRoomsList/>

                <Link to={"/rooms"} className="rooms__more-btn alt-btn _transparent visible-on-table">
                    Все команты
                </Link>
            </div>
        </section>
    );
};

export default MainRooms;