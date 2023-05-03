import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import HeaderMobNav from "./HeaderMobNav";

const HeaderMobBurgerMenu = () => {

    const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false)

    return (
        <>
            <div
                className={"header__nav-mob" + (isBurgerMenuOpen ? " _active" : "")}
            >
                <div className="header__nav-mob--bg">
                    <picture>
                        <source srcSet="images/header/bg.webp" type="image/webp"/>
                        <img src="images/header/bg.png" alt="" loading="lazy" width="0" height="0"
                             className="header__nav-mob--bg-img"/>
                    </picture>
                </div>
                <HeaderMobNav/>
            </div>
            <button
                className={"header__burger" + (isBurgerMenuOpen ? " _active" : "")}
                aria-label="Menu"
                onClick={() => setIsBurgerMenuOpen(prev => !prev)}
            >
                <span/>
                <span/>
                <span/>
            </button>
        </>
    );
};

export default HeaderMobBurgerMenu;