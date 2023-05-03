import React, {useEffect, useState} from 'react';
import axios from "axios";
import GlobalLink from "../../GlobalLink";
import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import {Pagination} from "swiper";
import MainIntroDecorRight from "./MainIntroDecorRight";
import {NavLink} from "react-router-dom";
import MainIntroDecorLeft from "./MainIntroDecorLeft";

const MainIntroSlider = () => {

    // useEffect(() => {
    //     swiperSliders()
    // }, [])

    const [sliderData, setSliderData] = useState([])

    useEffect(() => {
        axios({
            url: GlobalLink('/api/landing/banner_list/'),
            method: 'get',
            headers: {
                'lang-code': 'ru'
            }
        }).then(({data}) => {
            console.log('main banner', data)
            setSliderData(data)
        })
    }, [])

    return (
        <div className="intro__slider swiper">
            <ul className="intro__slider--list swiper-wrapper">

                <Swiper
                    modules={[Pagination]}
                    slidesPerView={1}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    pagination={true}
                >

                    {
                        sliderData.map((item, index) =>
                            <SwiperSlide key={index}>
                                <li className="intro__slider--item swiper-slide">

                                    <MainIntroDecorLeft/>
                                    <div className="intro__block" data-aos="fade-in" data-aos-delay="800">
                                        <div className="intro__header">
                                            <div className="intro__header--logo">
                                                <img src="images/logo.svg" width="200" height="61" loading="lazy" alt=""
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
                            </SwiperSlide>
                        )
                    }

                </Swiper>
            </ul>
            <div className="intro__slider--pagination swiper-pagination"/>
        </div>
    );
};

export default MainIntroSlider;