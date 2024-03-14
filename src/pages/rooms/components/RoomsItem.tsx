import React, {useEffect} from 'react'
import { gamesIcon } from '../../../constants/GamesIcon';
import {IRoom} from "../../../models";
import personIcon from "./../../../assets/img/icons/person.svg"
import moneyIcon from "./../../../assets/img/icons/dollar-circle.svg"
import chipsIcon from "./../../../assets/img/icons/chip.svg"
import lockIcon from "./../../../assets/img/icons/door-lock.svg"
import unlockIcon from "./../../../assets/img/icons/door-open.svg"

interface IRoomsItemProps {
    itemData: IRoom
}

export const RoomsItem: React.FC<IRoomsItemProps> = ({itemData}) => {

    return (
        <li className="page-rooms__item room-item" data-aos="fade-up" data-aos-delay="200">
            <div className="room-item__body">
                <div className="room-item__header">
                    <img src={gamesIcon[itemData.game.slug]} width="18" height="18" alt=""
                         className="room-item__icon"/>
                    <h3 className="room-item__name" title="Покер">
                        {
                            itemData.game.name
                        }
                    </h3>
                    <time className="room-item__time" dateTime="2022-03-12 12:43">
                        {itemData.created_at.slice(0, itemData.created_at.indexOf(" "))} <b>{itemData.created_at.slice(itemData.created_at.indexOf(" "))}</b>
                    </time>
                </div>
                <div className="room-item__info">
                    <div className="room-item__info-elem">
                        <span>
                            {itemData.players_count}/{itemData.player_slots}
                        </span>
                        <img src={personIcon} width="10" height="10" alt=""/>
                    </div>
                    <div className="room-item__info-elem">
                        <img src={itemData.bet_type === "chips" ? chipsIcon : moneyIcon} width="16" height="16" alt=""/>
                    </div>
                    <div className="room-item__info-elem">
                        <span>
                            {itemData.room_type === "public" ? "Открытая игра" : "Закрытая игра"}
                        </span>
                        <img src={itemData.room_type === "public" ? unlockIcon : lockIcon} width="15" height="13" alt=""/>
                    </div>

                </div>
                <a href="#" className="room-item__btn min-btn">
                    Присоединиться
                </a>
            </div>
        </li>
    )
}
