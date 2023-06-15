import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import GetCookies from "../../hooks/GetCookies";
import {setHistoryItem} from "../../redux/game_reducers/reducerHistory";
import SetCookies from "../../hooks/SetCookies";

const GameHistory = () => {

    const dispatch = useDispatch()
    const [isOpenHistory, setIsOpenHistory] = useState(false)
    const history = useSelector(state => state.reducerHistory.history)
    const players = useSelector(state => state.gamesListPlayersReducer.players)
    const user = useSelector(state => state.userInfoReducer.data)

    useEffect(() => {
        if (history.length) {
            SetCookies('gameHistory', history)
        } else if (GetCookies('gameHistory')) {
            dispatch(setHistoryItem(JSON.parse(GetCookies('gameHistory'))))
        }
    }, [history])

    const handleOpen = () => {
        setIsOpenHistory(prev => !prev)
    }


    return (
        <div className="chess__history game__history">
            <div className={"game__history--wrapper" + (isOpenHistory ? " _active" : "")}>
                <button type="button" className="game__history--header" onClick={handleOpen}>
                    <h3 className="game__history--header-title">
                        История ходов
                    </h3>
                    <div className="game__history--header-arrow">
                        <svg width="13" height="8" viewBox="0 0 13 8" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M6.37453 7.37465C6.11867 7.37465 5.86268 7.28048 5.66769 7.09216L0.667953 2.27098C0.277349 1.89433 0.277349 1.28415 0.667953 0.907491C1.05856 0.530836 1.69134 0.530836 2.08194 0.907491L6.37453 5.04843L10.6681 0.908244C11.0587 0.53159 11.6914 0.53159 12.082 0.908244C12.4727 1.2849 12.4727 1.89508 12.082 2.27173L7.08231 7.09291C6.887 7.28124 6.63077 7.37465 6.37453 7.37465Z"
                                fill="#F9F1DF"/>
                        </svg>
                    </div>
                </button>
                <ul className="chess__history--list game__history--list">

                    {
                        history.length ? history.map((historyItem, index) => {
                            const historyUser = players.filter(user => historyItem.userId === user?.id)[0]
                            const isYou = user?.id === historyUser?.id

                            if (historyUser === undefined) return null;

                            return (
                                <li key={index} className="checkers__history--item game__history--item">
                                    <div className="checkers__history--avatar">
                                        <img src="images/account/avatar.png" alt=""/>
                                    </div>
                                    <h4 className="checkers__history--name">
                                        {
                                            isYou ? 'Вы: ' : ''
                                        }
                                        {
                                            historyUser.name ? historyUser.name : historyUser.username
                                        }
                                    </h4>
                                    <span className="checkers__history--move">
                                        {historyItem.code.toUpperCase()}
                                    </span>
                                </li>
                            )
                        }) : "Истории нет"
                    }

                </ul>
            </div>
        </div>
    );
};

export default GameHistory;