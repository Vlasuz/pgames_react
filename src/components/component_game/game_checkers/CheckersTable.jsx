import React, {useEffect, useState} from 'react';
import CheckersTableInner from "./CheckersTableInner";
import {useSelector} from "react-redux";
import {reducerCheckersBeaten} from "../../../redux/game_reducers/reducerCheckersBeaten";

const CheckersTable = () => {

    const players = useSelector(state => state.gamesListPlayersReducer.players)
    const user = useSelector(state => state.userInfoReducer.data)
    const beatenYour = useSelector(state => state.reducerCheckersBeaten.your)
    const beatenOpponent = useSelector(state => state.reducerCheckersBeaten.opponent)
    const [playerColor, setPlayerColor] = useState(0)
    const color = ['white', 'black']

    useEffect(() => {
        setPlayerColor(players?.filter(item => item?.id === user?.id)[0]?.position)
    }, [players])

    return (
        <div className="checkers__table">
            <div className="checkers__table--lost checkers__lost checkers__lost_opponent">
                <div className="checkers__lost--list">
                    {
                        beatenOpponent.map((_, index) =>
                            <div key={index} className="checkers__lost--item">
                                <img src={`images/checkers/checker-${color[playerColor - 1]}.svg`} alt="" className="checkers__lost--img"/>
                            </div>
                        )
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
                        beatenYour.map((_, index) =>
                            <div key={index} className="checkers__lost--item">
                                <img src={`images/checkers/checker-${color[playerColor > 1 ? 0 : playerColor]}.svg`} alt="" className="checkers__lost--img"/>
                            </div>
                        )
                    }

                </div>
            </div>
            <CheckersTableInner/>
        </div>
    );
};

export default CheckersTable;