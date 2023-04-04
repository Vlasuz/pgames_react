import React from 'react';
import {Link, NavLink} from "react-router-dom";

const FooterNavigation = () => {

    const menu_1 = [
        {
            title: "Игры",
            link: "/games",
        },
        {
            title: "Главная",
            link: "/",
        },
        {
            title: "Комнаты",
            link: "/rooms",
        },
        {
            title: "Новости",
            link: "/news",
        },
    ]
    const menu_2 = [
        {
            title: "Правила использования",
            link: "/faq",
        },
        {
            title: "Политика конфеденциальности",
            link: "/text-page",
        },
        {
            title: "Документ",
            link: "/text-page",
        },
        {
            title: "Статья о сервисе",
            link: "/text-page",
        },
        {
            title: "Статья",
            link: "/text-page",
        },
    ]

    return (
        <nav className="footer__nav">
            <div className="footer__nav--row">
                <div className="footer__nav--col">
                    <ul className="footer__nav--list">

                        {
                            menu_1.map((item, itemNum) =>
                                <li key={itemNum} className="footer__nav--item">
                                    <NavLink to={item.link} className="footer__nav--link">
                                        {item.title}
                                    </NavLink>
                                </li>
                            )
                        }

                    </ul>
                </div>
                <div className="footer__nav--col">
                    <ul className="footer__nav--list">

                        {
                            menu_2.map((item, itemNum) =>
                                <li key={itemNum} className="footer__nav--item">
                                    <NavLink to={item.link} className="footer__nav--link">
                                        {item.title}
                                    </NavLink>
                                </li>
                            )
                        }

                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default FooterNavigation;