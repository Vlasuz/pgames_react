import React, {createContext, Dispatch, SetStateAction, useContext, useEffect, useRef, useState} from 'react'
import {CheckersHeader} from "./components/CheckersHeader";
import {GamesCommunication} from "../../components/gamesCommunication/GamesCommunication";

import tableImage from "./../../assets/img/checkers/table.png"
import {CheckersStyled} from "./Checkers.styled";
import {CheckersHistory} from "./components/CheckersHistory";
import {CheckersButton} from "./components/CheckersButton";
import {CheckersTable} from "./components/CheckersTable";
import getCookies from "../../functions/getCookie";
import {useParams} from "react-router-dom";
import {ICard, IPlayerUser, IUser} from "../../models";
import {getApiLink} from "../../functions/getApiLink";
import {PopupContext} from "../../App";
import {useSelector} from "react-redux";
import {CheckersOpponent} from "./components/CheckersOpponent";

interface ICheckersProps {

}

export const WSMessage: any = createContext(null)
export const WS: any = createContext(null)
export const UserTurnRef: any = createContext(null)

export const Checkers: React.FC<ICheckersProps> = () => {

    const {roomId} = useParams()

    const [ws, setWs] = useState<any>({})
    const [roomState, setRoomState] = useState<any>({})
    const [userTurn, setUserTurn] = useState<any>({})
    const [isEndGame, setIsEndGame] = useState(false)
    const [isWaitingGame, setIsWaitingGame] = useState(false)
    const [checkersPieces, setCheckersPieces] = useState([])

    const userTurnRef: any = useRef()

    useEffect(() => {
        const _ws = new WebSocket(getApiLink(`/room/${roomId}/`, true));

        setWs(_ws)
    }, [])

    const setModal: Dispatch<SetStateAction<string>> = useContext(PopupContext)

    const user: IUser = useSelector((state: any) => state.toolkit.user)

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
        const handleStartGame = () => {
            setIsWaitingGame(false)
        }
        const handleWaiting = () => {
            setIsWaitingGame(true)
        }
        const handleEndGame = () => {
            setIsEndGame(true)
        }
        const handlePlayerTurn = (data: any) => {
            setUserTurn(data)
        }
        const handleGameState = (data: any) => {

            setCheckersPieces(data.game.pieces)

            if (data.game.players.some((player: any) => player.timer)) {
                setUserTurn({
                    player: {
                        id: data.game.players.filter((player: any) => player.timer)[0].id
                    },
                    timeout: data.game.players.filter((player: any) => player.timer)[0].timer,
                    role: data.game.players.filter((player: any) => player.timer)[0].role,
                })
            }

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

    const opponent = roomState?.users?.filter((player: IPlayerUser) => player.id !== user.id)[0]

    return (
        <WS.Provider value={ws}>
            <CheckersStyled className="checkers page-padding-top">
                <div className="checkers__container container _large-2">

                    <CheckersHeader/>

                    <div className="checkers__main">
                        <div className="checkers__main--row checkers__row">
                            <div className="checkers__col">
                                <div className="checkers__col--item">
                                    <div className="game__bet">
                                        <span className="game__bet--value">1500</span>
                                        <img src="img/icons/chip.svg" alt="" className="game__bet--currency"/>
                                    </div>
                                </div>
                                <div className="checkers__col--item">
                                    <GamesCommunication/>
                                </div>
                            </div>
                            <div className="checkers__col checkers__game">

                                <CheckersOpponent opponent={opponent}/>

                                <div className="checkers__table">
                                    <div className="checkers__table--board">
                                        <div className="checkers__table--board-body">
                                            <picture>
                                                <img src={tableImage} alt="" width="300" height="300"
                                                     className="checkers__table--img"/>
                                            </picture>
                                        </div>
                                    </div>

                                    <CheckersTable
                                        opponent={opponent}
                                        checkersPieces={checkersPieces}
                                    />

                                </div>
                                <div className="checkers__user">
                                    <div className="game__user">
                                        <div className="game__user--block"/>
                                        <div className="game__user--info">
                                            <div className="game__user--info-body">
                                                <h3 className="game__user--name">
                                                    Вы: {user.username}
                                                </h3>
                                                <progress className="game__user--progress" max="100" value="100"/>
                                            </div>
                                        </div>
                                        <div className="game__user--avatar">
                                            <img src={getApiLink("/" + user.avatar)} alt=""
                                                 className="game__user--avatar-img"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="checkers__col">

                                <CheckersHistory/>
                                <CheckersButton
                                    roomState={roomState}
                                    userTurn={userTurn}
                                    isEndGame={isEndGame}
                                    isWaitingGame={isWaitingGame}
                                />

                            </div>
                        </div>
                        {/*<div className="checkers__main--message game__message">*/}
                        {/*    <div className="game__message--body">*/}
                        {/*        <h3 className="game__message--title section-title _center">*/}
                        {/*            Ожидаем готовность комнаты*/}
                        {/*        </h3>*/}
                        {/*        <div className="game__message--text">*/}
                        {/*            Оставайтесь и одержите победу!*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </CheckersStyled>
        </WS.Provider>
    )
}
