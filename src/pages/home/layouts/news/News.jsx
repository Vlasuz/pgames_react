import React from 'react';
import './style.scss';
import MiniVideo from "../../components/MiniVideo";

import videoPoster from './../../../../assets/img/main-page/news/game.webp'
import {NavLink} from "react-router-dom";
import imageForPost from "./../../../../assets/img/main-page/news/image-large.webp"
import NewsItemBig from "../../../../components/NewsItemBig";
import NewsItemSmall from "../../../../components/NewsItemSmall";

const News = () => {

    const news = [
        {
            title: 'asd',
            image: imageForPost,
            link: '#',
            date: '12 / 32 / 1232',
            excerpt: 'Proin orci ex, ornare non auctor sit amet, egestas id neque. Donec non eleifend',
            content: 'Proin orci ex, ornare non auctor sit amet, egestas id neque. Donec non eleifendProin orci ex, ornare non auctor sit amet, egestas id neque. Donec non eleifendProin orci ex, ornare non auctor sit amet, egestas id neque. Donec non eleifend'
        },
        {
            title: 'asd',
            image: imageForPost,
            link: '#',
            date: '12 / 32 / 1232',
            excerpt: 'Proin orci ex, ornare non auctor sit amet, egestas id neque. Donec non eleifend',
            content: 'Proin orci ex, ornare non auctor sit amet, egestas id neque. Donec non eleifendProin orci ex, ornare non auctor sit amet, egestas id neque. Donec non eleifendProin orci ex, ornare non auctor sit amet, egestas id neque. Donec non eleifend'
        },
        {
            title: 'asd',
            image: imageForPost,
            link: '#',
            date: '12 / 32 / 1232',
            excerpt: 'Proin orci ex, ornare non auctor sit amet, egestas id neque. Donec non eleifend',
            content: 'Proin orci ex, ornare non auctor sit amet, egestas id neque. Donec non eleifendProin orci ex, ornare non auctor sit amet, egestas id neque. Donec non eleifendProin orci ex, ornare non auctor sit amet, egestas id neque. Donec non eleifend'
        },
        {
            title: 'asd',
            image: imageForPost,
            link: '#',
            date: '12 / 32 / 1232',
            excerpt: 'Proin orci ex, ornare non auctor sit amet, egestas id neque. Donec non eleifend',
            content: 'Proin orci ex, ornare non auctor sit amet, egestas id neque. Donec non eleifendProin orci ex, ornare non auctor sit amet, egestas id neque. Donec non eleifendProin orci ex, ornare non auctor sit amet, egestas id neque. Donec non eleifend'
        },
        {
            title: 'asd',
            image: imageForPost,
            link: '#',
            date: '12 / 32 / 1232',
            excerpt: 'Proin orci ex, ornare non auctor sit amet, egestas id neque. Donec non eleifend',
            content: 'Proin orci ex, ornare non auctor sit amet, egestas id neque. Donec non eleifendProin orci ex, ornare non auctor sit amet, egestas id neque. Donec non eleifendProin orci ex, ornare non auctor sit amet, egestas id neque. Donec non eleifend'
        },
        {
            title: 'asd',
            image: imageForPost,
            link: '#',
            date: '12 / 32 / 1232',
            excerpt: 'Proin orci ex, ornare non auctor sit amet, egestas id neque. Donec non eleifend',
            content: 'Proin orci ex, ornare non auctor sit amet, egestas id neque. Donec non eleifendProin orci ex, ornare non auctor sit amet, egestas id neque. Donec non eleifendProin orci ex, ornare non auctor sit amet, egestas id neque. Donec non eleifend'
        },
    ]

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
                    <div className="last-news__list">
                        <NewsItemBig newsData={news[0]} />
                        <div className="last-news__article--list">

                            {
                                news.map((news, index) => {
                                    if(index >= 1 && index <= 3) {
                                        return (
                                            <NewsItemSmall key={index} newsData={news} />
                                        )
                                    }
                                })
                            }

                        </div>
                    </div>
                </div>
                <MiniVideo title={"Шахматные игры"} image={videoPoster}/>
            </div>
        </section>
    );
};

export default News;