import React from 'react';
import {useSelector} from "react-redux";

const AccountCash = () => {

    const balance = useSelector(state => {
        const { accountBalanceReducer } = state;
        return accountBalanceReducer.balance;
    })

    return (
        <div className="account-base-info__item">
            <dl className="account-base-info__list">
                <dt>
                    <img src="../images/icons/chip.svg" width="24" height="24" alt="" /> Фишки
                </dt>
                <dd>
                    {balance.chips}
                </dd>
                <dt>
                    <img src="../images/icons/dollar-circle.svg" width="24" height="24" alt=""/> Деньги
                </dt>
                <dd>
                    {balance.money}
                </dd>
            </dl>
        </div>
    );
};

export default AccountCash;