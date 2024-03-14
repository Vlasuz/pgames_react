import React, {useEffect, useRef, useState} from 'react'
import noPhoto from "../../../assets/img/placeholder.jpg";
import {IUser} from "../../../models";
import {useDispatch, useSelector} from "react-redux";
import {getApiLink} from "../../../functions/getApiLink";
import { removeUser } from '../../../storage/toolkit';
import setCookie from "../../../functions/setCookie";
import {NavLink} from "react-router-dom";
import {useClickOutside} from "../../../hooks/ClickOutside";

interface IHeaderUserProps {

}

export const HeaderUser: React.FC<IHeaderUserProps> = () => {

    const user: IUser = useSelector((state: any) => state.toolkit.user)

    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(removeUser())
        setCookie("access_token_pg", "", 0)
        setCookie("refresh_token_pg", "", 0)

        handleClose()
    }

    const buttonRef = useRef<HTMLButtonElement>(null);
    const blockRef = useRef<HTMLDivElement>(null);
    const [isOpenPopup, setIsOpenPopup] = useState(false);

    useClickOutside({ button: buttonRef, block: blockRef, setState: setIsOpenPopup });


    const handlePopupOpen = () => {
        setIsOpenPopup(prev => !prev)
    }

    const handleClose = () => {
        setIsOpenPopup(false)
    }

    return (
        <div className={`header__nav--account header__account header__drop-down ${isOpenPopup && "_active"}`}>
            <button ref={buttonRef} onClick={handlePopupOpen} type="button" className="header__account--target header__drop-down--target">
                <picture>
                    <img src={user?.avatar ? getApiLink(`/${user?.avatar}`) : noPhoto} width="27" height="27" alt="Ваш аватар"
                         loading="lazy" className="header__account--avatar"/>
                </picture>
                <span className="header__account--name">
                    {
                        user?.username
                    }
                </span>
                <svg width="7" height="5" viewBox="0 0 7 5" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M3.49991 4.75C3.35065 4.75 3.20132 4.69507 3.08757 4.5852L0.170898 1.7727C-0.0569661 1.55298 -0.0569661 1.19702 0.170898 0.977295C0.398763 0.757568 0.767904 0.757568 0.995768 0.977295L3.49991 3.39297L6.0046 0.977734C6.23246 0.758008 6.6016 0.758008 6.82947 0.977734C7.05733 1.19746 7.05733 1.55342 6.82947 1.77314L3.9128 4.58564C3.79887 4.69551 3.64939 4.75 3.49991 4.75Z"
                        fill="#F9F1DF"/>
                </svg>
            </button>
            <div ref={blockRef} className="header__drop-down--block">
                <div className="header__drop-down--body">
                    <ul className="header__drop-down--list">
                        <li className="header__drop-down--item">
                            <NavLink onClick={handleClose} to={"/profile"} className="header__drop-down--link">
                                Профиль
                            </NavLink>
                        </li>
                        <li className="header__drop-down--item">
                            <NavLink onClick={handleClose} to={"/profile-settings"} className="header__drop-down--link">
                                Настройки
                            </NavLink>
                        </li>
                        <li className="header__drop-down--item _line">
                            <a onClick={handleLogout} className="header__drop-down--link">
                                Выйти
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
