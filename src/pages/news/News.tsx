import React, {useEffect, useState} from 'react'
import {PageTitle} from "../../components/pageTitle/PageTitle";
import {NavLink} from "react-router-dom";
import decor1 from './../../assets/img/news/bg-1.png'
import decor2 from './../../assets/img/news/bg-2.png'
import axios from "axios";
import {getApiLink} from "../../functions/getApiLink";
import {INews} from "../../models";

interface INewsProps {

}

export const News: React.FC<INewsProps> = () => {

    const [newsList, setNewsList] = useState<INews[]>([])

    useEffect(() => {
        axios.get(getApiLink("/api/news/list/")).then(({data}) => {
            console.log(data)
            setNewsList(data.news)
        }).catch(er => console.log(er))
    }, [])

    return (
        <main className="main">
            <section className="news section-page-bg-wrapper page-padding-top">
                <div className="news__bg section-page-bg" data-aos="fade-in" data-aos-delay="600">
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
                <div className="news__container container">

                    <div className="news__header page-header" data-aos="fade-in" data-aos-delay="200">
                        <PageTitle title={"Новости компании"}/>
                    </div>

                    <div className="news__last" data-aos="fade-in" data-aos-delay="400">
                        <div className="last-news__row">
                            <div className="last-news__list">
                                <article className="last-news__large-article" data-aos="fade-in" data-aos-delay="400">
                                    <NavLink to={`/news/${newsList[0]?.slug}`} className="last-news__large-article--body"
                                       title="Название новости или статьи">
                                        <div className="last-news__large-article--image">
                                            <picture>
                                                <img src={getApiLink("/" + newsList[0]?.image)} alt="" width="400"
                                                     loading="lazy" className="last-news__large-article--img"/>
                                            </picture>
                                        </div>
                                        <h3 className="last-news__large-article--title">
                                            {
                                                newsList[0]?.name
                                            }
                                        </h3>
                                        <time className="last-news__large-article--time" dateTime="2022-12-12">
                                            {newsList[0]?.created_at.slice(0, newsList[0]?.created_at.indexOf(", ")).split('.')[1]} / {newsList[0]?.created_at.slice(0, newsList[0]?.created_at.indexOf(", ")).split('.')[0]} / {newsList[0]?.created_at.slice(0, newsList[0]?.created_at.indexOf(", ")).split('.')[2]}
                                        </time>
                                        <div className="last-news__large-article--text">
                                            {
                                                newsList[0]?.text.slice(0, 50) + "..."
                                            }
                                        </div>
                                    </NavLink>
                                </article>
                                <div className="last-news__article--list">

                                    {
                                        newsList.filter((item, index) => index > 0 && index <= 3).map(item =>
                                            <article className="last-news__article" data-aos="fade-up" data-aos-delay="600"
                                                     data-aos-anchor=".last-news__article--list">
                                                <NavLink to={`/news/${item.slug}`} className="last-news__article--body">
                                                    <div className="last-news__article--info">
                                                        <h3 className="last-news__article--title">
                                                            {item.name}
                                                        </h3>
                                                        <time className="last-news__article--time" dateTime="2022-12-12">
                                                            {item?.created_at.slice(0, item?.created_at.indexOf(", ")).split('.')[1]} / {item?.created_at.slice(0, item?.created_at.indexOf(", ")).split('.')[0]} / {item?.created_at.slice(0, item?.created_at.indexOf(", ")).split('.')[2]}
                                                        </time>
                                                        <div className="last-news__article--text">
                                                            {
                                                                item?.text.slice(0, 50) + "..."
                                                            }
                                                        </div>
                                                    </div>
                                                    <div className="last-news__article--image">
                                                        <picture>
                                                            <img src={getApiLink("/" + item?.image)} loading="lazy" alt=""
                                                                 width="250" className="last-news__article--img"/>
                                                        </picture>
                                                    </div>
                                                </NavLink>
                                            </article>
                                        )
                                    }

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="news-list" data-aos="fade-in" data-aos-delay="600">
                <div className="news-list__container container">
                    <h2 className="news-list__title section-title">
                        Остальные новости
                    </h2>
                    <ul className="news-list__row">

                        {
                            newsList.filter((item, index) => index > 3).map(item =>
                                <li className="news-list__item" data-aos="fade-up" data-aos-delay="300">
                                    <NavLink to={`/news/${item.slug}`} className="news-list__item--body">
                                        <div className="news-list__item--image">
                                            <div className="news-list__item--image-body">
                                                <picture>
                                                    <img src={getApiLink("/" + item?.image)} loading="lazy" alt="" width="311"
                                                         height="150" className="news-list__item--img"/>
                                                </picture>
                                            </div>
                                        </div>
                                        <h3 className="news-list__item--title" title="Название новости или статьи">
                                            {item.name}
                                        </h3>
                                        <time className="news-list__item--time" dateTime="2022-12-12">
                                            {item?.created_at.slice(0, item?.created_at.indexOf(", ")).split('.')[1]} / {item?.created_at.slice(0, item?.created_at.indexOf(", ")).split('.')[0]} / {item?.created_at.slice(0, item?.created_at.indexOf(", ")).split('.')[2]}
                                        </time>
                                        <div className="news-list__item--text">
                                            {
                                                item?.text.slice(0, 50) + "..."
                                            }
                                        </div>
                                        <div className="news-list__item--footer">
                                            <span className="news-list__item--link">
                                                Смотреть статью
                                            </span>
                                        </div>
                                    </NavLink>
                                </li>
                            )
                        }


                    </ul>
                    {/*<div className="news-list__pagination" data-aos="fade-in" data-aos-delay="400">*/}
                    {/*    <div className="page-pagination">*/}
                    {/*        <div className="page-pagination__wrapper">*/}
                    {/*            <a href="#" className="page-pagination__btn _prev _disabled">*/}
                    {/*                <svg width="9" height="12" viewBox="0 0 9 12" fill="none"*/}
                    {/*                     xmlns="http://www.w3.org/2000/svg">*/}
                    {/*                    <path*/}
                    {/*                        d="M8.16016 1.41L3.58016 6L8.16016 10.59L6.75016 12L0.750156 6L6.75016 0L8.16016 1.41Z"*/}
                    {/*                        fill="#474747"/>*/}
                    {/*                </svg>*/}
                    {/*            </a>*/}
                    {/*            <ul className="page-pagination__list">*/}
                    {/*                <li className="page-pagination__item">*/}
                    {/*                    <a href="#" className="page-pagination__link _current">*/}
                    {/*                        1*/}
                    {/*                    </a>*/}
                    {/*                </li>*/}
                    {/*                <li className="page-pagination__item">*/}
                    {/*                    <a href="#" className="page-pagination__link">*/}
                    {/*                        2*/}
                    {/*                    </a>*/}
                    {/*                </li>*/}
                    {/*                <li className="page-pagination__item">*/}
                    {/*                    <a href="#" className="page-pagination__link">*/}
                    {/*                        ...*/}
                    {/*                    </a>*/}
                    {/*                </li>*/}
                    {/*                <li className="page-pagination__item">*/}
                    {/*                    <a href="#" className="page-pagination__link">*/}
                    {/*                        9*/}
                    {/*                    </a>*/}
                    {/*                </li>*/}
                    {/*                <li className="page-pagination__item">*/}
                    {/*                    <a href="#" className="page-pagination__link">*/}
                    {/*                        10*/}
                    {/*                    </a>*/}
                    {/*                </li>*/}
                    {/*            </ul>*/}
                    {/*            <a href="#" className="page-pagination__btn _next">*/}
                    {/*                <svg width="9" height="12" viewBox="0 0 9 12" fill="none"*/}
                    {/*                     xmlns="http://www.w3.org/2000/svg">*/}
                    {/*                    <path*/}
                    {/*                        d="M0.839844 1.41L5.41984 6L0.839844 10.59L2.24984 12L8.24984 6L2.24984 0L0.839844 1.41Z"*/}
                    {/*                        fill="white"/>*/}
                    {/*                </svg>*/}
                    {/*            </a>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
            </section>
        </main>
    )
}
