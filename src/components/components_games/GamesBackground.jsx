import React from 'react';

const GamesBackground = () => {
    return (
        <div className="online-games__bg section-page-bg" data-aos="fade-in" data-aos-delay="600">
            <div className="section-page-bg__element">
                <picture>
                    <source srcSet="images/online-games/bg-1.webp" type="image/webp"/>
                    <img src="images/online-games/bg-1.png" loading="lazy" alt="" width="0" height="0"
                         className="section-page-bg__img"/>
                </picture>
            </div>
            <div className="section-page-bg__element">
                <picture>
                    <source srcSet="images/online-games/bg-2.webp" type="image/webp"/>
                    <img src="images/online-games/bg-2.png" loading="lazy" alt="" width="0" height="0"
                         className="section-page-bg__img"/>
                </picture>
            </div>
        </div>
    );
};

export default GamesBackground;