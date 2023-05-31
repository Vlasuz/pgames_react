import React, {useEffect, useState} from 'react';
import GameChat from "../components/component_game/GameChat";
import GameButtonsChatAndMicro from "../components/component_game/GameButtonsChatAndMicro";
import CheckersTable from "../components/component_game/game_checkers/CheckersTable";
import GameHistory from "../components/component_game/GameHistory";
import {useDispatch, useSelector} from "react-redux";
import {changeFenCheckers, isKingCheckers, setFenLine, setFenTable} from "../redux/game_reducers/reducerChessFenTable";
import GlobalSocket from "../GlobalSocket";
import {setWebsocket} from "../redux/game_reducers/reducerWebsocket";
import GetCookies from "../hooks/GetCookies";
import {useParams} from "react-router-dom";
import {setSocketResponse} from "../redux/game_reducers/reducerSocketResponse";
import {setGamePlayers} from "../redux/reducers/gamesListPlayersReducer";
import {setIsGameStart} from "../redux/game_reducers/reducerIsGameStart";
import {setPlayerTurn} from "../redux/game_reducers/reducerPlayerTurn";
import {setUserReadyState} from "../redux/game_reducers/reducerUserReadyState";
import {setEndGame} from "../redux/game_reducers/reducerEndGame";
import {popupTitle} from "../redux/actions";
import GameReadyBlock from "../components/component_game/GameReadyBlock";
import GameTopButtons from "../components/component_game/GameTopButtons";
import FoolButtonReady from "../components/component_game/game_fool/FoolButtonReady";
import FoolButtonWaiting from "../components/component_game/game_fool/FoolButtonWaiting";
import CheckersTableInner from "../components/component_game/game_checkers/CheckersTableInner";
import ChessOpponent from "../components/component_game/game_chess/ChessOpponent";
import ChessYourUser from "../components/component_game/game_chess/ChessYourUser";
import CheckersYourUser from "../components/component_game/game_checkers/CheckersYourUser";
import CheckersOpponent from "../components/component_game/game_checkers/CheckersOpponent";
import {setHistoryItem} from "../redux/game_reducers/reducerHistory";
import axios from "axios";
import GlobalLink from "../GlobalLink";
import {setBeaten} from "../redux/game_reducers/reducerCheckersBeaten";

const RoomSingleCheckers = () => {

    const {roomId} = useParams()
    const dispatch = useDispatch()
    const isAuth = useSelector(state => state.userInfoReducer.data)
    const isReady = useSelector(state => state.reducerIsReady.isReady)
    const websocket = useSelector(state => state.reducerWebsocket.gameWebsocket)
    const isGameStart = useSelector(state => state.reducerIsGameStart.isGameStart)
    const players = useSelector(state => state.gamesListPlayersReducer.players)
    const [isLoad, setIsLoad] = useState(true)
    const user = useSelector(state => state.userInfoReducer.data)
    const tableFen = useSelector(state => state.reducerFenTable.fenTable)
    const [infoRoom, setInfoRoom] = useState({})
    const [playerColor, setPlayerColor] = useState(0)
    const color = ['white', 'black']

    useEffect(() => {
        setPlayerColor(players?.filter(item => item?.id === user?.id)[0]?.position)
    }, [players])

    useEffect(() => {

        dispatch(setFenTable([
            {
                "owner": "white",
                "is_king": false,
                "position": 1
            },
            {
                "owner": "white",
                "is_king": false,
                "position": 2
            },
            {
                "owner": "white",
                "is_king": false,
                "position": 3
            },
            {
                "owner": "white",
                "is_king": false,
                "position": 4
            },
            {
                "owner": "white",
                "is_king": false,
                "position": 5
            },
            {
                "owner": "white",
                "is_king": false,
                "position": 6
            },
            {
                "owner": "white",
                "is_king": false,
                "position": 7
            },
            {
                "owner": "white",
                "is_king": false,
                "position": 8
            },
            {
                "owner": "white",
                "is_king": false,
                "position": 9
            },
            {
                "owner": "white",
                "is_king": false,
                "position": 10
            },
            {
                "owner": "white",
                "is_king": false,
                "position": 11
            },
            {
                "owner": "white",
                "is_king": false,
                "position": 12
            },
            {
                "owner": "black",
                "is_king": false,
                "position": 21
            },
            {
                "owner": "black",
                "is_king": false,
                "position": 22
            },
            {
                "owner": "black",
                "is_king": false,
                "position": 23
            },
            {
                "owner": "black",
                "is_king": false,
                "position": 24
            },
            {
                "owner": "black",
                "is_king": false,
                "position": 25
            },
            {
                "owner": "black",
                "is_king": false,
                "position": 26
            },
            {
                "owner": "black",
                "is_king": false,
                "position": 27
            },
            {
                "owner": "black",
                "is_king": false,
                "position": 28
            },
            {
                "owner": "black",
                "is_king": false,
                "position": 29
            },
            {
                "owner": "black",
                "is_king": false,
                "position": 30
            },
            {
                "owner": "black",
                "is_king": false,
                "position": 31
            },
            {
                "owner": "black",
                "is_king": false,
                "position": 32
            }
        ]))

    }, [roomId])

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
        } else if (data.status === 'Game in progress') {
            dispatch(setGamePlayers(data.users))
        }

        const startGame = () => {
            dispatch(setIsGameStart(true))
        }
        const newPlayer = () => {
            console.log('JOIN NEW PLAYER', data.data)
            dispatch(setGamePlayers([data.data]))
        }
        const gameState = () => {
            dispatch(setFenTable(data.data.game.pieces))
            dispatch(setIsGameStart(true))
            dispatch(setPlayerTurn({
                player: {id: data.data.game.players.filter(item => item.is_player_turn)[0].id},
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

            var figureFrom, figureTo, positionFrom, positionTo, codeFrom, codeTo;

            document.querySelectorAll('.checkers__grid--cell').forEach(item => {
                const dataIndex = item.getAttribute('data-index')
                positionFrom = data.data.move[0]
                positionTo = data.data.move[1]

                if (+dataIndex === positionFrom) {
                    codeFrom = item.getAttribute('data-index-desc')
                    figureFrom = item;
                }
                if (+dataIndex === positionTo) {
                    codeTo = item.getAttribute('data-index-desc')
                    figureTo = item;
                }

                if (figureFrom && figureTo) {

                    const topSelected = figureFrom.closest('.checkers__grid--cell').offsetTop
                    const topFigure = figureTo.closest('.checkers__grid--cell').offsetTop
                    const leftSelected = figureFrom.closest('.checkers__grid--cell').offsetLeft
                    const leftFigure = figureTo.closest('.checkers__grid--cell').offsetLeft

                    const moveY = -(topSelected - topFigure)
                    const moveX = -(leftSelected - leftFigure)

                    figureFrom.querySelector('.checkers__grid--checker-body').style.top = moveY + "px"
                    figureFrom.querySelector('.checkers__grid--checker-body').style.left = moveX + "px"

                }

            })

            dispatch(setHistoryItem({
                code: `${codeFrom} - ${codeTo}`,
                userId: data.data.player.id
            }))

            setTimeout(() => {

                let indexElem = 0;
                let elemFrom = {};
                tableFen.filter((item, index) => {
                    if (+item.position === +positionFrom) {
                        elemFrom = item;
                        return indexElem = index;
                    }
                })

                const deleteItemNumber = (figureFrom.getAttribute('data-index-arr') - figureTo.getAttribute('data-index-arr')) / 2
                let deleteItem = 0;

                if (deleteItemNumber === 7) {
                    deleteItem = +figureFrom.getAttribute('data-index-arr') - 7
                } else if (deleteItemNumber === 9) {
                    deleteItem = +figureFrom.getAttribute('data-index-arr') - 9
                } else if (deleteItemNumber === -9) {
                    deleteItem = +figureFrom.getAttribute('data-index-arr') + 9
                } else if (deleteItemNumber === -7) {
                    deleteItem = +figureFrom.getAttribute('data-index-arr') + 7
                }

                if(!document.querySelector(`.checkers__grid--cell[data-index-arr="${deleteItem}"]`)?.querySelector('img')?.getAttribute('src').includes(color[playerColor - 1]) && document.querySelector(`.checkers__grid--cell[data-index-arr="${deleteItem}"]`)?.querySelector('img')) {
                    dispatch(setBeaten('card', null))
                } else if(document.querySelector(`.checkers__grid--cell[data-index-arr="${deleteItem}"]`)?.querySelector('img')?.getAttribute('src').includes(color[playerColor - 1]) && document.querySelector(`.checkers__grid--cell[data-index-arr="${deleteItem}"]`)?.querySelector('img')) {
                    dispatch(setBeaten(null, 'card'))
                }
                document.querySelector(`.checkers__grid--cell[data-index-arr="${deleteItem}"]`)?.classList.add('_hidden')

                if (elemFrom.owner === 'white' && positionTo > 28) {
                    document.querySelector(`.checkers__grid--cell[data-index="${positionTo}"]`).classList.add('_set-king')
                } else if (elemFrom.owner === 'black' && positionTo < 5) {
                    document.querySelector(`.checkers__grid--cell[data-index="${positionTo}"]`).classList.add('_set-king')
                }

                setTimeout(() => {
                    dispatch(changeFenCheckers(indexElem, elemFrom, positionTo, document.querySelector(`.checkers__grid--cell[data-index-arr="${deleteItem}"]`)?.getAttribute('data-index')))

                    document.querySelector(`.checkers__grid--cell[data-index-arr="${deleteItem}"]`)?.classList.remove('_hidden')
                    figureFrom.querySelector('.checkers__grid--checker-body').style.top = 0 + "px"
                    figureFrom.querySelector('.checkers__grid--checker-body').style.left = 0 + "px"
                    dispatch(isKingCheckers(indexElem, elemFrom, positionTo))

                    setTimeout(() => {
                        document.querySelector(`.checkers__grid--cell._set-king`)?.classList.remove('_set-king')
                    }, 300)

                }, 300)
            }, 300)

        }
        const endGame = () => {
            setTimeout(() => {
                dispatch(setEndGame(data.data))
                dispatch(popupTitle('game-winner', data.data))
            }, 300)
        }

        console.log('socket message', data)
        const events = {
            "start_game": startGame,
            "new_player": newPlayer,
            "game_state": gameState,
            "player_turn": playerTurn,
            "user_ready_state": userReadyState,
            "player_made_move": playerMadeMove,
            "end_game": endGame,
        }
        if (typeof events[data.event] === 'function') events[data.event]();
    }

    const opponentData = players.filter(item => item.id !== user.id)[0]

    return (
        <main className="main" style={{overflow: 'visible'}}>
            <section className="checkers page-padding-top">
                <div className="checkers__container container _large-2">
                    <div className="game__header">
                        <div className="game__header--col">
                            <h2 className="game__header--name section-title _decor-none">
                                Шашки
                            </h2>
                        </div>
                        <GameTopButtons/>
                    </div>
                    <div className="checkers__main">
                        <div className="checkers__main--row checkers__row">
                            <div className="checkers__col">
                                <div className="checkers__col--item">
                                    <div className="game__bet">
                                        <span className="game__bet--value">
                                            {infoRoom.bet}
                                        </span>
                                        <img src="images/icons/chip.svg" alt="" className="game__bet--currency"/>
                                    </div>
                                </div>
                                <div className="checkers__col--item">
                                    <div className="checkers__communication game__communication">
                                        <GameButtonsChatAndMicro/>
                                        <GameChat/>
                                    </div>
                                </div>
                            </div>
                            <div className="checkers__col checkers__game">
                                {
                                    opponentData ? <CheckersOpponent
                                            isGameStart={isGameStart}
                                            opponent={opponentData}/> :
                                        <div className="game__player-waiting">
                                            <svg width="10" height="11" viewBox="0 0 10 11" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M5 5.50032C6.57812 5.50032 7.85714 4.26898 7.85714 2.75016C7.85714 1.23134 6.57812 0 5 0C3.42188 0 2.14286 1.23134 2.14286 2.75016C2.14286 4.26898 3.42188 5.50032 5 5.50032ZM6.1317 6.53163H3.8683C1.73237 6.53163 0 8.19892 0 10.2551C0 10.6663 0.346429 11 0.773661 11H9.22679C9.65402 11.0006 10 10.6676 10 10.2551C10 8.19892 8.26786 6.53163 6.1317 6.53163Z"
                                                    fill="#2D6B67"/>
                                            </svg>
                                            Ожидание...
                                        </div>
                                }
                                <CheckersTable/>
                                <CheckersYourUser isGameStart={isGameStart} user={user}/>
                            </div>
                            <div className="checkers__col">
                                <GameHistory/>
                                {
                                    !isGameStart && (!isReady ? <FoolButtonReady websocket={websocket}/> :
                                        <FoolButtonWaiting/>)
                                }
                            </div>
                        </div>
                        {!isGameStart && <div className="checkers__main--message game__message">
                            <div className="game__message--body">
                                <h3 className="game__message--title section-title _center">
                                    Ожидаем готовность комнаты
                                </h3>
                                <div className="game__message--text">
                                    Оставайтесь и одержите победу!
                                </div>
                            </div>
                        </div>}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default RoomSingleCheckers;