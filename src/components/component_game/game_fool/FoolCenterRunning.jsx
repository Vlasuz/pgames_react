import React, {useEffect} from 'react';
import {logDOM} from "@testing-library/react";

const FoolCenterRunning = ({
                               cardsOnTable,
                               setCardsOnTable,
                               setSelectedCard,
                               selectedCard,
                               websocket,
                               myCards,
                               setMyCards,
                               trump,
                               setWrongStep,
                               userTurn
                           }) => {

    const handleSelect = (item, htmlCard) => {
        console.log('card', item)
        setWrongStep(false)

        const ranks = {
            '1': 1,
            '2': 2,
            '3': 3,
            '4': 4,
            '5': 5,
            '6': 6,
            '7': 7,
            '8': 8,
            '9': 9,
            '10': 10,
            'J': 11,
            'Q': 12,
            'K': 13,
            'A': 14,
        }

        if (Object.keys(selectedCard).length <= 0) {
            console.log('Choose a card')
        } else if ((item.suit === selectedCard?.card?.suit && ranks[item.rank] < ranks[selectedCard.card.rank]) ||
            (trump.suit === selectedCard.card.suit && selectedCard.card.suit !== item.suit) ||
            (trump.suit === selectedCard.card.suit && selectedCard.card.suit === item.suit && ranks[selectedCard.card.rank] > ranks[item.rank])) {

            const e = document.querySelector('.game-user-cards__item._active')

            const top = e.getBoundingClientRect().top - htmlCard.target.closest('li').getBoundingClientRect().top;
            const left = e.getBoundingClientRect().left - htmlCard.target.closest('li').getBoundingClientRect().left;
            const width = htmlCard.target.closest('li').clientWidth;
            const height = htmlCard.target.closest('li').clientHeight;

            e.style.top = `${-top + 52}px`
            e.style.left = `${-left + 41}px`
            e.style.transform = `translate3d(40%,15%,0) rotate3d(0,0,1,15deg)`
            e.querySelector('.game-user-cards__item--body').style.width = `${width - 10}px`
            e.querySelector('.game-user-cards__item--body').style.height = `${height}px`

            document.querySelector('.game__main--table.game__table').classList.remove('game__table_defence')

            setTimeout(() => {

                setSelectedCard({
                    "card": {
                        "rank": selectedCard.card.rank,
                        "suit": selectedCard.card.suit
                    },
                    "entry_card": {
                        "rank": item.rank,
                        "suit": item.suit
                    }
                })

                setTimeout(() => {
                    e.style.transition = `none`;
                    e.style.top = `0px`;
                    e.style.left = `0px`;
                    e.style.transform = `none`
                    e.querySelector('.game-user-cards__item--body').style.width = `100%`
                    e.querySelector('.game-user-cards__item--body').style.height = `155px`
                    setTimeout(() => {
                        e.style.transition = `all .3s ease`;
                    }, 100)
                    setMyCards(prev => prev.filter(item => {
                        if (!(item.suit === selectedCard.card.suit && item.rank === selectedCard.card.rank)) {
                            return item
                        }
                    }))
                }, 100)

                document.querySelector('.game__main--table.game__table').classList.add('game__table_defence')
                document.querySelectorAll('.game-user-cards__item')?.forEach(item => item?.classList?.remove('_active'))
            }, 300)

        } else {
            setWrongStep(true)
            setSelectedCard({})
        }

    }

    useEffect(() => {

        if (selectedCard?.card?.rank && selectedCard?.entry_card?.rank) {

            console.log('send', selectedCard)

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

    return (
        <div className="game__table-cards">
            <ul className="game__table-cards--list">

                {
                    cardsOnTable.map((card, index) =>
                        <li className="game__table-cards--item _accent _new-card" key={index}>
                            {
                                card ?
                                    <>
                                        {
                                            card?.attacker_card?.rank ?
                                                <div className="game__table-cards--card"
                                                     onClick={e => handleSelect(card.attacker_card, e)}>
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
                    userTurn?.event === 'attacker' || userTurn?.event === 'sub_attacker' ? <li className="game__table-cards--item _accent">
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