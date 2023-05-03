import React from 'react';

const MainAdvantagesDecorLeft = () => {
    return (
        <div className="advantages__header--decor">
            <div className="advantages__header--decor-body" data-aos="fade-up-left"
                 data-aos-delay="100">
                <div className="advantages__header--decor-item _levitation">
                    <picture className="hide-on-table">
                        <source srcSet="images/main-page/advantages/image-1-1.webp" type="image/webp"/>
                        <img src="images/main-page/advantages/image-1-1.png" alt="" loading="lazy"
                             style={{width: "85px"}} width="200"
                             className="advantages__header--decor-img"/>
                    </picture>
                </div>
                <div className="advantages__header--decor-item _levitation"
                     style={{animationDuration: "5.5s"}}>
                    <picture className="hide-on-table">
                        <source srcSet="images/main-page/advantages/image-1-2.webp" type="image/webp"/>
                        <img src="images/main-page/advantages/image-1-2.png" alt="" loading="lazy"
                             style={{width: "205px"}} width="200"
                             className="advantages__header--decor-img"/>
                    </picture>
                </div>
                <div className="advantages__header--decor-item _levitation"
                     style={{animationDuration: "5.5s"}}>
                    <picture className="visible-on-table">
                        <source srcSet="images/main-page/advantages/image-1-2.webp" type="image/webp"/>
                        <img src="images/main-page/advantages/image-1-2.png" alt="" loading="lazy"
                             style={{width: "25%", transform: "translate(0,0%)"}} width="200"
                             className="advantages__header--decor-img"/>
                    </picture>
                </div>
                <div className="advantages__header--decor-item _levitation">
                    <picture className="visible-on-table">
                        <source srcSet="images/main-page/advantages/image-1-1.webp" type="image/webp"/>
                        <img src="images/main-page/advantages/image-1-1.png" alt="" loading="lazy"
                             style={{width: "13%", transform: "translate(0,105%)"}} width="200"
                             className="advantages__header--decor-img"/>
                    </picture>
                </div>
            </div>
        </div>
    );
};

export default MainAdvantagesDecorLeft;