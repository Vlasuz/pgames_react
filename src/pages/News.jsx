import React, {useEffect, useState} from 'react';
import {Link, NavLink} from "react-router-dom";
import Pagination from "./../components/Pagination";
import {useSelector} from "react-redux";
import PaginationHook from "../hooks/PaginationHook";
import NewsTop from "../components/components_news/NewsTop";
import NewsPopular from "../components/components_news/NewsPopular";

const News = () => {
    const newsList = useSelector(state => {
        const {newsListReducer} = state
        return newsListReducer.news
    })

    const [searchInput, setSearchInput] = useState('')
    const {currentItems, pageCount, handlePageClick, selectedPage} = PaginationHook(newsList.filter(item => item.title.includes(searchInput)), 3, searchInput)

    return (
        <main className="main">
            <section className="news section-page-bg-wrapper page-padding-top">
                <div className="news__bg section-page-bg" data-aos="fade-in" data-aos-delay="600">
                    <div className="section-page-bg__element">
                        <picture>
                            <source srcSet="images/news/bg-1.webp" type="image/webp"/>
                            <img src="images/news/bg-1.png" loading="lazy" alt="" width="0" height="0"
                                 className="section-page-bg__img"/>
                        </picture>
                    </div>
                    <div className="section-page-bg__element">
                        <picture>
                            <source srcSet="images/news/bg-2.webp" type="image/webp"/>
                            <img src="images/news/bg-2.png" loading="lazy" alt="" width="0" height="0"
                                 className="section-page-bg__img"/>
                        </picture>
                    </div>
                </div>
                <div className="news__container container">
                    <NewsTop setSearchInput={setSearchInput} searchInput={searchInput} selectedPage={selectedPage} />
                    {searchInput || selectedPage >= 1 ? "" : <NewsPopular/>}
                </div>
            </section>
            <section className="news-list" data-aos="fade-in" data-aos-delay="600">
                <div className="news-list__container container">
                    {
                        searchInput || selectedPage >= 1 ? "" :
                            <h2 className="news-list__title section-title">
                                Новости
                            </h2>
                    }
                    <ul className="news-list__row">

                        {
                            currentItems && currentItems.filter(item => item.title.toLowerCase().includes(searchInput.toLowerCase()))?.map(news =>
                                <li key={news.id} className="news-list__item" data-aos="fade-up" data-aos-delay="300">
                                    <NavLink to={news.id} className="news-list__item--body">
                                        <div className="news-list__item--image">
                                            <div className="news-list__item--image-body">
                                                <picture>
                                                    <img src={news.image} loading="lazy" alt="" width="311" height="150"
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
                                </li>
                            )
                        }

                    </ul>

                    {
                        pageCount > 1 ? <Pagination handlePageClick={handlePageClick} pageCount={pageCount}/> : ""
                    }

                </div>
            </section>
        </main>
    );
};

export default News;