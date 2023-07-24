import React from 'react';
import ClickOutsideBlock from "../../../hooks/ClickOutsideBlock";
import {useDispatch} from "react-redux";
import logout from "../../../api/logout";
import checkUserAvatar from "../../../features/checkUserAvatar";
import UserInfo from "./UserInfo";

const Account = ({userData}) => {

    const { ref, isActive, setIsActive } = ClickOutsideBlock()
    const dispatch = useDispatch()

    return (
        <div ref={ref} className={"header__nav--account header__account header__drop-down" + (isActive ? " _active" : "")}>
            <UserInfo userData={userData} setIsActive={setIsActive}/>
            <div className="header__drop-down--block">
                <div className="header__drop-down--body">
                    <ul className="header__drop-down--list">
                        <li className="header__drop-down--item">
                            <a href="#" className="header__drop-down--link">
                                Профиль
                            </a>
                        </li>
                        <li className="header__drop-down--item">
                            <a href="#" className="header__drop-down--link">
                                Настройки
                            </a>
                        </li>
                        <li className="header__drop-down--item _line">
                            <a onClick={_ => logout(dispatch)} className="header__drop-down--link">
                                Выйти
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Account;