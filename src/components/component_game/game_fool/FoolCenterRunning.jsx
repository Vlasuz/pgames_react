import React, {useEffect, useState} from 'react';
import {logDOM} from "@testing-library/react";
import handleSelect from "./functions/handle_select_card";

const FoolCenterRunning = ({
                               cardsOnTable,
                               setSelectedCard,
                               selectedCard,
                               websocket,
                               setMyCards,
                               trump,
                               setWrongStep,
                               userTurn,
                               isAttacker,
                               user,
                               players
                           }) => {

    useEffect(() => {

        if (selectedCard?.card?.rank && selectedCard?.entry_card?.rank) {

            websocket.send(
                JSON.stringify({
                    "command": "played_beat_card",
                    "data": selectedCard
                })
            )

        } else {
            console.log('Select bitted card')
        }

    }, [selectedCard])

    console.log('who run', userTurn, players)
    // console.log('who run', players.filter(item => item.user?.id ? item.user?.id === userTurn?.id : item.id === userTurn?.id))

    return (
        <div className="game__table-cards">
            <ul className="game__table-cards--list">

                {
                    cardsOnTable.map((card, index) =>
                        <li className={"game__table-cards--item _accent _new-card" + (isAttacker.id !== user.id ? " game__table-cards--item_from-position-2" : "")}
                            key={index}>
                            {
                                card ?
                                    <>
                                        {
                                            card?.attacker_card?.rank ?
                                                <div className="game__table-cards--card"
                                                     onClick={e => handleSelect(card.attacker_card, e, setWrongStep, selectedCard, trump, setSelectedCard, setMyCards)}>
                                                    <img
                                                        src={`../images/game/cards/${card.attacker_card.rank}-${card.attacker_card.suit}.svg`}
                                                        alt="" className="game__table-cards--img"/>
                                                </div> : ""
                                        }
                                        {
                                            card?.defence_card?.rank ?
                                                <div className="game__table-cards--card">
                                                    <img
                                                        src={`../images/game/cards/${card.defence_card.rank}-${card.defence_card.suit}.svg`}
                                                        alt="" className="game__table-cards--img"/>
                                                </div> : ""
                                        }
                                    </>
                                    :
                                    <div className="game__table-cards--card">
                                        <img src="../images/game/cards/place.svg" alt=""
                                             className="game__table-cards--img"/>
                                    </div>
                            }
                        </li>
                    )
                }

                {
                    userTurn?.event === 'attacker' || userTurn?.event === 'sub_attacker' ?
                        <li className="game__table-cards--item _accent">
                            <div className="game__table-cards--card game__table-cards--card_empty">
                                <img src="../images/game/cards/place.svg" alt="" className="game__table-cards--img"/>
                            </div>
                        </li> : ""
                }

            </ul>
        </div>
    );
};

export default FoolCenterRunning;