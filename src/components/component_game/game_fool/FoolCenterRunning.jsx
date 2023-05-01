import React, {useEffect, useState} from 'react';
import {logDOM} from "@testing-library/react";
import handleSelect from "./functions/handle_select_card";
import setPosition from "./functions/set_position";

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
    const [classToCards, setClassToCards] = useState('')

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
        } else {
            // console.log('My run')
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
            if(attacker?.player?.id !== user.id && attacker.played_card === card.attacker_card) {
                return ` game__table-cards--item_attacker game__table-cards--item_attacker-from-position-${getUserPosition()}`;
            }
        } else if (!!Object.keys(defender).length) {
            if(defender?.player?.id !== user.id && defender.played_card === card.defence_card) {
                return ` game__table-cards--item_defender game__table-cards--item_defender-from-position-${getUserPosition()}`;
            }
        }

    }


    // что если сравнивать все карты и карта которую положилина стол, и если это защита и тому у кого совпадают карты давать класс

    return (
        <div className="game__table-cards">
            <ul className="game__table-cards--list">

                {
                    cardsOnTable.map((card, index) =>
                        <li className={"game__table-cards--item _accent _new-card " + classToCards + defenderFunc(card)}
                            key={index}>
                            {
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