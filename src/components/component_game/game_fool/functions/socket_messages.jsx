import React, {useCallback, useEffect, useState} from 'react';
import {leaveGamePlayers, setGamePlayers} from "../../../../redux/reducers/gamesListPlayersReducer";
import {popupTitle} from "../../../../redux/actions";
import {setIsGameStart} from "../../../../redux/game_reducers/reducerIsGameStart";
import {setIsReady} from "../../../../redux/game_reducers/reducerIsReady";
import {setUsersCards} from "../../../../redux/game_reducers/reducerFoolUsersCards";
import {setUserReadyState} from "../../../../redux/game_reducers/reducerUserReadyState";
import {setEndGame} from "../../../../redux/game_reducers/reducerEndGame";
import {setPlayerTurn} from "../../../../redux/game_reducers/reducerPlayerTurn";

const socketMessages = (
    navigate,
    setTimer,
    data,
    setTrump,
    setIsWinner,
    dispatch,
    setMyCards,
    myCards,
    setCardsOnTable,
    cardsOnTable,
    setSelectedCard,
    user,
    setDefenderTake,
    setCardsLeft,
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

    if(data.status === 'Waiting') {

        dispatch(setGamePlayers('clear'))
        dispatch(setGamePlayers(data.users))
        dispatch(setUserReadyState('clear'))
        // data.users.map(item => item.ready && dispatch(setUserReadyState(item.id)))
        setMyCards([])
        setAllCardsCount(0)
        setTrump({})
        setCardsOnTable([])
        setWhoToWhom({})
        setTimer(0)
        dispatch(setPlayerTurn({}))
        dispatch(setIsGameStart(false))
        dispatch(setUsersCards([]))
        dispatch(setEndGame(false))

    } else if (data.status === 'Game in progress') {
        dispatch(setGamePlayers(data.users))
        dispatch(setIsReady(true))
    } else if (data.status === 'End game') {
        dispatch(setGamePlayers(data.users))
        dispatch(setEndGame(true))
    }

    function CardDistribution() {
        setAllCardsCount(data.data.deck_cards_count)
        setTrump(data.data.trump)
        setMyCards(data.data.cards)
    }

    function StartGame() {
        dispatch(setIsGameStart(true))
    }

    function NewPlayer() {
        dispatch(setGamePlayers([data.data]))
    }

    function PlayerTurn() {
        document.querySelector('.game-user-cards__item._active')?.classList.remove('_active')

        dispatch(setPlayerTurn({
            id: data.data.player.id,
            event: data.data.role,
        }))
    }

    function AttackerPlayed() {
        setCardsOnTable(prev => [...prev, {
            entry_card: data.data.played_card,
            closing_card: {}
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
            entry_card: data.data.played_card,
            closing_card: {}
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
            entry_card: data.data.entry_card,
            closing_card: data.data.played_card
        }

        let index = 0;
        cardsOnTable.some((item, idx) => {
            if (item.entry_card.rank === data.data.entry_card.rank && item.entry_card.suit === data.data.entry_card.suit) {
                index = idx
            }
        })

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
        dispatch(setEndGame(true))

        setTimeout(() => {
            navigate(-1)
        }, 5000)
    }

    function UserReadyState() {
        dispatch(setUserReadyState(data.data.user_id))
    }

    const PlayersNewCardsQuantity = () => {
        setAllCardsCount(data.data.deck_cards_count)
        setPlayersQuantityCards(data.data.players)
        console.log('111', data.data)
    }

    const NewRound = () => {
        setWhoToWhom(data.data)
    }

    const GameState = () => {
        setMyCards(data.data.game.cards)
        setAllCardsCount(data.data.game.deck.cards_remaining)
        setTrump(data.data.game.deck.trump_card)
        setCardsOnTable(data.data.game.desk.card_row)
        setWhoToWhom({
            attacker: {
                id: data.data.game.players.filter(item => item.role === 'attacker')[0].id
            },
            defender: {
                id: data.data.game.players.filter(item => item.role === 'defender')[0].id
            }
        })
        setTimer(70 - data.data.game.players.filter(item => item.timer !== null)[0].timer)

        dispatch(setPlayerTurn({
            id: data.data.game.players.filter(item => data.data.game.state.toLowerCase().includes(item.role))[0].id,
            event: data.data.game.players.filter(item => data.data.game.state.toLowerCase().includes(item.role))[0].role,
        }))
        dispatch(setIsGameStart(true))
        dispatch(setUsersCards(data.data.game.players))
    }

    const PlayerLeave = () => {
        if(user.id === data.data.player.id) navigate(-1)
        dispatch(leaveGamePlayers(data.data.player))
    }

    const events = {
        "card_distribution": CardDistribution,
        "start_game": StartGame,
        "game_state": GameState,
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
        "player_leave": PlayerLeave,
    }

    if (typeof events[data.event] === 'function') events[data.event]();
};

export default socketMessages;