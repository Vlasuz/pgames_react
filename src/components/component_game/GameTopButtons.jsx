import React from 'react';

import {useDispatch} from "react-redux";
import {setTimeoutNotice} from "../../redux/reducers/notificationReducer";

const GameTopButtons = () => {
    const dispatch = useDispatch()
    return (
        <div className="game__header--col">
            <div className="game__header--block">
                <a onClick={() => dispatch(setTimeoutNotice('notification_is-develop'))} className="game__header--btn btn _dark open-popup">
                    Выйти
                </a>
                <a onClick={() => dispatch(setTimeoutNotice('notification_is-develop'))} className="game__header--btn btn _red open-popup">
                    Пригласить +
                </a>
            </div>
        </div>
    );
};

export default GameTopButtons;