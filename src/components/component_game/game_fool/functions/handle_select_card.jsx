import React from 'react';

const handleSelect = (item, htmlCard, setWrongStep, selectedCard, trump, setSelectedCard, setMyCards) => {
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
                if(window.innerWidth > 900) {
                    e.querySelector('.game-user-cards__item--body').style.height = `155px`
                } else {
                    e.querySelector('.game-user-cards__item--body').style.height = `85px`
                }
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

export default handleSelect;