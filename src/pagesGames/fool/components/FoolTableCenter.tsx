import React, {Dispatch, SetStateAction, useContext, useEffect, useRef, useState} from 'react'
import {useAllCards} from "../../../hooks/AllCards";
import cardPlaceholder from './../../../assets/img/game/cards/place.svg'
import {WS, WSMessage} from "../Fool";
import {IUser} from "../../../models";
import {useSelector} from 'react-redux';
import {FoolTableCardSecond} from "./FoolTableCardSecond";
import {FoolTableCardFirst} from "./FoolTableCardFirst";
import {FoolTableCards} from "./FoolTableCards";

interface IFoolTableCenterProps {
    isEndGame: boolean
    isWaitingGame: boolean
    selectedCard: { suit: string; rank: string } | undefined
    userTurn: any
    tableCards: any
    setMyCards: Dispatch<SetStateAction<any>>
    defenderTakenUser: any
    isCardsBeaten: boolean
}

export const FoolTableCenter: React.FC<IFoolTableCenterProps> = ({
                                                                     isEndGame,
                                                                     isWaitingGame,
                                                                     selectedCard,
                                                                     userTurn,
                                                                     tableCards,
                                                                     setMyCards,
                                                                     defenderTakenUser,
                                                                     isCardsBeaten,
                                                                 }) => {


    const ws: any = useContext(WS)

    const user: IUser = useSelector((state: any) => state.toolkit.user)

    const handleBeat = (playedCard: { suit: string; rank: string } | null) => {

        if (!selectedCard || !Object.keys(selectedCard).length) return;

        let jsonTitle: string = "paying_card"
        let jsonCards: any = {
            "card": {
                "rank": selectedCard?.rank,
                "suit": selectedCard?.suit
            }
        }

        if (playedCard?.suit && playedCard?.rank) {
            jsonTitle = "played_beat_card"

            jsonCards.entry_card = {
                "rank": playedCard?.rank,
                "suit": playedCard?.suit
            }
        }

        ws.send(JSON.stringify(
            {
                "command": jsonTitle,
                "data": jsonCards
            }
        ))


        setTimeout(() => {
            setMyCards((prevCards: any) => {
                return prevCards.filter((card: any) => {
                    const isSameRank = card.rank === selectedCard?.rank;
                    const isSameSuit = card.suit === selectedCard?.suit;
                    return !(isSameRank && isSameSuit);
                });
            });
        }, 500)

    }

    const isAttacker = userTurn?.player?.id === user?.id && (userTurn?.role === "attacker" || userTurn?.role === "sub_attacker")

    return (
        <div className="game__main--table game__table">
            {isWaitingGame && <div className="game__table--content">
                <h3 className="game__table--title section-title _center">
                    Ожидаем готовность комнаты
                </h3>
                <div className="game__table--text">
                    Оставайтесь и одержите победу!
                </div>
            </div>}

            {isEndGame && <div className="game__table--content">
                <h3 className="game__table--title section-title _center">
                    Игра завершена!
                </h3>
            </div>}

            {!isEndGame && !isWaitingGame && <div className="game__table-cards">
                <ul className="game__table-cards--list">

                    {
                        tableCards.map((cards: any) => <FoolTableCards cards={cards} isCardsBeaten={isCardsBeaten} defenderTakenUser={defenderTakenUser} handleBeat={handleBeat}/>)
                    }

                    <li className={`game__table-cards--item game__table-cards--item_placeholder ${isAttacker && "_active"}`} onClick={_ => handleBeat(null)}>
                        <div className="game__table-cards--card">
                            <img src={cardPlaceholder} alt="" className="game__table-cards--img"/>
                        </div>
                    </li>
                </ul>
            </div>}
        </div>
    )
}
