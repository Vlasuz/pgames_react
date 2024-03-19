import React, {useEffect} from 'react'
import chipLength from "../../../assets/img/header/chip-length.svg";
import dollar from "../../../assets/img/header/dollar.svg";
import iconInfo from "../../../assets/img/icons/info.svg";
import iconBell from "../../../assets/img/icons/bell.svg";
import {IUser} from "../../../models";
import {useSelector} from "react-redux";
import {HeaderNavigation} from "./HeaderNavigation";
import {HeaderNotifications} from "./HeaderNotifications";

interface IHeaderUserProps {

}

export const HeaderUserInfo: React.FC<IHeaderUserProps> = () => {

    const user: IUser = useSelector((state: any) => state.toolkit.user)

    return (
        <div className="header__nav--user-info header__user-info">
            <ul className="header__user-info--list">
                <li className="header__user-info--item">
                    <img src={chipLength} width="20" height="20" alt="Poker chip"
                         className="header__user-info--icon"/>
                    <span>
                        {user.chips_balance}
                    </span>
                </li>
                <li className="header__user-info--item">
                    <img src={dollar} width="20" height="20" alt="Dollar"
                         className="header__user-info--icon"/>
                    <span>
                        {user.balance.toFixed(2)}
                    </span>
                </li>
            </ul>

            <HeaderNotifications/>
        </div>
    )
}
