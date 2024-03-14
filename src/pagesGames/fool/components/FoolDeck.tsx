import React, {useEffect} from 'react'
import {useAllCards} from "../../../hooks/AllCards";

interface IFoolDeckProps {
    deck: any
}

export const FoolDeck: React.FC<IFoolDeckProps> = ({deck}) => {

    const {allCards}: any = useAllCards()

    return (
        <form action="#" className="game__cards">
            <div className="game__cards--symbol">
                <img src={allCards[deck?.trump?.suit]} alt="" />
            </div>
            {!!deck?.deck_cards_count && <button className="game__cards--element">
                <div className="game__cards--back">
                    <img src={allCards.back} alt=""/>
                </div>
                {allCards[`${deck?.trump?.suit}${deck?.trump?.rank}`] && <div className="game__cards--last">
                    <img src={allCards[`${deck?.trump?.suit}${deck?.trump?.rank}`]} alt=""/>
                </div>}
            </button>}
        </form>
    )
}
