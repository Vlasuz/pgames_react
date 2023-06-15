import React, {useEffect, useState} from 'react';
import {Link, NavLink} from "react-router-dom";
import axios from "axios";

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
    const [menu2, setMenu2] = useState([
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
    ])

    useEffect(() => {
        axios.get('https://board-games.sonisapps.com/api/page/get/ru/').then(({data}) => {
            setMenu2(data)
            console.log('data pages', data)
        })
    }, [])

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
                            menu2.map((item, itemNum) =>
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