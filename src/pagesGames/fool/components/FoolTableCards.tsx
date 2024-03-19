import React, {useContext, useEffect, useRef, useState} from 'react'
import {FoolTableCardFirst} from "./FoolTableCardFirst";
import {FoolTableCardSecond} from "./FoolTableCardSecond";
import {UserTurnRef} from "../Fool";
import {IUser} from "../../../models";
import {useSelector} from 'react-redux';

interface IFoolTableCardsProps {
    cards: any
    handleBeat: any
    defenderTakenUser: any
    isCardsBeaten: boolean
}

export const FoolTableCards: React.FC<IFoolTableCardsProps> = ({
                                                                   cards,
                                                                   handleBeat,
                                                                   defenderTakenUser,
                                                                   isCardsBeaten
                                                               }) => {

    const cardRef: any = useRef(null)
    const userRef: any = useContext(UserTurnRef)

    const [isNew, setIsNew] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsNew(false)
        }, 100)
    }, [])

    const style = {
        padding: isNew ? "0 0" : "0 40px",
        minWidth: isNew ? "0%" : "17%",
        maxWidth: isNew ? "0%" : "23.7%",
        transition: "all .3s ease",
    }

    const transformX = () => {

        if(isCardsBeaten) {
            const beatenArea = document.querySelector('.game__bet')?.getBoundingClientRect().x
            return beatenArea && beatenArea - cardRef.current?.getBoundingClientRect().x
        } else if(userRef?.current) {
            return userRef?.current?.getBoundingClientRect().x - cardRef.current?.getBoundingClientRect().x
        } else {
            const myCardsArea = document.querySelector('.game-my-cards')?.getBoundingClientRect().x
            return myCardsArea && myCardsArea - cardRef.current?.getBoundingClientRect().x
        }
    }
    const transformY = () => {

        if(isCardsBeaten) {
            const beatenArea = document.querySelector('.game__bet')?.getBoundingClientRect().y
            return beatenArea && beatenArea - cardRef.current?.getBoundingClientRect().y
        } else if(userRef?.current) {
            return userRef?.current?.getBoundingClientRect().y - cardRef.current?.getBoundingClientRect().y
        } else {
            const myCardsArea = document.querySelector('.game-my-cards')?.getBoundingClientRect().y
            return myCardsArea && myCardsArea - cardRef.current?.getBoundingClientRect().y
        }

    }

    const isCanAnimate = Object.keys(defenderTakenUser).length || isCardsBeaten

    return (
        <li ref={cardRef} style={{
            ...style,
            transform: isCanAnimate ? `translate(${transformX()}px, ${transformY()}px)` : "none"
        }} key={`${cards?.played_card?.suit}${cards?.played_card?.rank}`}
            className="game__table-cards--item _accent">
            <FoolTableCardFirst cards={cards} handleBeat={handleBeat}/>
            <FoolTableCardSecond refBlock={cardRef} cards={cards}/>
        </li>
    )
}
