import React from 'react';
import SliderItem from "./SliderItem";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import "swiper/css/effect-fade";
import {Autoplay, EffectFade, Pagination} from "swiper/modules";

const Slider = () => {
    return (
        <div className="intro__slider--list">
            <Swiper
                className={"intro__slider"}
                slidesPerView={1}
                effect={'fade'}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[EffectFade, Autoplay, Pagination]}
            >
                <SwiperSlide>
                    <SliderItem
                        text={'Добро пожаловать в мир настольных игр, вас ждут логические загадки и конечно удача!'}
                        textButton={'Подключиться'}
                        linkButton={'#'}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <SliderItem
                        text={'Добро 111 пожаловать в мир настольных игр, вас ждут логические загадки и конечно удача!'}
                        textButton={'Подключиться'}
                        linkButton={'#'}
                    />
                </SwiperSlide>
            </Swiper>
        </div>

    );
};

export default Slider;