import React, {useContext, useEffect, useState} from 'react'
import {useAllCards} from "../../../hooks/AllCards";
import {SelectedCardRef} from "../Fool";

interface IFoolCardTemplateProps {
    cardRef: any
    card: any
    handleSelectCard: any
    _selectedCard: any
    isPossibleToUse: boolean
    tableCards: any
}

export const FoolCardTemplate: React.FC<IFoolCardTemplateProps> = ({
                                                                       cardRef,
                                                                       card,
                                                                       handleSelectCard,
                                                                       _selectedCard,
                                                                       isPossibleToUse,
                                                                       tableCards
                                                                   }) => {

    const {allCards}: any = useAllCards()

    const isSelected = card.suit === _selectedCard?.suit && card.rank === _selectedCard?.rank

    const [isCardHidden, setIsCardHidden] = useState(false)

    useEffect(() => {
        setIsCardHidden(isSelected)
    }, [tableCards])

    return (
        <li
            ref={isSelected ? cardRef : null}
            onClick={_ => handleSelectCard({rank: card.rank, suit: card.suit})}
            className={`game-my-cards__item ${isPossibleToUse && "can-drop"} ${isSelected && "_active"}`}
            style={{opacity: isCardHidden ? 0 : 1}}
        >
            <div className="game-my-cards__body">
                <img src={allCards[`${card?.suit}${card?.rank}`]} alt=""
                     className="game-my-cards__img"/>
            </div>
        </li>
    )
}
