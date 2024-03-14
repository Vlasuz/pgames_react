import React, {Dispatch, SetStateAction, useContext, useEffect, useRef, useState} from 'react'
import {useAllCards} from "../../../hooks/AllCards";
import cardPlaceholder from './../../../assets/img/game/cards/place.svg'
import {WS} from "../Fool";

interface IFoolTableCenterProps {
    isEndGame: boolean
    isWaitingGame: boolean
    selectedCard: {suit: string; rank: string} | undefined
    userTurn: any
    setTableCards: Dispatch<SetStateAction<any>>
    tableCards: any
    setMyCards: Dispatch<SetStateAction<any>>
}

export const FoolTableCenter: React.FC<IFoolTableCenterProps> = ({isEndGame, isWaitingGame, selectedCard, userTurn, setTableCards, tableCards, setMyCards}) => {

    const {allCards}: any = useAllCards()

    const ws: any = useContext(WS)

    const [isBeat, setIsBeat] = useState(false)
    const [isLoad, setIsLoad] = useState(false)

    const cardRef: any = useRef(null)

    const handleBeat = (playedCard: {suit: string; rank: string} | null) => {

        let jsonTitle: string = "paying_card"
        let jsonCards: any = {
            "card": {
                "rank": selectedCard?.rank,
                "suit": selectedCard?.suit
            }
        }

        console.log(playedCard)

        if(playedCard?.suit && playedCard?.rank) {
            jsonTitle = "played_beat_card"

            jsonCards.entry_card = {
                "rank": playedCard?.rank,
                "suit": playedCard?.suit
            }
        }

        console.log(jsonCards)
        ws.send(JSON.stringify(
            {
                "command": jsonTitle,
                "data": jsonCards
            }
        ))

        setMyCards((prevCards: any) => {
            return prevCards.filter((card: any) => {
                const isSameRank = card.rank === selectedCard?.rank;
                const isSameSuit = card.suit === selectedCard?.suit;
                return !(isSameRank && isSameSuit);
            });
        });

    }

    const isAttacker = userTurn.role === "attacker"

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
                        tableCards.map((cards: any) =>
                            <li ref={cardRef} key={`${cards?.played_card?.suit}${cards?.played_card?.rank}${cards?.entry_card?.suit}${cards?.entry_card?.rank}`} className="game__table-cards--item _accent">
                                <div className="game__table-cards--card" onClick={_ => handleBeat(cards?.played_card)}>
                                    <img src={allCards[`${cards?.played_card?.suit}${cards?.played_card?.rank}`]} alt="" className="game__table-cards--img" />
                                </div>
                                {cards.entry_card && <div className="game__table-cards--card">
                                    <img src={allCards[`${cards?.entry_card?.suit}${cards?.entry_card?.rank}`]} alt="" className="game__table-cards--img"/>
                                </div>}
                            </li>
                        )
                    }

                    {isAttacker && <li className="game__table-cards--item" onClick={_ => handleBeat(null)}>
                        <div className="game__table-cards--card">
                            <img src={cardPlaceholder} alt="" className="game__table-cards--img"/>
                        </div>
                    </li>}
                </ul>
            </div>}
        </div>
    )
}
