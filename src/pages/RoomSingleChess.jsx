import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import GetCookies from "../hooks/GetCookies";
import GameChat from "../components/component_game/GameChat";
import GameButtonsChatAndMicro from "../components/component_game/GameButtonsChatAndMicro";
import FoolButtonReady from "../components/component_game/game_fool/FoolButtonReady";
import FoolButtonWaiting from "../components/component_game/game_fool/FoolButtonWaiting";
import GlobalSocket from "../GlobalSocket";
import GameTopButtons from "../components/component_game/GameTopButtons";
import ChessMessage from "../components/component_game/game_chess/ChessMessage";
import ChessYourUser from "../components/component_game/game_chess/ChessYourUser";
import ChessOpponent from "../components/component_game/game_chess/ChessOpponent";
import {gamesListPlayersReducer, setGamePlayers} from "../redux/reducers/gamesListPlayersReducer";
import ChessTable from "../components/component_game/game_chess/ChessTable";
import GameHistory from "../components/component_game/GameHistory";
import {reducerSocketResponse, setSocketResponse} from "../redux/game_reducers/reducerSocketResponse";
import {setIsGameStart} from "../redux/game_reducers/reducerIsGameStart";
import {setWebsocket} from "../redux/game_reducers/reducerWebsocket";
import {setPlayerTurn} from "../redux/game_reducers/reducerPlayerTurn";
import {setUserReadyState} from "../redux/game_reducers/reducerUserReadyState";
import {setFenLine, setFenTable} from "../redux/game_reducers/reducerChessFenTable";
import {logDOM} from "@testing-library/react";
import {reducerEndGame, setEndGame} from "../redux/game_reducers/reducerEndGame";
import {popupTitle} from "../redux/actions";
import {setHistoryItem} from "../redux/game_reducers/reducerHistory";
import SetCookies from "../hooks/SetCookies";
import {setBeaten} from "../redux/game_reducers/reducerCheckersBeaten";

const RoomSingleFool = () => {

    const [isEndGame, setIsEndGame] = useState(false)
    const {roomId} = useParams()
    const [isLoad, setIsLoad] = useState(true)
    const dispatch = useDispatch()
    const players = useSelector(state => state.gamesListPlayersReducer.players)
    const user = useSelector(state => state.userInfoReducer.data)
    const isAuth = useSelector(state => state.userInfoReducer.data)
    const isGameStart = useSelector(state => state.reducerIsGameStart.isGameStart)
    const websocket = useSelector(state => state.reducerWebsocket.gameWebsocket)
    const tableFen = useSelector(state => state.reducerFenTable.fenTable)
    const navigate = useNavigate()
    const usersReadyState = useSelector(state => state.reducerUserReadyState.usersReadyState)
    const [wHaveCastling, setWHaveCastling] = useState('KQ');
    const [bHaveCastling, setBHaveCastling] = useState('kq');
    const arrayLines = tableFen && Object.keys(tableFen).length && tableFen.slice(0, tableFen.indexOf(" ")).split('/').map(item => {
        return item.split('').map(item2 => {
            if (!+item2) return item2

            const array = new Array(+item2)
            return array.join(' ').split(' ');
        }).flat(1)
    })

    const newTableFen = (data, castlingFrom, castlingTo) => {
        let arr = [];
        let figureFrom, figureTo, dataArrayCellsFrom, dataArrayCellsTo;
        document.querySelectorAll('.chess__grid--cell').forEach(item => {
            const dataPosition = item.getAttribute('data-position')
            const codeFrom = castlingFrom ? castlingFrom : data.data.uci[0] + data.data.uci[1]
            const codeTo = castlingTo ? castlingTo : data.data.uci[2] + data.data.uci[3]

            if (dataPosition === codeFrom) {
                dataArrayCellsFrom = item.getAttribute('data-array').split('/')
                figureFrom = item;
            }
            if (dataPosition === codeTo) {
                dataArrayCellsTo = item.getAttribute('data-array').split('/')
                figureTo = item;
            }

            if (figureFrom && figureTo) {

                const topSelected = figureFrom.closest('.chess__grid--cell').offsetTop
                const topFigure = figureTo.closest('.chess__grid--cell').offsetTop
                const leftSelected = figureFrom.closest('.chess__grid--cell').offsetLeft
                const leftFigure = figureTo.closest('.chess__grid--cell').offsetLeft

                const moveY = -(topSelected - topFigure)
                const moveX = -(leftSelected - leftFigure)

                figureFrom.classList.add('moving')
                figureFrom.querySelector('.chess__grid--checker-body').style.top = moveY + "px"
                figureFrom.querySelector('.chess__grid--checker-body').style.left = moveX + "px"

            }

        })
        setTimeout(() => {
            const maxLength = 7;

            if (players.filter(item => item.id === user.id)[0].position === 2) {
                dataArrayCellsFrom[0] = Math.abs(maxLength - dataArrayCellsFrom[0])
                dataArrayCellsTo[0] = Math.abs(maxLength - dataArrayCellsTo[0])
                dataArrayCellsFrom[1] = Math.abs(maxLength - dataArrayCellsFrom[1])
                dataArrayCellsTo[1] = Math.abs(maxLength - dataArrayCellsTo[1])
            }

            arrayLines[+dataArrayCellsTo[0]][+dataArrayCellsTo[1]] = arrayLines[+dataArrayCellsFrom[0]][+dataArrayCellsFrom[1]]
            arrayLines[+dataArrayCellsFrom[0]][+dataArrayCellsFrom[1]] = ''

            for (let row = 0; row < 8; row++) {
                arr.push(arrayLines[row].map(item => item === '' ? item.replace('', 1) : item).join(''))
            }

            dispatch(setHistoryItem({
                code: `${figureFrom.getAttribute('data-position')} - ${figureTo.getAttribute('data-position')}`,
                userId: data.data.player.id
            }))

            dispatch(setFenLine(arr.join('/') + ` w ${wHaveCastling}${bHaveCastling} - 0 1`))
            figureFrom.querySelector('.chess__grid--checker-body').style.top = 0 + "px"
            figureFrom.querySelector('.chess__grid--checker-body').style.left = 0 + "px"

            setTimeout(() => {
                figureFrom.classList.remove('moving')
            }, 100)
        }, 500)
    }

    websocket.onmessage = (e) => {
        const data = JSON.parse(e.data)

        dispatch(setSocketResponse(data))

        if (data.users) {
            dispatch(setGamePlayers(data.users))
        }

        if (data.status === 'Waiting') {

            dispatch(setUserReadyState('clear'))
            dispatch(setUserReadyState(...data.users.filter(user => user.ready).map(item => item.id)))
            dispatch(setGamePlayers('clear'))
            dispatch(setGamePlayers(data.users))
            dispatch(setIsGameStart(false))
            dispatch(setPlayerTurn({}))
            document.cookie = "gameHistory=[]; expires=Thu, 18 Dec 2013 12:00:00 UTC";

        } else if (data.status === 'End game') {
            setIsEndGame(true)
        }

        const startGame = () => {
            dispatch(setIsGameStart(true))
        }
        const newPlayer = () => {
            dispatch(setGamePlayers([data.data]))
        }
        const gameState = () => {
            dispatch(setFenTable(data.data.game.fen))
            setWHaveCastling(data.data.game.fen.includes('KQ') ? 'KQ' : ' - ')
            setBHaveCastling(data.data.game.fen.includes('kq') ? 'kq' : ' - ')
            dispatch(setIsGameStart(true))
            dispatch(setPlayerTurn({
                player: {id: data.data.game.players.filter(user => data.data.game.state.includes(user.color))[0].id},
                time_remaining: data.data.game.players.filter(user => data.data.game.state.includes(user.color))[0].timer
            }))
        }
        const playerTurn = () => {
            dispatch(setPlayerTurn(data.data))
        }
        const userReadyState = () => {
            dispatch(setUserReadyState(data.data.user_id))
        }
        const playerMadeMove = () => {

            const moveFromFigure = document.querySelector(`.chess__grid--cell[data-position=${data.data.uci[0] + data.data.uci[1]}]`).getAttribute('data-figure')

            if(moveFromFigure === 'k' || moveFromFigure === 'r') {
                setBHaveCastling(' - ')
            } else if (moveFromFigure === 'K' || moveFromFigure === 'R') {
                setWHaveCastling(' - ')
            }

            const playerColorR = ['R', 'r']
            const playerColorK = ['k', 'K']
            const playerColorNum = ['1', '8'];
            const color = players.filter(item => item.id === data.data.player?.id)[0]?.position

            const imageLink = document.querySelector(`.chess__grid--cell[data-position="${data.data.uci[2]+data.data.uci[3]}"]`)?.querySelector('img')?.getAttribute('src')
            const figureName = document.querySelector(`.chess__grid--cell[data-position="${data.data.uci[2]+data.data.uci[3]}"]`)?.getAttribute('data-figure')

            if(imageLink?.includes('black') || imageLink?.includes('white')) {
                if(color === players.filter(item => item.id === user?.id)[0]?.position) {
    
                    const oldBeaten = GetCookies('CheckersYourBeaten') ? JSON.parse(GetCookies('CheckersYourBeaten')) : []
                    SetCookies('CheckersYourBeaten', [...oldBeaten, {imageLink, figureName}])
                    dispatch(setBeaten({imageLink, figureName}, null))
    
                } else {
    
                    const oldBeaten = GetCookies('CheckersOpponentBeaten') ? JSON.parse(GetCookies('CheckersOpponentBeaten')) : []
                    SetCookies('CheckersOpponentBeaten', [...oldBeaten, {imageLink, figureName}])
                    dispatch(setBeaten(null, {imageLink, figureName}))
    
                }
            }

            const castling = (from, to) => {
                const numFromMove = from+playerColorNum[color-1]
                const numToMove = to+playerColorNum[color-1]

                const cellToMove = document.querySelector(`.chess__grid--cell[data-position="${numToMove}"]`)
                let itemK = '';

                setTimeout(() => {
                    newTableFen(data, numFromMove, numToMove)
                }, 100)

                document.querySelectorAll('.chess__grid--cell').forEach(item => {
                    if(item.getAttribute('data-position').includes(from) && item.getAttribute('data-figure') === playerColorR[color-1]) {
                        itemK = item
                    }
                })

                itemK.querySelector('.chess__grid--checker-body').style.left = -(itemK.getBoundingClientRect().left - cellToMove.getBoundingClientRect().left) + 'px'
            }

            document.querySelector('.chess__grid--cell._red')?.classList.remove('_red')
            if (data.data.status === "castling") {
                const from = data.data.uci[2]

                if(color === 1) {
                    setWHaveCastling('-')
                } else if (color === 2) {
                    setBHaveCastling('-')
                }

                if (from.includes('g')) {
                    castling('h', 'f')
                } else if (from.includes('c')) {
                    castling('a', 'd')
                }

            } else if (data.data.status === "check") {
                document.querySelectorAll('.chess__grid--cell').forEach(item => {
                    if(playerColorK[color-1] === item.getAttribute('data-figure')) {
                        item.classList.add('_red')
                    }
                })
            }

            newTableFen(data)

        }
        const endGame = () => {
            dispatch(setEndGame(data.data))
            dispatch(popupTitle('game-winner', data.data))

            setTimeout(() => {
                navigate(-1)
            }, 5000)
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

    websocket.onerror = () => console.log('GAME socket Error')
    websocket.onclose = () => console.log('GAME socket Close')

    useEffect(() => {
        if (!(isLoad && Object.keys(isAuth).length)) return;

        setIsLoad(false)
        const socket = new WebSocket(GlobalSocket(`/room/${roomId}/`))
        socket.onopen = () => {
            dispatch(setWebsocket(socket))
            document.cookie = "gameHistory=[]; expires=Thu, 18 Dec 2013 12:00:00 UTC";
            socket.send(JSON.stringify({"command": "auth", "data": {"token": GetCookies('access_token')}}))
        }
    }, [isAuth])

    const opponentData = players?.filter(item => item?.id !== user?.id)[0]

    return (
        <>

            <main className="main" style={{overflow: 'visible'}}>
                <section className="chess page-padding-top">
                    <div className="chess__container container _large-2">
                        <div className="game__header">
                            <div className="game__header--col">
                                <h2 className="game__header--name section-title _decor-none">
                                    Шахматы
                                </h2>
                            </div>
                            <GameTopButtons/>
                        </div>
                        <div className="chess__main">
                            <div className="chess__main--row chess__row">
                                <div className="chess__col">
                                    <div className="chess__col--item"/>
                                    <div className="chess__col--item">
                                        <div className="chess__communication game__communication">
                                            <GameButtonsChatAndMicro/>
                                            <GameChat/>
                                        </div>
                                    </div>
                                </div>
                                <div className="chess__col chess__game">
                                    {
                                        opponentData ? <ChessOpponent
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
                                    <ChessTable isWhite={players.filter(item => item.id === user.id)[0]?.position}/>
                                    <ChessYourUser isGameStart={isGameStart} user={user}/>
                                </div>
                                <div className="chess__col">
                                    <GameHistory/>

                                    {
                                        !isEndGame && !isGameStart && (!usersReadyState.some(item => item === user.id) ?
                                            <FoolButtonReady websocket={websocket}/> :
                                            <FoolButtonWaiting/>)
                                    }
                                </div>
                            </div>
                            {isEndGame ? <div className="chess__main--message chess__message">
                                <div className="chess__message--body">
                                    <h3 className="chess__message--title section-title _center">
                                        Игра окончена
                                    </h3>
                                </div>
                            </div> : !isGameStart ? <ChessMessage/> : ""}
                        </div>
                    </div>
                </section>
            </main>

        </>
    );
};

export default RoomSingleFool;