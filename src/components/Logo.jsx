import React from 'react';
import {NavLink} from "react-router-dom";
import logo from "./../assets/img/logo.svg";

const Logo = (props) => {
    return (
        <NavLink to={'/'} {...props}>
            <img src={logo} alt="" className="header__logo--img"/>
        </NavLink>
    );
};

export default Logo;