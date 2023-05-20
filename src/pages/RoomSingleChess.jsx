import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import GetCookies from "../hooks/GetCookies";
import axios from "axios";
import FoolCenterWaiting from "../components/component_game/game_fool/FoolCenterWaiting";
import FoolCenterRunning from "../components/component_game/game_fool/FoolCenterRunning";
import FoolCenterStarting from "../components/component_game/game_fool/FoolCenterStarting";
import GameChat from "../components/component_game/GameChat";
import GameButtonsChatAndMicro from "../components/component_game/GameButtonsChatAndMicro";
import FoolButtonReady from "../components/component_game/game_fool/FoolButtonReady";
import GamePlayer from "../components/component_game/GamePlayer";
import GamePlayerWaiting from "../components/component_game/game_thousand/GamePlayerWaiting";
import FoolButtonPass from "../components/component_game/game_fool/FoolButtonPass";
import FoolButtonTake from "../components/component_game/game_fool/FoolButtonTake";
import FoolCenterEndgame from "../components/component_game/game_fool/FoolCenterEndgame";
import FoolButtonWaiting from "../components/component_game/game_fool/FoolButtonWaiting";
import GlobalSocket from "../GlobalSocket";
import GameTopButtons from "../components/component_game/GameTopButtons";
import FoolDeck from "../components/component_game/game_fool/FoolDeck";
import ChessMessage from "../components/component_game/game_chess/ChessMessage";
import ChessYourUser from "../components/component_game/game_chess/ChessYourUser";
import ChessOpponent from "../components/component_game/game_chess/ChessOpponent";
import {gamesListPlayersReducer, setGamePlayers} from "../redux/reducers/gamesListPlayersReducer";
import ChessTable from "../components/component_game/game_chess/ChessTable";
import ChessHistory from "../components/component_game/game_chess/ChessHistory";
import {reducerSocketResponse, setSocketResponse} from "../redux/game_reducers/reducerSocketResponse";
import {setIsGameStart} from "../redux/game_reducers/reducerIsGameStart";
import {setWebsocket} from "../redux/game_reducers/reducerWebsocket";
import {setPlayerTurn} from "../redux/game_reducers/reducerPlayerTurn";
import {setUserReadyState} from "../redux/game_reducers/reducerUserReadyState";
import {setFenLine, setFenTable} from "../redux/game_reducers/reducerChessFenTable";
import {logDOM} from "@testing-library/react";

const RoomSingleFool = () => {

    const [socketClose, setSocketClose] = useState(false)

    const {roomId} = useParams()
    const [isLoad, setIsLoad] = useState(true)
    const [timer, setTimer] = useState(0)
    // const [fixedTime, setFixedTime] = useState(0)

    // NEW CONSTS
    const [opponent, setOpponent] = useState({})
    // NEW CONSTS

    const dispatch = useDispatch()

    const isAuth = useSelector(state => state.userInfoReducer.data)
    const players = useSelector(state => state.gamesListPlayersReducer.players)
    const user = useSelector(state => state.userInfoReducer.data)
    const isReady = useSelector(state => state.reducerIsReady.isReady)
    const isGameStart = useSelector(state => state.reducerIsGameStart.isGameStart)
    const socketResponse = useSelector(state => state.reducerSocketResponse.socketResponse)
    const websocket = useSelector(state => state.reducerWebsocket.gameWebsocket)
    const tableFen = useSelector(state => state.reducerFenTable.fenTable)
    const arrayLines = tableFen.slice(0, tableFen.indexOf(" ")).split('/').map(item => {
        return item.split('').map(item2 => {
            if (!+item2) return item2

            const array = new Array(+item2)
            return array.join(' ').split(' ');
        }).flat(1)
    })
    let arr = [];

    // const [figureFrom, setFigureFrom] = useState()
    // const [figureTo, setFigureTo] = useState()

    websocket.onmessage = (e) => {
        const data = JSON.parse(e.data)

        dispatch(setSocketResponse(data))

        // data.data?.timeout && setTimer(data.data?.timeout)
        // data.data?.timeout && setFixedTime(data.data?.timeout)
        // socketMessages(dispatch)

        if(data.users) {
            dispatch(setGamePlayers(data.users))
        }

        const startGame = () => {
            dispatch(setIsGameStart(true))
        }
        const newPlayer = () => {
            console.log('JOIN NEW PLAYER', data.data)
            setOpponent(data.data)
            dispatch(setGamePlayers(data.data))
        }
        const gameState = () => {
            console.log(data.data?.players)
            dispatch(setFenTable(data.data.fen))
            dispatch(setIsGameStart(true))
            // setOpponent(data.data?.players?.filter(item => item?.user?.id !== user?.id)[0]?.user)
        }
        const playerTurn = () => {
            dispatch(setPlayerTurn(data.data))
        }
        const userReadyState = () => {
            dispatch(setUserReadyState(data.data.user_id))
        }
        const playerMadeMove = () => {

            let figureFrom, figureTo;
            let dataArrayCellsFrom, dataArrayCellsTo;

            document.querySelectorAll('.chess__grid--cell').forEach(item => {
                const dataPosition = item.getAttribute('data-position')
                const codeFrom = data.data.uci[0]+data.data.uci[1]
                const codeTo = data.data.uci[2]+data.data.uci[3]

                if(dataPosition === codeFrom) {
                    dataArrayCellsFrom = item.getAttribute('data-array').split('/')
                    return figureFrom = item;
                }
                if(dataPosition === codeTo) {
                    dataArrayCellsTo = item.getAttribute('data-array').split('/')
                    return figureTo = item;
                }

                if(figureFrom && figureTo) {

                    const topSelected = figureFrom.closest('.chess__grid--cell').offsetTop
                    const topFigure = figureTo.closest('.chess__grid--cell').offsetTop
                    const leftSelected = figureFrom.closest('.chess__grid--cell').offsetLeft
                    const leftFigure = figureTo.closest('.chess__grid--cell').offsetLeft

                    const moveY = -(topSelected - topFigure)
                    const moveX = -(leftSelected - leftFigure)

                    figureFrom.querySelector('.chess__grid--checker-body').style.top = moveY + "px"
                    figureFrom.querySelector('.chess__grid--checker-body').style.left = moveX + "px"

                }

            })

            setTimeout(() => {
                const maxLength = 7;

                if(players.filter(item => item.id === user.id)[0].position === 2) {
                    dataArrayCellsFrom[0] = Math.abs(maxLength - dataArrayCellsFrom[0])
                    dataArrayCellsTo[0] = Math.abs(maxLength - dataArrayCellsTo[0])
                    dataArrayCellsFrom[1] = Math.abs(maxLength - dataArrayCellsFrom[1])
                    dataArrayCellsTo[1] = Math.abs(maxLength - dataArrayCellsTo[1])
                }

                arrayLines[+dataArrayCellsTo[0]][+dataArrayCellsTo[1]] = arrayLines[+dataArrayCellsFrom[0]][+dataArrayCellsFrom[1]]
                arrayLines[+dataArrayCellsFrom[0]][+dataArrayCellsFrom[1]] = ''

                for(let row = 0; row < 8; row++) {
                    arr.push(arrayLines[row].map(item => item === '' ? item.replace('', 1) : item).join(''))
                }

                dispatch(setFenLine(arr.join('/')))
                figureFrom.querySelector('.chess__grid--checker-body').style.top = 0 + "px"
                figureFrom.querySelector('.chess__grid--checker-body').style.left = 0 + "px"
            }, 500)

        }

        console.log('socket message', data)
        const events = {
            "start_game": startGame,
            "new_player": newPlayer,
            "game_state": gameState,
            "player_turn": playerTurn,
            "user_ready_state": userReadyState,
            "player_made_move": playerMadeMove,
        }
        if (typeof events[data.event] === 'function') events[data.event]();
    }

    websocket.onerror = (e) => console.log('GAME socket Error')
    websocket.onclose = () => setSocketClose(true)

    useEffect(() => {
        if (!(isLoad && Object.keys(isAuth).length)) return;

        setIsLoad(false)
        const socket = new WebSocket(GlobalSocket(`/room/${roomId}/`))
        socket.onopen = () => {
            dispatch(setWebsocket(socket))
            socket.send(JSON.stringify({"command": "auth", "data": {"token": GetCookies('access_token')}}))
            // axios.defaults.headers.get['Authorization'] = `Bearer ${GetCookies('access_token')}`;
            // axios.get(GlobalLink(`/api/room/get/${roomId}/`)).then(res => {
            //     console.log('info about room', res.data)
            //     Object.keys(res?.data?.players).length && setOpponent(res.data.players.filter(item => item.user.id !== user.id))
            // })
        }


    }, [isAuth])

    const opponentData = Object.keys(opponent).length ? opponent : players?.filter(item => item?.user?.id !== user?.id)[0]?.user

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
                                    <div className="chess__col--item" />
                                    <div className="chess__col--item">
                                        <div className="chess__communication game__communication">
                                            <GameButtonsChatAndMicro/>
                                            <GameChat/>
                                        </div>
                                    </div>
                                </div>
                                <div className="chess__col chess__game">
                                    {
                                        Object.keys(players).length || Object.keys(opponent).length ? <ChessOpponent
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
                                    <ChessTable/>
                                    <ChessYourUser user={user}/>
                                </div>
                                <div className="chess__col">
                                    <ChessHistory/>

                                    {
                                        !isGameStart && (!isReady ? <FoolButtonReady websocket={websocket}/> : <FoolButtonWaiting/>)
                                    }
                                </div>
                            </div>
                            {!isGameStart && <ChessMessage/>}
                        </div>
                    </div>
                </section>
            </main>

        </>
    );
};

export default RoomSingleFool;