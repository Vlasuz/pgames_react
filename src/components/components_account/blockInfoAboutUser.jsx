import React from 'react';
import {useSelector} from "react-redux";
import {userInfoReducer} from "../../redux/reducers/userInfoReducer";

const BlockInfoAboutUser = () => {

    const infoUser = useSelector(state => state.userInfoReducer.data)

    return (
        <div className="account__block--body _none-padding">
            <div className="account-base-info">
                <div className="account-base-info__item">
                    <h3 className="account-base-info__name">
                        {infoUser.username || "Unknown"}
                    </h3>
                    <span className="account-base-info__span">
                        {infoUser.email || "Unknown"}
                    </span>
                </div>

                <div className="account-base-info__item">
                    <dl className="account-base-info__list">
                        <dt>
                            <img src="images/icons/chip.svg" width="24" height="24" alt="" /> Фишки
                        </dt>
                        <dd>
                            {infoUser.chips_balance}
                        </dd>
                        <dt>
                            <img src="images/icons/dollar-circle.svg" width="24" height="24" alt=""/> Деньги
                        </dt>
                        <dd>
                            {infoUser.balance}
                        </dd>
                    </dl>
                </div>
            </div>
        </div>
    );
};

export default BlockInfoAboutUser;