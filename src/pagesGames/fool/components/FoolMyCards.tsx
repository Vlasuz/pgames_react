import React, {Dispatch, ReactNode, SetStateAction, useContext, useEffect, useRef, useState} from 'react'
import {useSelector} from 'react-redux';
import {useAllCards} from "../../../hooks/AllCards";
import {ICard, IUser} from "../../../models";
import {SelectedCardRef} from '../Fool';
import {FoolCardTemplate} from "./FoolCardTemplate";

interface IFoolMyCardsProps {
    cardsList: ICard[]
    deck: any
    setSelectedCard: Dispatch<SetStateAction<any>>
    tableCards: any
    userTurn: any
}

export const FoolMyCards: React.FC<IFoolMyCardsProps> = ({cardsList, deck, setSelectedCard, tableCards, userTurn}) => {

    const user: IUser = useSelector((state: any) => state.toolkit.user)

    const cardRef = useContext(SelectedCardRef)

    const [_selectedCard, set_SelectedCard] = useState<any>({})
    const [suitableCards, setSuitableCards] = useState<any>([])

    useEffect(() => {
        setSuitableCards([]);
        set_SelectedCard({});
        setSelectedCard({});
        if (user?.id !== userTurn?.player?.id) return;

        if (userTurn?.role === "defender") {
            tableCards.forEach((cards: any) => {
                const filteredCards = cardsList.filter(card => (cards.entry_card === null && cards.played_card.suit === card.suit && cardsRank[card.rank] > cardsRank[cards.played_card.rank]) || card?.suit === deck?.trump?.suit);
                setSuitableCards((prev: any) => [...prev, ...filteredCards]);
            });
        } else if (userTurn?.role === "attacker" || userTurn?.role === "sub_attacker") {
            tableCards.forEach((cards: any) => {
                const filteredCards = cardsList.filter(card => cards?.played_card?.rank === card.rank || cards?.entry_card?.rank === card.rank);
                setSuitableCards((prev: any) => [...prev, ...filteredCards]);
            });
        }

    }, [tableCards, userTurn]);

    const handleSelectCard = (card: any) => {

        if (card.suit === _selectedCard?.suit && card.rank === _selectedCard?.rank) {
            setSelectedCard({})
            return set_SelectedCard({})
        }

        if (!tableCards.length || ((userTurn?.role === "defender" || userTurn?.role === "attacker" || userTurn?.role === "sub_attacker") && suitableCards.some((sc: any) => sc.suit === card.suit && sc.rank === card.rank))) {
            set_SelectedCard(card)
            setSelectedCard(card)
        }

    }

    const cardsRank: { [key: string]: number } = {
        "2": 1,
        "3": 2,
        "4": 3,
        "5": 4,
        "6": 5,
        "7": 6,
        "8": 7,
        "9": 8,
        "10": 9,
        "J": 10,
        "Q": 11,
        "K": 12,
        "A": 13,
    }

    return (
        <div className="game-my-cards">
            <ul className="game-my-cards__list">

                {
                    cardsList
                        ?.filter((item: any) => item.suit !== deck.trump.suit)
                        ?.map(card =>
                            <FoolCardTemplate
                                tableCards={tableCards}
                                isPossibleToUse={!tableCards.length || suitableCards.some((sc: any) => sc.suit === card.suit && sc.rank === card.rank)}
                                key={`${card?.suit}${card?.rank}`}
                                card={card}
                                cardRef={cardRef}
                                handleSelectCard={() => handleSelectCard(card)}
                                _selectedCard={_selectedCard}
                            />
                        )
                }
                {
                    cardsList
                        ?.filter((item: any) => item.suit === deck.trump.suit)
                        ?.map(card =>
                            <FoolCardTemplate
                                tableCards={tableCards}
                                isPossibleToUse={!tableCards.length || suitableCards.some((sc: any) => sc.suit === card.suit && sc.rank === card.rank)}
                                key={`${card?.suit}${card?.rank}`}
                                card={card}
                                cardRef={cardRef}
                                handleSelectCard={() => handleSelectCard(card)}
                                _selectedCard={_selectedCard}
                            />
                        )
                }

            </ul>
        </div>
    )
}
