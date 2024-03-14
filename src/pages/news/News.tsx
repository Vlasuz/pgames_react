import React, {useEffect} from 'react'
import {PageTitle} from "../../components/pageTitle/PageTitle";
import {NavLink} from "react-router-dom";
import decor1 from './../../assets/img/news/bg-1.png'
import decor2 from './../../assets/img/news/bg-2.png'

interface INewsProps {

}

export const News: React.FC<INewsProps> = () => {

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
                                    <NavLink to={"/news/:newsId"} className="last-news__large-article--body"
                                       title="Название новости или статьи">
                                        <div className="last-news__large-article--image">
                                            <picture>
                                                <img src="img/main-page/news/image-large.jpg" alt="" width="400"
                                                     loading="lazy" className="last-news__large-article--img"/>
                                            </picture>
                                        </div>
                                        <h3 className="last-news__large-article--title">
                                            Название новости или статьи
                                        </h3>
                                        <time className="last-news__large-article--time" dateTime="2022-12-12">
                                            12 / 12 / 2022
                                        </time>
                                        <div className="last-news__large-article--text">
                                            Proin orci ex, ornare non auctor sit amet, egestas id neque. Donec non
                                            eleifend
                                        </div>
                                    </NavLink>
                                </article>
                                <div className="last-news__article--list">
                                    <article className="last-news__article" data-aos="fade-up" data-aos-delay="600"
                                             data-aos-anchor=".last-news__article--list">
                                        <NavLink to={"/news/:newsId"} className="last-news__article--body">
                                            <div className="last-news__article--info">
                                                <h3 className="last-news__article--title">
                                                    Название новости или статьи
                                                </h3>
                                                <time className="last-news__article--time" dateTime="2022-12-12">
                                                    12 / 12 / 2022
                                                </time>
                                                <div className="last-news__article--text">
                                                    Proin orci ex, ornare non auctor sit amet, egestas id neque. Donec
                                                    non eleifend
                                                </div>
                                            </div>
                                            <div className="last-news__article--image">
                                                <picture>
                                                    <img src="img/main-page/news/image-1.jpg" loading="lazy" alt=""
                                                         width="250" className="last-news__article--img"/>
                                                </picture>
                                            </div>
                                        </NavLink>
                                    </article>
                                    <article className="last-news__article" data-aos="fade-up" data-aos-delay="700"
                                             data-aos-anchor=".last-news__article--list">
                                        <NavLink to={"/news/:newsId"} className="last-news__article--body">
                                            <div className="last-news__article--info">
                                                <h3 className="news__article--title">
                                                    Название новости или статьи
                                                </h3>
                                                <time className="last-news__article--time" dateTime="2022-12-12">
                                                    12 / 12 / 2022
                                                </time>
                                                <div className="last-news__article--text">
                                                    Proin orci ex, ornare non auctor sit amet, egestas id neque. Donec
                                                    non eleifend
                                                </div>
                                            </div>
                                            <div className="last-news__article--image">
                                                <picture>
                                                    <img src="img/main-page/news/image-2.jpg" loading="lazy" alt=""
                                                         width="250" className="last-news__article--img"/>
                                                </picture>
                                            </div>
                                        </NavLink>
                                    </article>
                                    <article className="last-news__article" data-aos="fade-up" data-aos-delay="800"
                                             data-aos-anchor=".last-news__article--list">
                                        <NavLink to={"/news/:newsId"} className="last-news__article--body">
                                            <div className="last-news__article--info">
                                                <h3 className="last-news__article--title">
                                                    Название новости или статьи
                                                </h3>
                                                <time className="last-news__article--time" dateTime="2022-12-12">
                                                    12 / 12 / 2022
                                                </time>
                                                <div className="last-news__article--text">
                                                    Proin orci ex, ornare non auctor sit amet, egestas id neque. Donec
                                                    non eleifend
                                                </div>
                                            </div>
                                            <div className="last-news__article--image">
                                                <picture>
                                                    <img src="img/main-page/news/image-3.jpg" loading="lazy" alt=""
                                                         width="250" className="last-news__article--img"/>
                                                </picture>
                                            </div>
                                        </NavLink>
                                    </article>
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
                        <li className="news-list__item" data-aos="fade-up" data-aos-delay="300">
                            <NavLink to={"/news/:newsId"} className="news-list__item--body">
                                <div className="news-list__item--image">
                                    <div className="news-list__item--image-body">
                                        <picture>
                                            <img src="img/news/image-1.png" loading="lazy" alt="" width="311"
                                                 height="150" className="news-list__item--img"/>
                                        </picture>
                                    </div>
                                </div>
                                <h3 className="news-list__item--title" title="Название новости или статьи">
                                    Название новости или статьи
                                </h3>
                                <time className="news-list__item--time" dateTime="2022-12-12">
                                    12 / 12 / 2022
                                </time>
                                <div className="news-list__item--text">
                                    Proin orci ex, ornare non auctor sit amet, egestas id neque. Donec non elei...
                                </div>
                                <div className="news-list__item--footer">
            <span className="news-list__item--link">
                Смотреть статью
            </span>
                                </div>
                            </NavLink>
                        </li>
                        <li className="news-list__item" data-aos="fade-up" data-aos-delay="300">
                            <NavLink to={"/news/:newsId"} className="news-list__item--body">
                                <div className="news-list__item--image">
                                    <div className="news-list__item--image-body">
                                        <picture>
                                            <img src="img/news/image-2.png" loading="lazy" alt="" width="311"
                                                 height="150" className="news-list__item--img"/>
                                        </picture>
                                    </div>
                                </div>
                                <h3 className="news-list__item--title"
                                    title="Название новости или статьи если очень длинное">
                                    Название новости или статьи если очень длинное
                                </h3>
                                <time className="news-list__item--time" dateTime="2022-12-12">
                                    12 / 12 / 2022
                                </time>
                                <div className="news-list__item--text">
                                    Proin orci ex, ornare non auctor sit amet, egestas id neque. Donec non elei...
                                </div>
                                <div className="news-list__item--footer">
            <span className="news-list__item--link">
                Смотреть статью
            </span>
                                </div>
                            </NavLink>
                        </li>
                        <li className="news-list__item" data-aos="fade-up" data-aos-delay="300">
                            <NavLink to={"/news/:newsId"} className="news-list__item--body">
                                <div className="news-list__item--image">
                                    <div className="news-list__item--image-body">
                                        <picture>
                                            <img src="img/news/image-3.png" loading="lazy" alt="" width="311"
                                                 height="150" className="news-list__item--img"/>
                                        </picture>
                                    </div>
                                </div>
                                <h3 className="news-list__item--title"
                                    title="Название новости или статьи если очень длинное">
                                    Название новости или статьи если очень длинное
                                </h3>
                                <time className="news-list__item--time" dateTime="2022-12-12">
                                    12 / 12 / 2022
                                </time>
                                <div className="news-list__item--text">
                                    Proin orci ex, ornare non auctor sit amet, egestas id neque. Donec non elei...
                                </div>
                                <div className="news-list__item--footer">
            <span className="news-list__item--link">
                Смотреть статью
            </span>
                                </div>
                            </NavLink>
                        </li>
                        <li className="news-list__item" data-aos="fade-up" data-aos-delay="300">
                            <NavLink to={"/news/:newsId"} className="news-list__item--body">
                                <div className="news-list__item--image">
                                    <div className="news-list__item--image-body">
                                        <picture>
                                            <img src="img/news/image-4.png" loading="lazy" alt="" width="311"
                                                 height="150" className="news-list__item--img"/>
                                        </picture>
                                    </div>
                                </div>
                                <h3 className="news-list__item--title" title="Название новости или статьи">
                                    Название новости или статьи
                                </h3>
                                <time className="news-list__item--time" dateTime="2022-12-12">
                                    12 / 12 / 2022
                                </time>
                                <div className="news-list__item--text">
                                    Proin orci ex, ornare non auctor sit amet, egestas id neque. Donec non elei...
                                </div>
                                <div className="news-list__item--footer">
            <span className="news-list__item--link">
                Смотреть статью
            </span>
                                </div>
                            </NavLink>
                        </li>
                        <li className="news-list__item" data-aos="fade-up" data-aos-delay="300">
                            <NavLink to={"/news/:newsId"} className="news-list__item--body">
                                <div className="news-list__item--image">
                                    <div className="news-list__item--image-body">
                                        <picture>
                                            <img src="img/news/image-5.png" loading="lazy" alt="" width="311"
                                                 height="150" className="news-list__item--img"/>
                                        </picture>
                                    </div>
                                </div>
                                <h3 className="news-list__item--title" title="Название новости или статьи">
                                    Название новости или статьи
                                </h3>
                                <time className="news-list__item--time" dateTime="2022-12-12">
                                    12 / 12 / 2022
                                </time>
                                <div className="news-list__item--text">
                                    Proin orci ex, ornare non auctor sit amet, egestas id neque. Donec non elei...
                                </div>
                                <div className="news-list__item--footer">
            <span className="news-list__item--link">
                Смотреть статью
            </span>
                                </div>
                            </NavLink>
                        </li>
                        <li className="news-list__item" data-aos="fade-up" data-aos-delay="300">
                            <NavLink to={"/news/:newsId"} className="news-list__item--body">
                                <div className="news-list__item--image">
                                    <div className="news-list__item--image-body">
                                        <picture>
                                            <img src="img/news/image-6.png" loading="lazy" alt="" width="311"
                                                 height="150" className="news-list__item--img"/>
                                        </picture>
                                    </div>
                                </div>
                                <h3 className="news-list__item--title" title="Название новости или статьи">
                                    Название новости или статьи
                                </h3>
                                <time className="news-list__item--time" dateTime="2022-12-12">
                                    12 / 12 / 2022
                                </time>
                                <div className="news-list__item--text">
                                    Proin orci ex, ornare non auctor sit amet, egestas id neque. Donec non elei...
                                </div>
                                <div className="news-list__item--footer">
            <span className="news-list__item--link">
                Смотреть статью
            </span>
                                </div>
                            </NavLink>
                        </li>
                    </ul>
                    <div className="news-list__pagination" data-aos="fade-in" data-aos-delay="400">
                        <div className="page-pagination">
                            <div className="page-pagination__wrapper">
                                <a href="#" className="page-pagination__btn _prev _disabled">
                                    <svg width="9" height="12" viewBox="0 0 9 12" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M8.16016 1.41L3.58016 6L8.16016 10.59L6.75016 12L0.750156 6L6.75016 0L8.16016 1.41Z"
                                            fill="#474747"/>
                                    </svg>
                                </a>
                                <ul className="page-pagination__list">
                                    <li className="page-pagination__item">
                                        <a href="#" className="page-pagination__link _current">
                                            1
                                        </a>
                                    </li>
                                    <li className="page-pagination__item">
                                        <a href="#" className="page-pagination__link">
                                            2
                                        </a>
                                    </li>
                                    <li className="page-pagination__item">
                                        <a href="#" className="page-pagination__link">
                                            ...
                                        </a>
                                    </li>
                                    <li className="page-pagination__item">
                                        <a href="#" className="page-pagination__link">
                                            9
                                        </a>
                                    </li>
                                    <li className="page-pagination__item">
                                        <a href="#" className="page-pagination__link">
                                            10
                                        </a>
                                    </li>
                                </ul>
                                <a href="#" className="page-pagination__btn _next">
                                    <svg width="9" height="12" viewBox="0 0 9 12" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M0.839844 1.41L5.41984 6L0.839844 10.59L2.24984 12L8.24984 6L2.24984 0L0.839844 1.41Z"
                                            fill="white"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
