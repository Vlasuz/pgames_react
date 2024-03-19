import React, {useContext, useEffect, useRef, useState} from 'react'
import {useAllCards} from "../../../hooks/AllCards";
import {SelectedCardRef, UserTurnRef, WSMessage} from "../Fool";

interface IFoolTableCardItemProps {
    cards: any
    refBlock: any
}

export const FoolTableCardSecond: React.FC<IFoolTableCardItemProps> = ({cards, refBlock}) => {

    const {allCards}: any = useAllCards()

    const cardRef: any = useContext(SelectedCardRef)
    const userRef: any = useContext(UserTurnRef)

    const [isShow, setIsShow] = useState(false)

    useEffect(() => {
        if (!cards.entry_card) return;

        const timeout = setTimeout(() => {
            setIsShow(true)

            setTimeout(() => {
                cardRef.current = null
            }, 1000)
        }, 10)

        return () => clearTimeout(timeout)
    }, [cards.entry_card])

    const _selectedCard = cardRef?.current

    const transformX = () => {
        if (userRef?.current) {
            return userRef?.current?.getBoundingClientRect().x - refBlock.current?.getBoundingClientRect().x
        } else if (_selectedCard) {
            return _selectedCard?.getBoundingClientRect().x - refBlock.current?.getBoundingClientRect().x
        }
    }
    const transformY = () => {
        if (userRef?.current) {
            return userRef?.current?.getBoundingClientRect().y - refBlock.current?.getBoundingClientRect().y
        } else if (_selectedCard) {
            return _selectedCard?.getBoundingClientRect().y - refBlock.current?.getBoundingClientRect().y
        }
    }

    const style: React.CSSProperties = {
        transform: `translate(${isShow ? "24px" : `${transformX()}px`}, ${isShow ? "12px" : `${transformY()}px`}) rotate(${isShow ? "15deg" : "0deg"})`,
        transition: isShow ? "all .3s ease" : "none",
        pointerEvents: cards.entry_card ? "auto" : "none"
    }

    return (
        <div className="game__table-cards--card" style={style}>
            <img src={allCards[`${cards?.entry_card?.suit}${cards?.entry_card?.rank}`]} alt=""
                 className="game__table-cards--img"/>
        </div>
    )
}
