import React from 'react';
import ActiveNotification from "../../../hooks/ActiveNotification";

const FoolTopButtons = () => {
    return (
        <div className="game__header--col">
            <div className="game__header--block">
                <a href="#game-exit-popup" onClick={() => ActiveNotification('#notification_is-develop')} className="game__header--btn btn _dark open-popup">
                    Выйти
                </a>
                <a href="#game-invite-popup" onClick={() => ActiveNotification('#notification_is-develop')} className="game__header--btn btn _red open-popup">
                    Пригласить +
                </a>
            </div>
        </div>
    );
};

export default FoolTopButtons;