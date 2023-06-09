import React, {useEffect, useState} from 'react';
import openPopup from "../../../hooks/OpenPopup";
import {useDispatch, useSelector} from "react-redux";
import {
    cardsPlayer_1,
    cardsPlayer_2,
    cardsPlayer_me,
    GameMyStep,
    GamePot
} from "../../../redux/redux_poker/actions_poker";
import customeRange from "../../JS_NouiSlider";
import GameTableCard from "./GameTableCard";
import {myStepReducer} from "../../../redux/redux_poker/reducers_poker/GameMyStepReducer";

const GameStart = () => {

    useEffect(() => {
        customeRange()
    })

    const [status, setStatus] = useState('')

    const cell = [1, 2, 3, 4, 5]
    const [stepGameIs, setStepGameIs] = useState(1)
    const dispatch = useDispatch()
    const [cardsInTable, setCardsInTable] = useState([])
    const [newCards, setNewCards] = useState(0)

    const isMyStep = useSelector(state => state.myStepReducer.step)

    // GET READY
    const [isReadyPlayer1, setIsReadyPlayer1] = useState(false)
    const [isValueStepPl1, setIsValueStepPl1] = useState('')

    const [isReadyPlayer2, setIsReadyPlayer2] = useState(false)
    const [isValueStepPl2, setIsValueStepPl2] = useState('')

    const [isReadyPlayerMe, setIsReadyPlayerMe] = useState(false)
    const [isReadyPlayerElse, setIsReadyPlayerElse] = useState(false)
    setTimeout(() => {
        setIsReadyPlayer1(true)
        setTimeout(() => {
            setIsReadyPlayer2(true)
        }, 400)
    }, 1000)

    const handleReady = () => {
        setIsReadyPlayerMe(prev => !prev)
    }
    // GET READY


    // DEALING CARDS
    const allCards = useSelector(state => state.allCardsReducer.cards)

    const showCardsPlayer1 = useSelector(state => state.cardsForPlayer1Reducer.cards)
    const showCardsPlayer2 = useSelector(state => state.cardsForPlayer2Reducer.cards)
    const showCardsPlayerMe = useSelector(state => state.cardsForPlayerMeReducer.cards)

    useEffect(() => {

        if (isReadyPlayerMe) {

            const dealingCards = (player, dispatchAtts) => {
                let rand = Math.floor(Math.random() * allCards.length)

                if (!allCards[rand].status && player.length < 2) {
                    allCards[rand].status = true
                    dispatch(dispatchAtts(allCards[rand].card))
                }
            }


            let dealing = setInterval(() => {

                dealingCards(showCardsPlayer1, cardsPlayer_1)
                dealingCards(showCardsPlayer2, cardsPlayer_2)
                dealingCards(showCardsPlayerMe, cardsPlayer_me)

            }, 1)

            setStepGameIs(2)

            return () => clearInterval(dealing)

        }

    }, [showCardsPlayer1, showCardsPlayer2, showCardsPlayerMe, isReadyPlayerMe])
    // DEALING CARDS


    // GAME RUNNING
    const pot = useSelector(state => state.potReducer.pot)

    const handleBet = (e) => {
        dispatch(GamePot(+e.target.closest('button').querySelector('.input-range-value').textContent))
        dispatch(GameMyStep('nostep'))

        stepPlayers()
    }
    const handleFold = () => {
        dispatch(GameMyStep("fold"))

        stepPlayers('fold')
    }
    const handleCheck = () => {
        dispatch(GameMyStep('nostep'))

        stepPlayers()
    }

    const stepPlayers = (step) => {

        setTimeout(() => {
            setIsValueStepPl2('bet/120')
            dispatch(GamePot(120))

            setTimeout(() => {
                setIsValueStepPl1('bet/160')
                dispatch(GamePot(160))

                setTimeout(() => {
                    showThreeCards(step)
                }, 1000)

            }, 2000)

        }, 1000)

    }

    useEffect(() => {

        let dealing = setInterval(() => {

            let rand = Math.floor(Math.random() * allCards.length)

            if (newCards >= 1 && !allCards[rand].status && cardsInTable.length < newCards) {
                allCards[rand].status = true
                setCardsInTable(prev => [...prev, allCards[rand].card])
            }

        }, 1)

        return () => clearInterval(dealing)

    }, [cardsInTable, newCards])

    const showThreeCards = (step) => {
        setNewCards(prev => prev === 0 ? 3 : prev + 1)

        setTimeout(() => {

            if (cardsInTable.length >= 4) {
                dispatch(GameMyStep('nostep'))
                setIsValueStepPl1('')
                setIsValueStepPl2('')
            } else {
                if(step !== 'fold') dispatch(GameMyStep('step'))
                setIsValueStepPl1('')
                setIsValueStepPl2('')
            }

        }, 500)

        if(step === 'fold') {
            dispatch(GameMyStep('fold'))
            setStatus('fold')
            setTimeout(() => {
                stepPlayers()
            }, 1000)
        }


    }

    // GAME RUNNING


    return (
        <main className="main">
            <section className="poker game page-padding-top">
                <div className="poker__container game__container container">
                    <div className="game__header">
                        <div className="game__header--col">
                            <h2 className="game__header--name section-title _decor-none">
                                Holdem
                            </h2>
                            <a href="#poker-combination-popup" onClick={e => openPopup(e, '#poker-combination-popup')}
                               className="game__header--large-btn btn _large _border open-popup">
                                Комбинации карт
                            </a>
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
                    <div className="poker__main">
                        <div className="poker__main--bg poker__bg">
                            <picture>
                                <img src="images/game/table.png" alt="" width="300" className="poker__bg--img"/>
                            </picture>
                        </div>
                        <div className="poker__main--grid poker__grid">
                            <div className="poker__grid--item">
                                <div className="game__bet">
                                    <span className="game__bet--value">1500</span>
                                    <img src="images/icons/chip.svg" alt="" className="game__bet--currency"/>
                                </div>
                            </div>
                            <div className="poker__grid--item">
                                {
                                    isReadyPlayer1 ?
                                        <div className="game__player _min">
                                            <div className="game__player--body">
                                                <div className="game__player--avatar">
                                                    <img src="images/account/avatar.png" width="76" height="76"
                                                         alt=""
                                                         className="game__player--avatar-img"/>
                                                </div>
                                                <div className="game__player--info">
                                                    <h3 className="game__player--name">
                                                        Игорь
                                                    </h3>
                                                    <progress className="game__player--progress" max="100"
                                                              value="100"></progress>
                                                </div>
                                                <div className="game__player--block">
                                                    <div className="game__player--min-column">
                                                        {
                                                            stepGameIs === 1 ?
                                                                <div className="game__player--min-message">
                                                                    Готов
                                                                </div> : ""
                                                        }
                                                        {isValueStepPl1 && <div className="game__player--min-message">
                                                            {
                                                                isValueStepPl1.includes('bet') ? "Бет +" + isValueStepPl1.slice(4) : ""
                                                            }
                                                        </div>}
                                                    </div>
                                                </div>

                                                <div className="game__player--cards poker-player-cards">
                                                    <ul className="poker-player-cards__list">

                                                        {
                                                            showCardsPlayer1.map(card => {
                                                                return (
                                                                    <li key={card.id}
                                                                        className="poker-player-cards__card">
                                                                        <div className="poker-player-cards__card--body">
                                                                            <img src="images/game/cards/Back.svg"
                                                                                 alt=""
                                                                                 className="poker-player-cards__card--back"/>
                                                                            <img
                                                                                src={`images/cards/${card.card_type}-${card.card_suit}.svg`}
                                                                                alt=""
                                                                                className="poker-player-cards__card--front"/>
                                                                        </div>
                                                                    </li>
                                                                )
                                                            })
                                                        }

                                                    </ul>
                                                </div>

                                            </div>
                                        </div>
                                        :
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
                            </div>
                            <div className="poker__grid--item">
                                {
                                    isReadyPlayerElse ?
                                        <div className="game__player _min">
                                            <div className="game__player--body">
                                                <div className="game__player--avatar">
                                                    <img src="images/account/avatar.png" width="76" height="76"
                                                         alt=""
                                                         className="game__player--avatar-img"/>
                                                </div>
                                                <div className="game__player--info">
                                                    <h3 className="game__player--name">
                                                        Игорь
                                                    </h3>
                                                    <progress className="game__player--progress" max="100"
                                                              value="100"></progress>
                                                </div>
                                                <div className="game__player--block">
                                                    <div className="game__player--min-column">
                                                        <div className="game__player--min-message">
                                                            Готов
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        :
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
                            </div>
                            <div className="poker__grid--item">
                                {
                                    isReadyPlayerElse ?
                                        <div className="game__player _min">
                                            <div className="game__player--body">
                                                <div className="game__player--avatar">
                                                    <img src="images/account/avatar.png" width="76" height="76"
                                                         alt=""
                                                         className="game__player--avatar-img"/>
                                                </div>
                                                <div className="game__player--info">
                                                    <h3 className="game__player--name">
                                                        Игорь
                                                    </h3>
                                                    <progress className="game__player--progress" max="100"
                                                              value="100"></progress>
                                                </div>
                                                <div className="game__player--block">
                                                    <div className="game__player--min-column">
                                                        <div className="game__player--min-message">
                                                            Готов
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        :
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
                            </div>
                            <div className="poker__grid--item">
                                {
                                    isReadyPlayer2 ?
                                        <div className="game__player _min">
                                            <div className="game__player--body">
                                                <div className="game__player--avatar">
                                                    <img src="images/account/avatar.png" width="76" height="76"
                                                         alt=""
                                                         className="game__player--avatar-img"/>
                                                </div>
                                                <div className="game__player--info">
                                                    <h3 className="game__player--name">
                                                        Игорь
                                                    </h3>
                                                    <progress className="game__player--progress" max="100"
                                                              value="100"></progress>
                                                </div>
                                                <div className="game__player--block">
                                                    <div className="game__player--min-column">
                                                        {
                                                            stepGameIs === 1 ?
                                                                <div className="game__player--min-message">
                                                                    Готов
                                                                </div> : ""
                                                        }
                                                        {isValueStepPl2 && <div className="game__player--min-message">
                                                            {
                                                                isValueStepPl2.includes('bet') ? "Бет +" + isValueStepPl2.slice(4) : ""
                                                            }
                                                        </div>}
                                                    </div>
                                                </div>

                                                <div className="game__player--cards poker-player-cards">
                                                    <ul className="poker-player-cards__list">

                                                        {
                                                            showCardsPlayer2.map(card => {
                                                                return (
                                                                    <li key={card.id}
                                                                        className="poker-player-cards__card">
                                                                        <div className="poker-player-cards__card--body">
                                                                            <img src="images/game/cards/Back.svg"
                                                                                 alt=""
                                                                                 className="poker-player-cards__card--back"/>
                                                                            <img
                                                                                src={`images/cards/${card.card_type}-${card.card_suit}.svg`}
                                                                                alt=""
                                                                                className="poker-player-cards__card--front"/>
                                                                        </div>
                                                                    </li>
                                                                )
                                                            })
                                                        }

                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        :
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
                            </div>
                            <div className="poker__grid--item">
                                {
                                    isReadyPlayerElse ?
                                        <div className="game__player _min">
                                            <div className="game__player--body">
                                                <div className="game__player--avatar">
                                                    <img src="images/account/avatar.png" width="76" height="76"
                                                         alt=""
                                                         className="game__player--avatar-img"/>
                                                </div>
                                                <div className="game__player--info">
                                                    <h3 className="game__player--name">
                                                        Игорь
                                                    </h3>
                                                    <progress className="game__player--progress" max="100"
                                                              value="100"></progress>
                                                </div>
                                                <div className="game__player--block">
                                                    <div className="game__player--min-column">
                                                        <div className="game__player--min-message">
                                                            Готов
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        :
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
                            </div>
                            <div className="poker__grid--item">
                                {
                                    isReadyPlayerElse ?
                                        <div className="game__player _min">
                                            <div className="game__player--body">
                                                <div className="game__player--avatar">
                                                    <img src="images/account/avatar.png" width="76" height="76"
                                                         alt=""
                                                         className="game__player--avatar-img"/>
                                                </div>
                                                <div className="game__player--info">
                                                    <h3 className="game__player--name">
                                                        Игорь
                                                    </h3>
                                                    <progress className="game__player--progress" max="100"
                                                              value="100"></progress>
                                                </div>
                                                <div className="game__player--block">
                                                    <div className="game__player--min-column">
                                                        <div className="game__player--min-message">
                                                            Готов
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        :
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
                            </div>
                            <div className="poker__grid--item">
                                {
                                    isReadyPlayerElse ?
                                        <div className="game__player _min">
                                            <div className="game__player--body">
                                                <div className="game__player--avatar">
                                                    <img src="images/account/avatar.png" width="76" height="76"
                                                         alt=""
                                                         className="game__player--avatar-img"/>
                                                </div>
                                                <div className="game__player--info">
                                                    <h3 className="game__player--name">
                                                        Игорь
                                                    </h3>
                                                    <progress className="game__player--progress" max="100"
                                                              value="100"></progress>
                                                </div>
                                                <div className="game__player--block">
                                                    <div className="game__player--min-column">
                                                        <div className="game__player--min-message">
                                                            Готов
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        :
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
                            </div>
                            <div className="poker__grid--item">
                                <div className="poker__user game__user">
                                    <div className="poker__user--cards poker-user-cards">
                                        <ul className="poker-user-cards__list">

                                            {
                                                showCardsPlayerMe.map(card => {
                                                    return (
                                                        <li key={card.id} className="poker-user-cards__card">
                                                            <div className="poker-user-cards__card--body">
                                                                <img
                                                                    src={`images/cards/${card.card_type}-${card.card_suit}.svg`}
                                                                    alt=""
                                                                    className="poker-user-cards__card--img"/>
                                                            </div>
                                                        </li>
                                                    )
                                                })
                                            }

                                        </ul>
                                    </div>
                                    <div className="game__user--block">
                                    </div>
                                    <div className="game__user--info">
                                        <div className="game__user--info-body">
                                            <h3 className="game__user--name">
                                                Вы: Евгений
                                            </h3>
                                            <progress className="game__user--progress" max="100" value="100"></progress>
                                        </div>
                                    </div>
                                    <div className="game__user--avatar">
                                        <img src="images/account/avatar.png" alt=""
                                             className="game__user--avatar-img"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="poker__main--table poker__table game__table">

                            {
                                stepGameIs === 1 ?
                                    <div className="game__table--content">
                                        <h3 className="game__table--title section-title _center">
                                            Ожидаем готовность комнаты
                                        </h3>
                                        <div className="game__table--text">
                                            Оставайтесь и одержите победу!
                                        </div>
                                    </div> :
                                    <div className="poker__table--cards">
                                        <div className="poker__table--value">
                                            <div className="game__bet">
                                                <span className="game__bet--value">Pot {pot}</span>
                                                <img src="images/icons/chip.svg" alt=""
                                                     className="game__bet--currency"/>
                                            </div>
                                        </div>

                                        <GameTableCard
                                            cardsInTable={cardsInTable}
                                            cell={cell}
                                        />

                                    </div>
                            }


                        </div>
                        <div className="poker__main--user-menu game__user-menu">
                            <div className="game__user-menu--col">
                                <div className="game__user-menu--communication game__communication">
                                    <button className="game__communication--btn micro-btn game-btn" type="button"
                                            title="Выключить микрофон" data-title-off="Выключить микрофон"
                                            data-title-on="Включить микрофон">
                                        <svg width="30" height="24" viewBox="0 0 30 24" fill="none"
                                             xmlns="http://www.w3.org/2000/svg" className="status-off">
                                            <path
                                                d="M17.958 21.75L16.1252 21.75V20.167C17.0908 20.0347 17.9997 19.7263 18.8294 19.2895L16.8016 17.7C16.1144 17.918 15.3822 18.0365 14.6134 17.988C11.5173 17.7937 8.95797 14.8641 8.95797 11.7609V11.5839L6.70797 9.82031L6.70798 11.6302C6.70798 15.8325 9.70657 19.5802 13.7908 20.1473V21.7481L11.9158 21.7481C11.0875 21.7481 10.458 22.4198 10.458 23.2059C10.458 23.6625 10.8377 24 11.208 24H18.6658C19.0801 24 19.3736 23.6642 19.3736 23.2922C19.458 22.4203 18.8298 21.75 17.958 21.75ZM29.5689 21.9891L22.1017 16.1344C22.8222 14.9184 23.2516 13.5136 23.2516 11.9995V10.125C23.2516 9.50391 22.7477 9 22.1688 9C21.5477 9 21.0438 9.50391 21.0438 10.125L21.0438 11.9578C21.0438 12.9478 20.7833 13.8689 20.3514 14.6878L19.1453 13.7428C19.3907 13.1953 19.5434 12.5981 19.5434 11.9578L16.8683 11.9578L15.2534 10.6922C15.39 10.549 15.5801 10.4579 15.7934 10.4579H19.5012V9H15.708C15.2938 9 15.0002 8.66419 15.0002 8.29219C15.0002 7.92019 15.336 7.54219 15.708 7.54219L19.4158 7.54225V6L15.708 5.99993C15.2938 5.99993 15.0002 5.66412 15.0002 5.29212C15.0002 4.92012 15.336 4.5843 15.708 4.5843L19.458 4.58429C19.458 2.05304 17.3692 0.0106969 14.8206 0.0866344C12.3986 0.0756562 10.458 2.22422 10.458 4.6875L10.458 7.04203L1.81938 0.239578C1.61313 0.0784219 1.36844 0 1.12657 0C0.792818 0 0.461412 0.148031 0.240209 0.430734C-0.143604 0.920156 -0.0583851 1.6275 0.430896 2.01047L28.1387 23.7183C28.6309 24.1028 29.3373 24.0149 29.7179 23.5271C30.1455 23.0812 30.0564 22.3734 29.5689 21.9891Z"
                                                fill="#54534F"/>
                                        </svg>
                                        <svg width="18" height="24" viewBox="0 0 18 24" fill="none"
                                             xmlns="http://www.w3.org/2000/svg" className="status-on">
                                            <path
                                                d="M9 16.5C11.4858 16.5 13.5 14.4858 13.5 12H9.75C9.3375 12 9 11.6625 9 11.25C9 10.8375 9.3375 10.5 9.75 10.5H13.5V9H9.75C9.3375 9 9 8.6625 9 8.25C9 7.8375 9.3375 7.5 9.75 7.5H13.5V5.95781H9.75C9.33581 5.95781 9 5.622 9 5.20781C9 4.79362 9.33581 4.45781 9.75 4.45781L13.5 4.5C13.5 2.01422 11.4858 0 9 0C6.51422 0 4.5 2.01422 4.5 4.5V12C4.5 14.4844 6.47344 16.5 9 16.5ZM16.125 9C15.5016 9 15 9.50156 15 10.0828V12C15 15.4373 12.0952 18.2063 8.61094 17.9859C5.51344 17.7905 3 14.8645 3 11.7609V10.0828C3 9.50156 2.49609 9 1.875 9C1.25391 9 0.75 9.50156 0.75 10.0828V11.5898C0.75 15.7927 3.74859 19.5398 7.875 20.107V21.75H6C5.14734 21.75 4.46062 22.4616 4.50187 23.3236C4.52016 23.7094 4.86562 24 5.25 24H12.75C13.1354 24 13.4798 23.7086 13.4981 23.3236C13.5375 22.4625 12.8531 21.75 12 21.75H10.125V20.167C14.1422 19.6172 17.25 16.1672 17.25 12V10.0828C17.25 9.50156 16.7484 9 16.125 9Z"
                                                fill="#88F6DC"/>
                                        </svg>
                                    </button>
                                    <button className="game__communication--btn chat-btn game-btn" title="Чат игры"
                                            type="button">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M16.4704 14.83L16.8604 17.99C16.9604 18.82 16.0704 19.4 15.3604 18.97L11.9004 16.91C11.6604 16.77 11.6004 16.47 11.7304 16.23C12.2304 15.31 12.5004 14.27 12.5004 13.23C12.5004 9.57 9.36038 6.59 5.50038 6.59C4.71038 6.59 3.94038 6.71 3.22038 6.95C2.85038 7.07 2.49038 6.73 2.58038 6.35C3.49038 2.71 6.99038 0 11.1704 0C16.0504 0 20.0004 3.69 20.0004 8.24C20.0004 10.94 18.6104 13.33 16.4704 14.83Z"
                                                fill="#88F7DC"/>
                                            <path
                                                d="M11 13.2301C11 14.4201 10.56 15.5201 9.82 16.3901C8.83 17.5901 7.26 18.3601 5.5 18.3601L2.89 19.9101C2.45 20.1801 1.89 19.8101 1.95 19.3001L2.2 17.3301C0.86 16.4001 0 14.9101 0 13.2301C0 11.4701 0.94 9.92009 2.38 9.00009C3.27 8.42009 4.34 8.09009 5.5 8.09009C8.54 8.09009 11 10.3901 11 13.2301Z"
                                                fill="#88F7DC"/>
                                        </svg>
                                        Чат
                                    </button>
                                    <div className="game__communication--chat game__chat" style={{display: "none"}}>
                                        <div className="game__chat--body">
                                            <div className="game__chat--header">
                                                <button className="game__chat--close-btn" type="button"
                                                        title="Закрыть чат">
                                                    <svg width="11" height="10" viewBox="0 0 11 10" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M9.78906 1L1.0019 9.47" stroke="#6A6A6A"/>
                                                        <path d="M1 1L9.78716 9.47" stroke="#6A6A6A"/>
                                                    </svg>
                                                </button>
                                            </div>
                                            <ul className="game__chat--list">
                                                <li className="game__chat--item">
                                                    <div className="game__chat--avatar">
                                                        <img src="images/account/avatar.png" width="24" height="24"
                                                             alt=""/>
                                                    </div>
                                                    <div className="game__chat--info">
                                                        <h3 className="game__chat--name">
                                                            Jane456
                                                        </h3>
                                                        <div className="game__chat--text">
                                                            Aliqua id fugiat nostrud irure ex duisAliqua id fugiat
                                                            nostrud irure ex
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="game__chat--item">
                                                    <div className="game__chat--avatar">
                                                        <img src="images/account/avatar.png" width="24" height="24"
                                                             alt=""/>
                                                    </div>
                                                    <div className="game__chat--info">
                                                        <h3 className="game__chat--name">
                                                            Jane456
                                                        </h3>
                                                        <div className="game__chat--text">
                                                            Aliqua id fugiat nostrud irure ex duisAliqua id fugiat
                                                            nostrud irure ex
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="game__chat--item">
                                                    <div className="game__chat--avatar">
                                                        <img src="images/account/avatar.png" width="24" height="24"
                                                             alt=""/>
                                                    </div>
                                                    <div className="game__chat--info">
                                                        <h3 className="game__chat--name">
                                                            Jane456
                                                        </h3>
                                                        <div className="game__chat--text">
                                                            Aliqua id fugiat nostrud irure ex duisAliqua id fugiat
                                                            nostrud irure ex
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="game__chat--item">
                                                    <div className="game__chat--avatar">
                                                        <img src="images/account/avatar.png" width="24" height="24"
                                                             alt=""/>
                                                    </div>
                                                    <div className="game__chat--info">
                                                        <h3 className="game__chat--name">
                                                            Jane456
                                                        </h3>
                                                        <div className="game__chat--text">
                                                            Aliqua id fugiat nostrud irure ex duisAliqua id fugiat
                                                            nostrud irure ex
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="game__chat--item">
                                                    <div className="game__chat--avatar">
                                                        <img src="images/account/avatar.png" width="24" height="24"
                                                             alt=""/>
                                                    </div>
                                                    <div className="game__chat--info">
                                                        <h3 className="game__chat--name">
                                                            Jane456
                                                        </h3>
                                                        <div className="game__chat--text">
                                                            Aliqua id fugiat nostrud irure ex duisAliqua id fugiat
                                                            nostrud irure ex
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="game__chat--item">
                                                    <div className="game__chat--avatar">
                                                        <img src="images/account/avatar.png" width="24" height="24"
                                                             alt=""/>
                                                    </div>
                                                    <div className="game__chat--info">
                                                        <h3 className="game__chat--name">
                                                            Jane456
                                                        </h3>
                                                        <div className="game__chat--text">
                                                            Aliqua id fugiat nostrud irure ex duisAliqua id fugiat
                                                            nostrud irure ex
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="game__chat--item">
                                                    <div className="game__chat--avatar">
                                                        <img src="images/account/avatar.png" width="24" height="24"
                                                             alt=""/>
                                                    </div>
                                                    <div className="game__chat--info">
                                                        <h3 className="game__chat--name">
                                                            Jane456
                                                        </h3>
                                                        <div className="game__chat--text">
                                                            Aliqua id fugiat nostrud irure ex duisAliqua id fugiat
                                                            nostrud irure ex
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="game__chat--item">
                                                    <div className="game__chat--avatar">
                                                        <img src="images/account/avatar.png" width="24" height="24"
                                                             alt=""/>
                                                    </div>
                                                    <div className="game__chat--info">
                                                        <h3 className="game__chat--name">
                                                            Jane456
                                                        </h3>
                                                        <div className="game__chat--text">
                                                            Aliqua id fugiat nostrud irure ex duisAliqua id fugiat
                                                            nostrud irure ex
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="game__chat--item">
                                                    <div className="game__chat--avatar">
                                                        <img src="images/account/avatar.png" width="24" height="24"
                                                             alt=""/>
                                                    </div>
                                                    <div className="game__chat--info">
                                                        <h3 className="game__chat--name">
                                                            Jane456
                                                        </h3>
                                                        <div className="game__chat--text">
                                                            Aliqua id fugiat nostrud irure ex duisAliqua id fugiat
                                                            nostrud irure ex
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="game__chat--item">
                                                    <div className="game__chat--avatar">
                                                        <img src="images/account/avatar.png" width="24" height="24"
                                                             alt=""/>
                                                    </div>
                                                    <div className="game__chat--info">
                                                        <h3 className="game__chat--name">
                                                            Jane456
                                                        </h3>
                                                        <div className="game__chat--text">
                                                            Aliqua id fugiat nostrud irure ex duisAliqua id fugiat
                                                            nostrud irure ex
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                            <form action="#" className="game__chat--message">
                                                <label className="game__chat--message-label">
                                                    <input type="text" name="chat-message" required
                                                           placeholder="Введите сообщение..."
                                                           className="game__chat--message-input"/>
                                                </label>
                                                <button className="game__chat--message-submit" type="submit"
                                                        title="Отправить сообщение в чат">
                                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M13.71 6.54567L0.710318 0.545813C0.503323 0.451815 0.256329 0.507814 0.112332 0.685809C-0.0326641 0.863805 -0.037664 1.1168 0.100333 1.29979L4.37523 6.99965L0.100333 12.6995C-0.037664 12.8825 -0.0326641 13.1365 0.111332 13.3135C0.20833 13.4345 0.353326 13.4995 0.500323 13.4995C0.571321 13.4995 0.642319 13.4845 0.709318 13.4535L13.709 7.45364C13.887 7.37165 14 7.19465 14 6.99965C14 6.80466 13.887 6.62766 13.71 6.54567Z"
                                                            fill="#61C8AF"/>
                                                    </svg>
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="game__user-menu--col">

                                {
                                    stepGameIs === 1 ?
                                        <h3 className="game__user-menu--title section-title _decor-none">
                                            Вы готовы?
                                        </h3> : ""
                                }

                                {
                                    isMyStep === 'step' ?
                                        <>
                                            <div className="game__user-menu--timer">
                                                Осталось:
                                                <b>10 сек</b>
                                            </div>
                                            {
                                                stepGameIs === 1 ?
                                                    <>
                                                        <button onClick={handleReady}
                                                                className="game__user-menu--main-btn btn _large _shadow"
                                                                type="button">
                                                            {
                                                                isReadyPlayerMe ? "Я не готов" : "Я готов"
                                                            }
                                                        </button>
                                                    </> :
                                                    <div className="game__user-menu--row _min">
                                                        <button onClick={e => handleFold(e)}
                                                                className="game__user-menu--main-btn btn _large _shadow"
                                                                type="button">
                                                            Фолд
                                                        </button>
                                                        <button onClick={handleCheck} className="game__user-menu--main-btn btn _large _shadow"
                                                                type="button">
                                                            Чек
                                                        </button>
                                                        <button onClick={handleBet}
                                                                className="game__user-menu--main-btn btn _large _shadow"
                                                                type="button">
                                                            Бет <span className="input-range-value"></span>
                                                        </button>
                                                        <div className="game__user-menu--element">
                                                            <div className="input-range-body">


                                                                {/*{*/}
                                                                {/*    <Nouislider*/}
                                                                {/*        connect*/}
                                                                {/*        start={[0]}*/}
                                                                {/*        range={{*/}
                                                                {/*            min: [0],*/}
                                                                {/*            max: [10000]*/}
                                                                {/*        }}*/}
                                                                {/*    />*/}
                                                                {/*}*/}


                                                                <div className="input-range-value"></div>
                                                                <input type="range" step="1" min="1" max="200"
                                                                       className="input-range"/>
                                                                <div className="input-range-wrapper">
                                                                    <div className="input-range-elem"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                            }
                                        </> : ""
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
        ;
};

export default GameStart;