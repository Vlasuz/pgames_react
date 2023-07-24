import React from 'react';
import chip from "../../../assets/img/header/chip-length.svg";
import dollar from "../../../assets/img/header/dollar.svg";

const Balance = ({userData}) => {
    return (
        <ul className="header__user-info--list">
            <li className="header__user-info--item">
                <img src={chip} width="20" height="20" alt="Poker chip"
                     className="header__user-info--icon"/>
                <span>
                    {userData?.chips_balance}
                </span>
            </li>
            <li className="header__user-info--item">
                <img src={dollar} width="20" height="20" alt="Dollar"
                     className="header__user-info--icon"/>
                <span>
                    {userData?.balance}
                </span>
            </li>
        </ul>
    );
};

export default Balance;