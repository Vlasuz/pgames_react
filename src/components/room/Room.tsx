import React, {useEffect} from 'react'
import {IRoom} from "../../models";
import {gamesIcon} from "../../constants/GamesIcon";
import personIcon from "../../assets/img/icons/person.svg";
import chipsIcon from "../../assets/img/icons/chip.svg";
import moneyIcon from "../../assets/img/icons/dollar-circle.svg";
import unlockIcon from "../../assets/img/icons/door-open.svg";
import lockIcon from "../../assets/img/icons/door-lock.svg";
import axios from "axios";
import {getApiLink} from "../../functions/getApiLink";
import {useNavigate} from "react-router-dom";

interface IRoomProps {
    data: IRoom
}

export const Room: React.FC<IRoomProps> = ({data}) => {

    const navigate = useNavigate()

    const handleJoin = () => {
        axios.post(getApiLink(`/api/room/join_to_room/${data.id}/`)).then((response: any) => {
            navigate(`/${response.data.game.slug}/${data.id}`)
        })
    }

    return (
        <li className="page-rooms__item room-item" data-aos="fade-up" data-aos-delay="200">
            <div className="room-item__body">
                <div className="room-item__header">
                    <img src={gamesIcon[data?.game.slug]} width="18" height="18" alt=""
                         className="room-item__icon"/>
                    <h3 className="room-item__name" title="Покер">
                        {
                            data?.game.name
                        }
                    </h3>
                    <time className="room-item__time" dateTime="2022-03-12 12:43">
                        {data?.created_at.slice(0, data?.created_at.indexOf(" "))} <b>{data?.created_at.slice(data?.created_at.indexOf(" "))}</b>
                    </time>
                </div>
                <div className="room-item__info">
                    <div className="room-item__info-elem">
                        <span>
                            {data?.players_count}/{data?.player_slots}
                        </span>
                        <img src={personIcon} width="10" height="10" alt=""/>
                    </div>
                    <div className="room-item__info-elem">
                        <span>
                            {data?.bet}
                        </span>
                        <img src={data?.bet_type === "chips" ? chipsIcon : moneyIcon} width="16" height="16" alt=""/>
                    </div>
                    <div className="room-item__info-elem">
                        <span>
                            {data?.room_type === "public" ? "Открытая игра" : "Закрытая игра"}
                        </span>
                        <img src={data?.room_type === "public" ? unlockIcon : lockIcon} width="15" height="13" alt=""/>
                    </div>

                </div>
                <button onClick={handleJoin} className="room-item__btn min-btn">
                    Присоединиться
                </button>
            </div>
        </li>
    )
}
