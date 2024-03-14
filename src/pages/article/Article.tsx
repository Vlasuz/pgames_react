import React, {useEffect} from 'react'

interface IArticleProps {

}

export const Article: React.FC<IArticleProps> = () => {

    return (
        <main className="main">
            <section className="news-page page-padding" data-aos="fade-in" data-aos-delay="600">
                <div className="news-page__container container">
                    <div className="news-page__header page-header" data-aos="fade-in" data-aos-delay="200">
                        <a href="#" className="news-page__forward-btn page-header__forward-btn" title="Назад">
                            <svg width="5" height="7" viewBox="0 0 5 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M0.25 3.49991C0.25 3.35065 0.304932 3.20132 0.414795 3.08757L3.2273 0.170898C3.44702 -0.0569662 3.80298 -0.0569662 4.02271 0.170898C4.24243 0.398763 4.24243 0.767904 4.02271 0.995768L1.60703 3.49991L4.02227 6.0046C4.24199 6.23246 4.24199 6.6016 4.02227 6.82947C3.80254 7.05733 3.44658 7.05733 3.22686 6.82947L0.414356 3.9128C0.304493 3.79887 0.25 3.64939 0.25 3.49991Z"
                                    fill="#F9F1DF"/>
                            </svg>
                        </a>
                        <h2 className="news-page__section-title section-title page-header__title _decor-none">
                            Новости комании
                        </h2>
                        <div className="news-page__bread-crumbs page-header__bread-crumbs">
                            <ul className="page-header__bread-crumbs--list">
                                <li className="page-header__bread-crumbs--item">
                                    <a href="index.html" className="page-header__bread-crumbs--link">
                                        Главная
                                    </a>
                                </li>
                                <li className="page-header__bread-crumbs--item">
                                    <a className="page-header__bread-crumbs--link">
                                        Новости комании
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="news-page__main">
                        <div className="news-page__main--block news-page__block">
                            <h3 className="news-page__title">
                                Название новости или статьи
                            </h3>
                            <time className="news-page__time" dateTime="2022-12-12">
                                12 / 12 / 2022
                            </time>
                            <div className="news-page__image">
                                <div className="news-page__image--body">
                                    <picture>
                                        <img src="img/main-page/news/image-large.jpg" alt="" width="300"
                                             className="news-page__image--img"/>
                                    </picture>
                                </div>
                            </div>
                            <div className="news-page__text">
                                <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h4>
                                <p>
                                    Ut a enim hendrerit, dignissim tellus vitae, porttitor purus. Ut laoreet odio ut
                                    ipsum
                                    accumsan, et varius diam pretium. Maecenas vitae ullamcorper magna, et vehicula mi.
                                    Sed
                                    nec risus mattis, condimentum nulla id, venenatis magna. Suspendisse in mollis arcu.
                                    Nulla viverra porttitor ligula quis vulputate.
                                </p>
                                <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h4>
                                <p>
                                    Vivamus at feugiat sem. Fusce elit lacus, fermentum quis interdum quis, efficitur
                                    quis
                                    justo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a enim hendrerit,
                                    dignissim tellus vitae, porttitor purus. Ut laoreet odio ut ipsum accumsan, et
                                    varius
                                    diam pretium. Maecenas vitae ullamcorper magna, et vehicula mi. Sed nec risus
                                    mattis,
                                    condimentum nulla id, venenatis magna. Suspendisse in mollis arcu. Nulla viverra
                                    porttitor ligula quis vulputate. Vivamus at feugiat sem. Fusce elit lacus, fermentum
                                    quis interdum quis, efficitur quis justo.
                                </p>
                                <p>
                                    Ut a enim hendrerit, dignissim tellus vitae, porttitor purus. Ut laoreet odio ut
                                    ipsum
                                    accumsan, et varius diam pretium. Maecenas vitae ullamcorper magna, et vehicula mi.
                                    Sed
                                    nec risus mattis, condimentum nulla id, venenatis magna. Suspendisse in mollis arcu.
                                    Nulla viverra porttitor ligula quis vulputate.
                                </p>
                                <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h4>
                                <p>
                                    Vivamus at feugiat sem. Fusce elit lacus, fermentum quis interdum quis, efficitur
                                    quis
                                    justo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a enim hendrerit,
                                    dignissim tellus vitae, porttitor purus. Ut laoreet odio ut ipsum accumsan, et
                                    varius
                                    diam pretium. Maecenas vitae ullamcorper magna, et vehicula mi. Sed nec risus
                                    mattis,
                                    condimentum nulla id, venenatis magna. Suspendisse in mollis arcu. Nulla viverra
                                    porttitor ligula quis vulputate. Vivamus at feugiat sem. Fusce elit lacus, fermentum
                                    quis interdum quis, efficitur quis justo.
                                </p>
                            </div>
                        </div>
                        <div className="news-page__main--aside news-page__aside">
                            <div className="news-page__aside--body">
                                <ul className="news-page__aside--list">
                                    <li className="news-page__aside--item">
                                        <a href="#" className="news-list__item--body">
                                            <div className="news-list__item--image">
                                                <div className="news-list__item--image-body">
                                                    <picture>
                                                        <img src="img/news/image-1.png" loading="lazy" alt=""
                                                             width="311"
                                                             height="150" className="news-list__item--img"/>
                                                    </picture>
                                                </div>
                                            </div>
                                            <h3 className="news-list__item--title" title="Название новости или статьи">
                                                Название новости или статьи
                                            </h3>
                                            <time className="news-list__item--time" dateTime="2022-12-12">
                                                12 / 12 / 2022
                                            </time>
                                            <div className="news-list__item--text">
                                                Proin orci ex, ornare non auctor sit amet, egestas id neque. Donec non
                                                elei...
                                            </div>
                                            <div className="news-list__item--footer">
                                                <span className="news-list__item--link">
                                                    Смотреть статью
                                                </span>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="news-page__aside--item">
                                        <a href="#" className="news-list__item--body">
                                            <div className="news-list__item--image">
                                                <div className="news-list__item--image-body">
                                                    <picture>
                                                        <img src="img/news/image-2.png" loading="lazy" alt=""
                                                             width="311"
                                                             height="150" className="news-list__item--img"/>
                                                    </picture>
                                                </div>
                                            </div>
                                            <h3 className="news-list__item--title" title="Название новости или статьи">
                                                Название новости или статьи
                                            </h3>
                                            <time className="news-list__item--time" dateTime="2022-12-12">
                                                12 / 12 / 2022
                                            </time>
                                            <div className="news-list__item--text">
                                                Proin orci ex, ornare non auctor sit amet, egestas id neque. Donec non
                                                elei...
                                            </div>
                                            <div className="news-list__item--footer">
                                                <span className="news-list__item--link">
                                                    Смотреть статью
                                                </span>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <ul className="news-list__row">
                        <li className="news-list__item" data-aos="fade-up" data-aos-delay="300">
                            <a href="news-page.html" className="news-list__item--body">
                                <div className="news-list__item--image">
                                    <div className="news-list__item--image-body">
                                        <picture>
                                            <img src="img/news/image-1.png" loading="lazy" alt="" width="311"
                                                 height="150"
                                                 className="news-list__item--img"/>
                                        </picture>
                                    </div>
                                </div>
                                <h3 className="news-list__item--title" title="Название новости или статьи">
                                    Название новости или статьи
                                </h3>
                                <time className="news-list__item--time" dateTime="2022-12-12">
                                    12 / 12 / 2022
                                </time>
                                <div className="news-list__item--text">
                                    Proin orci ex, ornare non auctor sit amet, egestas id neque. Donec non elei...
                                </div>
                                <div className="news-list__item--footer">
            <span className="news-list__item--link">
                Смотреть статью
            </span>
                                </div>
                            </a>
                        </li>
                        <li className="news-list__item" data-aos="fade-up" data-aos-delay="300">
                            <a href="news-page.html" className="news-list__item--body">
                                <div className="news-list__item--image">
                                    <div className="news-list__item--image-body">
                                        <picture>
                                            <img src="img/news/image-2.png" loading="lazy" alt="" width="311"
                                                 height="150"
                                                 className="news-list__item--img"/>
                                        </picture>
                                    </div>
                                </div>
                                <h3 className="news-list__item--title"
                                    title="Название новости или статьи если очень длинное">
                                    Название новости или статьи если очень длинное
                                </h3>
                                <time className="news-list__item--time" dateTime="2022-12-12">
                                    12 / 12 / 2022
                                </time>
                                <div className="news-list__item--text">
                                    Proin orci ex, ornare non auctor sit amet, egestas id neque. Donec non elei...
                                </div>
                                <div className="news-list__item--footer">
            <span className="news-list__item--link">
                Смотреть статью
            </span>
                                </div>
                            </a>
                        </li>
                        <li className="news-list__item" data-aos="fade-up" data-aos-delay="300">
                            <a href="news-page.html" className="news-list__item--body">
                                <div className="news-list__item--image">
                                    <div className="news-list__item--image-body">
                                        <picture>
                                            <img src="img/news/image-3.png" loading="lazy" alt="" width="311"
                                                 height="150"
                                                 className="news-list__item--img"/>
                                        </picture>
                                    </div>
                                </div>
                                <h3 className="news-list__item--title"
                                    title="Название новости или статьи если очень длинное">
                                    Название новости или статьи если очень длинное
                                </h3>
                                <time className="news-list__item--time" dateTime="2022-12-12">
                                    12 / 12 / 2022
                                </time>
                                <div className="news-list__item--text">
                                    Proin orci ex, ornare non auctor sit amet, egestas id neque. Donec non elei...
                                </div>
                                <div className="news-list__item--footer">
            <span className="news-list__item--link">
                Смотреть статью
            </span>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </section>
        </main>
    )
}
