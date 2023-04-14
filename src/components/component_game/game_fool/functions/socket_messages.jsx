import React from 'react';
import {setGamePlayers} from "../../../../redux/reducers/gamesListPlayersReducer";
import {logDOM} from "@testing-library/react";

const socketMessages = (
    data,
    setTrump,
    setUserTurn,
    setIsWinner,
    setIsEndGame,
    setIsGameStart,
    dispatch,
    setMyCards,
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
    setDefender
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
        setIsGameStart(true)
    }

    function NewPlayer() {
        dispatch(setGamePlayers([data.data]))
    }

    function PlayerTurn() {
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
        setAttacker(data.data.player)

        if (data.data.player.id !== user.id) {
            setTimeout(() => {
                document.querySelectorAll('.game__table-cards--item_attacker-from-position-6').forEach(item => item?.classList.remove('game__table-cards--item_attacker-from-position-6'))
                document.querySelectorAll('.game__table-cards--item_attacker-from-position-5').forEach(item => item?.classList.remove('game__table-cards--item_attacker-from-position-5'))
                document.querySelectorAll('.game__table-cards--item_attacker-from-position-4').forEach(item => item?.classList.remove('game__table-cards--item_attacker-from-position-4'))
                document.querySelectorAll('.game__table-cards--item_attacker-from-position-3').forEach(item => item?.classList.remove('game__table-cards--item_attacker-from-position-3'))
                document.querySelectorAll('.game__table-cards--item_attacker-from-position-2').forEach(item => item?.classList.remove('game__table-cards--item_attacker-from-position-2'))
            }, 100)
        }
    }

    function SubAttackerPlayed() {
        setCardsOnTable(prev => [...prev, {
            attacker_card: data.data.played_card,
            defence_card: {}
        }])
        setDefender({})
        setAttacker(data.data.player)

        if (data.data.player.id !== user.id) {
            setTimeout(() => {
                document.querySelectorAll('.game__table-cards--item_attacker-from-position-6').forEach(item => item?.classList.remove('game__table-cards--item_attacker-from-position-6'))
                document.querySelectorAll('.game__table-cards--item_attacker-from-position-5').forEach(item => item?.classList.remove('game__table-cards--item_attacker-from-position-5'))
                document.querySelectorAll('.game__table-cards--item_attacker-from-position-4').forEach(item => item?.classList.remove('game__table-cards--item_attacker-from-position-4'))
                document.querySelectorAll('.game__table-cards--item_attacker-from-position-3').forEach(item => item?.classList.remove('game__table-cards--item_attacker-from-position-3'))
                document.querySelectorAll('.game__table-cards--item_attacker-from-position-2').forEach(item => item?.classList.remove('game__table-cards--item_attacker-from-position-2'))
            }, 100)
        }
    }

    function DefenderPlayed() {
        setAttacker({})

        setDefender(data.data.player)

        // let index;
        // cardsOnTable.some((object, idx) => {
        //     if(object.attacker_card.rank === data.data.entry_card.rank && object.attacker_card.suit === data.data.entry_card.suit) {
        //         index = idx;
        //
        //         // СЮДА ЗАПИХНУТЬ ПЕРЕБОР на 120 строке !!!!
        //
        //         return true;
        //     }
        // });
        //
        // setCardsOnTable(prev => {
        //     // const newArray = [...prev]
        //     console.log('...prev', ...prev)
        //     console.log('prev', prev)
        //
        //     // if(object.attacker_card.rank === data.data.entry_card.rank && object.attacker_card.suit === data.data.entry_card.suit) {
        //     //
        //     // }
        //
        //     return [...prev]
        // })


        setCardsOnTable(prev => prev.map(item => {

            if (item.attacker_card.rank === data.data.entry_card.rank && item.attacker_card.suit === data.data.entry_card.suit) {
                setSelectedCard({})
                setTimeout(() => {
                    document.querySelectorAll('.game__table-cards--item_defender-from-position-6').forEach(item => item?.classList.remove('game__table-cards--item_defender-from-position-6'))
                    document.querySelectorAll('.game__table-cards--item_defender-from-position-5').forEach(item => item?.classList.remove('game__table-cards--item_defender-from-position-5'))
                    document.querySelectorAll('.game__table-cards--item_defender-from-position-4').forEach(item => item?.classList.remove('game__table-cards--item_defender-from-position-4'))
                    document.querySelectorAll('.game__table-cards--item_defender-from-position-3').forEach(item => item?.classList.remove('game__table-cards--item_defender-from-position-3'))
                    document.querySelectorAll('.game__table-cards--item_defender-from-position-2').forEach(item => item?.classList.remove('game__table-cards--item_defender-from-position-2'))
                }, 100)
                return {
                    attacker_card: data.data.entry_card,
                    defence_card: data.data.played_card
                };
            } else {
                return item;
            }

        }))
    }

    function DefenderTake() {
        setDefenderTake(data.data)
        setTimeout(() => {
            setCardsOnTable([])
            if (user.id === data.data.player.id) {
                setMyCards(prev => [...prev, ...data.data.cards])
            }
            setDefenderTake({})
        }, 300)
    }

    function NewCards() {
        setAllCardsCount(data.data.deck_cards_count)
        if (user.id === data.data.player.id) {
            setMyCards(prev => [...prev, ...data.data.cards])
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
    }

    function EndGame() {
        setIsEndGame(true)
    }

    function UserReadyState() {
        setPlayersWhoReady(prev => [...prev, data.data.user_id])
    }

    function PlayersNewCardsQuantity() {
        setAllCardsCount(data.data.deck_cards_count)
        setPlayersQuantityCards(data.data.players)
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
    }

    if (typeof events[data.event] === 'function') events[data.event]();
};

export default socketMessages;