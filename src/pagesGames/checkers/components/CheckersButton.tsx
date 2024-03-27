import React, {useContext, useEffect, useState} from 'react'
import {IPlayerUser, IUser} from "../../../models";
import {useSelector} from "react-redux";
import { WS } from '../Checkers';

interface ICheckersButtonProps {
    roomState: any
    userTurn: any
    isEndGame: boolean
    isWaitingGame: boolean
}

export const CheckersButton: React.FC<ICheckersButtonProps> = ({roomState, userTurn, isEndGame, isWaitingGame}) => {

    const user: IUser = useSelector((state: any) => state.toolkit.user)

    const ws: any = useContext(WS)

    const handleReady = () => {
        ws.send(JSON.stringify({
            "command": "ready",
            "data": null
        }))
    }

    const handlePass = () => {
        ws.send(JSON.stringify({
            "command": "pass",
            "data": null
        }))
    }

    const handleTakeCards = () => {
        ws.send(JSON.stringify({
            "command": "defender_take",
            "data": null
        }))
    }

    const isReady = roomState?.users?.some((player: IPlayerUser) => player.ready && player.id === user.id)

    const [timer, setTimer] = useState(0)

    // const isYourTurn = userTurn?.player?.id === user?.id
    //
    // useEffect(() => {
    //     if(!userTurn?.timeout) return;
    //
    //     const timer = 70 - userTurn.timeout
    //     setTimer(timer === 0 ? 70 : timer)
    //
    // }, [userTurn])

    useEffect(() => {
        if(timer < 0) return ;

        const interval = setInterval(() => {
            setTimer(prev => prev - 1)
        }, 1000)

        return () => clearInterval(interval)
    }, [timer])

    return (
        // <div className="checkers__ready">
        //     <h3 className="game__user-menu--title section-title _decor-none">
        //         Вы готовы?
        //     </h3>
        //     <div className="game__user-menu--timer">
        //         Осталось:
        //         <b>10 сек</b>
        //     </div>
        //     <button className="game__user-menu--main-btn btn _large _shadow" type="button">
        //         Я готов
        //     </button>
        // </div>
        <div className="checkers__ready">
            {/*{!isEndGame && isWaitingGame && <h3 className="game__user-menu--title section-title _decor-none">*/}
            {/*    {isReady ? "Вы готовы!" : "Вы готовы?"}*/}
            {/*</h3>}*/}

            {/*{!isEndGame && !isWaitingGame && !isYourTurn && <div className="game__user-menu--ready">*/}
            {/*    Ожидание хода...*/}
            {/*</div>}*/}

            <div className="game__user-menu--timer">
                Осталось:
                <b>{timer.toFixed(0)} сек</b>
            </div>

            {!isReady && <button onClick={handleReady} className="game__user-menu--main-btn btn _large _shadow" type="button">
                Я готов
            </button>}
        </div>
    )
}
