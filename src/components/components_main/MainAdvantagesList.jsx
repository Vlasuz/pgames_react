import React from 'react';

const MainAdvantagesList = () => {
    return (
        <ul className="advantages__list">
            <li className="advantages__item" data-aos="fade-up" data-aos-delay="400">
                <div className="advantages__item--body">
                    <div className="advantages__item--icon">
                        <img src="../images/main-page/advantages/icon-1.svg" alt=""
                             className="advantages__item--icon-img"/>
                    </div>
                    <h3 className="advantages__item--title section-title _center">
                        Надежность
                    </h3>
                    <div className="advantages__item--text">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing.
                        </p>
                    </div>
                </div>
            </li>
            <li className="advantages__item" data-aos="fade-up" data-aos-delay="500">
                <div className="advantages__item--body">
                    <div className="advantages__item--icon">
                        <img src="../images/main-page/advantages/icon-2.svg" alt=""
                             className="advantages__item--icon-img"/>
                    </div>
                    <h3 className="advantages__item--title section-title _center">
                        Безопасность
                    </h3>
                    <div className="advantages__item--text">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing.
                        </p>
                    </div>
                </div>
            </li>
            <li className="advantages__item" data-aos="fade-up" data-aos-delay="600">
                <div className="advantages__item--body">
                    <div className="advantages__item--icon">
                        <img src="../images/main-page/advantages/icon-3.svg" alt=""
                             className="advantages__item--icon-img"/>
                    </div>
                    <h3 className="advantages__item--title section-title _center">
                        Скорость
                    </h3>
                    <div className="advantages__item--text">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing.
                        </p>
                    </div>
                </div>
            </li>
        </ul>
    );
};

export default MainAdvantagesList;