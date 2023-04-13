import React from 'react';
import {setGamePlayers} from "../../../../redux/reducers/gamesListPlayersReducer";

const socketMessages = (data, setTrump, setUserTurn, setIsWinner, setIsEndGame, setIsGameStart, setIsAttacker, dispatch, setMyCards, setCardsOnTable, setSelectedCard, user) => {

    function CardDistribution() {
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
        setIsAttacker(data.data.player)
        if (data.data.player.id !== user.id) {
            setTimeout(() => {
                document.querySelector('.game__table-cards--item.game__table-cards--item_from-position-2').classList.remove('game__table-cards--item_from-position-2')
            }, 100)
        }
    }

    function SubAttackerPlayed() {
        setCardsOnTable(prev => [...prev, {
            attacker_card: data.data.played_card,
            defence_card: {}
        }])
    }

    function DefenderPlayed() {
        setCardsOnTable(prev => prev.map(item => {

            if (item.attacker_card.rank === data.data.entry_card.rank && item.attacker_card.suit === data.data.entry_card.suit) {
                setSelectedCard({})
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
        setCardsOnTable([])
        if (user.id === data.data.player.id) {
            setMyCards(prev => [...prev, ...data.data.cards])
        }
    }

    function NewCards() {
        if (user.id === data.data.player.id) {
            setMyCards(prev => [...prev, ...data.data.cards])
        }
    }

    function CardsBeat() {
        setCardsOnTable([])
    }

    function PlayerWin() {
        setIsWinner(prev => [...prev, data.data.player])
    }

    function EndGame() {
        setIsEndGame(true)
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
    }

    if(typeof events[data.event] === 'function') events[data.event]();
};

export default socketMessages;