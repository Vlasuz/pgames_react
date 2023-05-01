import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import uniqid from "uniqid";
import {addBalance, addRoomAction} from "../../redux/actions";
import ActiveNotification from "../../hooks/ActiveNotification";
import {useNavigate} from "react-router-dom";
import {accountBalanceReducer} from "../../redux/reducers/accountBalanceReducer";
import OpenPopup from "../../hooks/OpenPopup";

const RoomCreateForm = () => {
    const navigate = useNavigate()

    const balance = useSelector(state => state.accountBalanceReducer.balance)
    const games = useSelector(state => state.gamesListReducer.games)
    const auth = useSelector(state => state.logoutReducer.auth)

    const [gameIs, setGameIs] = useState(games[0].id)
    const [currency, setCurrency] = useState('chips')
    const [maxLength, setMaxLength] = useState(2)
    const [isAccess, setIsAccess] = useState(true)
    const [typeOfGame, setTypeOfGame] = useState('Классический')
    const [gamers, setGamers] = useState([])
    const [cost, setCost] = useState(0)
    const [title, setTitle] = useState('')
    const [icon, setIcon] = useState(games[0].icon)
    const [isValidate, setIsValidate] = useState(false)

    const handleChangeGame = (e) => {
        setGameIs(e.target.value)
        setIcon(games.filter(item => item.id === e.target.value)[0].icon)
    }

    const dispatch = useDispatch();

    const handleCreateRoom = (e) => {
        e.preventDefault()
        const id = uniqid()

        setIsValidate(true)

        let dateNow = new Date()
        let date = [`${dateNow.getDate()}.${dateNow.getMonth()}.${dateNow.getFullYear()}`, `${dateNow.getHours()}:${dateNow.getMinutes()}`]

        let people = {
            nowLength: 0,
            maxLength,
        }

        let data = (
            {id, gameIs, icon, title, currency, cost, date, people, isAccess, typeOfGame, gamers}
        )

        if(auth){

            if( title && cost > 0 ){
                console.log(title)
                if(currency === "money") {
                    if(+balance.money >= +cost) {
                        dispatch(addBalance({
                            money: balance.money - cost,
                            chips: balance.chips
                        }))
                        navigate('/rooms/' + id)
                    } else {
                        ActiveNotification('#notification_no-enough-balance')
                    }
                }
                if(currency === "chips") {
                    if(+balance.chips >= +cost) {
                        dispatch(addBalance({
                            money: balance.money,
                            chips: balance.chips - cost
                        }))
                        navigate('/rooms/' + id)
                    } else {
                        ActiveNotification('#notification_no-enough-balance')
                    }
                }
            } else {
                console.log('error')
            }

        } else {
            ActiveNotification('#notification_not-auth')
        }

        dispatch(addRoomAction(data))
    }

    return (
        <form onSubmit={handleCreateRoom} action="#" className="page-rooms__create">
            <fieldset className="page-rooms__create--fieldset">
                <legend className="page-rooms__create--legend">
                    Название комнаты
                </legend>
                <label className="page-rooms__label form-label">
                    <input onChange={e => setTitle(e.target.value)} value={title} type="text"
                           name="sum" placeholder="Сумма"
                           className="page-rooms__input form-input _add-bg"/>
                    <span className="page-rooms__input-placeholder form-input-placeholder">Название</span>
                    {title || !isValidate ? "" : <span className="span-error">Заполните пожалуйста поле</span>}
                </label>
            </fieldset>
            <fieldset className="page-rooms__create--fieldset">
                <legend className="page-rooms__create--legend">
                    Игра
                </legend>

                <select onChange={handleChangeGame} name="game"
                        className="page-rooms__select custom-select">

                    {
                        games.map(game =>
                            <option key={game.id} value={game.id} data-image={game.icon}>
                                {game.title}
                            </option>
                        )
                    }

                </select>
            </fieldset>
            <fieldset className="page-rooms__create--fieldset">
                <legend className="page-rooms__create--legend">
                    Создание комнаты
                </legend>
                <div className="page-rooms__create--row">
                    <div className="page-rooms__create--col">
                        <div className="page-rooms__select-wrapper">
                            <select onChange={e => setCurrency(e.target.value)} name="currency"
                                    className="page-rooms__select custom-select">
                                <option value="chips" data-image="images/icons/chip.svg">
                                    Фишки
                                </option>
                                <option value="money" data-image="images/icons/dollar-circle.svg">
                                    Деньги
                                </option>
                            </select>
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
    );
};

export default RoomCreateForm;