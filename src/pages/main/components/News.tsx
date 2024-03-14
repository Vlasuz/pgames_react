import React, {useEffect, useState} from 'react'
import {NavLink} from "react-router-dom";
import preview from './../../../assets/img/main-page/news/game.jpg'
import play from './../../../assets/img/icons/play.svg'
import axios from "axios";
import {getApiLink} from "../../../functions/getApiLink";
import {INews} from "../../../models";

interface INewsProps {

}

export const News: React.FC<INewsProps> = () => {

    const [newsList, setNewsList] = useState<INews[]>([])

    const handleGetNews = () => {
        axios.get(getApiLink("/api/news/list/")).then(({data}) => {
            console.log(data)
            setNewsList(data.news)
        })
    }

    useEffect(handleGetNews, [])

    return (
        <section className="last-news section-padding">
            <div className="last-news__container container">
                <div className="last-news__row">
                    <div className="last-news__header section-header" data-aos="fade-in">
                        <h2 className="last-news__title section-title">
                            Новости комании
                        </h2>
                        <NavLink to={"/news"} className="last-news__more-link more-link hide-on-table">
                            Все новости
                        </NavLink>
                    </div>
                    {newsList.length ? <div className="last-news__list">
                        <article className="last-news__large-article" data-aos="fade-in" data-aos-delay="400">
                            <NavLink to={`/news/${newsList[0]?.slug}`} className="last-news__large-article--body"
                                     title="Название новости или статьи">
                                <div className="last-news__large-article--image">
                                    <picture>
                                        <img src={newsList[0]?.image} alt="" width="400"
                                             loading="lazy" className="last-news__large-article--img"/>
                                    </picture>
                                </div>
                                <h3 className="last-news__large-article--title">
                                    {newsList[0]?.name}
                                </h3>
                                <time className="last-news__large-article--time" dateTime="2022-12-12">
                                    {newsList[0]?.created_at}
                                </time>
                                <div className="last-news__large-article--text">
                                    {newsList[0]?.text}
                                </div>
                            </NavLink>
                        </article>
                        <div className="last-news__article--list">
                            {
                                newsList?.filter((item, index) => index < 2)?.map(item =>
                                    <article key={item?.slug} className="last-news__article" data-aos="fade-up"
                                             data-aos-delay="600"
                                             data-aos-anchor=".last-news__article--list">
                                        <NavLink to={`/news/${item?.slug}`} className="last-news__article--body">
                                            <div className="last-news__article--info">
                                                <h3 className="last-news__article--title">
                                                    {item?.name}
                                                </h3>
                                                <time className="last-news__article--time" dateTime="2022-12-12">
                                                    {item?.created_at}
                                                </time>
                                                <div className="last-news__article--text">
                                                    {item?.text}
                                                </div>
                                            </div>
                                            <div className="last-news__article--image">
                                                <picture>
                                                    <img src={item?.image} loading="lazy" alt=""
                                                         width="250" className="last-news__article--img"/>
                                                </picture>
                                            </div>
                                        </NavLink>
                                    </article>
                                )
                            }
                        </div>
                    </div> : <p>Новостей нет</p>}
                </div>
                <a href="#" className="last-news__game large-game" data-aos="fade-in"
                   data-aos-delay="600">
                    <div className="large-game__preview">
                        <picture>
                            <img src={preview} loading="lazy" alt="" width="300"
                                 className="large-game__preview--img"/>
                        </picture>
                    </div>
                    <img src={play} width="42" height="42" alt="" className="large-game__play-icon"/>
                    <h3 className="large-game__title">
                        Шахматные игры
                    </h3>
                </a>
            </div>
        </section>
    )
}
