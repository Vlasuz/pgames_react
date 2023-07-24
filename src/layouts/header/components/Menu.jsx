import React from 'react';

const Menu = () => {
    return (
        <>
            <li className="header__nav--item">
                <a className="header__nav--link _current">
                    Главная
                </a>
            </li>
            <li className="header__nav--item">
                <a href="online-games.html" className="header__nav--link">
                    Игры
                </a>
            </li>
            <li className="header__nav--item">
                <a href="rooms.html" className="header__nav--link">
                    Комнаты
                </a>
            </li>
            <li className="header__nav--item">
                <a href="#" className="header__nav--link">
                    Новости
                </a>
            </li>
            <li className="header__nav--item">
                <a href="#" className="header__nav--link">
                    Преимущества
                </a>
            </li>
        </>
    );
};

export default Menu;