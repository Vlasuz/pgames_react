import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {
    changeFenCheckers,
    isKingCheckers, setDomino,
    setFenTable,
    setSelectDominoes
} from "../redux/game_reducers/reducerChessFenTable";
import DominoesTable from "../components/component_game/game_dominoes/DominoesTable";
import DominoesUser from "../components/component_game/game_dominoes/DominoesUser";
import DominoesYou from "../components/component_game/game_dominoes/DominoesYou";
import GameButtonsChatAndMicro from "../components/component_game/GameButtonsChatAndMicro";
import GameChat from "../components/component_game/GameChat";
import GameTopButtons from "../components/component_game/GameTopButtons";
import GlobalSocket from "../GlobalSocket";
import {setWebsocket} from "../redux/game_reducers/reducerWebsocket";
import GetCookies from "../hooks/GetCookies";
import axios from "axios";
import GlobalLink from "../GlobalLink";
import {setSocketResponse} from "../redux/game_reducers/reducerSocketResponse";
import {setGamePlayers} from "../redux/reducers/gamesListPlayersReducer";
import {setIsGameStart} from "../redux/game_reducers/reducerIsGameStart";
import {setPlayerTurn} from "../redux/game_reducers/reducerPlayerTurn";
import {setUserReadyState} from "../redux/game_reducers/reducerUserReadyState";
import {setEndGame} from "../redux/game_reducers/reducerEndGame";
import {popupTitle} from "../redux/actions";
import {useParams} from "react-router-dom";
import FoolButtonReady from "../components/component_game/game_fool/FoolButtonReady";
import FoolButtonWaiting from "../components/component_game/game_fool/FoolButtonWaiting";
import {addUserDomino, removeUserDomino, setUsersCards} from "../redux/game_reducers/reducerFoolUsersCards";
import GamePlayerWaiting from "../components/component_game/game_thousand/GamePlayerWaiting";
import {setIsReady} from "../redux/game_reducers/reducerIsReady";

const RoomSingleDominoes = () => {

    const players = useSelector(state => state.gamesListPlayersReducer.players)
    const user = useSelector(state => state.userInfoReducer.data)

    const {roomId} = useParams()
    const dispatch = useDispatch()
    const isAuth = useSelector(state => state.userInfoReducer.data)
    const websocket = useSelector(state => state.reducerWebsocket.gameWebsocket)
    const usersReady = useSelector(state => state.reducerUserReadyState.usersReadyState)
    const isGameStart = useSelector(state => state.reducerIsGameStart.isGameStart)

    const [isLoad, setIsLoad] = useState(true)
    const [infoRoom, setInfoRoom] = useState({})

    const setPosition = (num, players, user) => {
        const yourPosition = players.filter(item => item.user?.id ? item.user?.id === user.id : item.id === user.id)[0]?.position
        if (yourPosition !== 1 && yourPosition !== undefined) {
            return yourPosition - 1 + num > 4 ? (yourPosition - 1 + num) - 4 : yourPosition - 1 + num
        } else {
            return num;
        }
    }

    useEffect(() => {
        if (!(isLoad && Object.keys(isAuth).length)) return;

        setIsLoad(false)
        const socket = new WebSocket(GlobalSocket(`/room/${roomId}/`))
        socket.onopen = () => {
            dispatch(setWebsocket(socket))
            socket.send(JSON.stringify({"command": "auth", "data": {"token": GetCookies('access_token')}}))

            axios.defaults.headers.get['Authorization'] = `Bearer ${GetCookies('access_token')}`;
            axios.get(GlobalLink(`/api/room/get/${roomId}/`)).then(res => {
                console.log('info about room', res.data)
                setInfoRoom(res.data)
            })
        }
    }, [isAuth])

    websocket.onmessage = (e) => {
        const data = JSON.parse(e.data)

        dispatch(setSocketResponse(data))

        if (data.status === 'Waiting') {
            dispatch(setGamePlayers(data.users))
            data.users.map(item => item.ready && dispatch(setUserReadyState(item.id)))
        } else if (data.status === 'Game in progress') {
            dispatch(setGamePlayers(data.users))
            dispatch(setIsReady(true))
        }

        const startGame = () => {
            dispatch(setIsGameStart(true))
        }
        const newPlayer = () => {
            console.log('JOIN NEW PLAYER', data.data)
            dispatch(setGamePlayers([data.data]))
        }
        const gameState = () => {
            const newTable = data.data.game.board_dominoes.split(/[\[\]]+/)
            let arr = []
            newTable.filter(item => {
                item && arr.push(item.split('|'))
            })
            dispatch(setUserReadyState(data.users?.filter(user => user.ready).id))
            dispatch(setFenTable(arr))
            dispatch(setUsersCards(data.data.game.player_dominoes))
            dispatch(setIsGameStart(true))
            dispatch(setPlayerTurn({
                player: data.data.game.players.filter(item => item.is_player_turn)[0].id,
                time_remaining: data.data.game.players.filter(item => item.is_player_turn)[0].timer
            }))
        }
        const playerTurn = () => {
            dispatch(setPlayerTurn(data.data))
        }
        const userReadyState = () => {
            dispatch(setUserReadyState(data.data.user_id))
        }
        const playerMadeMove = () => {
            const domino = [String(data.data.domino.first_side), String(data.data.domino.second_side)];
            const position = data.data.left_side;

            dispatch(setDomino(domino, position))
            dispatch(removeUserDomino(domino))
            document.querySelector('.game__domino-block--item._accent')?.classList.remove('_accent')
        }
        const endGame = () => {
            setTimeout(() => {
                dispatch(setEndGame(data.data))
                dispatch(popupTitle('game-winner', data.data))
            }, 300)
        }

        const dominoDistribution = () => {
            dispatch(setUsersCards(data.data.dominoes))
        }

        const pickedDomino = () => {
            console.log('data.data.domino', data.data.domino)
            dispatch(addUserDomino(data.data.domino))
        }

        const endRound = () => {
            dispatch(setFenTable([]))
            dispatch(setUsersCards([]))
        }

        console.log('socket message', data)
        const events = {
            "start_game": startGame,
            "new_player": newPlayer,
            "game_state": gameState,
            "player_turn": playerTurn,
            "domino_distribution": dominoDistribution,
            "picked_domino": pickedDomino,
            "end_round": endRound,
            "user_ready_state": userReadyState,
            "player_made_move": playerMadeMove,
            "end_game": endGame,
        }
        if (typeof events[data.event] === 'function') events[data.event]();
    }

    return (
        <main className="main">
            <section className="domino page-padding-top">
                <div className="domino__container container">
                    <div className="game__header">
                        <div className="game__header--col">
                            <h2 className="game__header--name section-title _decor-none">
                                Домино
                            </h2>
                        </div>
                        <GameTopButtons/>
                    </div>
                    <div className="domino__main">
                        <div className="domino__main--table domino__board">
                            <picture>
                                <img src="images/domino/table.png" alt="" width="300"
                                     className="domino__board--img"/>
                            </picture>
                        </div>
                        <div className="domino__main--grid domino__grid">
                            <div className="domino__grid--item">
                                <div className="game__bet">
                                    <span className="game__bet--value">1500</span>
                                    <img src="images/icons/chip.svg" alt="" className="game__bet--currency"/>
                                </div>
                            </div>

                            <div className="domino__grid--item _top">
                                {
                                    Object.keys(players.filter(item => item.position === setPosition(3, players, user))).length ?
                                        <DominoesUser player={players.filter(item => item.position === setPosition(3, players, user))[0]} /> : <GamePlayerWaiting/>
                                }
                            </div>
                            <div className="domino__grid--item _top">
                                {
                                    Object.keys(players.filter(item => item.position === setPosition(2, players, user))).length ?
                                        <DominoesUser player={players.filter(item => item.position === setPosition(2, players, user))[0]} /> : <GamePlayerWaiting/>
                                }
                            </div>
                            <div className="domino__grid--item _top">
                                {
                                    Object.keys(players.filter(item => item.position === setPosition(4, players, user))).length ?
                                        <DominoesUser player={players.filter(item => item.position === setPosition(4, players, user))[0]} /> : <GamePlayerWaiting/>
                                }
                            </div>
                            <DominoesYou/>
                        </div>
                        <DominoesTable/>
                        <div className="domino__main--user-menu game__user-menu">
                            <div className="game__user-menu--col">
                                <div className="game__user-menu--communication game__communication">
                                    <GameButtonsChatAndMicro/>
                                    <GameChat/>
                                </div>
                            </div>
                            <div className="game__user-menu--col">
                                {
                                    !isGameStart && (!usersReady.some(item => item === user.id) ? <FoolButtonReady websocket={websocket}/> :
                                        <FoolButtonWaiting/>)
                                }
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default RoomSingleDominoes;