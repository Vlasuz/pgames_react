import React, {useState} from 'react';
import AccountMob from "./AccountMob";
import Burger from "./Burger";
import Menu from "./Menu";

const NavigationMob = () => {

    const [isActive, setIsActive] = useState(false)

    return (
        <>
            <div className={"header__nav-mob" + (isActive ? " _active" : "")}>
                <div className="header__nav-mob--bg">
                    <picture>
                        <source srcSet="img/header/bg.webp" type="image/webp"/>
                        <img src="img/header/bg.png" alt="" loading="lazy" width="0" height="0"
                             className="header__nav-mob--bg-img"/>
                    </picture>
                </div>
                <div className="header__nav-mob--body">
                    <ul className="header__nav-mob--list">
                        <AccountMob/>
                        <Menu/>
                    </ul>
                </div>
            </div>
            <Burger onClick={_ => setIsActive(prev => !prev)} className={"header__burger" + (isActive ? " _active" : "")}/>
        </>
    );
};

export default NavigationMob;