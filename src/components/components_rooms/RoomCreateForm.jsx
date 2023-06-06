import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import uniqid from "uniqid";
import {addBalance, addRoomAction} from "../../redux/actions";
import ActiveNotification from "../../hooks/ActiveNotification";
import {useNavigate} from "react-router-dom";
import {accountBalanceReducer} from "../../redux/reducers/accountBalanceReducer";
import OpenPopup from "../../hooks/OpenPopup";
import axios from "axios";
import GlobalLink from "../../GlobalLink";
import GetCookies from "../../hooks/GetCookies";
import JsCustomSelect from "../JS_CustomSelect";
import SetCookies from "../../hooks/SetCookies";

const RoomCreateForm = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch();

    const userInfo = useSelector(state => state.userInfoReducer.data)

    // const [typeOfGame, setTypeOfGame] = useState('Классический')
    // const [title, setTitle] = useState('')
    const [load, setLoad] = useState(true)
    const [games, setGames] = useState([])
    const [gameIs, setGameIs] = useState('fool')
    const [currency, setCurrency] = useState('chips')
    const [maxLength, setMaxLength] = useState(2)
    const [isAccess, setIsAccess] = useState(true)
    const [cost, setCost] = useState(0)
    const [isValidate, setIsValidate] = useState(false)
    const [gameInfo, setGameInfo] = useState({})
    const [maxPlayers, setMaxPlayers] = useState([])

    useEffect(() => {
        axios.get(GlobalLink(`/api/game/get/${gameIs}/`)).then(({data}) => {
            setGameInfo(data)
            setMaxPlayers(data.max_players)
            setTimeout(() => {
                JsCustomSelect()
            }, 10)
        })
    }, [gameIs])

    useEffect(() => {
        if (load) {
            axios.get(GlobalLink('/api/game/list/')).then(({data}) => {
                setGames(data)
                setLoad(false)
            })
        }
    }, [load])

    const handleChangeGame = (e) => {
        setGameIs(e.target.value)
    }

    const handleCreateRoom = (e) => {
        e.preventDefault()
        setIsValidate(true)

        if (cost <= 0 || maxLength > maxPlayers) return null;

        axios.defaults.headers.post['platform'] = `pc`;
        axios.defaults.headers.post['Authorization'] = `Bearer ${GetCookies('access_token')}`;
        axios.post(GlobalLink(`/api/room/create/`), {
            "bet_type": currency,
            "game": gameIs,
            "player_slots": maxLength,
            "room_type": isAccess ? "public" : "private",
            "bet": cost
        }).then(game => {

            SetCookies('gameHistory', null)
            SetCookies('CheckersYourBeaten', [])
            SetCookies('CheckersOpponentBeaten', [])

            axios.get(GlobalLink(`/api/game/get/${gameIs}/`)).then(res => {
                navigate('/rooms/' + gameIs + "/" + game.data.id)
            })

        }).catch(error => {
            if (error.message.includes('401')) {
                ActiveNotification('#notification_not-auth')
            }
        })

    }

    return (
        <form onSubmit={handleCreateRoom} action="#" className="page-rooms__create">
            {/*<fieldset className="page-rooms__create--fieldset">*/}
            {/*    <legend className="page-rooms__create--legend">*/}
            {/*        Название комнаты*/}
            {/*    </legend>*/}
            {/*    <label className="page-rooms__label form-label">*/}
            {/*        <input onChange={e => setTitle(e.target.value)} value={title} type="text"*/}
            {/*               name="sum" placeholder="Сумма"*/}
            {/*               className="page-rooms__input form-input _add-bg"/>*/}
            {/*        <span className="page-rooms__input-placeholder form-input-placeholder">Название</span>*/}
            {/*        {title || !isValidate ? "" : <span className="span-error">Заполните пожалуйста поле</span>}*/}
            {/*    </label>*/}
            {/*</fieldset>*/}
            <fieldset className="page-rooms__create--fieldset">
                <legend className="page-rooms__create--legend">
                    Игра
                </legend>

                {games.length &&
                    <select onChange={handleChangeGame} name="game" className="page-rooms__select custom-select">

                        {
                            games.map((game, gameIndex) =>
                                game.game.map((item, index) =>
                                    <option key={index} value={item.slug} data-image={`images/icons/${game.slug}.svg`}>
                                        {item.name}
                                    </option>
                                )
                            )
                        }

                    </select>}
            </fieldset>
            <fieldset className="page-rooms__create--fieldset">
                <legend className="page-rooms__create--legend">
                    Создание комнаты
                </legend>
                <div className="page-rooms__create--row">
                    <div className="page-rooms__create--col">
                        <div className="page-rooms__select-wrapper">
                            {gameInfo.game_currencies?.length &&
                                <select onChange={e => setCurrency(e.target.value)} name="currency"
                                        className="page-rooms__select custom-select">

                                    {
                                        gameInfo.game_currencies?.map((item, index) =>
                                            <option key={index} value={item} data-image={`images/icons/${item}.svg`}>
                                                {item === 'chips' ? 'Фишки' : 'Деньги'}
                                            </option>
                                        )
                                    }

                                </select>}
                        </div>
                    </div>
                    <div className="page-rooms__create--col">
                        <label className="page-rooms__label form-label">
                            <input onChange={e => setCost(e.target.value)} value={cost} type="number"
                                   name="sum" required placeholder="Сумма"
                                   className="page-rooms__input form-input _add-bg"/>
                            <span className="page-rooms__input-placeholder form-input-placeholder">Сумма</span>
                            {cost > 0 || !isValidate ? "" : <span className="span-error">Введите больше 0</span>}
                        </label>
                    </div>
                    <div className="page-rooms__create--col">
                        <div className="page-rooms__select-wrapper">

                            <select onChange={e => setMaxLength(e.target.value)} value={maxLength} name="players-length"
                                    className="page-rooms__select custom-select">

                                {
                                    Array(6).fill('').map((item, index) => {
                                        index++

                                        let text = 'Игрока';
                                        if (index === 5 || index === 6) {
                                            text = 'Игроков'
                                        }
                                        if (index < 2) return null;

                                        if (index > maxPlayers) {
                                            return (
                                                <option key={index} disabled={'disabled'} value={index} data-ss={'111'}>
                                                    {`${index} ${text}`}
                                                </option>
                                            )
                                        }

                                        return (
                                            <option key={index} value={index}>
                                                {`${index} ${text}`}
                                            </option>
                                        )
                                    })
                                }

                            </select>
                        {maxLength <= maxPlayers || !isValidate ? "" : <span className="span-error">Неверное кол-во</span>}
                        </div>
                    </div>
                    <div className="page-rooms__create--col">
                        <div className="page-rooms__select-wrapper">
                            <select onChange={e => setIsAccess(e.target.value === 'open')}
                                    name="status-game" className="page-rooms__select custom-select">
                                <option value="open">
                                    Открытая игра
                                </option>
                                <option value="lock">
                                    Закрытая игра
                                </option>
                            </select>
                        </div>
                    </div>
                    <div className="page-rooms__create--col">
                        {/*<div className="page-rooms__select-wrapper">*/}
                        {/*    <select onChange={e => setTypeOfGame(e.target.value)} name="mode-game"*/}
                        {/*            className="page-rooms__select custom-select">*/}
                        {/*        <option value="классический">*/}
                        {/*            Классический*/}
                        {/*        </option>*/}
                        {/*        <option value="переводной">*/}
                        {/*            Переводной*/}
                        {/*        </option>*/}
                        {/*    </select>*/}
                        {/*</div>*/}
                    </div>
                </div>

            </fieldset>
            {/*<fieldset className="page-rooms__create--fieldset">*/}
            {/*    <legend className="page-rooms__create--legend">*/}
            {/*        Игроки*/}
            {/*    </legend>*/}
            {/*    <div className="page-rooms__select-wrapper">*/}
            {/*        <select onChange={e => console.log(e.target.value)} name="players" multiple*/}
            {/*                className="page-rooms__select custom-multiple-select"*/}
            {/*                data-placeholder="Добавить игрока">*/}
            {/*            <option value="player-1">*/}
            {/*                Jane_3245*/}
            {/*            </option>*/}
            {/*            <option value="player-2">*/}
            {/*                Player 2*/}
            {/*            </option>*/}
            {/*            <option value="player-3">*/}
            {/*                Player 3*/}
            {/*            </option>*/}
            {/*        </select>*/}
            {/*    </div>*/}
            {/*    <div className="page-rooms__create--text">*/}
            {/*        После создания игры пользователям будет отправлено предложение войти в игру*/}
            {/*    </div>*/}
            {/*</fieldset>*/}
            <button className="page-rooms__create--submit btn _large" type="submit">
                Создать и присоедениться
            </button>
        </form>
    );
};

export default RoomCreateForm;