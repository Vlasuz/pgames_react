import React from 'react';
import {NavLink} from "react-router-dom";

const Breadcrumbs = () => {
    return (
        <div className="online-games__bread-crumbs page-header__bread-crumbs">
            <ul className="page-header__bread-crumbs--list">
                <li className="page-header__bread-crumbs--item">
                    <NavLink to={"/"} className="page-header__bread-crumbs--link">
                        Главная
                    </NavLink>
                </li>
                <li className="page-header__bread-crumbs--item">
                    <a className="page-header__bread-crumbs--link">
                        Все онлайн игры
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Breadcrumbs;