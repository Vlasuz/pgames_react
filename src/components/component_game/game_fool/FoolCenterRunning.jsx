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
                               user,
                               players,
                               defenderTake,
                               isCardsBeat,
                               attacker,
                               defender
                           }) => {

    const [isDefenderTake, setIsDefenderTake] = useState(false);

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

    useEffect(() => {
        setIsDefenderTake(true)
        setTimeout(() => {
            setIsDefenderTake(false)
        }, 300)
    }, [defenderTake])

    const getUserPosition = () => {
        // if (defenderTake?.player?.id !== user.id) {
        //     // const userTurnPosition = players.filter(item => item.user?.id ? item.user?.id === userTurn?.id : item.id === userTurn?.id)[0]?.position
        //     // const yourPosition = players.filter(item => item.user?.id ? item.user?.id === user.id : item.id === user.id)[0]?.position
        //     // return yourPosition !== 1 && yourPosition !== undefined ? 6 - (userTurnPosition - 1) : userTurnPosition;
        // }


        console.log(attacker?.id, user.id)
        if (Object.keys(defenderTake).length && defenderTake?.player?.id !== user.id) {
            const userTurnPosition = players.filter(item => item.user?.id ? item.user?.id === defenderTake?.player?.id : item.id === defenderTake?.player?.id)[0]?.position
            const yourPosition = players.filter(item => item.user?.id ? item.user?.id === user.id : item.id === user.id)[0]?.position

            console.log(yourPosition !== 1 && yourPosition !== undefined ? 6 - (userTurnPosition - 1) : userTurnPosition)
            return yourPosition !== 1 && yourPosition !== undefined ? 6 - (userTurnPosition - 1) : userTurnPosition;
        } else if (Object.keys(attacker).length && attacker?.id !== user.id) {
            const userTurnPosition = players.filter(item => item?.user?.id ? item.user?.id === attacker?.id : item.id === attacker?.id)[0].position
            const yourPosition = players.filter(item => item.user?.id ? item.user?.id === user.id : item.id === user.id)[0]?.position ? players.filter(item => item.user?.id ? item.user?.id === user.id : item.id === user.id)[0]?.position : 1

            console.log(yourPosition !== 1 && yourPosition !== undefined ? 6 - (userTurnPosition - 1) : userTurnPosition)
            return yourPosition !== 1 && yourPosition !== undefined ? 6 - (userTurnPosition - 1) : userTurnPosition;
        } else if (Object.keys(defender).length && defender?.id !== user.id) {
            const userTurnPosition = players.filter(item => item?.user?.id ? item.user?.id === defender?.id : item.id === defender?.id)[0].position
            const yourPosition = players.filter(item => item.user?.id ? item.user?.id === user.id : item.id === user.id)[0]?.position ? players.filter(item => item.user?.id ? item.user?.id === user.id : item.id === user.id)[0]?.position : 1

            console.log(yourPosition !== 1 && yourPosition !== undefined ? 6 - (userTurnPosition - 1) : userTurnPosition)
            return yourPosition !== 1 && yourPosition !== undefined ? 6 - (userTurnPosition - 1) : userTurnPosition;
        } else {
            // console.log('My run')
        }
    }

    return (
        <div className="game__table-cards">
            <ul className="game__table-cards--list">

                {
                    cardsOnTable.map((card, index) =>
                        <li className={"game__table-cards--item _accent _new-card" + (
                            isDefenderTake ?
                                (defenderTake?.player?.id === user.id ?
                                    " game__table-cards--item_take-me" :
                                    ` game__table-cards--item_take-other-to-${getUserPosition()}`) :
                                isCardsBeat ? " game__table-cards--item_cards-beat" :
                                    !!Object.keys(attacker).length ?
                                        ` game__table-cards--item_attacker-from-position-${getUserPosition()}` :
                                        !!Object.keys(defender).length ?
                                            ` game__table-cards--item_defender-from-position-${getUserPosition()}` : "")
                        }
                            key={index}>
                            {
                                card ?
                                    <>
                                        {
                                            card?.attacker_card?.rank ?
                                                <div className={"game__table-cards--card"}
                                                    // (isAttacker.id !== user.id ? ` game__table-cards--item_from-position-${getUserPosition()}` : "")
                                                     onClick={e => handleSelect(card.attacker_card, e, setWrongStep, selectedCard, trump, setSelectedCard, setMyCards)}>
                                                    <img
                                                        src={`../images/game/cards/${card.attacker_card.rank}-${card.attacker_card.suit}.svg`}
                                                        alt="" className="game__table-cards--img"/>
                                                </div> : ""
                                        }
                                        {
                                            card?.defence_card?.rank ?
                                                <div className={"game__table-cards--card"}>
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
                    (userTurn?.event === 'attacker' || userTurn?.event === 'sub_attacker') && userTurn.id === user.id ?
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