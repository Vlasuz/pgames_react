import React, {useEffect, useState} from 'react'
import {NavLink} from "react-router-dom";
import axios from "axios";
import {getApiLink} from "../../../functions/getApiLink";
import { setRooms } from '../../../storage/toolkit';
import {scryRenderedComponentsWithType} from "react-dom/test-utils";
import {getBearer} from "../../../functions/getBearer";
import {Room} from "../../../components/room/Room";
import { IRoom } from '../../../models';

interface IRoomsProps {

}

export const Rooms: React.FC<IRoomsProps> = () => {

    const [rooms, setRooms] = useState<IRoom[]>([])
    const [error, setError] = useState("")

    useEffect(() => {
        getBearer('get')
        axios.get(getApiLink('/api/room/list/?page=1')).then(({data}) => {
            console.log(data)
            setRooms(data.rooms)
        }).catch(er => {
            const errorList: {[key: string]: string} = {
                "401": "You need to login",
                "default": "Undefined error"
            }

            if(er?.response?.status) {
                setError(errorList[String(er.response.status)])
            } else {
                setError(errorList["default"])
            }
        })
    }, [])

    return (
        <section className="rooms section-padding">
            <div className="rooms__bg">
                <picture>

                    <img src="img/main-page/rooms/bg.png" loading="lazy" alt="" width="0" height="0"
                         className="rooms__bg--img"/>
                </picture>
            </div>
            <div className="rooms__container container">
                <div className="rooms__header section-header" data-aos="fade-in">
                    <h2 className="rooms__title section-title">
                        Комнаты
                    </h2>
                    <NavLink to={"/rooms"} className="rooms__more-link more-link hide-on-table">
                        Все комнаты
                    </NavLink>
                </div>

                {
                    error
                }

                <ul className="rooms__list">

                    {
                        rooms.map(room => <Room data={room}/>)
                    }

                </ul>
                <NavLink to={'/rooms'} className="rooms__more-btn alt-btn _transparent visible-on-table">
                    Все команты
                </NavLink>
            </div>
        </section>
    )
}
