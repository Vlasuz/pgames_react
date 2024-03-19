import React, {useEffect, useState} from 'react'
import {FoolMyCards} from "./FoolMyCards";
import {getApiLink} from "../../../functions/getApiLink";
import {IUser} from "../../../models";
import {useSelector} from "react-redux";

interface IFoolUserProps {
    myCards: any,
    deck: any,
    setSelectedCard: any,
    tableCards: any,
    userTurn: any,
}

export const FoolUser: React.FC<IFoolUserProps> = ({
                                                       myCards,
                                                       deck,
                                                       setSelectedCard,
                                                       tableCards,
                                                       userTurn,
                                                   }) => {

    const user: IUser = useSelector((state: any) => state.toolkit.user)

    const [timer, setTimer] = useState(0)

    const isYourTurn = userTurn?.player?.id === user?.id

    useEffect(() => {
        if(!userTurn?.timeout) return;

        const timer = 70 - userTurn.timeout
        setTimer(timer === 0 ? 70 : timer)

    }, [userTurn])

    useEffect(() => {
        if(timer < 0) return ;

        const interval = setInterval(() => {
            setTimer(prev => prev - 1)
        }, 1000)

        return () => clearInterval(interval)
    }, [timer])

    return (
        <div className="game__user">
            <div className="game__user--block">

            </div>

            <FoolMyCards
                cardsList={myCards}
                deck={deck}
                setSelectedCard={setSelectedCard}
                tableCards={tableCards}
                userTurn={userTurn}
            />

            <div className="game__user--info">
                <div className="game__user--info-body">
                    <h3 className="game__user--name"
                        style={{marginBottom: !isYourTurn ? "7px" : ""}}>
                        Вы: {user.username}
                    </h3>
                    {isYourTurn && <progress className="game__user--progress" max="100"
                                             value={timer * 100 / 70}></progress>}
                </div>
            </div>
            <div className="game__user--avatar">
                <img src={getApiLink("/" + user?.avatar)} alt=""
                     className="game__user--avatar-img"/>
            </div>
        </div>
    )
}
