import React from 'react';
import {useSelector} from "react-redux";
import {accountBalanceReducer} from "../../redux/reducers/accountBalanceReducer";

const HeaderBalance = () => {

    const infoUser = useSelector(state => state.userInfoReducer.data)

    return (
        <ul className="header__user-info--list">
            <li className="header__user-info--item">
                <img src="images/header/chip-length.svg" width="20" height="20" alt="Poker chip"
                     className="header__user-info--icon"/>
                <span>
                    {
                        infoUser.chips_balance
                    }
                </span>
            </li>
            <li className="header__user-info--item">
                <img src="images/header/dollar.svg" width="20" height="20" alt="Dollar"
                     className="header__user-info--icon"/>
                <span>
                    {
                        infoUser.balance
                    }
                </span>
            </li>
        </ul>
    );
};

export default HeaderBalance;