import React, {useEffect, useState} from 'react';
import JsCustomSelect from "../JS_CustomSelect";
import RoomItem from "../RoomItem";
import axios from "axios";
import GetCookies from "../../hooks/GetCookies";
import {useNavigate} from "react-router-dom";
import GlobalLink from "../../GlobalLink";

const GamesSingleRooms = ({gamesId}) => {

    useEffect(() => {
        JsCustomSelect()
    })

    const [isActiveCreate, setIsActiveCreate] = useState(true)
    const [rooms, setRooms] = useState([])

    const handleCreate = (e) => {
        setIsActiveCreate(prev => !prev)
    }

    const [currency, setCurreny] = useState('chips')
    const [maxLength, setMaxLength] = useState(2)
    const [isAccess, setIsAccess] = useState(true)
    const [typeOfGame, setTypeOfGame] = useState('Классический')
    // const [gamers, setGamers] = useState([])
    const [cost, setCost] = useState(0)
    const [title, setTitle] = useState('')
    const navigate = useNavigate()
    // const [icon, setIcon] = useState(thisGame.icon)

    useEffect(() => {
        axios.get(GlobalLink(`/api/game/get/${gamesId}/`)).then(res => {
            console.log('rooms', res.data)
            setRooms(res.data.room)
        })
    }, [])

    const handleCreateRoom = (e) => {
        e.preventDefault()

        axios.defaults.headers.post['platform'] = `pc`;
        axios.defaults.headers.post['Authorization'] = `Bearer ${GetCookies('access_token')}`;
        axios.post(GlobalLink(`/api/room/create/`), {
            "bet_type": currency,
            "game": gamesId,
            "player_slots": maxLength,
            "room_type": isAccess ? "public" : "private",
            "bet": cost
        }).then(game => {

            console.log("ROOM CREATE", new Date().getSeconds())

            setIsActiveCreate(true)
            axios.get(GlobalLink(`/api/game/get/${gamesId}/`)).then(res => {
                setRooms(game.data.room)
                navigate('/rooms/' + game.data.id)
            })
        })

    }


    return (
        <div className="page-game__rooms">
            {
                isActiveCreate ?
                    <>
                        <div className="page-rooms__main--header">
                            <h3 className="page-rooms__main--title">
                                Выберите комнату
                            </h3>
                            <button onClick={handleCreate}
                                    className="page-rooms__main--create-btn btn _large-2 _min-fs hide-on-table">
                                Добавить комнату
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M0 8C0 3.58125 3.58125 0 8 0C12.4187 0 16 3.58125 16 8C16 12.4187 12.4187 16 8 16C3.58125 16 0 12.4187 0 8ZM8 11.5C8.41563 11.5 8.75 11.1656 8.75 10.75V8.75H10.75C11.1656 8.75 11.5 8.41563 11.5 8C11.5 7.58437 11.1656 7.25 10.75 7.25H8.75V5.25C8.75 4.83437 8.41563 4.5 8 4.5C7.58437 4.5 7.25 4.83437 7.25 5.25V7.25H5.25C4.83437 7.25 4.5 7.58437 4.5 8C4.5 8.41563 4.83437 8.75 5.25 8.75H7.25V10.75C7.25 11.1656 7.58437 11.5 8 11.5Z"
                                        fill="#F9F1DF"/>
                                </svg>
                            </button>
                        </div>
                        <ul className="page-rooms__list">

                            {
                                rooms
                                    .sort((a, b) => {
                                        return a.players_count - b.players_count
                                    })
                                    .map(game =>
                                        <RoomItem key={game.id} game={game}/>
                                    )
                            }

                        </ul>
                        <a href="src/components/components_games#"
                           className="page-rooms__more-btn alt-btn _transparent visible-on-table">
                            Показать ещё
                        </a>
                    </>
                    :
                    <form onSubmit={handleCreateRoom} action="src/components/components_games#"
                          className="page-rooms__create">
                        <fieldset className="page-rooms__create--fieldset">
                            <legend className="page-rooms__create--legend">
                                Название комнаты
                            </legend>
                            <label className="page-rooms__label form-label">
                                <input onChange={e => setTitle(e.target.value)} value={title} type="text"
                                       name="sum" required placeholder="Сумма"
                                       className="page-rooms__input form-input _add-bg"/>
                                <span className="page-rooms__input-placeholder form-input-placeholder">
                                        Название
                                    </span>
                            </label>
                        </fieldset>
                        <fieldset className="page-rooms__create--fieldset">
                            <legend className="page-rooms__create--legend">
                                Создание комнаты
                            </legend>
                            <div className="page-rooms__create--row">
                                <div className="page-rooms__create--col">
                                    <div className="page-rooms__select-wrapper">
                                        <select onChange={e => setCurreny(e.target.value)} name="currency"
                                                className="page-rooms__select custom-select">
                                            <option value="chips" data-image="../images/icons/chip.svg">
                                                Фишки
                                            </option>
                                            <option value="money" data-image="../images/icons/dollar-circle.svg">
                                                Деньги
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                <div className="page-rooms__create--col">
                                    <label className="page-rooms__label form-label">
                                        <input onChange={e => setCost(e.target.value)} type="number"
                                               name="sum" required placeholder="Сумма"
                                               className="page-rooms__input form-input _add-bg"/>
                                        <span className="page-rooms__input-placeholder form-input-placeholder">
                                                Сумма
                                            </span>
                                    </label>
                                </div>
                                <div className="page-rooms__create--col">
                                    <div className="page-rooms__select-wrapper">
                                        <select onChange={e => setMaxLength(e.target.value)} name="players-length"
                                                className="page-rooms__select custom-select">
                                            <option value="2">
                                                2 Игрока
                                            </option>
                                            <option value="3">
                                                3 Игрока
                                            </option>
                                            <option value="4">
                                                4 Игрока
                                            </option>
                                            <option value="5">
                                                5 Игроков
                                            </option>
                                            <option value="6">
                                                6 Игроков
                                            </option>
                                        </select>
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
                                    <div className="page-rooms__select-wrapper">
                                        <select onChange={e => setTypeOfGame(e.target.value)} name="mode-game"
                                                className="page-rooms__select custom-select">
                                            <option value="классический">
                                                Классический
                                            </option>
                                            <option value="переводной">
                                                Переводной
                                            </option>
                                            <option value="другой режим">
                                                Другой режим
                                            </option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                        </fieldset>
                        <fieldset className="page-rooms__create--fieldset">
                            <legend className="page-rooms__create--legend">
                                Игроки
                            </legend>
                            <div className="page-rooms__select-wrapper">
                                <select onChange={e => console.log(e.target.value)} name="players" multiple
                                        className="page-rooms__select custom-multiple-select"
                                        data-placeholder="Добавить игрока">
                                    <option value="player-1">
                                        Jane_3245
                                    </option>
                                    <option value="player-2">
                                        Player 2
                                    </option>
                                    <option value="player-3">
                                        Player 3
                                    </option>
                                </select>
                            </div>
                            <div className="page-rooms__create--text">
                                После создания игры пользователям будет отправлено предложение войти в игру
                            </div>
                        </fieldset>
                        <button className="page-rooms__create--submit btn _large" type="submit">
                            Создать и присоедениться
                        </button>
                    </form>
            }
        </div>
    );
};

export default GamesSingleRooms;