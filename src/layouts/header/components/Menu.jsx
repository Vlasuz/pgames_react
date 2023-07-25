import React from 'react';
import {NavLink} from "react-router-dom";

const Menu = () => {

    const pages = [
        {
            title: "Главная",
            link: "/"
        },
        {
            title: "Игры",
            link: "/games"
        }
    ]

    return (
        <>

            {
                pages.map(page =>
                    <li key={page.title} className="header__nav--item">
                        <NavLink to={page.link} className="header__nav--link">
                            {page.title}
                        </NavLink>
                    </li>
                )
            }

        </>
    );
};

export default Menu;