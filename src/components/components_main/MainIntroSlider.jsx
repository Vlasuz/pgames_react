import React, {useEffect, useState} from 'react';
import swiperSliders from "../JS_SwiperSlider";
import openPopup from "../../hooks/OpenPopup";
import MainIntroDecorLeft from "./MainIntroDecorLeft";
import MainIntroDecorRight from "./MainIntroDecorRight";
import i18next from "i18next";
import {NavLink} from "react-router-dom";
import axios from "axios";
import GlobalLink from "../../GlobalLink";

const MainIntroSlider = () => {

    useEffect(() => {
        swiperSliders()
    })

    const sliderInner = [
        {
            id: 0,
            text: i18next.t('page_main_intro__slider_1')
        },
        {
            id: 1,
            text: i18next.t('page_main_intro__slider_2')
        },
        {
            id: 2,
            text: i18next.t('page_main_intro__slider_3')
        },
    ]

    const [sliderData, setSliderData] = useState([])

    useEffect(() => {
        axios.get(GlobalLink('/api/landing/banner_list/'), {'lang-code': 'ru'}).then(({data}) => {
            setSliderData(data)
        })
    }, [])

    return (
        <div className="intro__slider swiper">
            <ul className="intro__slider--list swiper-wrapper">

                {
                    sliderData.map((item, index) =>
                        <li key={index} className="intro__slider--item swiper-slide">

                            <MainIntroDecorLeft/>
                            <div className="intro__block" data-aos="fade-in" data-aos-delay="800">
                                <div className="intro__header">
                                    <div className="intro__header--logo">
                                        <img src="../images/logo.svg" width="200" height="61" loading="lazy" alt=""
                                             className="intro__header--img"/>
                                    </div>
                                </div>
                                <div className="intro__text">
                                    <p>
                                        {item.text}
                                    </p>
                                </div>
                                <NavLink to={item.button_link} className="intro__btn btn _gradient _shadow">
                                    {item.button_name}
                                </NavLink>
                            </div>
                            <MainIntroDecorRight/>

                        </li>
                    )
                }

            </ul>
            <div className="intro__slider--pagination swiper-pagination">

            </div>
        </div>
    );
};

export default MainIntroSlider;