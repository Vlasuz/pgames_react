import React from 'react';
import handleReady from "./functions/handle_ready";

const FoolButtonReady = ({ websocket, setIsReady }) => {
    return (
        <div className="game__user-menu--col">
            <h3 className="game__user-menu--title section-title _decor-none">
                Вы готовы?
            </h3>
            <div className="game__user-menu--timer">
                Осталось:
                <b>0 сек</b>
            </div>
            <button className="game__user-menu--main-btn btn _large _shadow" type="button" onClick={() => handleReady(websocket, setIsReady)}>
                Я готов
            </button>
        </div>
    );
};

export default FoolButtonReady;