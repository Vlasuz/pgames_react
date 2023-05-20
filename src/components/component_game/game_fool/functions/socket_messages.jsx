import React, {useCallback, useEffect, useState} from 'react';
import {setGamePlayers} from "../../../../redux/reducers/gamesListPlayersReducer";
import {popupTitle} from "../../../../redux/actions";
import {setIsGameStart} from "../../../../redux/game_reducers/reducerIsGameStart";

const socketMessages = (
    data,
    setTrump,
    setUserTurn,
    setIsWinner,
    setIsEndGame,
    setIsGameStart,
    dispatch,
    setMyCards,
    myCards,
    setCardsOnTable,
    cardsOnTable,
    setSelectedCard,
    user,
    setDefenderTake,
    setCardsLeft,
    setPlayersWhoReady,
    setPlayersQuantityCards,
    setAllCardsCount,
    setIsCardsBeat,
    setAttacker,
    setDefender,
    setWhoToWhom,
) => {

    console.log('socket message', data)

    if (data?.data?.carts_left) {
        setCardsLeft({
            cards: data.data.carts_left,
            userId: data.data.player.id
        })
    }

    function CardDistribution() {
        setAllCardsCount(data.data.deck_cards_count)
        setTrump(data.data.trump)
        setMyCards(data.data.cards)
    }

    function StartGame() {
        dispatch(setIsGameStart(true))
        setIsGameStart(true)
    }

    function NewPlayer() {
        dispatch(setGamePlayers([data.data]))
    }

    function PlayerTurn() {
        document.querySelector('.game-user-cards__item._active')?.classList.remove('_active')

        setUserTurn({
            id: data.data.player.id,
            event: data.data.role,
        })
    }

    function AttackerPlayed() {
        setCardsOnTable(prev => [...prev, {
            attacker_card: data.data.played_card,
            defence_card: {}
        }])
        setDefender({})
        setAttacker(data.data)

        if (data.data.player.id !== user.id) {
            setTimeout(() => {
                document.querySelector('.game__table-cards--item_attacker')?.classList.remove('game__table-cards--item_attacker')

                document.querySelector('.game__table-cards--item_attacker-from-position-2')?.classList.remove('game__table-cards--item_attacker-from-position-2')
                document.querySelector('.game__table-cards--item_attacker-from-position-3')?.classList.remove('game__table-cards--item_attacker-from-position-3')
                document.querySelector('.game__table-cards--item_attacker-from-position-4')?.classList.remove('game__table-cards--item_attacker-from-position-4')
                document.querySelector('.game__table-cards--item_attacker-from-position-5')?.classList.remove('game__table-cards--item_attacker-from-position-5')
                document.querySelector('.game__table-cards--item_attacker-from-position-6')?.classList.remove('game__table-cards--item_attacker-from-position-6')
            }, 100)
        }
    }

    function SubAttackerPlayed() {
        setCardsOnTable(prev => [...prev, {
            attacker_card: data.data.played_card,
            defence_card: {}
        }])
        setDefender({})
        setAttacker(data.data)

        if (data.data.player.id !== user.id) {
            setTimeout(() => {
                document.querySelector('.game__table-cards--item_attacker')?.classList.remove('game__table-cards--item_attacker')

                document.querySelector('.game__table-cards--item_attacker-from-position-2')?.classList.remove('game__table-cards--item_attacker-from-position-2')
                document.querySelector('.game__table-cards--item_attacker-from-position-3')?.classList.remove('game__table-cards--item_attacker-from-position-3')
                document.querySelector('.game__table-cards--item_attacker-from-position-4')?.classList.remove('game__table-cards--item_attacker-from-position-4')
                document.querySelector('.game__table-cards--item_attacker-from-position-5')?.classList.remove('game__table-cards--item_attacker-from-position-5')
                document.querySelector('.game__table-cards--item_attacker-from-position-6')?.classList.remove('game__table-cards--item_attacker-from-position-6')
            }, 100)
        }
    }

    function DefenderPlayed() {
        setAttacker({})
        setDefender(data.data)

        const newObjectWithCards = {
            attacker_card: data.data.entry_card,
            defence_card: data.data.played_card
        }

        let index = 0;
        cardsOnTable.some((item, idx) => {
            if (item.attacker_card.rank === data.data.entry_card.rank && item.attacker_card.suit === data.data.entry_card.suit) {
                index = idx
            }
        })

        // setCardsOnTable(prev => [...prev.slice(0, index), newObjectWithCards, ...prev.slice(index + 1)])

        setCardsOnTable(prev => {
            prev.splice(index, 1, newObjectWithCards);
            return prev;
        })

        setTimeout(() => {
            document.querySelector('.game__table-cards--item_defender')?.classList.remove('game__table-cards--item_defender')

            document.querySelector('.game__table-cards--item_defender-from-position-2')?.classList.remove('game__table-cards--item_defender-from-position-2')
            document.querySelector('.game__table-cards--item_defender-from-position-3')?.classList.remove('game__table-cards--item_defender-from-position-3')
            document.querySelector('.game__table-cards--item_defender-from-position-4')?.classList.remove('game__table-cards--item_defender-from-position-4')
            document.querySelector('.game__table-cards--item_defender-from-position-5')?.classList.remove('game__table-cards--item_defender-from-position-5')
            document.querySelector('.game__table-cards--item_defender-from-position-6')?.classList.remove('game__table-cards--item_defender-from-position-6')
        }, 100)

    }

    function DefenderTake() {
        setDefenderTake(data.data)
        setTimeout(() => {
            setCardsOnTable([])
            if (user.id === data.data.player.id) {
                myCards.push(...data.data.cards)
                setMyCards(myCards)
            }
            setDefenderTake({})
        }, 300)
    }

    function NewCards() {
        setAllCardsCount(data.data.deck_cards_count)
        if (user.id === data.data.player.id) {
            let newArray = [...myCards, ...data.data.cards]
            setMyCards(newArray)
        }
    }

    function CardsBeat() {
        setIsCardsBeat(true)
        setTimeout(() => {
            setCardsOnTable([])
            setIsCardsBeat(false)
        }, 300)
    }

    function PlayerWin() {
        setIsWinner(prev => [...prev, data.data.player])

        if (data.data.player.id === user.id) {
            dispatch(popupTitle('winner-game'))
        }
    }

    function EndGame() {
        setIsEndGame(true)
    }

    function UserReadyState() {
        setPlayersWhoReady(prev => [...prev, data.data.user_id])
    }

    const PlayersNewCardsQuantity = () => {
        setAllCardsCount(data.data.deck_cards_count)
        setPlayersQuantityCards(data.data.players)
    }

    const NewRound = () => {
        setWhoToWhom(data.data)
    }

    const events = {
        "card_distribution": CardDistribution,
        "start_game": StartGame,
        "new_player": NewPlayer,
        "player_turn": PlayerTurn,
        "attacker_played": AttackerPlayed,
        "sub_attacker_played": SubAttackerPlayed,
        "defender_played": DefenderPlayed,
        "defender_take": DefenderTake,
        "new_cards": NewCards,
        "cards_beat": CardsBeat,
        "player_win": PlayerWin,
        "end_game": EndGame,
        "user_ready_state": UserReadyState,
        "players_new_cards_quantity": PlayersNewCardsQuantity,
        "new_round": NewRound,
    }

    if (typeof events[data.event] === 'function') events[data.event]();
};

export default socketMessages;