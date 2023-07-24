import React from 'react';
import GameIcons from "../features/gameIcons";

import iconPerson from './../assets/img/icons/person.svg';
import AllIcons from "../features/allIcons";

const Room = ({title, icon, date, currency, maxLength, nowPlaying, access}) => {

    const accessRoom = (access) => {
        if(access) {
            return ["Открытая игра", AllIcons('accessOpen')]
        } else {
            return ["Закрытая игра", AllIcons('accessOpen')]
        }
    }

    const typeCurrency = (currency) => {
        if(currency === 'chip') {
            return AllIcons('chip')
        } else if (currency === 'money') {
            return AllIcons('money')
        }
    }

    return (
        <li className="rooms__item room-item" data-aos="fade-up" data-aos-delay="300">
            <div className="room-item__body">
                <div className="room-item__header">
                    <img src={GameIcons(icon)} width="18" height="18" alt=""
                         className="room-item__icon"/>
                    <h3 className="room-item__name" title={title}>
                        {title}
                    </h3>
                    <time className="room-item__time" dateTime={date}>
                        {date}
                    </time>
                </div>
                <div className="room-item__info">
                    <div className="room-item__info-elem">
                        <span>
                            {nowPlaying}/{maxLength}
                        </span>
                        <img src={iconPerson} width="10" height="10" alt=""/>
                    </div>
                    <div className="room-item__info-elem">
                        <img src={typeCurrency(currency)} width="16" height="16" alt=""/>
                    </div>
                    <div className="room-item__info-elem">
                        <span>
                            {accessRoom(access)[0]}
                        </span>
                        <img src={accessRoom(access)[1]} width="15" height="13" alt=""/>
                    </div>
                </div>
                <a href="home/layouts#" className="room-item__btn min-btn">
                    Присоединиться
                </a>
            </div>
        </li>
    );
};

export default Room;