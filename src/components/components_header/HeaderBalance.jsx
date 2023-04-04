import React from 'react';
import {useSelector} from "react-redux";
import {accountBalanceReducer} from "../../redux/reducers/accountBalanceReducer";

const HeaderBalance = () => {

    const balance = useSelector(state => {
        const { accountBalanceReducer } = state;
        return accountBalanceReducer.balance;
    })

    return (
        <ul className="header__user-info--list">
            <li className="header__user-info--item">
                <img src="../images/header/chip-length.svg" width="20" height="20" alt="Poker chip"
                     className="header__user-info--icon"/>
                <span>
                    {
                        balance.chips
                    }
                </span>
            </li>
            <li className="header__user-info--item">
                <img src="../images/header/dollar.svg" width="20" height="20" alt="Dollar"
                     className="header__user-info--icon"/>
                <span>
                    {
                        balance.money
                    }
                </span>
            </li>
        </ul>
    );
};

export default HeaderBalance;