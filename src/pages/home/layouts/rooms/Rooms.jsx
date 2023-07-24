import React from 'react';
import './style.scss';

import Room from "../../../../components/Room";
import Background from "./components/Background";
import {NavLink} from "react-router-dom";

const Rooms = () => {
    return (
        <section className="rooms section-padding">
            <Background/>
            <div className="rooms__container container">
                <div className="rooms__header section-header" data-aos="fade-in">
                    <h2 className="rooms__title section-title">
                        Комнаты
                    </h2>
                    <NavLink to={'/rooms'} className="rooms__more-link more-link hide-on-table">
                        Все комнаты
                    </NavLink>
                </div>
                <ul className="rooms__list">

                    <Room
                        title={'Какая то игра'}
                        icon={'cards'}
                        date={'25.04.2023'}
                        currency={'money'}
                        nowPlaying={'1'}
                        maxLength={'4'}
                        access={false}
                    />

                </ul>
                <NavLink to={'/rooms'} className="rooms__more-btn alt-btn _transparent visible-on-table">
                    Все команты
                </NavLink>
            </div>
        </section>
    );
};

export default Rooms;