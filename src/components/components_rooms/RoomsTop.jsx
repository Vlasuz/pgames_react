import React from 'react';
import {Link, NavLink} from "react-router-dom";

const RoomsTop = () => {
    return (
        <div className="page-rooms__header page-header" data-aos="fade-in" data-aos-delay="200">
            <Link to={"/"} className="page-rooms__forward-btn page-header__forward-btn" title="Назад">
                <svg width="5" height="7" viewBox="0 0 5 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M0.25 3.49991C0.25 3.35065 0.304932 3.20132 0.414795 3.08757L3.2273 0.170898C3.44702 -0.0569662 3.80298 -0.0569662 4.02271 0.170898C4.24243 0.398763 4.24243 0.767904 4.02271 0.995768L1.60703 3.49991L4.02227 6.0046C4.24199 6.23246 4.24199 6.6016 4.02227 6.82947C3.80254 7.05733 3.44658 7.05733 3.22686 6.82947L0.414356 3.9128C0.304493 3.79887 0.25 3.64939 0.25 3.49991Z"
                        fill="#F9F1DF"/>
                </svg>
            </Link>
            <h2 className="page-rooms__section-title section-title page-header__title _decor-none">
                Комнаты
            </h2>
            <div className="page-rooms__bread-crumbs page-header__bread-crumbs">
                <ul className="page-header__bread-crumbs--list">
                    <li className="page-header__bread-crumbs--item">
                        <NavLink to={'/'} className="page-header__bread-crumbs--link">
                            Главная
                        </NavLink>
                    </li>
                    <li className="page-header__bread-crumbs--item">
                        <a className="page-header__bread-crumbs--link">
                            Все комнаты
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default RoomsTop;