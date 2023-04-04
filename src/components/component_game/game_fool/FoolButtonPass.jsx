import React from 'react';

const FoolButtonPass = ({ websocket, cardsOnTable, timer }) => {

    const handlePass = () => {

        document.querySelector('.game__table-cards--card_empty').closest('li').classList.add('_new-card')
        document.querySelector('.game__table-cards--card_empty').closest('li').style.overflow = 'hidden'

        setTimeout(() => {
            websocket.send(JSON.stringify({
                "command": "pass",
                "data": null
            }))
        }, 300)
    }

    return (
        <div className="game__user-menu--col">
            <h3 className="game__user-menu--title section-title _decor-none">
                Ваш ход
            </h3>
            <div className="game__user-menu--timer">
                Осталось:
                <b>{timer} сек</b>
            </div>
            {
                cardsOnTable.length ?
                    <button className="game__user-menu--main-btn btn _large _shadow _red" type="button" onClick={handlePass}>
                        Принять
                    </button> : ""
            }

        </div>
    );
};

export default FoolButtonPass;