import React from 'react';
import {useSelector} from "react-redux";
import GameReadyBlock from "../GameReadyBlock";
import GameTimerProgress from "../GameTimerProgress";

const ChessYourUser = ({user}) => {

    const isYourTurn = useSelector(state => state.reducerPlayerTurn.playerTurn)
    const usersReadyState = useSelector(state => state.reducerUserReadyState.usersReadyState)

    return (
        <div className="chess__user">
            <div className="game__user">
                <div className="game__user--info">
                    <div className="game__user--info-body">
                        <h3 className="game__user--name">
                            Вы: {user.username}
                        </h3>
                        {
                            isYourTurn.player?.id === user.id ?
                                <GameTimerProgress time={isYourTurn.time_remaining}/> : ""
                        }
                    </div>
                </div>
                <div className="game__user--avatar">
                    <img src={user.avatar ? user.avatar : "../images/account/avatar.png"} alt=""
                         className="game__user--avatar-img"/>
                </div>
                <div className="game__player--block">
                    {
                        usersReadyState.some(item => item === user?.id) ? <GameReadyBlock/> : ""
                    }
                </div>
            </div>
        </div>
    );
};

export default ChessYourUser;