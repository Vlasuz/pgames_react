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
import GlobalLink from "../GlobalLink";
import GlobalSocket from "../GlobalSocket";
import cardEvent from "../components/component_game/game_fool/functions/card_event";
import setPosition from "../components/component_game/game_fool/functions/set_position";
import socketMessages from "../components/component_game/game_fool/functions/socket_messages";

const RoomSingle = () => {

    const [socketClose, setSocketClose] = useState(false)

    const {roomId} = useParams()
    const [isReady, setIsReady] = useState(false);
    const [isLoad, setIsLoad] = useState(true)
    const [response, setResponse] = useState({})
    const [trump, setTrump] = useState({})
    const [myCards, setMyCards] = useState([])
    const [websocket, setWebsocket] = useState({})
    const [userTurn, setUserTurn] = useState({})
    const [cardsOnTable, setCardsOnTable] = useState([])
    const [selectedCard, setSelectedCard] = useState({})
    const [wrongStep, setWrongStep] = useState(false)
    const [isWinner, setIsWinner] = useState([])
    const [timer, setTimer] = useState(0)
    const [fixedTime, setFixedTime] = useState(0)
    const [isEndGame, setIsEndGame] = useState(false)
    const [isGameStart, setIsGameStart] = useState(false)
    const [infoRoom, setInfoRoom] = useState({})
    const [defenderTake, setDefenderTake] = useState({})
    const [cardsLeft, setCardsLeft] = useState({})
    const [playersWhoReady, setPlayersWhoReady] = useState([])
    const [playersQuantityCards, setPlayersQuantityCards] = useState([])
    const [allCardsCount, setAllCardsCount] = useState(0)
    const [isCardsBeat, setIsCardsBeat] = useState(false)
    const [attacker, setAttacker] = useState({})
    const [defender, setDefender] = useState({})

    const players = useSelector(state => state.gamesListPlayersReducer.players)
    const user = useSelector(state => state.userInfoReducer.data)
    const games = useSelector(state => state.gamesListReducer.list)

    const dispatch = useDispatch()

    websocket.onmessage = (e) => {
        const data = JSON.parse(e.data)
        setResponse(data)

        setTimeout(() => {
            document.querySelectorAll('.game__table-cards--item')?.forEach(item => item.classList.remove('_new-card'))
        }, 10)

        data.data?.timeout && setTimer(data.data?.timeout)
        data.data?.timeout && setFixedTime(data.data?.timeout)

        socketMessages(
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
        )
    }
    websocket.onerror = (e) => console.log('GAME socket Error')
    websocket.onclose = () => setSocketClose(true)

    useEffect(() => {

        if (isLoad) {
            setIsLoad(false)

            const socket = new WebSocket(GlobalSocket(`/room/${roomId}/`))
            socket.onopen = () => {
                socket.send(JSON.stringify({"command": "auth", "data": {"token": GetCookies('access_token')}}))

                setWebsocket(socket)

                axios.defaults.headers.get['Authorization'] = `Bearer ${GetCookies('access_token')}`;
                axios.get(GlobalLink(`/api/room/get/${roomId}/`)).then(res => {
                    console.log('info about room', res.data)
                    setInfoRoom(res.data)
                })
            }
        }

    }, [])
    useEffect(() => {

        if (!!games.length) {
            games.map(game => game.game.map(room => room))
        }

    }, [games])
    useEffect(() => {
        let time = setInterval(() => {
            timer > 0 && setTimer(prev => prev - 1)
        }, 1000)

        return () => clearInterval(time)
    }, [timer])

    const gameCenter = {
        'auth': <FoolCenterWaiting/>,
        'start_game': <FoolCenterStarting/>,
        'end_game': <FoolCenterEndgame isWinner={isWinner} userId={user.id}/>
    }

    return (
        <>

            <main className={"main" + (socketClose ? " main_socket_close" : "")}>
                <section className="game page-padding-top">
                    <div className="game__container container">
                        <div className="game__header">
                            <div className="game__header--col">
                                <h2 className="game__header--name section-title _decor-none">
                                    Дурак
                                </h2>
                            </div>
                            <div className="game__header--col">
                                <div className="game__header--block">
                                    <a href="#game-exit-popup" className="game__header--btn btn _dark open-popup">
                                        Выйти
                                    </a>
                                    <a href="#game-invite-popup" className="game__header--btn btn _red open-popup">
                                        Пригласить +
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="game__main">
                            <div className="game__main--table game__bg">
                                <picture>
                                    <img src="../images/game/table.png" alt="" width="300"
                                         className="game__bg--img"/>
                                </picture>
                            </div>
                            <div className="game__main--grid game__grid">
                                <div className="game__grid--item">
                                    <div className="game__bet">
                                        <span className="game__bet--value">
                                            {infoRoom.bet}
                                        </span>
                                        <img
                                            src={infoRoom.bet_type === 'chips' ? "../images/icons/chip.svg" : "../images/icons/dollar-circle.svg"}
                                            alt="" className="game__bet--currency"/>
                                    </div>
                                </div>
                                <div className="game__grid--item">
                                    {
                                        Object.keys(players.filter(item => item.position === setPosition(3, players, user))).length ?
                                            <GamePlayer
                                                userTurn={userTurn}
                                                fixedTime={fixedTime}
                                                timer={timer}
                                                isEndGame={isEndGame}
                                                isGameStart={isGameStart}
                                                cardsLeft={cardsLeft}
                                                playersWhoReady={playersWhoReady}
                                                defenderTake={defenderTake}
                                                playersQuantityCards={playersQuantityCards}
                                                player={players.filter(item => item.position === setPosition(3, players, user))[0]}/> :
                                            <GamePlayerWaiting/>
                                    }

                                </div>
                                <div className="game__grid--item">
                                    {
                                        Object.keys(players.filter(item => item.position === setPosition(4, players, user))).length ?
                                            <GamePlayer
                                                userTurn={userTurn}
                                                fixedTime={fixedTime}
                                                timer={timer}
                                                isEndGame={isEndGame}
                                                isGameStart={isGameStart}
                                                cardsLeft={cardsLeft}
                                                playersWhoReady={playersWhoReady}
                                                defenderTake={defenderTake}
                                                playersQuantityCards={playersQuantityCards}
                                                player={players.filter(item => item.position === setPosition(4, players, user))[0]}/> :
                                            <GamePlayerWaiting/>
                                    }

                                </div>
                                <div className="game__grid--item">

                                    {
                                        Object.keys(players.filter(item => item.position === setPosition(5, players, user))).length ?
                                            <GamePlayer
                                                userTurn={userTurn}
                                                fixedTime={fixedTime}
                                                timer={timer}
                                                isEndGame={isEndGame}
                                                isGameStart={isGameStart}
                                                cardsLeft={cardsLeft}
                                                playersWhoReady={playersWhoReady}
                                                defenderTake={defenderTake}
                                                playersQuantityCards={playersQuantityCards}
                                                player={players.filter(item => item.position === setPosition(5, players, user))[0]}/> :
                                            <GamePlayerWaiting/>
                                    }

                                </div>
                                <div className="game__grid--item" style={{paddingTop: allCardsCount < 1 ? 80 : 130}}>
                                    <form action="#" className="game__cards">
                                        {allCardsCount < 1 ? <div className="game__cards--symbol">
                                            <img src={`../images/game/cards/symbols/${trump.suit}.svg`} alt=""/>
                                        </div> : ""}
                                        <button className={"game__cards--element" + (allCardsCount > 0 ? "" : " _hidden")}>
                                            <div className="game__cards--back">
                                                <img src="../images/game/cards/Back.svg" alt=""/>
                                            </div>
                                            <div className="game__cards--last">
                                                <img src={`../images/game/cards/${trump.rank}-${trump.suit}.svg`}
                                                     alt=""/>
                                            </div>
                                        </button>
                                    </form>
                                </div>
                                <div className="game__grid--item">

                                    {
                                        Object.keys(players.filter(item => item.position === setPosition(2, players, user))).length ?
                                            <GamePlayer
                                                userTurn={userTurn}
                                                fixedTime={fixedTime}
                                                timer={timer}
                                                isEndGame={isEndGame}
                                                isGameStart={isGameStart}
                                                cardsLeft={cardsLeft}
                                                playersWhoReady={playersWhoReady}
                                                defenderTake={defenderTake}
                                                playersQuantityCards={playersQuantityCards}
                                                player={players.filter(item => item.position === setPosition(2, players, user))[0]}/> :
                                            <GamePlayerWaiting/>
                                    }

                                </div>
                                <div className="game__grid--item">

                                    {
                                        Object.keys(players.filter(item => item.position === setPosition(6, players, user))).length ?
                                            <GamePlayer
                                                userTurn={userTurn}
                                                fixedTime={fixedTime}
                                                timer={timer}
                                                isEndGame={isEndGame}
                                                isGameStart={isGameStart}
                                                cardsLeft={cardsLeft}
                                                playersWhoReady={playersWhoReady}
                                                defenderTake={defenderTake}
                                                playersQuantityCards={playersQuantityCards}
                                                player={players.filter(item => item.position === setPosition(6, players, user))[0]}/> :
                                            <GamePlayerWaiting/>
                                    }

                                </div>
                                <div className="game__grid--item">
                                    <div className="game__user">
                                        <div
                                            className={"game__table--block" + (wrongStep ? " game__table--block_active" : "")}>
                                            <div className="game__table--min-message">
                                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M7 0C3.13359 0 0 3.13359 0 7C0 10.8664 3.13359 14 7 14C10.8664 14 14 10.8664 14 7C14 3.13359 10.8664 0 7 0ZM6.34375 4.15625C6.34375 3.79531 6.63906 3.5 7 3.5C7.36094 3.5 7.65625 3.79395 7.65625 4.15625V7.65625C7.65625 8.01855 7.3623 8.3125 7 8.3125C6.6377 8.3125 6.34375 8.01992 6.34375 7.65625V4.15625ZM7 10.9375C6.52531 10.9375 6.14031 10.5525 6.14031 10.0778C6.14031 9.60312 6.52504 9.21812 7 9.21812C7.47496 9.21812 7.85969 9.60312 7.85969 10.0778C7.85859 10.552 7.47578 10.9375 7 10.9375Z"
                                                        fill="#F9F1DF"/>
                                                </svg>
                                                Так нельзя походить
                                            </div>
                                        </div>
                                        <div className="game__user--cards game-user-cards">
                                            <ul className="game-user-cards__list">

                                                {
                                                    myCards.sort((a, b) => {
                                                        const ranks = {
                                                            '1': 1,
                                                            '2': 2,
                                                            '3': 3,
                                                            '4': 4,
                                                            '5': 5,
                                                            '6': 6,
                                                            '7': 7,
                                                            '8': 8,
                                                            '9': 9,
                                                            '10': 10,
                                                            'J': 11,
                                                            'Q': 12,
                                                            'K': 13,
                                                            'A': 14,
                                                        }
                                                        ranks[a.rank] = a.suit !== trump.suit ? ranks[a.rank] : ranks[a.rank] + 20
                                                        ranks[b.rank] = b.suit !== trump.suit ? ranks[b.rank] : ranks[b.rank] + 20
                                                        return ranks[a.rank] - ranks[b.rank];
                                                    })
                                                        .map((item, index) =>
                                                            <li key={index}
                                                                onClick={e => cardEvent(item, e, setWrongStep, userTurn, user, cardsOnTable, websocket, setSelectedCard, setMyCards)}
                                                                className="game-user-cards__item">
                                                                <div className="game-user-cards__item--body">
                                                                    <img
                                                                        src={`../images/game/cards/${item.rank}-${item.suit}.svg`}
                                                                        alt=""
                                                                        className="game-user-cards__img"/>
                                                                </div>
                                                            </li>
                                                        )
                                                }

                                            </ul>
                                        </div>
                                        <div className="game__user--info">
                                            <div className="game__user--info-body">
                                                <h3 className="game__user--name">
                                                    Вы: {user.username}
                                                </h3>

                                                {
                                                    user.id === userTurn.id && !isEndGame ?
                                                        <progress className="game__user--progress" max="100"
                                                                  value={timer * 100 / fixedTime}></progress> : ""
                                                }

                                            </div>
                                        </div>
                                        <div className="game__user--avatar">
                                            <img
                                                src={user.avatar ? user.avatar : "../images/account/avatar-none.svg"}
                                                alt="" className="game__user--avatar-img"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className={"game__main--table game__table" + (userTurn.event === 'defender' || response.event === 'end_game' ? " game__table_defence" : "")}>

                                {
                                    gameCenter[response.event] ? gameCenter[response.event] :
                                        <FoolCenterRunning cardsOnTable={cardsOnTable}
                                                           setSelectedCard={setSelectedCard}
                                                           selectedCard={selectedCard}
                                                           websocket={websocket}
                                                           setMyCards={setMyCards}
                                                           trump={trump}
                                                           setWrongStep={setWrongStep}
                                                           user={user}
                                                           players={players}
                                                           userTurn={userTurn}
                                                           defenderTake={defenderTake}
                                                           isCardsBeat={isCardsBeat}
                                                           attacker={attacker}
                                                           defender={defender}
                                        />
                                }

                            </div>
                            <div className="game__main--user-menu game__user-menu">
                                <div className="game__user-menu--col">
                                    <div className="game__user-menu--communication game__communication">

                                        <GameButtonsChatAndMicro/>
                                        <GameChat/>

                                    </div>
                                </div>

                                {
                                    !isEndGame ? <>
                                        {
                                            userTurn.id === user.id && (userTurn.event === "attacker" || userTurn.event === "sub_attacker") ?
                                                <FoolButtonPass timer={timer} websocket={websocket}
                                                                cardsOnTable={cardsOnTable}/> :
                                                userTurn.id === user.id && userTurn.event === "defender" ?
                                                    <FoolButtonTake timer={timer} websocket={websocket}/> :
                                                    !isReady ?
                                                        <FoolButtonReady setIsReady={setIsReady}
                                                                         websocket={websocket}/> :
                                                        <FoolButtonWaiting/>
                                        }
                                    </> : ""
                                }

                            </div>
                        </div>
                    </div>
                </section>
            </main>

        </>
    );
};

export default RoomSingle;