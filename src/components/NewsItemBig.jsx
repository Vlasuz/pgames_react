import React from 'react';
import {NavLink} from "react-router-dom";

const NewsItemBig = ({newsData}) => {
    return (
        <article className="last-news__large-article" data-aos="fade-in" data-aos-delay="400">
            <NavLink to={newsData.link} className="last-news__large-article--body"
                     title={newsData.title}>
                <div className="last-news__large-article--image">
                    <picture>
                        <source srcSet={newsData.image} type="image/webp"/>
                        <img src={newsData.image} alt="" width="400"
                             loading="lazy"
                             className="last-news__large-article--img"/>
                    </picture>
                </div>
                <h3 className="last-news__large-article--title">
                    {newsData.title}
                </h3>
                <time className="last-news__large-article--time" dateTime={newsData.date}>
                    {newsData.date}
                </time>
                <div className="last-news__large-article--text">
                    {newsData.excerpt}
                </div>
            </NavLink>
        </article>
    );
};

export default NewsItemBig;