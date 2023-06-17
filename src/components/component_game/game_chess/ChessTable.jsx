import React, {useEffect, useState} from 'react';
import ChessTableInner from "./ChessTableInner";
import GetCookies from "../../../hooks/GetCookies";
import {setAllBeaten} from "../../../redux/game_reducers/reducerCheckersBeaten";
import {useDispatch, useSelector} from "react-redux";

const ChessTable = ({isWhite}) => {

    const dispatch = useDispatch()
    const players = useSelector(state => state.gamesListPlayersReducer.players)
    const user = useSelector(state => state.userInfoReducer.data)
    const beatenYour = useSelector(state => state.reducerCheckersBeaten.your)
    const beatenOpponent = useSelector(state => state.reducerCheckersBeaten.opponent)
    const [playerColor, setPlayerColor] = useState(0)
    const color = ['white', 'black']
    const [isLoad, setIsLoad] = useState(false)

    const figurePriority = {
        'k': 6,
        'K': 6,
        'q': 5,
        'Q': 5,
        'r': 4,
        'R': 4,
        'n': 3,
        'N': 3,
        'b': 2,
        'B': 2,
        'p': 1,
        'P': 1,
    }

    useEffect(() => {
        setPlayerColor(players?.filter(item => item?.id === user?.id)[0]?.position)
    }, [players])

    useEffect(() => {

        if (!isLoad && GetCookies('CheckersOpponentBeaten')) {
            dispatch(setAllBeaten(null, JSON.parse(GetCookies('CheckersOpponentBeaten'))))
        }
        if (!isLoad && GetCookies('CheckersYourBeaten')) {
            dispatch(setAllBeaten(JSON.parse(GetCookies('CheckersYourBeaten')), null))
        }
        setIsLoad(true)

    }, [])

    return (
        <div className="chess__table">
            <div className="checkers__table--lost checkers__lost checkers__lost_opponent">
                <div className="checkers__lost--list">
                    {
                        beatenOpponent.sort((a, b) =>
                            figurePriority[a.figureName] - figurePriority[b.figureName]
                        ).map((item, index) =>
                            <div key={index} className="checkers__lost--item">
                                <img src={item.imageLink} alt=""
                                     className="checkers__lost--img"/>
                            </div>
                        )
                    }
                </div>
            </div>
            <div className="chess__table--board">
                <div className="chess__table--board-body">
                    <picture>
                        <img src={`images/chess/table${isWhite === 2 ? '-reverse' : ""}.png`} alt="" width="300"
                             height="300"
                             className="chess__table--img"/>
                    </picture>
                </div>
            </div>
            <div className="checkers__table--lost checkers__lost">
                <div className="checkers__lost--list">

                    {
                        beatenYour.sort((a, b) =>
                            figurePriority[b.figureName] - figurePriority[a.figureName]
                        ).map((item, index) =>
                            <div key={index} className="checkers__lost--item">
                                <img src={item.imageLink} alt=""
                                     className="checkers__lost--img"/>
                            </div>
                        )
                    }

                </div>
            </div>
            <div className="chess__table--grid chess__grid">
                <div className="chess__grid--wrapper">
                    <ChessTableInner/>
                </div>
            </div>
            <div className="chess__table--lost chess__lost">
                <div className="chess__lost--list">
                </div>
            </div>
        </div>
    );
};

export default ChessTable;