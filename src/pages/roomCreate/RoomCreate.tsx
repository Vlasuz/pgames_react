import React, {useEffect, useState} from 'react'
import {Select} from "../../components/select/Select";
import {ISelectOption} from "../../models";
import axios from "axios";
import {getApiLink} from "../../functions/getApiLink";
import {useNavigate} from "react-router-dom";

interface IRoomCreateProps {

}

export const RoomCreate: React.FC<IRoomCreateProps> = () => {

    const gamesList = [
        {
            title: `Дурак`,
            slug: "fool",
        },
        {
            title: `Покер`,
            slug: "poker",
        }
    ]

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
    const [gameSlug, setGameSlug] = useState<string>("")

    const navigate = useNavigate()

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const axiosBody = {
            "bet_type": currency,
            "game": gameSlug,
            "player_slots": +playerSlots,
            "room_type": roomType,
            "bet": +bet
        }

            navigate(`/${gameSlug}/123`)
        axios.post(getApiLink("/api/room/create/"), axiosBody).then(({data}) => {
            console.log(data)
            navigate(`/${gameSlug}/${data.id}`)
        }).catch(er => console.log(er))

    }

    return (
        <main className="main">
            <section className="page-rooms page-padding">
                <div className="page-rooms__container container">
                    <div className="page-rooms__header page-header" data-aos="fade-in" data-aos-delay="200">
                        <a href="#" className="page-rooms__forward-btn page-header__forward-btn" title="Назад">
                            <svg width="5" height="7" viewBox="0 0 5 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M0.25 3.49991C0.25 3.35065 0.304932 3.20132 0.414795 3.08757L3.2273 0.170898C3.44702 -0.0569662 3.80298 -0.0569662 4.02271 0.170898C4.24243 0.398763 4.24243 0.767904 4.02271 0.995768L1.60703 3.49991L4.02227 6.0046C4.24199 6.23246 4.24199 6.6016 4.02227 6.82947C3.80254 7.05733 3.44658 7.05733 3.22686 6.82947L0.414356 3.9128C0.304493 3.79887 0.25 3.64939 0.25 3.49991Z"
                                    fill="#F9F1DF"/>
                            </svg>
                        </a>
                        <h2 className="page-rooms__section-title section-title page-header__title _decor-none">
                            Комнаты
                        </h2>
                        <div className="page-rooms__bread-crumbs page-header__bread-crumbs">
                            <ul className="page-header__bread-crumbs--list">
                                <li className="page-header__bread-crumbs--item">
                                    <a href="index.html" className="page-header__bread-crumbs--link">
                                        Главная
                                    </a>
                                </li>
                                <li className="page-header__bread-crumbs--item">
                                    <a href="rooms.html" className="page-header__bread-crumbs--link">
                                        Комнаты
                                    </a>
                                </li>
                                <li className="page-header__bread-crumbs--item">
                                    <a className="page-header__bread-crumbs--link">
                                        Создание игры
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="page-rooms__main" data-aos="fade-in" data-aos-delay="400">
                        <form onSubmit={handleSubmit} className="page-rooms__create">
                            <fieldset className="page-rooms__create--fieldset">
                                <legend className="page-rooms__create--legend">
                                    Игра
                                </legend>

                                <Select list={gamesList} setValue={setGameSlug}/>

                            </fieldset>
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
                            <button className="page-rooms__create--submit btn _large" type="submit">
                                Создать и присоедениться
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    )
}
