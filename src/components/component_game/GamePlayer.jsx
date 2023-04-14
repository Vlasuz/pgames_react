import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {logDOM} from "@testing-library/react";

const GamePlayer = ({ player, userTurn, fixedTime, timer, isEndGame, isGameStart, cardsLeft, playersWhoReady, playersQuantityCards, defenderTake }) => {

    const playerHere = player?.user !== undefined ? player.user : player

    const [cards, setCards] = useState(['','','','','',''])

    useEffect(() => {

        if(playerHere.id === cardsLeft.userId) {
            setCards([]);
            for (let i = 0; i < cardsLeft.cards; i++) {
                setCards(prev => [...prev, 'card'])
            }
        }

    }, [cardsLeft])

    useEffect(() => {

        if(playersQuantityCards.some(item => item.player.id === playerHere.id)) {
            let num = playersQuantityCards.filter(item => item.player.id === playerHere.id)[0].player.new_cards_count
            for (let i = 0; i < num; i++) {
                setCards(prev => [...prev, 'card'])
            }
        }

    }, [playersQuantityCards])

    useEffect(() => {

        if(defenderTake?.player?.id === playerHere.id) {
            let num = defenderTake.carts_left
            setCards([]);
            for (let i = 0; i < num; i++) {
                setCards(prev => [...prev, 'card'])
            }
        }

    }, [defenderTake])

    return (
        <div className="game__player">
            <div className="game__player--body">
                <div className="game__player--avatar">
                    <img src="../images/account/avatar.png" width="76" height="76" alt=""
                         className="game__player--avatar-img"/>
                </div>
                <div className="game__player--info">
                    <h3 className="game__player--name">
                        {
                            playerHere.username
                        }
                        <br/>
                        {
                            playerHere.id
                        }
                    </h3>
                    {
                        playerHere?.id === userTurn.id && !isEndGame ?
                            <progress className="game__user--progress" max="100"
                                      value={timer * 100 / fixedTime}></progress> : ""
                    }
                </div>
                <div className="game__player--block">
                    {isGameStart && <div className="game__player--cards">
                        <ul className="game__player--cards-list">

                            {
                                 cards.map((_, index) =>
                                    <li key={index} className="game__player--cards-item">
                                        <div className="game__player--cards-item-body">
                                            <img src="../images/game/cards/Back.svg" alt="" className="game__player--cards-img" />
                                        </div>
                                    </li>
                                )
                            }
                        </ul>
                    </div>}
                    {!isGameStart && (playersWhoReady?.some(item => item === playerHere.id) && <div className="game__player--status">
                        Готов
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M0 6C0 2.68594 2.68594 0 6 0C9.31406 0 12 2.68594 12 6C12 9.31406 9.31406 12 6 12C2.68594 12 0 9.31406 0 6ZM8.71406 4.96406C8.96953 4.70859 8.96953 4.29141 8.71406 4.03594C8.45859 3.78047 8.04141 3.78047 7.78594 4.03594L5.25 6.57187L4.21406 5.53594C3.95859 5.28047 3.54141 5.28047 3.28594 5.53594C3.03047 5.79141 3.03047 6.20859 3.28594 6.46406L4.78594 7.96406C5.04141 8.21953 5.45859 8.21953 5.71406 7.96406L8.71406 4.96406Z"
                                fill="#61C8AF"/>
                        </svg>
                    </div>)}
                </div>
            </div>
        </div>
    );
};

export default GamePlayer;