import React from 'react';
import {useSelector} from "react-redux";
import AccountCash from "./AccountCash";

const BlockInfoAboutUser = () => {

    const informationOfUser = useSelector(state => {
        const { accountInformationReducer } = state
        return accountInformationReducer.info
    })

    return (
        <div className="account__block--body _none-padding">
            <div className="account-base-info">
                <div className="account-base-info__item">
                    <h3 className="account-base-info__name">
                        {informationOfUser.name || "Unknown"}
                    </h3>
                    <span className="account-base-info__span">
                                        {informationOfUser.email || "Unknown"}
                                    </span>
                </div>
                <AccountCash/>
            </div>
        </div>
    );
};

export default BlockInfoAboutUser;