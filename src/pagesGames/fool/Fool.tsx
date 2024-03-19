import React, {createContext, Dispatch, SetStateAction, useContext, useEffect, useRef, useState} from 'react'
import {GamesCommunication} from "../../components/gamesCommunication/GamesCommunication";
import table from './../../assets/img/game/table.png'
import chip from './../../assets/img/icons/chip.svg'
import {Player} from "../../components/player/Player";
import {ICard, IPlayerUser, IUser} from "../../models";
import {useSelector} from 'react-redux';
import {getApiLink} from '../../functions/getApiLink';
import {FoolHeader} from "./components/FoolHeader";
import {FoolDeck} from "./components/FoolDeck";
import {FoolTableCenter} from "./components/FoolTableCenter";
import {FoolMyCards} from "./components/FoolMyCards";
import {FoolStyled} from "./Fool.styled";
import {useParams} from "react-router-dom";
import getCookies from "../../functions/getCookie";
import {FoolButton} from "./components/FoolButton";
import {PopupContext} from "../../App";
import {FoolUser} from "./components/FoolUser";

interface IFoolProps {

}

export const WSMessage: any = createContext(null)
export const WS: any = createContext(null)
export const SelectedCardRef: any = createContext(null)
export const UserTurnRef: any = createContext(null)
export const DefenderTaken: any = createContext(null)

export const Fool: React.FC<IFoolProps> = () => {

    const {roomId} = useParams()

    const [ws, setWs] = useState<any>({})
    const [roomState, setRoomState] = useState<any>({})
    const [myCards, setMyCards] = useState<ICard[]>([])
    const [deck, setDeck] = useState<any>({})
    const [userTurn, setUserTurn] = useState<any>({})
    const [tableCards, setTableCards] = useState<any>([])
    const [selectedCard, setSelectedCard] = useState<{ rank: string; suit: string }>()
    const [playerNewCards, setPlayerNewCards] = useState({id: "", new_cards_count: 6})
    const [userEvent, setUserEvent] = useState({})
    const [defenderTakenUser, setDefenderTakenUser] = useState({})
    const [isEndGame, setIsEndGame] = useState(false)
    const [isWaitingGame, setIsWaitingGame] = useState(false)
    const [isCardsBeaten, setIsCardsBeaten] = useState(false)

    const userTurnRef: any = useRef()
    const selectedCardRef: any = useRef()

    useEffect(() => {
        const _ws = new WebSocket(getApiLink(`/room/${roomId}/`, true));

        setWs(_ws)
    }, [])

    const setModal: Dispatch<SetStateAction<string>> = useContext(PopupContext)

    const user: IUser = useSelector((state: any) => state.toolkit.user)

    const myPosition = roomState?.users?.filter((user2: IPlayerUser) => user2.id === user.id)[0]?.position

    const position = (position: number): number => {

        const isNotFirst = roomState?.users?.some((user2: IPlayerUser) => user2.id === user.id && user2.position !== 1)
        if (!isNotFirst) return position;

        const calculate = position - 7 + myPosition + 6
        const newPosition = calculate > 6 ? calculate - 6 : calculate

        return newPosition
    }


    useEffect(() => {
        if (!user?.id) return;

        ws.onopen = () => {
            console.log('WebSocket connection established');
            ws.send(
                JSON.stringify({
                    command: "auth",
                    data: {
                        token: getCookies('access_token_pg')
                    }
                })
            );
        };

        ws.onerror = () => {
            console.log('error')
            setIsEndGame(true)
        }
        ws.onclose = () => {
            console.log('close')
            setIsEndGame(true)
        }

        ws.onmessage = (response: any) => {
            const data = JSON.parse(response.data)
            console.log(data)

            if (data.status === "End game") handleEndGame()
            if (data.status === "Waiting") handleWaiting()

            if (!data.event) return setRoomState(data)

            const events: any = {
                "new_player": () => handleAddNewPlayer(data.data),
                "auth": () => handleOk(),
                "user_ready_state": () => handleUserReady(data.data),
                "start_game": () => handleStartGame(),
                "new_round": () => handleOk(),
                "player_turn": () => handlePlayerTurn(data.data),
                "card_distribution": () => handleDistribution(data.data),
                "attacker_played": () => handleAttackerPlayed(data.data),
                "sub_attacker_played": () => handleSubAttackerPlayed(data.data),
                "players_new_cards_quantity": () => handleNewCards(data.data),
                "defender_take": () => handleDefenderTake(data.data),
                "defender_played": () => handleDefenderPlayed(data.data),
                "cards_beat": () => handleCardsBeat(data.data),
                "new_cards": () => handleMyNewCards(data.data),
                "pass_turn": () => handleOk(),
                "player_win": () => handlePlayerWin(data.data),
                "player_leave": () => handleOk(),
                "end_game": () => handleEndGame(),
                "game_state": () => handleGameState(data.data),
            }
            events[data.event]();
        }

        console.log(roomState)
        const handleOk = () => {
            console.log('ok')
        }
        const handlePlayerWin = (data: any) => {
            if (user.id === data.player.id) {
                setModal('game-winner')
            }
        }
        const handleDefenderPlayed = (data: any) => {

            setUserEvent(data.player)
            setTimeout(() => {
                setUserEvent({})
            }, 300)

            setTableCards((prev: any) => {

                return prev.map((item: any) => {
                    if (item.played_card.rank === data.entry_card.rank && item.played_card.suit === data.entry_card.suit) {
                        item.entry_card = data.played_card
                    }

                    return item
                })
            })
        }
        const handleMyNewCards = (data: any) => {
            setMyCards(prev => [...prev, ...data.cards])
        }
        const handleDefenderTake = (data: any) => {
            setDefenderTakenUser(data)

            setUserEvent(data.player)
            setTimeout(() => {
                setUserEvent({})
                setDefenderTakenUser({})
                setTableCards([])

                if (user.id === data.player.id) {
                    setMyCards(prev => [...prev, ...data.cards])
                }
            }, 300)
        }
        const handleAttackerPlayed = (data: any) => {

            setUserEvent(data.player)
            setTimeout(() => {
                setUserEvent({})
            }, 300)

            setTableCards((prev: any) => {
                const newCard = {
                    "played_card": {
                        "rank": data?.played_card?.rank,
                        "suit": data?.played_card?.suit
                    },
                    "entry_card": null
                }

                return [...prev, newCard]
            })

        }
        const handleSubAttackerPlayed = (data: any) => {

            setUserEvent(data.player)
            setTimeout(() => {
                setUserEvent({})
            }, 300)

            setTableCards((prev: any) => {
                const newCard = {
                    "played_card": {
                        "rank": data?.played_card?.rank,
                        "suit": data?.played_card?.suit
                    },
                    "entry_card": null
                }

                return [...prev, newCard]
            })

        }
        const handleStartGame = () => {
            setIsWaitingGame(false)
        }
        const handleWaiting = () => {
            setIsWaitingGame(true)
        }
        const handleEndGame = () => {
            setIsEndGame(true)
            setMyCards([])
            setTableCards([])
            setPlayerNewCards({id: "", new_cards_count: 0})
        }
        const handleCardsBeat = (data: any) => {
            setIsCardsBeaten(true)

            setTimeout(() => {
                setIsCardsBeaten(false)
                setTableCards([])
            }, 400)
        }
        const handlePlayerTurn = (data: any) => {
            setUserTurn(data)
        }
        const handleGameState = (data: any) => {
            setMyCards(data.game.cards)

            setPlayerNewCards(data.game.players)

            const newTableCardsList =
                data.game.desk.card_row.map((item: any) => {
                    return {
                        played_card: item.entry_card,
                        entry_card: item.closing_card
                    }
                })
            setTableCards(newTableCardsList)

            if (data.game.players.some((player: any) => player.timer)) {
                setUserTurn({
                    player: {
                        id: data.game.players.filter((player: any) => player.timer)[0].id
                    },
                    timeout: data.game.players.filter((player: any) => player.timer)[0].timer,
                    role: data.game.players.filter((player: any) => player.timer)[0].role,
                })
            }

            setDeck({
                deck_cards_count: data.game.deck.cards_remaining,
                trump: data.game.deck.trump_card
            })
        }
        const handleNewCards = (data: any) => {
            setPlayerNewCards(data.players)

            setDeck((prev: any) => {
                return {
                    ...prev,
                    deck_cards_count: data.deck_cards_count,
                }
            })
        }
        const handleDistribution = (data: any) => {
            setMyCards(data.cards)
            setDeck({
                deck_cards_count: data.deck_cards_count,
                trump: data.trump
            })
        }
        const handleAddNewPlayer = (user: any) => {
            setRoomState((prev: any) => {
                return {
                    ...prev,
                    users: [...prev.users, user]
                };
            });
        }
        const handleUserReady = (data: any) => {
            setRoomState((prev: any) => {

                if (prev.users.some((user: any) => user.id === data.user_id)) {
                    const userIndex = prev.users.indexOf((user: any) => user.id === data.user_id)
                    const userNew = prev.users.filter((user: any) => user.id === data.user_id)[0]

                    userNew.ready = true

                    return {
                        ...prev,
                        users: [...prev.users.slice(0, userIndex), userNew, ...prev.users.slice(userIndex - 1)]
                    };
                }
            });
        }

    }, [ws, user])

    return (
        <UserTurnRef.Provider value={userTurnRef}>
            <SelectedCardRef.Provider value={selectedCardRef}>
                <WS.Provider value={ws}>
                    <WSMessage.Provider value={roomState}>
                        <FoolStyled className="game page-padding-top">
                            <div className="game__container container">

                                <FoolHeader/>

                                <div className="game__main">
                                    <div className="game__main--table game__bg">
                                        <picture>
                                            <img src={table} alt="" width="300" className="game__bg--img"/>
                                        </picture>
                                    </div>
                                    <div className="game__main--grid game__grid">
                                        <div className="game__grid--item">
                                            <div className="game__bet">
                                        <span className="game__bet--value">
                                            {/*{ws}*/}
                                            111
                                        </span>
                                                <img src={chip} alt="" className="game__bet--currency"/>
                                            </div>
                                        </div>
                                        <div className="game__grid--item">
                                            <Player
                                                userTurn={userTurn}
                                                playerNewCards={playerNewCards}
                                                isWaitingGame={isWaitingGame}
                                                gameSlug={"fool"}
                                                isHavePlayer={true}
                                                isReady={false}
                                                userEvent={userEvent}
                                                position={position(3)}
                                            />
                                        </div>
                                        <div className="game__grid--item">
                                            <Player
                                                userTurn={userTurn}
                                                playerNewCards={playerNewCards}
                                                isWaitingGame={isWaitingGame}
                                                gameSlug={"fool"}
                                                isHavePlayer={false}
                                                isReady={false}
                                                userEvent={userEvent}
                                                position={position(4)}
                                            />
                                        </div>
                                        <div className="game__grid--item">
                                            <Player
                                                userTurn={userTurn}
                                                playerNewCards={playerNewCards}
                                                isWaitingGame={isWaitingGame}
                                                gameSlug={"fool"}
                                                isHavePlayer={true}
                                                isReady={false}
                                                userEvent={userEvent}
                                                position={position(5)}
                                            />
                                        </div>
                                        <div className="game__grid--item">

                                            <FoolDeck deck={deck}/>

                                        </div>
                                        <div className="game__grid--item">
                                            <Player
                                                userTurn={userTurn}
                                                playerNewCards={playerNewCards}
                                                isWaitingGame={isWaitingGame}
                                                gameSlug={"fool"}
                                                isHavePlayer={true}
                                                isReady={false}
                                                userEvent={userEvent}
                                                position={position(2)}
                                            />
                                        </div>
                                        <div className="game__grid--item">
                                            <Player
                                                userTurn={userTurn}
                                                playerNewCards={playerNewCards}
                                                isWaitingGame={isWaitingGame}
                                                gameSlug={"fool"}
                                                isHavePlayer={true}
                                                isReady={false}
                                                userEvent={userEvent}
                                                position={position(6)}
                                            />
                                        </div>
                                        <div className="game__grid--item">
                                            <FoolUser
                                                myCards={myCards}
                                                deck={deck}
                                                setSelectedCard={setSelectedCard}
                                                tableCards={tableCards}
                                                userTurn={userTurn}
                                            />
                                        </div>
                                    </div>

                                    <FoolTableCenter
                                        isEndGame={isEndGame}
                                        isWaitingGame={isWaitingGame}
                                        selectedCard={selectedCard}
                                        userTurn={userTurn}
                                        tableCards={tableCards}
                                        setMyCards={setMyCards}
                                        defenderTakenUser={defenderTakenUser}
                                        isCardsBeaten={isCardsBeaten}
                                    />

                                    <div className="game__main--user-menu game__user-menu">
                                        <div className="game__user-menu--col">

                                            <GamesCommunication/>

                                        </div>
                                        <div className="game__user-menu--col">

                                            <FoolButton
                                                roomState={roomState}
                                                userTurn={userTurn}
                                                isEndGame={isEndGame}
                                                isWaitingGame={isWaitingGame}
                                            />

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </FoolStyled>
                    </WSMessage.Provider>
                </WS.Provider>
            </SelectedCardRef.Provider>
        </UserTurnRef.Provider>
    )
}
