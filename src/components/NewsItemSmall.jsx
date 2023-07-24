import React from 'react';
import {NavLink} from "react-router-dom";

const NewsItemSmall = ({newsData}) => {
    return (
        <article className="last-news__article" data-aos="fade-up" data-aos-delay="800" data-aos-anchor=".last-news__article--list">
            <NavLink to={newsData.link} className="last-news__article--body">
                <div className="last-news__article--info">
                    <h3 className="last-news__article--title">
                        {newsData.title}
                    </h3>
                    <time className="last-news__article--time" dateTime={newsData.title}>
                        {newsData.date}
                    </time>
                    <div className="last-news__article--text">
                        {newsData.excerpt}
                    </div>
                </div>
                <div className="last-news__article--image">
                    <picture>
                        <source srcSet={newsData.image} type="image/webp"/>
                        <img src={newsData.image} loading="lazy" alt=""
                             width="250"
                             className="last-news__article--img"/>
                    </picture>
                </div>
            </NavLink>
        </article>
    );
};

export default NewsItemSmall;