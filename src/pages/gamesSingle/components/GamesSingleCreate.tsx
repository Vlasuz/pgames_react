import React, {useEffect, useState} from 'react'
import axios from "axios";
import {getApiLink} from "../../../functions/getApiLink";
import {useNavigate, useParams} from "react-router-dom";
import {Select} from "../../../components/select/Select";
import {ISelectOption} from "../../../models";

interface IGamesSingleCreateProps {

}

export const GamesSingleCreate: React.FC<IGamesSingleCreateProps> = () => {

    const roomTypeSelect: ISelectOption[] = [
        {
            title: "Фишки",
            slug: "chips"
        },
        {
            title: "Деньги",
            slug: "money"
        }
    ]
    const roomPlayersSelect: ISelectOption[] = [
        {
            title: "2 Игрока",
            slug: "2"
        },
        {
            title: "3 Игрока",
            slug: "3"
        },
        {
            title: "4 Игрока",
            slug: "4"
        },
        {
            title: "5 Игроков",
            slug: "5"
        },
        {
            title: "6 Игроков",
            slug: "6",
            isActive: true
        },
    ]
    const roomAccessSelect: ISelectOption[] = [
        {
            title: "Открытая",
            slug: "public"
        },
        {
            title: "Закрытая",
            slug: "private"
        }
    ]

    const [currency, setCurrency] = useState<string>(roomTypeSelect.filter(item => item.isActive)[0]?.slug ?? roomTypeSelect[0]?.slug)
    const [playerSlots, setPlayerSlots] = useState<string>(roomPlayersSelect.filter(item => item.isActive)[0]?.slug ?? roomPlayersSelect[0]?.slug)
    const [roomType, setRoomType] = useState<string>(roomAccessSelect.filter(item => item.isActive)[0]?.slug ?? roomAccessSelect[0]?.slug)
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
                    <div className="page-rooms__create--row" style={{gridTemplateColumns: "20% 125px auto auto"}}>
                        <div className="page-rooms__create--col">
                            <div className="page-rooms__select-wrapper">

                                <Select list={roomTypeSelect} setValue={setCurrency}/>

                            </div>
                        </div>
                        <div className="page-rooms__create--col">
                            <label className="page-rooms__label form-label">
                                <input onChange={e => setBet(e.target.value)} type="number" name="sum" required
                                       placeholder="Сумма"
                                       className="page-rooms__input form-input _add-bg"/>
                                <span className="page-rooms__input-placeholder form-input-placeholder">
                                    Сумма
                                </span>
                            </label>
                        </div>
                        <div className="page-rooms__create--col">
                            <div className="page-rooms__select-wrapper">
                                <Select list={roomPlayersSelect} setValue={setPlayerSlots}/>
                            </div>
                        </div>
                        <div className="page-rooms__create--col">
                            <div className="page-rooms__select-wrapper">
                                <Select list={roomAccessSelect} setValue={setRoomType}/>
                            </div>
                        </div>
                    </div>
                </fieldset>
                <button className="page-rooms__create--submit btn _large" type={"submit"}>
                    Создать и присоедениться
                </button>
            </form>
        </div>
    )
}
