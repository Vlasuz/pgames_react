import React, {useState} from 'react';
import {Link, NavLink} from "react-router-dom";
import HeaderAccount from "./components_header/HeaderAccount";
import HeaderLanguages from "./components_header/HeaderLanguages";
import HeaderNotifications from "./components_header/HeaderNotifications";
import {connect, useSelector} from "react-redux";
import HeaderMobBurgerMenu from "./components_header/HeaderMobBurgerMenu";
import OpenPopup from "../hooks/OpenPopup";
import i18next from "i18next";
import HeaderBalance from "./components_header/HeaderBalance";

const Header = (props) => {

    const pageLinks = [
        {to: '/', title: i18next.t('menu_item_name__main')},
        {to: '/games', title: i18next.t('menu_item_name__games')},
        {to: '/rooms', title: i18next.t('menu_item_name__rooms')},
        {to: '/news', title: i18next.t('menu_item_name__news')},
        // {to: '/#advantages-id', title: 'Преимущества'},
    ]

    const isLogout = useSelector(state => {
        const { logoutReducer } = state
        return logoutReducer.auth
    })


    return (
        <header className="header">
            <div className="header__container container _large">
                <Link to={"/"} className="header__logo">
                    <img src="../images/logo.svg" alt="" width="150" className="header__logo--img"/>
                </Link>
                <nav className="header__nav">
                    <div className="header__nav--body">
                        <ul className="header__nav--list">

                            {
                                pageLinks.map((link, key) =>
                                    <li key={key} className="header__nav--item">
                                        <NavLink to={link.to} className={"header__nav--link"}>
                                            {link.title}
                                        </NavLink>
                                    </li>
                                )
                            }
                        </ul>

                        {
                            isLogout ?
                                <div className="header__nav--user-info header__user-info">
                                    <HeaderBalance/>
                                    <HeaderNotifications/>
                                </div> : ""
                        }

                        <HeaderLanguages/>


                        { isLogout ? <HeaderAccount /> : <a className={'link-to-register btn _gradient _shadow'} onClick={OpenPopup} href={"#login-popup"}>Войти</a> }

                    </div>
                </nav>

                <HeaderMobBurgerMenu />

            </div>
        </header>
    );
};
export default Header;