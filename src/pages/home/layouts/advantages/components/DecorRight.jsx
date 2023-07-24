import React from 'react';
import decor1 from '../../../../../assets/img/main-page/advantages/image-2-1.webp'
import decor2 from '../../../../../assets/img/main-page/advantages/image-2-2.webp'

const DecorRight = () => {
    return (
        <div className="advantages__header--decor">
            <div className="advantages__header--decor-body" data-aos="fade-up-right"
                 data-aos-delay="300">
                <div className="advantages__header--decor-item _right _levitation"
                     style={{animationDuration: "6.3s"}}>
                    <picture className="hide-on-table">
                        <source srcSet={decor1} type="image/webp"/>
                        <img src={decor1} alt="" loading="lazy"
                             style={{width: "115px", transform: "translate(-130%,0)"}} width="200"
                             className="advantages__header--decor-img"/>
                    </picture>
                </div>
                <div className="advantages__header--decor-item _right _levitation"
                     style={{animationDuration: "4.7s"}}>
                    <picture className="hide-on-table">
                        <source srcSet={decor2} type="image/webp"/>
                        <img src={decor2} alt="" loading="lazy"
                             style={{width: "135px", transform: "translate(-100%,50%)"}} width="200"
                             className="advantages__header--decor-img"/>
                    </picture>
                </div>
                <div className="advantages__header--decor-item _right _levitation"
                     style={{animationDuration: "6.3s"}}>
                    <picture className="visible-on-table">
                        <source srcSet={decor1} type="image/webp"/>
                        <img src={decor1} alt="" loading="lazy"
                             style={{width: "20%", transform: "translate(-130%,0)"}} width="200"
                             className="advantages__header--decor-img"/>
                    </picture>
                </div>
                <div className="advantages__header--decor-item _right _levitation"
                     style={{animationDuration: "4.7s"}}>
                    <picture className="visible-on-table">
                        <source srcSet={decor2} type="image/webp"/>
                        <img src={decor2} alt="" loading="lazy"
                             style={{width: "20%", transform: "translate(-100%,50%)"}} width="200"
                             className="advantages__header--decor-img"/>
                    </picture>
                </div>
            </div>
        </div>
    );
};

export default DecorRight;