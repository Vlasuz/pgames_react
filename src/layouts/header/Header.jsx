import React from 'react';
import Logo from "../../components/Logo";
import "./style.scss";

import Menu from "./components/Menu";
import Balance from "./components/Balance";
import Notifications from "./components/Notifications";
import Languages from "./components/Languages";
import Account from "./components/Account";
import AccountMob from "./components/AccountMob";
import Burger from "./components/Burger";
import {useDispatch, useSelector} from "react-redux";
import {setPopup} from "../../store/reducers/popupReducer";
import {use} from "i18next";
import isAuth from "../../features/isAuth";
import Login from "./components/Login";
import NavigationMob from "./components/NavigationMob";

const Header = () => {

    const userData = useSelector(state => state.userDataReducer.userData)

    return (
        <header className="header">
            <div className="header__container container _large">
                <Logo className="header__logo" />
                <nav className="header__nav">
                    <div className="header__nav--body">
                        <ul className="header__nav--list">
                            <Menu/>
                        </ul>
                        <div className="header__nav--user-info header__user-info">
                            {
                                isAuth(<Balance userData={userData}/>)
                            }
                            {
                                isAuth(<Notifications/>)
                            }
                        </div>
                        <Languages/>

                        {
                            isAuth(<Account userData={userData}/>, <Login/>)
                        }

                    </div>
                </nav>
                <NavigationMob/>
            </div>
        </header>
    );
};

export default Header;