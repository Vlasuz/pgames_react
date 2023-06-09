import React from 'react';

const FaqTop = (props) => {
    return (
        <div className="faq__header page-header" data-aos="fade-in" data-aos-delay="200">
            <a href="#" className="faq__forward-btn page-header__forward-btn" title="Назад">
                <svg width="5" height="7" viewBox="0 0 5 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M0.25 3.49991C0.25 3.35065 0.304932 3.20132 0.414795 3.08757L3.2273 0.170898C3.44702 -0.0569662 3.80298 -0.0569662 4.02271 0.170898C4.24243 0.398763 4.24243 0.767904 4.02271 0.995768L1.60703 3.49991L4.02227 6.0046C4.24199 6.23246 4.24199 6.6016 4.02227 6.82947C3.80254 7.05733 3.44658 7.05733 3.22686 6.82947L0.414356 3.9128C0.304493 3.79887 0.25 3.64939 0.25 3.49991Z"
                        fill="#F9F1DF"/>
                </svg>
            </a>
            <h2 className="faq__section-title section-title page-header__title _decor-none">
                FAQ
            </h2>
            <div className="faq__bread-crumbs page-header__bread-crumbs">
                <ul className="page-header__bread-crumbs--list">
                    <li className="page-header__bread-crumbs--item">
                        <a href="index.html" className="page-header__bread-crumbs--link">
                            Главная
                        </a>
                    </li>
                    <li className="page-header__bread-crumbs--item">
                        <a className="page-header__bread-crumbs--link">
                            FAQ
                        </a>
                    </li>
                </ul>
            </div>
            <div className="faq__search page-header__search">
                <label className="page-header__search--label">
                    <input onChange={e => props.setSearchQuestion(e.target.value)} value={props.searchQuestion} type="text" name="search" placeholder="Поиск" required
                           className="page-header__search--input"/>
                </label>
                <button className="page-header__search--submit" type="submit" title="Поиск">
                    <svg width="13" height="12" viewBox="0 0 13 12" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M12.2258 10.3992L9.42029 7.59374C10.0583 6.64663 10.373 5.46327 10.2045 4.20234C9.91716 2.05757 8.15935 0.312179 6.01247 0.0403747C2.82052 -0.363524 0.136457 2.32054 0.540379 5.51249C0.812254 7.6603 2.55788 9.41952 4.70288 9.70546C5.96382 9.87395 7.14741 9.55931 8.09429 8.92124L10.8998 11.7267C11.2658 12.0928 11.8595 12.0928 12.2256 11.7267C12.5914 11.3601 12.5914 10.7648 12.2258 10.3992ZM2.35388 4.87499C2.35388 3.22077 3.69966 1.87499 5.35388 1.87499C7.0081 1.87499 8.35388 3.22077 8.35388 4.87499C8.35388 6.52921 7.0081 7.87499 5.35388 7.87499C3.69966 7.87499 2.35388 6.52968 2.35388 4.87499Z"
                            fill="#F9F1DF"/>
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default FaqTop;