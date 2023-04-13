import React from 'react';

const cardEvent = (item, e, setWrongStep, userTurn, user, cardsOnTable, websocket, setSelectedCard, setMyCards) => {
    setWrongStep(false)

    if (userTurn.id === user.id) {

        console.log("Card move", item)
        console.log("Card move", e)

        if (((userTurn.event === "attacker" || userTurn.event === "sub_attacker") &&
                (cardsOnTable.some(card => card.attacker_card?.rank === item.rank) || cardsOnTable.some(card => card.defence_card?.rank === item.rank))) ||
            cardsOnTable.length === 0) {

            const top = e.target.closest('li').getBoundingClientRect().top - document.querySelector('.game__table-cards--card_empty').getBoundingClientRect().top;
            const left = e.target.closest('li').getBoundingClientRect().left - document.querySelector('.game__table-cards--card_empty').getBoundingClientRect().left;
            const width = document.querySelector('.game__table-cards--card_empty').clientWidth;
            const height = document.querySelector('.game__table-cards--card_empty').clientHeight;

            e.target.closest('li').style.top = `${-top + 27}px`
            e.target.closest('li').style.left = `${-left - 14}px`
            e.target.closest('li').querySelector('.game-user-cards__item--body').style.width = `${width - 10}px`
            e.target.closest('li').querySelector('.game-user-cards__item--body').style.height = `${height}px`

            setTimeout(() => {
                websocket.send(
                    JSON.stringify({
                        "command": "paying_card",
                        "data": {
                            "card": {
                                "rank": item.rank,
                                "suit": item.suit
                            }
                        }
                    })
                )

                e.target.closest('li').style.transition = `none`;
                e.target.closest('li').style.top = `0px`;
                e.target.closest('li').style.left = `0px`;
                e.target.closest('li').querySelector('.game-user-cards__item--body').style.width = `100%`
                e.target.closest('li').querySelector('.game-user-cards__item--body').style.height = `155px`
                setTimeout(() => {
                    e.target.closest('li').style.transition = `all .3s ease`;
                }, 100)

                setTimeout(() => {
                    setMyCards(prev => prev.filter(card => {
                        if (!(card.suit === item.suit && card.rank === item.rank)) {
                            return card
                        }
                    }))
                }, 50)
            }, 300)
        } else if (userTurn.event === "defender") {

            document.querySelector('.game-user-cards__item._active')?.classList.remove('_active')
            e.target.closest('li').classList.toggle('_active')

            if (e.target.closest('li').classList.contains('_active')) {
                setSelectedCard({
                    "card": {
                        "rank": item.rank,
                        "suit": item.suit
                    },
                    "entry_card": {
                        "rank": null,
                        "suit": null
                    }
                })
            } else {
                setSelectedCard({
                    "card": {
                        "rank": null,
                        "suit": null
                    },
                    "entry_card": {
                        "rank": null,
                        "suit": null
                    }
                })
            }
        } else {
            setWrongStep(true)
        }

    }

}

export default cardEvent;