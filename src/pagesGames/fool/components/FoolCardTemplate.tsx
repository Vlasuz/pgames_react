import React, {useEffect} from 'react'
import {useAllCards} from "../../../hooks/AllCards";

interface IFoolCardTemplateProps {
    cardRef: any
    card: any
    handleSelectCard: any
    _selectedCard: any
    isPossibleToUse: boolean
}

export const FoolCardTemplate: React.FC<IFoolCardTemplateProps> = ({
                                                                       cardRef,
                                                                       card,
                                                                       handleSelectCard,
                                                                       _selectedCard,
                                                                       isPossibleToUse
                                                                   }) => {

    const {allCards}: any = useAllCards()

    return (
        <li
            ref={cardRef}
            onClick={_ => handleSelectCard({rank: card.rank, suit: card.suit})}
            className={`game-my-cards__item ${isPossibleToUse && "can-drop"} ${card.suit === _selectedCard?.suit && card.rank === _selectedCard?.rank && "_active"}`}
        >
            <div className="game-my-cards__body">
                <img src={allCards[`${card?.suit}${card?.rank}`]} alt=""
                     className="game-my-cards__img"/>
            </div>
        </li>
    )
}
