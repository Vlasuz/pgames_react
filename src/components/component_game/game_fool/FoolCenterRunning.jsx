import React, {useEffect, useState} from 'react';
import {logDOM} from "@testing-library/react";
import handleSelect from "./functions/handle_select_card";
import setPosition from "./functions/set_position";
import {useSelector} from "react-redux";
import {reducerPlayerTurn} from "../../../redux/game_reducers/reducerPlayerTurn";

const FoolCenterRunning = ({
                               cardsOnTable,
                               setSelectedCard,
                               selectedCard,
                               setMyCards,
                               trump,
                               setWrongStep,
                               defenderTake,
                               isCardsBeat,
                               attacker,
                               defender
                           }) => {

    const userTurn = useSelector(state => state.reducerPlayerTurn.playerTurn)
    const user = useSelector(state => state.userInfoReducer.data)
    const websocket = useSelector(state => state.reducerWebsocket.gameWebsocket)
    const players = useSelector(state => state.gamesListPlayersReducer.players)

    useEffect(() => {

        if (selectedCard?.card?.rank && selectedCard?.entry_card?.rank) {
            websocket.send(
                JSON.stringify({
                    "command": "played_beat_card",
                    "data": selectedCard
                })
            )
        }

    }, [selectedCard])

    const getUserPosition = () => {

        if (Object.keys(defenderTake).length && defenderTake?.player?.id !== user.id) {
            const userTurnPosition = players.filter(item => item.user?.id ? item.user?.id === defenderTake?.player?.id : item.id === defenderTake?.player?.id)[0]?.position
            const yourPosition = players.filter(item => item.user?.id ? item.user?.id === user.id : item.id === user.id)[0]?.position !== undefined ? players.filter(item => item.user?.id ? item.user?.id === user.id : item.id === user.id)[0]?.position : 1

            return userTurnPosition - (yourPosition - 1) > 0 ? userTurnPosition - (yourPosition - 1) : userTurnPosition - (yourPosition - 1) + 6;
        } else if (Object.keys(attacker).length && attacker?.player?.id !== user.id) {
            const userTurnPosition = players.filter(item => item?.user?.id ? item.user?.id === attacker?.player?.id : item.id === attacker?.player?.id)[0].position
            const yourPosition = players.filter(item => item.user?.id ? item.user?.id === user.id : item.id === user.id)[0]?.position ? players.filter(item => item.user?.id ? item.user?.id === user.id : item.id === user.id)[0]?.position : 1

            return userTurnPosition - (yourPosition - 1) > 0 ? userTurnPosition - (yourPosition - 1) : userTurnPosition - (yourPosition - 1) + 6;
        } else if (Object.keys(defender).length && defender?.player?.id !== user.id) {
            const userTurnPosition = players.filter(item => item?.user?.id ? item.user?.id === defender?.player?.id : item.id === defender?.player?.id)[0].position
            const yourPosition = players.filter(item => item.user?.id ? item.user?.id === user.id : item.id === user.id)[0]?.position ? players.filter(item => item.user?.id ? item.user?.id === user.id : item.id === user.id)[0]?.position : 1

            return userTurnPosition - (yourPosition - 1) > 0 ? userTurnPosition - (yourPosition - 1) : userTurnPosition - (yourPosition - 1) + 6;
        }
    }


    useEffect(() => {


    }, [attacker, defender, defenderTake, isCardsBeat])

    const defenderFunc = (card) => {

        if (!!Object.keys(defenderTake).length) {

            if (defenderTake?.player?.id === user.id) {
                return ` game__table-cards--item_take-me`;
            } else {
                return ` game__table-cards--item_take-other game__table-cards--item_take-other-to-${getUserPosition()}`;
            }

        } else if (isCardsBeat) {
            return ` game__table-cards--item_cards-beat`;
        } else if (!!Object.keys(attacker).length) {
            if (attacker?.player?.id !== user.id && attacker.played_card === card.entry_card) {
                return ` game__table-cards--item_attacker game__table-cards--item_attacker-from-position-${getUserPosition()}`;
            }
        } else if (!!Object.keys(defender).length) {
            if (defender?.player?.id !== user.id && defender.played_card === card.closing_card) {
                return ` game__table-cards--item_defender game__table-cards--item_defender-from-position-${getUserPosition()}`;
            }
        }

    }

    return (
        <div className="game__table-cards">
            <ul className="game__table-cards--list">

                {
                    cardsOnTable.map((card, index) =>
                        <li className={"game__table-cards--item _accent _new-card " + defenderFunc(card)}
                            key={index}>
                            {
                                <>
                                    {
                                        card?.entry_card?.rank ?
                                            <div className={"game__table-cards--card"}
                                                 onClick={e => handleSelect(card.entry_card, e, setWrongStep, selectedCard, trump, setSelectedCard, setMyCards, false)}
                                                 onMouseMove={e => handleSelect(card.entry_card, e, setWrongStep, selectedCard, trump, setSelectedCard, setMyCards, true)}
                                                 onMouseLeave={e => handleSelect(card.entry_card, e, setWrongStep, selectedCard, trump, setSelectedCard, setMyCards, true)}
                                            >
                                                <img
                                                    src={`images/game/cards/${card.entry_card.rank}-${card.entry_card.suit}.svg`}
                                                    alt="" className="game__table-cards--img"/>
                                            </div> : ""
                                    }
                                    {
                                        card?.closing_card?.rank ?
                                            <div className={"game__table-cards--card"}>
                                                <img
                                                    src={`images/game/cards/${card.closing_card.rank}-${card.closing_card.suit}.svg`}
                                                    alt="" className="game__table-cards--img"/>
                                            </div> : ""
                                    }
                                </>
                            }
                        </li>
                    )
                }

                {
                    (userTurn?.event === 'attacker' || userTurn?.event === 'sub_attacker') && userTurn.id === user.id ?
                        <li className="game__table-cards--item _accent">
                            <div className="game__table-cards--card game__table-cards--card_empty">
                                <img src="images/game/cards/place.svg" alt="" className="game__table-cards--img"/>
                            </div>
                        </li> : ""
                }

            </ul>
        </div>
    );
};

export default FoolCenterRunning;