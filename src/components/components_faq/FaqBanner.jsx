import React from 'react';

const FaqBanner = () => {
    return (
        <article className="faq__intro" data-aos="fade-in" data-aos-delay="400">
            <div className="faq__intro--body">
                <div className="faq__intro--bg">
                    <picture>
                        <img src="../images/faq/intro/bg.png" loading="lazy" alt="" width="0"
                             height="0" className="faq__intro--bg-img"/>
                    </picture>
                </div>
                <div className="faq__intro--info">
                    <h3 className="faq__intro--title section-title _decor-none">
                        Всегда рады ответить на ваши вопросы!
                    </h3>
                    <div className="faq__intro--text">
                        Все что вам нужно знать о Board Games
                    </div>
                </div>
                <div className="faq__intro--image">
                    <div className="faq__intro--image-body">
                        <div className="faq__intro--image-item _levitation"
                             style={{width: "75%", left: "30%", top: '5%', animationDuration: "7.5s"}}>
                            <picture>
                                <img src="../images/faq/intro/image-1-1.png" alt=""
                                     className="faq__intro--image-img"/>
                            </picture>
                        </div>
                        <div className="faq__intro--image-item _levitation"
                             style={{width: "25%", left: "25%", top: "5%"}}>
                            <picture>
                                <img src="../images/faq/intro/image-1-2.png" alt=""
                                     className="faq__intro--image-img"/>
                            </picture>
                        </div>
                        <div className="faq__intro--image-item _levitation"
                             style={{width: "25%", left: "75%", top: "50%", animationDuration: "4.5s"}}>
                            <picture>
                                <img src="../images/faq/intro/image-1-3.png" alt=""
                                     className="faq__intro--image-img"/>
                            </picture>
                        </div>
                        <div className="faq__intro--image-item _levitation"
                             style={{width: "30%", left: "23%", top: "50%", animationDuration: "6s"}}>
                            <picture>
                                <img src="../images/faq/intro/image-1-5.png" alt=""
                                     className="faq__intro--image-img"/>
                            </picture>
                        </div>
                        <div className="faq__intro--image-item _levitation hide-on-table"
                             style={{width: "30%", left: "65%", top: "70%", animationDuration: "6.5s"}}>
                            <picture>
                                <img src="../images/faq/intro/image-1-4.png" alt=""
                                     className="faq__intro--image-img"/>
                            </picture>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default FaqBanner;