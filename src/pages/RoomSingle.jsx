import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {use} from "i18next";
import openPopup from "../hooks/OpenPopup";
import PopupCross from "../components/components_popups/PopupCross";
import PopupBgd from "../components/components_popups/PopupBgd";
import StartGame from "../components/component_game/game_thousand/StartGame";
import GameDealing from "../components/component_game/game_thousand/GameDealing";
import GameRunning from "../components/component_game/game_thousand/GameRunning";
import GameGives from "../components/component_game/game_thousand/GameGives";
import GameStart from "../components/component_game/game_poker/GameStart";
import {useSelector} from "react-redux";
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

const RoomSingle = () => {

    const [socketClose, setSocketClose] = useState(false)

    const {roomId} = useParams()
    const [stepOfGame, setStepOfGame] = useState(2)
    const [player, setPlayer] = useState(false)
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

    const user = useSelector(state => state.userInfoReducer.data)
    const games = useSelector(state => state.gamesListReducer.list)

    useEffect(() => {

        const socket = new WebSocket(GlobalLink(`/room/${roomId}/`))
        socket.onopen = () => {
            socket.send(JSON.stringify({"command": "auth", "data": {"token": GetCookies('access_token')}}))

            setWebsocket(socket)

            axios.defaults.headers.get['Authorization'] = `Bearer ${GetCookies('access_token')}`;
            axios.get(GlobalLink(`/api/room/get/${roomId}/`)).then(res => {
                console.log('info about room', res.data)
            })

            socket.onmessage = (e) => {
                const data = JSON.parse(e.data)
                console.log("socket message", data)
                setResponse(data)

                setTimeout(() => {
                    document.querySelectorAll('.game__table-cards--item')?.forEach(item => item.classList.remove('_new-card'))
                }, 10)

                data.data?.timeout && setTimer(data.data?.timeout)
                data.data?.timeout && setFixedTime(data.data?.timeout)

                switch (data.event) {
                    case "card_distribution":
                        setTrump(data.data.trump)
                        setMyCards(data.data.cards)
                        break;
                    case "player_turn":
                        setUserTurn({
                            id: data.data.player.id,
                            event: data.data.role,
                        })
                        break;
                    case "attacker_played":
                        setCardsOnTable(prev => [...prev, {
                            attacker_card: data.data.played_card,
                            defence_card: {}
                        }])
                        break;
                    case "sub_attacker_played":
                        setCardsOnTable(prev => [...prev, {
                            attacker_card: data.data.played_card,
                            defence_card: {}
                        }])
                        break;
                    case "defender_played":

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
                        break;

                    case "defender_take":
                        setCardsOnTable([])
                        if (user.id === data.data.player.id) {
                            setMyCards(prev => [...prev, ...data.data.cards])
                        }
                        break;
                    case "new_cards":
                        if (user.id === data.data.player.id) {
                            setMyCards(prev => [...prev, ...data.data.cards])
                        }
                        break;
                    case "cards_beat":
                        setCardsOnTable([])
                        break;
                    case "player_win":
                        setIsWinner(prev => data.data.player.id === user.id ? [...prev, user.id] : prev)
                        break;
                    case "end_game":
                        break;

                }
            }
            socket.onerror = (e) => console.log('GAME socket Error')
            socket.onclose = () => {
                setSocketClose(true)
                console.log('GAME socket Close')
            }
        }

    }, [])

    useEffect(() => {

        if (!!games.length) {
            games.map(game => game.game.map(room => room))
        }

    }, [games])

    const handleReady = () => {
        axios.post(GlobalLink(`/api/room/start/?room_id=${roomId}`)).then(res => {
            console.log('game is start >>>', res.data)
        })
    }


    // GAME PROCCESS

    const gameCenter = {
        'auth': <FoolCenterWaiting/>,
        'start_game': <FoolCenterStarting/>,
        'end_game': <FoolCenterEndgame isWinner={isWinner} userId={user.id}/>
    }

    const cardEvent = (item, e) => {
        setWrongStep(false)

        if (userTurn.id === user.id) {

            console.log("Card move", item)

            if (((userTurn.event === "attacker" || userTurn.event === "sub_attacker") &&
                    (cardsOnTable.some(card => card.attacker_card?.rank === item.rank) || cardsOnTable.some(card => card.defence_card?.rank === item.rank))) ||
                cardsOnTable.length === 0) {

                const top = e.target.closest('li').getBoundingClientRect().top - document.querySelector('.game__table-cards--card_empty').getBoundingClientRect().top;
                const left = e.target.closest('li').getBoundingClientRect().left - document.querySelector('.game__table-cards--card_empty').getBoundingClientRect().left;
                const width = document.querySelector('.game__table-cards--card_empty').clientWidth;
                const height = document.querySelector('.game__table-cards--card_empty').clientHeight;

                e.target.closest('li').style.top = `${-top + 27}px`
                e.target.closest('li').style.left = `${-left - 14}px`
                e.target.closest('li').querySelector('.game-user-cards__item--body').style.width = `${width - 10}px`
                e.target.closest('li').querySelector('.game-user-cards__item--body').style.height = `${height}px`

                setTimeout(() => {
                    websocket.send(
                        JSON.stringify({
                            "command": "paying_card",
                            "data": {
                                "card": {
                                    "rank": item.rank,
                                    "suit": item.suit
                                }
                            }
                        })
                    )

                    e.target.closest('li').style.transition = `none`;
                    e.target.closest('li').style.top = `0px`;
                    e.target.closest('li').style.left = `0px`;
                    e.target.closest('li').querySelector('.game-user-cards__item--body').style.width = `100%`
                    e.target.closest('li').querySelector('.game-user-cards__item--body').style.height = `155px`
                    setTimeout(() => {
                        e.target.closest('li').style.transition = `all .3s ease`;
                    }, 100)

                    setTimeout(() => {
                        setMyCards(prev => prev.filter(card => {
                            if (!(card.suit === item.suit && card.rank === item.rank)) {
                                return card
                            }
                        }))
                    }, 50)
                }, 300)
            } else if (userTurn.event === "defender") {

                document.querySelector('.game-user-cards__item._active')?.classList.remove('_active')
                e.target.closest('li').classList.toggle('_active')

                if (e.target.closest('li').classList.contains('_active')) {
                    setSelectedCard({
                        "card": {
                            "rank": item.rank,
                            "suit": item.suit
                        },
                        "entry_card": {
                            "rank": null,
                            "suit": null
                        }
                    })
                } else {
                    setSelectedCard({
                        "card": {
                            "rank": null,
                            "suit": null
                        },
                        "entry_card": {
                            "rank": null,
                            "suit": null
                        }
                    })
                }
            } else {
                setWrongStep(true)
            }

        }

    }

    useEffect(() => {
        let time = setInterval(() => {
            timer > 0 && setTimer(prev => prev - 1)
        }, 1000)

        return () => clearInterval(time)
    }, [timer])

    return (
        <>
            {/*{*/}
            {/*    roomId == 1 ?*/}
            {/*        stepOfGame === 1 ? <StartGame setStepOfGame={setStepOfGame}/> :*/}
            {/*            stepOfGame === 2 ? <GameDealing setStepOfGame={setStepOfGame}/> :*/}
            {/*                stepOfGame === 3 ? <GameGives setStepOfGame={setStepOfGame}/> :*/}
            {/*                    <GameRunning setStepOfGame={setStepOfGame}/>*/}
            {/*        : <GameStart/>*/}
            {/*}*/}

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
                                        <span className="game__bet--value">1500</span>
                                        <img src="../images/icons/chip.svg" alt="" className="game__bet--currency"/>
                                    </div>
                                </div>
                                <div className="game__grid--item">

                                    {
                                        player ? <GamePlayer/> : <GamePlayerWaiting/>
                                    }

                                </div>
                                <div className="game__grid--item">

                                    {
                                        player ? <GamePlayer/> : <GamePlayerWaiting/>
                                    }

                                </div>
                                <div className="game__grid--item">

                                    {
                                        player ? <GamePlayer/> : <GamePlayerWaiting/>
                                    }

                                </div>
                                <div className="game__grid--item">
                                    <form action="#" className="game__cards">
                                        <button className="game__cards--element">
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
                                        player ? <GamePlayer/> : <GamePlayerWaiting/>
                                    }

                                </div>
                                <div className="game__grid--item">

                                    {
                                        player ? <GamePlayer/> : <GamePlayerWaiting/>
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
                                                            <li key={index} onClick={e => cardEvent(item, e)}
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
                                                    user.id === userTurn.id ?
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
                                                           setCardsOnTable={setCardsOnTable}
                                                           setSelectedCard={setSelectedCard}
                                                           selectedCard={selectedCard}
                                                           websocket={websocket}
                                                           myCards={myCards}
                                                           setMyCards={setMyCards}
                                                           trump={trump}
                                                           setWrongStep={setWrongStep}
                                                           userTurn={userTurn.id === user.id && userTurn}
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
                                    userTurn.id === user.id && (userTurn.event === "attacker" || userTurn.event === "sub_attacker") ?
                                        <FoolButtonPass timer={timer} websocket={websocket}
                                                        cardsOnTable={cardsOnTable}/> :
                                        userTurn.id === user.id && userTurn.event === "defender" ?
                                            <FoolButtonTake timer={timer} websocket={websocket}/> :
                                            response.event === 'auth' ?
                                                <FoolButtonReady handleReady={handleReady}/> :
                                                <FoolButtonWaiting/>
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