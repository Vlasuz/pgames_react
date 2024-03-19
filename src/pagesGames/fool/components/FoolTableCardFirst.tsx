import React, {useContext, useEffect, useRef, useState} from 'react'
import {useAllCards} from "../../../hooks/AllCards";
import {SelectedCardRef, UserTurnRef} from "../Fool";

interface IFoolTableCardFirstProps {
    cards: any
    handleBeat: any
}

export const FoolTableCardFirst: React.FC<IFoolTableCardFirstProps> = ({cards, handleBeat}) => {

    const {allCards}: any = useAllCards()

    const cardRef: any = useContext(SelectedCardRef)
    const userRef: any = useContext(UserTurnRef)

    const [isShow, setIsShow] = useState(false)

    useEffect(() => {

        const timeout = setTimeout(() => {
            setIsShow(true)
        }, 10)

        return () => clearTimeout(timeout)
    }, [])

    const _selectedCard = cardRef?.current

    const refBlock: any = useRef()

    const transformX = () => {
        if(userRef?.current) {
            return userRef?.current?.getBoundingClientRect().x - refBlock.current?.getBoundingClientRect().x
        } else if(_selectedCard) {
            return _selectedCard?.getBoundingClientRect().x - refBlock.current?.getBoundingClientRect().x
        }
    }
    const transformY = () => {
        if(userRef?.current) {
            return userRef?.current?.getBoundingClientRect().y - refBlock.current?.getBoundingClientRect().y
        } else if(_selectedCard) {
            return _selectedCard?.getBoundingClientRect().y - refBlock.current?.getBoundingClientRect().y
        }
    }

    const style = {
        transform: `translate(${isShow ? "-50%" : `${transformX()}px`}, ${isShow ? 0 : transformY()}px)`,
        transition: isShow ? "all .3s ease" : "none"
    }

    return (
        <div className="game__table-cards--card" ref={refBlock} onClick={_ => handleBeat(cards?.played_card)}>
            <img style={style} src={allCards[`${cards?.played_card?.suit}${cards?.played_card?.rank}`]} alt=""
                 className="game__table-cards--img"/>
        </div>
    )
}
