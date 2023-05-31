import React from 'react';
import {Swiper} from "swiper";
import {EffectFade, Pagination} from "swiper";
import 'swiper/css';
import 'swiper/css/effect-fade';

const swiperSliders = () => {

    let resizeCheck = {}, windowSize;

    const body = document.querySelector('body'),
        html = document.querySelector('html'),
        header = document.querySelector('.header');

    function resizeCheckFunc(size, minWidth, maxWidth) {
        if (windowSize <= size && (resizeCheck[String(size)] == true || resizeCheck[String(size)] == undefined) && resizeCheck[String(size)] != false) {
            resizeCheck[String(size)] = false;
            maxWidth(); // < size
        }

        if (windowSize >= size && (resizeCheck[String(size)] == false || resizeCheck[String(size)] == undefined) && resizeCheck[String(size)] != true) {
            resizeCheck[String(size)] = true;
            minWidth(); // > size
        }
    }

    new Swiper('.intro__slider', {

        modules: [Pagination, EffectFade],
        spaceBetween: 30,
        slidesPerView: 1,
        centeredSlides: false,

        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },

    });

    let onlineGamesSlider;


    function resize() {

        html.style.setProperty('--height-screen', body.offsetHeight + 'px');
        html.style.setProperty('--height-header', header.offsetHeight + 'px');

        windowSize = window.innerWidth

        resizeCheckFunc(768,
            function () {  // screen > 768px

                if(document.querySelector('.online-games__slider')) {
                    onlineGamesSlider = new Swiper('.online-games__slider', {

                        spaceBetween: 16,
                        slidesPerView: 3,
                        centeredSlides: false,

                        //loop: true,

                        navigation: {
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        },
                        breakpoints: {
                            800: {
                                slidesPerView: 4,
                            },
                        }
                    });
                }

            },
            function () {  // screen < 768px

                // if(onlineGamesSlider) {
                //     onlineGamesSlider.destroy(true, true);
                // }


            });

    }

    resize();

}

export default swiperSliders;