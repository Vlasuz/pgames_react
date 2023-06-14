import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {accountBalanceReducer} from "../redux/reducers/accountBalanceReducer";

import {useNavigate} from "react-router-dom";
import {logoutReducer} from "../redux/reducers/logoutReducer";
import {addBalance} from "../redux/actions";
import axios from "axios";
import GetCookies from "../hooks/GetCookies";
import GlobalLink from "../GlobalLink";
import {setGamePlayers} from "../redux/reducers/gamesListPlayersReducer";
import SetCookies from "../hooks/SetCookies";
import {setTimeoutNotice} from "../redux/reducers/notificationReducer";

const RoomItem = ({ game }) => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleEntry = (e) => {

        axios.defaults.headers.post['platform'] = `pc`;
        axios.defaults.headers.post['Authorization'] = `Bearer ${GetCookies('access_token')}`;
        axios.post(GlobalLink(`/api/room/join_to_room/${game?.id}/`)).then(res => {
            console.log('join room', res.data)
            navigate('/rooms/' + res?.data?.game.slug + "/" + res?.data?.id)

            SetCookies('gameHistory', null)
            SetCookies('CheckersYourBeaten', [])
            SetCookies('CheckersOpponentBeaten', [])

        }).catch(error => {
            if(error.message.includes('401')) {
                dispatch(setTimeoutNotice('notification_not-auth'))
            }
        })

    }

    return (
        <li key={game?.id} className="online-games__rooms--item room-item" data-aos="fade-up">
            <div className="room-item__body">
                <div className="room-item__header">
                    <img src={`images/icons/${game.slug}.svg`} width="18" height="18" alt=""
                         className="room-item__icon"/>
                    <h3 className="room-item__name" title="Дурак классический">
                        {game?.name}
                        {game?.id}
                    </h3>
                    <time className="room-item__time" dateTime="2022-03-12 12:43">
                        {game?.date}
                    </time>
                </div>
                <div className="room-item__info">
                    <div className="room-item__info-elem">
                        <span>
                            {game?.players_count}
                            /
                            {game?.player_slots}
                        </span>
                        <img src="images/icons/person.svg" width="10" height="10" alt=""/>
                    </div>
                    <div className="room-item__info-elem">
                        <img src={game?.bet_type === "money" ? "images/icons/dollar-circle.svg" : "images/icons/chip.svg"} width="16" height="16" alt=""/>
                        <span>&nbsp;{game?.bet}</span>
                    </div>
                    <div className="room-item__info-elem">
                        {
                            game?.room_type === "public" ?
                                <>
                                    <span>Открытая игра</span>
                                    <img src="images/icons/door-open.svg" width="15" height="13" alt=""/>
                                </> :
                                <>
                                    <span>Закрытая игра</span>
                                    <img src="images/icons/door-lock.svg" width="15" height="13" alt=""/>
                                </>
                        }
                    </div>
                </div>
                <button onClick={handleEntry} className="room-item__btn min-btn">
                    Присоединиться
                </button>
            </div>
        </li>
    );
};

export default RoomItem;