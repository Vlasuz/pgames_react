import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import GameReadyBlock from "../GameReadyBlock";

const DominoesUser = ({player}) => {

    const playerTurn = useSelector(state => state.reducerPlayerTurn.playerTurn)
    const isGameStart = useSelector(state => state.reducerIsGameStart.isGameStart)
    const usersReady = useSelector(state => state.reducerUserReadyState.usersReadyState)
    const [timer, setTimer] = useState(0)

    useEffect(() => {
        setTimer(playerTurn.time_remaining)
    }, [playerTurn])

    useEffect(() => {
        let time = setInterval(() => {
            timer > 0 && setTimer(prev => prev - 1)
        }, 1000)

        return () => clearInterval(time)
    }, [timer])

    return (
        <div className="domino__player game__player _min">
            <div className="game__player--body">
                <div className="game__player--avatar">
                    <img src={player.avatar ? player.avatar : "images/account/avatar.png"} width="76" height="76" alt=""
                         className="game__player--avatar-img"/>
                </div>
                <div className="game__player--info">
                    <h3 className="game__player--name">
                        {player.name ? player.name : player.username}
                    </h3>
                    {playerTurn?.player === player?.id ? <progress className="game__player--progress" max="100" value={!isNaN(timer) && (timer * 100 / 60)}/> : ""}
                </div>
                <div className="game__player--block">
                    {
                        !isGameStart && usersReady.some(item => item === player.id) && <GameReadyBlock/>
                    }
                    <div className="game__player--cards _min _message-active">
                        {/*<ul className="game__player--cards-list">*/}
                        {/*    <li className="game__player--cards-item">*/}
                        {/*        <div className="game__player--cards-item-body">*/}
                        {/*            <img src="images/domino/figures/back.svg" alt=""*/}
                        {/*                 className="game__player--cards-img"/>*/}
                        {/*        </div>*/}
                        {/*    </li>*/}
                        {/*</ul>*/}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default DominoesUser;