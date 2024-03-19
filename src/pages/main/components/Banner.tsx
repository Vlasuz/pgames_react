import React, {useEffect} from 'react'
import decorItem1 from './../../../assets/img/main-page/intro/desktop/item-1-2.png'
import decorItem2 from './../../../assets/img/main-page/intro/desktop/item-1-1.png'
import decorItem3 from './../../../assets/img/main-page/intro/desktop/item-1-3.png'
import decorItem4 from './../../../assets/img/main-page/intro/desktop/item-2-3.png'
import decorItem5 from './../../../assets/img/main-page/intro/desktop/item-2-1.png'
import decorItem6 from './../../../assets/img/main-page/intro/desktop/item-2-2.png'
import logo from './../../../assets/img/logo.svg'
import introBgd from './../../../assets/img/main-page/intro/bg.png'
import {Swiper, SwiperSlide} from "swiper/react";
import { EffectFade, Autoplay } from 'swiper'

import 'swiper/css';


interface IBannerProps {

}

export const Banner: React.FC<IBannerProps> = () => {

    return (
        <section className="intro">
            <div className="intro__bg">
                <div className="intro__bg--text">
                    privat <br/> games
                </div>
                <div className="intro__bg--element">
                    <picture>
                        <img src={introBgd} alt="" loading="lazy" width="0" height="0"
                             className="intro__bg--img"/>
                    </picture>
                </div>
            </div>
            <div className="intro__container container">
                <div className="intro__slider">
                    <div className="intro__slider--list">

                        <div className="intro__decor" data-aos="fade-up" data-aos-delay="400">
                            <div className="intro__decor--image parallax-scene _levitation"
                                 style={{animationDuration: "7s"}}>
                                <div className="intro__decor--image-item" data-depth="0.3"
                                     style={{width: "max(147px, 80%)"}}>
                                    <picture className="hide-on-table">
                                        <img src={decorItem1} style={{width: "100%", transform: "translate(15%,0%)"}}
                                             loading="lazy" alt="" className="intro__decor--img"/>
                                    </picture>
                                </div>
                                <div className="intro__decor--image-item" style={{width: "max(30%, 50px)"}}
                                     data-depth="0.5">
                                    <picture className="hide-on-table">
                                        <img src={decorItem2} style={{width: "100%", transform: "translate(25%,150%)"}}
                                             loading="lazy" alt="" className="intro__decor--img"/>
                                    </picture>
                                </div>
                                <div className="intro__decor--image-item" style={{width: "max(40px, 25%)"}}
                                     data-depth="0.9">
                                    <picture className="hide-on-table">
                                        <img src={decorItem3} loading="lazy"
                                             style={{width: "100%", transform: "translate(320%,90%)"}} alt=""
                                             className="intro__decor--img"/>
                                    </picture>
                                </div>
                                <div className="intro__decor--image-item" style={{width: "50%"}} data-depth="0.3">
                                    <picture className="visible-on-table">
                                        <img src={decorItem1} loading="lazy" alt=""
                                             style={{width: "100%", transform: "translate(0%,0%)"}}
                                             className="intro__decor--img"/>
                                    </picture>
                                </div>
                                <div className="intro__decor--image-item" style={{width: "15%"}} data-depth="0.9">
                                    <picture className="visible-on-table">
                                        <img src={decorItem3} loading="lazy" alt=""
                                             style={{width: "100%", transform: "translate(250%,50%)"}}
                                             className="intro__decor--img"/>
                                    </picture>
                                </div>
                                <div className="intro__decor--image-item" style={{width: "25%"}} data-depth="0.5">
                                    <picture className="visible-on-table">
                                        <img src={decorItem2} loading="lazy" alt=""
                                             style={{width: "100%", transform: "translate(250%,100%)"}}
                                             className="intro__decor--img"/>
                                    </picture>
                                </div>
                                <div className="intro__decor--image-item" style={{width: "35%"}} data-depth="0.5">
                                    <picture className="visible-on-table">
                                        <img src={decorItem4} loading="lazy" alt=""
                                             style={{width: "100%", transform: "translate(270%,130%)"}}
                                             className="intro__decor--img"/>
                                    </picture>
                                </div>
                            </div>
                        </div>

                        <Swiper
                            modules={[EffectFade, Autoplay]}
                            effect="fade"
                            autoplay={{ delay: 3000, disableOnInteraction: false }}

                        >
                            <SwiperSlide>
                                <div className="intro__block" data-aos="fade-in" data-aos-delay="800">
                                    <div className="intro__header">
                                        <div className="intro__header--logo">
                                            <img src={logo} width="200" height="61" loading="lazy" alt=""
                                                 className="intro__header--img"/>
                                        </div>
                                    </div>
                                    <div className="intro__text">
                                        <p>
                                            Добро пожаловать в мир настольных игр, вас ждут логические загадки и
                                            конечно удача! 12312312312
                                        </p>
                                    </div>
                                    <a href="#" className="intro__btn btn _gradient _shadow">
                                        Подключиться
                                    </a>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="intro__block" data-aos="fade-in" data-aos-delay="800">
                                    <div className="intro__header">
                                        <div className="intro__header--logo">
                                            <img src={logo} width="200" height="61" loading="lazy" alt=""
                                                 className="intro__header--img"/>
                                        </div>
                                    </div>
                                    <div className="intro__text">
                                        <p>
                                            Добро пожаловать в мир настольных игр, вас ждут логические загадки и
                                            конечно удача!
                                        </p>
                                    </div>
                                    <a href="#" className="intro__btn btn _gradient _shadow">
                                        Подключиться
                                    </a>
                                </div>
                            </SwiperSlide>
                        </Swiper>

                        <div className="intro__decor" data-aos="fade-down" data-aos-delay="600">
                            <div className="intro__decor--image parallax-scene _levitation"
                                 style={{animationDuration: "6s"}}>
                                <div className="intro__decor--image-item" style={{width: "max(100px, 65%)"}}
                                     data-depth="0.3">
                                    <picture className="hide-on-table">
                                        <img src={decorItem5} loading="lazy" alt=""
                                             style={{width: "100%", transform: "translate(0%,0%)"}}
                                             className="intro__decor--img"/>
                                    </picture>
                                </div>
                                <div className="intro__decor--image-item" style={{width: "max(60px, 45%)"}}
                                     data-depth="0.5">
                                    <picture className="hide-on-table">
                                        <img src={decorItem6} loading="lazy"
                                             style={{width: "100%", transform: "translate(50%,145%)"}} alt=""
                                             className="intro__decor--img"/>
                                    </picture>
                                </div>
                                <div className="intro__decor--image-item" style={{width: "max(60px, 45%)"}}
                                     data-depth="0.7">
                                    <picture className="hide-on-table">
                                        <img src={decorItem4} loading="lazy" alt=""
                                             style={{width: "100%", transform: "translate(130%,105%)"}}
                                             className="intro__decor--img"/>
                                    </picture>
                                </div>
                                <div className="intro__decor--image-item" style={{width: "max(100px, 65%)"}}
                                     data-depth="0.3">
                                    <picture className="visible-on-table">
                                        <img src={decorItem5} loading="lazy" alt=""
                                             style={{width: "100%", transform: "translate(50%,0%)"}}
                                             className="intro__decor--img"/>
                                    </picture>
                                </div>
                                <div className="intro__decor--image-item" style={{width: "max(30px, 35%)"}}
                                     data-depth="0.7">
                                    <picture className="visible-on-table">
                                        <img src={decorItem6} loading="lazy" alt=""
                                             style={{width: "100%", transform: "translate(150%,175%)"}}
                                             className="intro__decor--img"/>
                                    </picture>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="intro__slider--pagination swiper-pagination"></div>
                </div>
            </div>
        </section>
    )
}
