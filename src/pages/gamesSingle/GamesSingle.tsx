import React, {useEffect, useState} from 'react'
import {GamesSingleCreate} from "./components/GamesSingleCreate";
import {GamesSingleRooms} from "./components/GamesSingleRooms";
import axios from "axios";
import {getApiLink} from "../../functions/getApiLink";
import {NavLink, useParams} from "react-router-dom";
import {IGameInfo} from "../../models";
import personIcon from "./../../assets/img/icons/person.svg"
import chipIcon from "./../../assets/img/icons/chip.svg"
import dollarIcon from "./../../assets/img/icons/dollar-circle.svg"
import openIcon from "./../../assets/img/icons/door-open.svg"
import lockIcon from "./../../assets/img/icons/door-lock.svg"
import {GamesSingleStyled} from "./GamesSingle.styled";
import ReactDOM from "react-dom/client";

interface IGameInnerProps {

}

export const GamesSingle: React.FC<IGameInnerProps> = () => {

    const [isCreateGame, setIsCreateGame] = useState(false)
    const [gameInfo, setSameInfo] = useState<IGameInfo>()

    const {gameSlug} = useParams()

    useEffect(() => {
        axios.get<IGameInfo>(getApiLink(`/api/game/get/${gameSlug}/`)).then(({data}) => {
            setSameInfo(data)
            console.log(data)
        })
    }, [])

    const gameCurrencies: { [key: string]: any } = {
        "chips":
            <div className="page-game__param--element">
                <img src={chipIcon} width="15" height="15" alt=""/>
            </div>,
        "money":
            <div className="page-game__param--element">
                <img src={dollarIcon} width="15" height="15" alt=""/>
            </div>
    }

    const gameTypes: { [key: string]: any } = {
        "public":
            <div className="page-game__param--element">
                <span>Открытая игра</span>
                <img src={openIcon} width="17" height="17" alt=""/>
            </div>,
        "private":
            <div className="page-game__param--element">
                <span>Закрытая игра</span>
                <img src={lockIcon} width="17" height="17" alt=""/>
            </div>
    }

    return (
        <GamesSingleStyled className="main">
            <section className="page-game page-padding">
                <div className="page-game__container container">
                    <div className="page-game__header page-header" data-aos="fade-in" data-aos-delay="200">
                        <a href="#" className="page-game__forward-btn page-header__forward-btn" title="Назад">
                            <svg width="5" height="7" viewBox="0 0 5 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M0.25 3.49991C0.25 3.35065 0.304932 3.20132 0.414795 3.08757L3.2273 0.170898C3.44702 -0.0569662 3.80298 -0.0569662 4.02271 0.170898C4.24243 0.398763 4.24243 0.767904 4.02271 0.995768L1.60703 3.49991L4.02227 6.0046C4.24199 6.23246 4.24199 6.6016 4.02227 6.82947C3.80254 7.05733 3.44658 7.05733 3.22686 6.82947L0.414356 3.9128C0.304493 3.79887 0.25 3.64939 0.25 3.49991Z"
                                    fill="#F9F1DF"/>
                            </svg>
                        </a>
                        <h2 className="page-game__section-title section-title page-header__title _decor-none">
                            {gameInfo?.name}
                        </h2>
                        <div className="page-game__bread-crumbs page-header__bread-crumbs">
                            <ul className="page-header__bread-crumbs--list">
                                <li className="page-header__bread-crumbs--item">
                                    <NavLink to={"/"} className="page-header__bread-crumbs--link">
                                        Главная
                                    </NavLink>
                                </li>
                                <li className="page-header__bread-crumbs--item">
                                    <NavLink to={"/games"} className="page-header__bread-crumbs--link">
                                        Все онлайн игры
                                    </NavLink>
                                </li>
                                <li className="page-header__bread-crumbs--item">
                                    <a className="page-header__bread-crumbs--link">
                                        {gameInfo?.name}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="page-game__main" data-aos="fade-in" data-aos-delay="400">
                        <div className="page-game__block">
                            <div className="page-game__image">
                                <div className="page-game__image--body">
                                    <picture>
                                        <img src={getApiLink("/" + gameInfo?.image)} alt="" loading="lazy" width="194"
                                             height="194" className="page-game__image--img"/>
                                    </picture>
                                </div>
                            </div>
                            <div className="page-game__info">
                                <div className="page-game__descr">
                                    <h3 className="page-game__descr--title">
                                        Как играть?
                                    </h3>
                                    <div className="page-game__descr--text">
                                        {gameInfo?.description}
                                    </div>
                                    {/*<button className="page-game__descr--text-more-btn" data-hide-text="больше..."*/}
                                    {/*        data-visible-text="скрыть" type="button">*/}
                                    {/*    больше...*/}
                                    {/*</button>*/}
                                </div>
                                <ul className="page-game__base-info">
                                    <li className="page-game__param">
                                        <h4 className="page-game__param--title">
                                            Максимум игроков
                                        </h4>
                                        <div className="page-game__param--row">
                                            <div className="page-game__param--element">
                                                <span>
                                                    {gameInfo?.max_players}
                                                </span>
                                                <img src={personIcon} width="13" height="13" alt=""/>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="page-game__param">
                                        <h4 className="page-game__param--title">
                                            Валюты игры
                                        </h4>
                                        <div className="page-game__param--row">

                                            {gameInfo?.game_currencies.map(cur => <React.Fragment key={cur}>{gameCurrencies[cur]}</React.Fragment>)}

                                        </div>
                                    </li>
                                    <li className="page-game__param">
                                        <h4 className="page-game__param--title">
                                            Тип комнат
                                        </h4>
                                        <div className="page-game__param--row">

                                            {gameInfo?.room_types.map(type => <React.Fragment key={type}>{gameTypes[type]}</React.Fragment>)}

                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {isCreateGame ? <GamesSingleCreate/> : <GamesSingleRooms setIsCreateGame={setIsCreateGame}/>}
                    </div>
                </div>
            </section>
        </GamesSingleStyled>
    )
}
