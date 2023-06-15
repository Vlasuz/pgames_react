import React, {useEffect, useState} from 'react';
import CheckersTableInner from "./CheckersTableInner";
import {useDispatch, useSelector} from "react-redux";
import {reducerCheckersBeaten, setAllBeaten, setBeaten} from "../../../redux/game_reducers/reducerCheckersBeaten";
import SetCookies from "../../../hooks/SetCookies";
import GetCookies from "../../../hooks/GetCookies";
import {setHistoryItem} from "../../../redux/game_reducers/reducerHistory";

const CheckersTable = () => {

    const dispatch = useDispatch()
    const players = useSelector(state => state.gamesListPlayersReducer.players)
    const user = useSelector(state => state.userInfoReducer.data)
    const beatenYour = useSelector(state => state.reducerCheckersBeaten.your)
    const beatenOpponent = useSelector(state => state.reducerCheckersBeaten.opponent)
    const [playerColor, setPlayerColor] = useState(0)
    const color = ['white', 'black']
    const [isLoad, setIsLoad] = useState(false)

    useEffect(() => {
        setPlayerColor(players?.filter(item => item?.id === user?.id)[0]?.position)
    }, [players])

    useEffect(() => {

        if(!isLoad && GetCookies('CheckersOpponentBeaten')) {
            dispatch(setAllBeaten(null, JSON.parse(GetCookies('CheckersOpponentBeaten'))))
        }
        if(!isLoad && GetCookies('CheckersYourBeaten')) {
            dispatch(setAllBeaten(JSON.parse(GetCookies('CheckersYourBeaten')), null))
        }
        setIsLoad(true)

    }, [])

    return (
        <div className="checkers__table">
            <div className="checkers__table--lost checkers__lost checkers__lost_opponent">
                <div className="checkers__lost--list">
                    {
                        beatenOpponent.map((item, index) => {
                            let isKing = item.includes('king')

                            return (
                                <div key={index} className="checkers__lost--item">
                                    <img src={`images/checkers/checker-${color[playerColor - 1]}${isKing ? "_king" : ""}.svg`} alt=""
                                         className="checkers__lost--img"/>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="checkers__table--board">
                <div className="checkers__table--board-body">
                    <picture>
                        <img src="images/checkers/table.png" alt="" width="300" height="300"
                             className="checkers__table--img"/>
                    </picture>
                </div>
            </div>
            <div className="checkers__table--lost checkers__lost">
                <div className="checkers__lost--list">

                    {
                        beatenYour.map((item, index) => {
                            let isKing = item.includes('king')

                            return (
                                <div key={index} className="checkers__lost--item">
                                    <img src={`images/checkers/checker-${color[playerColor > 1 ? 0 : playerColor]}${isKing ? "_king" : ""}.svg`} alt="" className="checkers__lost--img"/>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
            <CheckersTableInner/>
        </div>
    );
};

export default CheckersTable;