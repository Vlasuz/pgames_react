import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";

const NewsPopular = () => {

    const newsList = useSelector(state => {
        const {newsListReducer} = state
        return newsListReducer.news
    })

    return (
        <div className="news__last" data-aos="fade-in" data-aos-delay="400">
            <div className="last-news__row">
                <div className="last-news__list">
                    {newsList.filter(item => item.isPopular).map((news, newsNum) => newsNum < 1 ?
                        <article key={newsNum} className="last-news__large-article" data-aos="fade-in" data-aos-delay="400">
                            <NavLink to={newsList[0].id} className="last-news__large-article--body"
                                     title="Название новости или статьи">
                                <div className="last-news__large-article--image">
                                    <picture>
                                        <source srcSet="images/main-page/news/image-large.webp"
                                                type="image/webp"/>
                                        <img src="../images/main-page/news/image-large.jpg" alt="" width="400"
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
                        : ""
                    )
                    }
                    <div className="last-news__article--list">

                        {
                            newsList.filter(item => item.isPopular).map((news, newsNum) => newsNum < 3 ?
                                <article key={news.id} className="last-news__article" data-aos="fade-up"
                                         data-aos-delay="600" data-aos-anchor=".last-news__article--list">
                                    <NavLink to={news.id} className="last-news__article--body">
                                        <div className="last-news__article--info">
                                            <h3 className="last-news__article--title">
                                                {news.title}
                                            </h3>
                                            <time className="last-news__article--time"
                                                  dateTime="2022-12-12">
                                                {/*12 / 12 / 2022*/}
                                                {news.date[0]}
                                            </time>
                                            <div className="last-news__article--text">
                                                {news.text}
                                            </div>
                                        </div>
                                        <div className="last-news__article--image">
                                            <picture>
                                                <img src={news.image} loading="lazy" alt=""
                                                     width="250" className="last-news__article--img"/>
                                            </picture>
                                        </div>
                                    </NavLink>
                                </article> : ""
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsPopular;