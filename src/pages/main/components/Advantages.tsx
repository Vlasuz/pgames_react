import React, {useEffect} from 'react'
import decor from './../../../assets/img/main-page/advantages/bg.png'
import image1 from './../../../assets/img/main-page/advantages/image-1-1.png'
import image2 from './../../../assets/img/main-page/advantages/image-1-2.png'
import image3 from './../../../assets/img/main-page/advantages/image-2-1.png'
import image4 from './../../../assets/img/main-page/advantages/image-2-2.png'
import image5 from './../../../assets/img/main-page/advantages/icon-1.svg'
import image6 from './../../../assets/img/main-page/advantages/icon-2.svg'
import image7 from './../../../assets/img/main-page/advantages/icon-3.svg'
import image8 from './../../../assets/img/main-page/advantages/super-game.jpg'
import image9 from './../../../assets/img/icons/play.svg'
import logo from './../../../assets/img/logo.svg'

interface IAdvantagesProps {

}

export const Advantages: React.FC<IAdvantagesProps> = () => {

    return (
        <section className="advantages section-padding">
            <div className="advantages__bg">
                <picture>
                    <img src={decor} loading="lazy" alt="" width="0" height="0"
                         className="advantages__bg--img"/>
                </picture>
            </div>
            <div className="advantages__container container">
                <div className="advantages__header">
                    <div className="advantages__header--decor">
                        <div className="advantages__header--decor-body" data-aos="fade-up-left"
                             data-aos-delay="100">
                            <div className="advantages__header--decor-item _levitation">
                                <picture className="hide-on-table">
                                    <img src={image1} alt="" style={{width: "85px"}} loading="lazy" width="200"
                                         className="advantages__header--decor-img"/>
                                </picture>
                            </div>
                            <div style={{animationDuration: "5.5s"}} className="advantages__header--decor-item _levitation">
                                <picture className="hide-on-table">
                                    <img src={image2} alt="" style={{width: "205px"}} loading="lazy" width="200"
                                         className="advantages__header--decor-img"/>
                                </picture>
                            </div>
                            <div style={{animationDuration: "5.5s"}} className="advantages__header--decor-item _levitation">
                                <picture className="visible-on-table">
                                    <img src={image1} alt="" style={{width: "25%", transform: "translate(0,0%)"}} loading="lazy" width="200"
                                         className="advantages__header--decor-img"/>
                                </picture>
                            </div>
                            <div className="advantages__header--decor-item _levitation">
                                <picture className="visible-on-table">
                                    <img src={image1} alt="" style={{width: "13%", transform: "translate(0,105%)"}} loading="lazy" width="200"
                                         className="advantages__header--decor-img"/>
                                </picture>
                            </div>
                        </div>
                    </div>
                    <div className="advantages__header--block" data-aos="fade-in" data-aos-delay="400">
                        <img src={logo} height="60" alt="" className="advantages__logo"/>
                        <h2 className="advantages__title section-title _center">
                            Наши Преимущества
                        </h2>
                        <div className="advantages__subtext">
                            Стараемся ради твоей победы
                        </div>
                    </div>
                    <div className="advantages__header--decor">
                        <div className="advantages__header--decor-body" data-aos="fade-up-right"
                             data-aos-delay="300">
                            <div style={{animationDuration: "6.3s"}} className="advantages__header--decor-item _right _levitation">
                                <picture className="hide-on-table">
                                    <img src={image3} style={{width: "115px", transform: "translate(-130%,0)"}} alt="" loading="lazy" width="200"
                                         className="advantages__header--decor-img"/>
                                </picture>
                            </div>
                            <div style={{animationDuration: "4.7s"}} className="advantages__header--decor-item _right _levitation">
                                <picture className="hide-on-table">
                                    <img src={image4} style={{width: "135px", transform: "translate(-100%,50%)"}} alt="" loading="lazy" width="200"
                                         className="advantages__header--decor-img"/>
                                </picture>
                            </div>
                            <div style={{animationDuration: "6.3s"}} className="advantages__header--decor-item _right _levitation">
                                <picture className="visible-on-table">
                                    <img src={image3} style={{width: "20%", transform: "translate(-130%,0)"}} alt="" loading="lazy" width="200"
                                         className="advantages__header--decor-img"/>
                                </picture>
                            </div>
                            <div style={{animationDuration: "4.7s"}} className="advantages__header--decor-item _right _levitation">
                                <picture className="visible-on-table">
                                    <img src={image4} style={{width: "20%", transform: "translate(-100%,50%)"}} alt="" loading="lazy" width="200"
                                         className="advantages__header--decor-img"/>
                                </picture>
                            </div>
                        </div>
                    </div>
                </div>
                <ul className="advantages__list">
                    <li className="advantages__item" data-aos="fade-up" data-aos-delay="400">
                        <div className="advantages__item--body">
                            <div className="advantages__item--icon">
                                <img src={image5} alt=""
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
                                <img src={image6} alt=""
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
                                <img src={image7} alt=""
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
                <a href="#" className="advantages__game large-game" data-aos="fade-in">
                    <div className="large-game__preview">
                        <picture>
                            <img src={image8} loading="lazy" alt=""
                                 width="300" className="large-game__preview--img"/>
                        </picture>
                    </div>
                    <img src={image9} width="42" height="42" alt="" className="large-game__play-icon"/>
                    <h3 className="large-game__title">
                        Супер игра
                    </h3>
                </a>
            </div>
        </section>
    )
}
