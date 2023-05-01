import React from 'react';

const FoolButtonTake = ({websocket, timer}) => {

    const handleTake = () => {
        websocket.send(JSON.stringify({
            "command": "defender_take",
            "data": null
        }))
    }

    return (
        <div className="game__user-menu--col">
            <div className="game__user-menu--timer">
                Осталось:
                <b>{timer} сек</b>
            </div>
            <button className="game__user-menu--main-btn btn _large _shadow _red" type="button" onClick={handleTake}>
                Взять карты
            </button>
        </div>
    );
};

export default FoolButtonTake;