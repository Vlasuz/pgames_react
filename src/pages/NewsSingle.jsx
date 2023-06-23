import React, {useEffect} from 'react';
import {NavLink, useParams} from "react-router-dom";
import {useSelector} from "react-redux";

const NewsSingle = () => {
    const {newsId} = useParams()

    const newsList = useSelector(state => state.newsListReducer.news)

    const thisNews = newsList.filter(item => item.id === newsId)[0]

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [newsId])
    return (
        <main className="main">
            <section className="news-page page-padding" data-aos="fade-in" data-aos-delay="600">
                <div className="news-page__container container">
                    <div className="news-page__header page-header" data-aos="fade-in" data-aos-delay="200">
                        <NavLink to={'/news'} className="news-page__forward-btn page-header__forward-btn" title="Назад">
                            <svg width="5" height="7" viewBox="0 0 5 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M0.25 3.49991C0.25 3.35065 0.304932 3.20132 0.414795 3.08757L3.2273 0.170898C3.44702 -0.0569662 3.80298 -0.0569662 4.02271 0.170898C4.24243 0.398763 4.24243 0.767904 4.02271 0.995768L1.60703 3.49991L4.02227 6.0046C4.24199 6.23246 4.24199 6.6016 4.02227 6.82947C3.80254 7.05733 3.44658 7.05733 3.22686 6.82947L0.414356 3.9128C0.304493 3.79887 0.25 3.64939 0.25 3.49991Z"
                                    fill="#F9F1DF"/>
                            </svg>
                        </NavLink>
                        <h2 className="news-page__section-title section-title page-header__title _decor-none">
                            {thisNews.title}
                        </h2>
                        <div className="news-page__bread-crumbs page-header__bread-crumbs">
                            <ul className="page-header__bread-crumbs--list">
                                <li className="page-header__bread-crumbs--item">
                                    <NavLink to={'/'} className="page-header__bread-crumbs--link">
                                        Главная
                                    </NavLink>
                                </li>
                                <li className="page-header__bread-crumbs--item">
                                    <NavLink to={'/news'} className="page-header__bread-crumbs--link">
                                        Новости
                                    </NavLink>
                                </li>
                                <li className="page-header__bread-crumbs--item">
                                    <a className="page-header__bread-crumbs--link">
                                        {thisNews.title}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="news-page__main">
                        <div className="news-page__main--block news-page__block">
                            <h3 className="news-page__title">
                                {thisNews.title}
                            </h3>
                            <time className="news-page__time" dateTime="2022-12-12">
                                {/*12 / 12 / 2022*/}
                                {thisNews.date[0]}
                            </time>
                            <div className="news-page__image">
                                <div className="news-page__image--body">
                                    <picture>
                                        <img src={thisNews.image} alt="" width="300"
                                             className="news-page__image--img"/>
                                    </picture>
                                </div>
                            </div>
                            <div className="news-page__text">
                                <p>
                                    {thisNews.text}
                                </p>
                            </div>
                        </div>
                        <div className="news-page__main--aside news-page__aside">
                            <div className="news-page__aside--body">
                                <ul className="news-page__aside--list">

                                    {
                                        newsList.map((news, newsNum) => newsNum < 2 ?
                                            <li key={news.id} className="news-page__aside--item">
                                                <NavLink to={"/news/" + (news.id)} className="news-list__item--body">
                                                    <div className="news-list__item--image">
                                                        <div className="news-list__item--image-body">
                                                            <picture>
                                                                <img src={news.image} loading="lazy" alt=""
                                                                     width="311"
                                                                     height="150" className="news-list__item--img"/>
                                                            </picture>
                                                        </div>
                                                    </div>
                                                    <h3 className="news-list__item--title"
                                                        title="Название новости или статьи">
                                                        {news.title}
                                                    </h3>
                                                    <time className="news-list__item--time" dateTime="2022-12-12">
                                                        {/*12 / 12 / 2022*/}
                                                        {news.date[0]}
                                                    </time>
                                                    <div className="news-list__item--text">
                                                        {news.text}
                                                    </div>
                                                    <div className="news-list__item--footer">
                                                <span className="news-list__item--link">
                                                    Смотреть статью
                                                </span>
                                                    </div>
                                                </NavLink>
                                            </li> : ""
                                        )
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                    <ul className="news-list__row">

                        {
                            newsList.map((news, newsNum) => newsNum < 3 ?
                                <li key={news.id} className="news-list__item" data-aos="fade-up" data-aos-delay="300">
                                    <NavLink to={'/news/' + (news.id)} className="news-list__item--body">
                                        <div className="news-list__item--image">
                                            <div className="news-list__item--image-body">
                                                <picture>
                                                    <img src={news.image} loading="lazy" alt="" width="311"
                                                         height="150"
                                                         className="news-list__item--img"/>
                                                </picture>
                                            </div>
                                        </div>
                                        <h3 className="news-list__item--title" title="Название новости или статьи">
                                            {news.title}
                                        </h3>
                                        <time className="news-list__item--time" dateTime="2022-12-12">
                                            {/*12 / 12 / 2022*/}
                                            {news.date[0]}
                                        </time>
                                        <div className="news-list__item--text">
                                            {news.text}
                                        </div>
                                        <div className="news-list__item--footer">
                                            <span className="news-list__item--link">Смотреть статью</span>
                                        </div>
                                    </NavLink>
                                </li> : ""
                            )
                        }

                    </ul>
                </div>
            </section>
        </main>);
};

export default NewsSingle;