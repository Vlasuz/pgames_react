import React from 'react';
import {useSelector} from "react-redux";
import GameReadyBlock from "../GameReadyBlock";
import GameTimerProgress from "../GameTimerProgress";

const CheckersOpponent = ({opponent, isGameStart}) => {

    const isYourTurn = useSelector(state => state.reducerPlayerTurn.playerTurn)
    const usersReadyState = useSelector(state => state.reducerUserReadyState.usersReadyState)

    console.log('opponent', opponent)
    return (
        <div className="chess__player">
            <div className="game__player">
                <div className="game__player--body">
                    <div className="game__player--avatar">
                        <img src="images/account/avatar.png" width="76" height="76"
                             alt=""
                             className="game__player--avatar-img"/>
                    </div>
                    <div className="game__player--info">
                        <h3 className="game__player--name">
                            {opponent?.name ? opponent?.name : opponent?.username}
                        </h3>
                        {
                            isYourTurn.player?.id === opponent?.id ?
                                <GameTimerProgress time={isYourTurn.time_remaining}/> : ""
                        }
                    </div>
                    <div className="game__player--block">
                        {
                            !isGameStart && usersReadyState.some(item => item === opponent?.id) ? <GameReadyBlock/> : ""
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckersOpponent;