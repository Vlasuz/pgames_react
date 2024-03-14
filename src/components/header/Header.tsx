import React from 'react'
import {HeaderStyled} from "./Header.styled";
import logo from './../../assets/img/logo.svg'
import iconInfo from './../../assets/img/icons/info.svg'
import iconBell from './../../assets/img/icons/bell.svg'
import avatar from './../../assets/img/header/avatar.jpg'
import chipLength from './../../assets/img/header/chip-length.svg'
import dollar from './../../assets/img/header/dollar.svg'
import {HeaderNavigation} from "./components/HeaderNavigation";
import {NavLink} from "react-router-dom";

interface IHeaderProps {

}

export const Header: React.FC<IHeaderProps> = () => {

    return (
        <HeaderStyled className="header">
            <div className="header__container container _large">
                <NavLink to={"/"} className="header__logo">
                    <img src={logo} alt="" width="150" className="header__logo--img"/>
                </NavLink>
                <HeaderNavigation/>
                <button className="header__burger" aria-label="Menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </HeaderStyled>
    )
}
