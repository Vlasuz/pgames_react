import React, {useEffect, useState} from 'react'
import axios from "axios";
import {getApiLink} from "../../../functions/getApiLink";
import {useNavigate, useParams} from "react-router-dom";

interface IGamesSingleCreateProps {

}

export const GamesSingleCreate: React.FC<IGamesSingleCreateProps> = () => {

    const [currency, setCurrency] = useState<string>('chips')
    const [playerSlots, setPlayerSlots] = useState<string>('6')
    const [roomType, setRoomType] = useState<string>('public')
    const [bet, setBet] = useState<string>('0')

    const {gameSlug} = useParams()
    const navigate = useNavigate()

    const handleCreateRoom = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const axiosBody = {
            "bet_type": currency,
            "game": gameSlug,
            "player_slots": +playerSlots,
            "room_type": roomType,
            "bet": +bet
        }

        axios.post(getApiLink("/api/room/create/"), axiosBody).then(({data}) => {
            console.log(data)
            navigate(`/${gameSlug}/${data.id}`)
        }).catch(er => console.log(er))
    }

    return (
        <div className="page-game__rooms-create">
            <form onSubmit={handleCreateRoom} action="#" className="page-rooms__create">
                <fieldset className="page-rooms__create--fieldset">
                    <legend className="page-rooms__create--legend">
                        Создание комнаты
                    </legend>
                    <div className="page-rooms__create--row">
                        <div className="page-rooms__create--col">
                            <div className="page-rooms__select-wrapper">
                                <select onChange={e => setCurrency(e.target.value)} name="currency" className="page-rooms__select custom-select">
                                    <option value="chips" data-image="img/icons/chip.svg">
                                        Фишки
                                    </option>
                                    <option value="money" data-image="img/icons/dollar-circle.svg">
                                        Деньги
                                    </option>
                                </select>
                            </div>
                        </div>
                        <div className="page-rooms__create--col">
                            <label className="page-rooms__label form-label">
                                <input onChange={e => setBet(e.target.value)} type="number" name="sum" required placeholder="Сумма"
                                       className="page-rooms__input form-input _add-bg"/>
                                <span className="page-rooms__input-placeholder form-input-placeholder">
                                    Сумма
                                </span>
                            </label>
                        </div>
                        <div className="page-rooms__create--col">
                            <div className="page-rooms__select-wrapper">
                                <select onChange={e => setPlayerSlots(e.target.value)} name="players-length" className="page-rooms__select custom-select">
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
                                <select name="status-game" onChange={e => setRoomType(e.target.value)} className="page-rooms__select custom-select">
                                    <option value="public">
                                        Открытая игра
                                    </option>
                                    <option value="private">
                                        Закрытая игра
                                    </option>
                                </select>
                            </div>
                        </div>
                        <div className="page-rooms__create--col">
                            <div className="page-rooms__select-wrapper">
                                <select name="mode-game" className="page-rooms__select custom-select">
                                    <option value="type-1">
                                        Переводной
                                    </option>
                                    <option value="type-2">
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
                        <select name="players" multiple className="page-rooms__select custom-multiple-select"
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
                <button className="page-rooms__create--submit btn _large" type={"submit"}>
                    Создать и присоедениться
                </button>
            </form>
        </div>
    )
}
