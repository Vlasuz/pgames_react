import React, {useEffect, useState} from 'react'
import {GamesStyled} from "./Games.styled";
import {PageTitle} from "../../components/pageTitle/PageTitle";
import decor1 from './../../assets/img/online-games/bg-1.png'
import decor2 from './../../assets/img/online-games/bg-2.png'
import {GamesListGrid} from "../../components/gamesListGrid/GamesListGrid";

interface IGamesProps {

}

export const Games: React.FC<IGamesProps> = () => {

    const [searchValue, setSearchValue] = useState<string>('')

    const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }

    return (
        <GamesStyled className={"main"}>
            <section className="online-games section-page-bg-wrapper page-padding">
                <div className="online-games__bg section-page-bg" data-aos1="fade-in" data-aos-delay="600">
                    <div className="section-page-bg__element">
                        <picture>
                            <img src={decor1} loading="lazy" alt="" width="0" height="0"
                                 className="section-page-bg__img"/>
                        </picture>
                    </div>
                    <div className="section-page-bg__element">
                        <picture>
                            <img src={decor2} loading="lazy" alt="" width="0" height="0"
                                 className="section-page-bg__img"/>
                        </picture>
                    </div>
                </div>
                <div className="online-games__container container">
                    <div className="online-games__header page-header" data-aos1="fade-in" data-aos-delay="200">

                        <PageTitle title={"Онлайн игры"}/>

                        <form onSubmit={handleSubmitForm} className="online-games__search page-header__search">
                            <label className="page-header__search--label">
                                <input onChange={e => setSearchValue(e.target.value)} value={searchValue} type="text"
                                       name="search" placeholder="Поиск" required
                                       className="page-header__search--input"/>
                            </label>
                            <button className="page-header__search--submit" type="submit" title="Поиск">
                                <svg width="13" height="12" viewBox="0 0 13 12" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M12.2258 10.3992L9.42029 7.59374C10.0583 6.64663 10.373 5.46327 10.2045 4.20234C9.91716 2.05757 8.15935 0.312179 6.01247 0.0403747C2.82052 -0.363524 0.136457 2.32054 0.540379 5.51249C0.812254 7.6603 2.55788 9.41952 4.70288 9.70546C5.96382 9.87395 7.14741 9.55931 8.09429 8.92124L10.8998 11.7267C11.2658 12.0928 11.8595 12.0928 12.2256 11.7267C12.5914 11.3601 12.5914 10.7648 12.2258 10.3992ZM2.35388 4.87499C2.35388 3.22077 3.69966 1.87499 5.35388 1.87499C7.0081 1.87499 8.35388 3.22077 8.35388 4.87499C8.35388 6.52921 7.0081 7.87499 5.35388 7.87499C3.69966 7.87499 2.35388 6.52968 2.35388 4.87499Z"
                                        fill="#F9F1DF"/>
                                </svg>
                            </button>
                        </form>
                    </div>

                    <GamesListGrid searchValue={searchValue}/>

                    <a href="#" className="online-games__more-btn alt-btn _transparent visible-on-table">
                        Показать ещё
                    </a>
                </div>
            </section>
        </GamesStyled>
    )
}
