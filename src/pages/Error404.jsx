import React from 'react';

const Error404 = () => {
    return (
        <main className="main">
            <section className="page-404 page-padding-top">
                <div className="page-404__container container">
                    <div className="page-404__layer" data-aos="fade-up">
                        <div className="page-404__layer--item _levitation"
                             style={{width: "6.5%", minWidth: "31px", left: "29%", height: "200px", animationDuration: "4s"}}
                        >
                            <picture>
                                <source srcSet="images/404/decor-1.webp" type="image/webp"/>
                                    <img src="../images/404/decor-1.png" alt="" loading="lazy"
                                         className="page-404__layer--img"/>
                            </picture>
                        </div>
                        <div className="page-404__layer--item _levitation"
                             style={{width: "13%", minWidth: "31px", left: "66%", height: "100px", top: "-50px"}}
                        >
                            <picture>
                                <source srcSet="images/404/decor-2.webp" type="image/webp"/>
                                    <img src="../images/404/decor-2.png" alt="" loading="lazy"
                                         className="page-404__layer--img"/>
                            </picture>
                        </div>
                        <div className="page-404__layer--item _full" data-aos="fade-down" data-aos-delay="300">
                            <picture>
                                <source srcSet="images/404/code.webp" type="image/webp"/>
                                    <img src="../images/404/code.png" alt="" loading="lazy" className="page-404__layer--img"/>
                            </picture>
                        </div>
                    </div>
                    <div className="page-404__layer" data-aos="fade-down" data-aos-delay="500">
                        <div className="page-404__layer--item _levitation"
                             style={{width: "20%", minWidth: "86px", left: "9%", top: "-70px", height: "200px", animationDuration: "6s"}}
                        >
                            <picture>
                                <source srcSet="images/404/decor-4.webp" type="image/webp"/>
                                    <img src="../images/404/decor-4.png" alt="" loading="lazy"
                                         className="page-404__layer--img"/>
                            </picture>
                        </div>
                        <div className="page-404__layer--item _levitation"
                             style={{width: "8.5%", minWidth: "36px", left: "9%", top: "70px", height: "200px", animationDuration: "4s"}}
                        >
                            <picture>
                                <source srcSet="images/404/decor-3.webp" type="image/webp"/>
                                    <img src="../images/404/decor-3.png" alt="" loading="lazy"
                                         className="page-404__layer--img"/>
                            </picture>
                        </div>
                        <div className="page-404__layer--item _levitation"
                            style={{width: "10.5%", minWidth: "36px", left: "75%", top: "70px", height: "200px", animationDuration: "6s"}}
                        >
                            <picture>
                                <source srcSet="images/404/decor-5.webp" type="image/webp"/>
                                    <img src="../images/404/decor-5.png" alt="" loading="lazy"
                                         className="page-404__layer--img"/>
                            </picture>
                        </div>
                        <div className="page-404__layer--item _levitation"
                             style={{width: "10.5%", minWidth: "36px", left: "85%", top: "-25%", height: "200px", animationDuration: "7s"}}
                        >
                            <picture>
                                <source srcSet="images/404/decor-6.webp" type="image/webp"/>
                                    <img src="../images/404/decor-6.png" alt="" loading="lazy"
                                         className="page-404__layer--img"/>
                            </picture>
                        </div>
                    </div>
                    <div className="page-404__layer">
                        <div className="page-404__info" data-aos="fade-in" data-aos-delay="300"
                             data-aos-anchor=".page__container">
                            <div className="page-404__logo">
                                <img src="../images/logo.svg" alt="" width="200" height="51" className="page-404__logo--img"/>
                            </div>
                            <div className="page-404__text">
                                Пожалуйста попробуйте обновить страницу позже!
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Error404;