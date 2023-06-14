import React, {useState} from 'react';
import {Link, NavLink, useNavigate} from "react-router-dom";
import ActiveDropdown from "../../hooks/ActiveDropdown";
import {useDispatch, useSelector} from "react-redux";
import {actionLogout} from "../../redux/actions";
import axios from "axios";
import GetCookies from "../../hooks/GetCookies";
import GlobalLink from "../../GlobalLink";
import {setUserInfo} from "../../redux/reducers/userInfoReducer";

const HeaderAccount = () => {

    const [isOpen, setIsOpen] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const userInfo = useSelector(state => state.userInfoReducer.data)

    ActiveDropdown(setIsOpen, ".header__account")

    const handleLogout = () => {
        axios.defaults.headers.post['platform'] = `pc`;
        axios.defaults.headers.post['Authorization'] = `Bearer ${GetCookies('refresh_token')}`;
        axios.post(GlobalLink(`/api/user/logout/`)).then(({data}) => {
            dispatch(setUserInfo({}))
            document.cookie = "access_token=; expires=Thu, 18 Dec 2013 12:00:00 UTC";
            GetCookies('access_token')

            if(window.location.href.includes('account')) {
                navigate('/')
            }

        }).catch(error => {
            if(error.response.status === '498') {
                dispatch(setUserInfo({}))
                document.cookie = "access_token=; expires=Thu, 18 Dec 2013 12:00:00 UTC";
                GetCookies('access_token')
            }

        })
    }

    return (
        <div
            className={"header__nav--account header__account header__drop-down" + (isOpen ? " _active" : "")}>
            <button
                type="button"
                className="header__account--target header__drop-down--target"
                onClick={() => setIsOpen(prev => !prev)}
            >

                <picture>
                    <img src={userInfo.avatar ? GlobalLink('/'+userInfo.avatar) :  "images/account/avatar-none.svg"} alt="" width="27" height="27" alt="Ваш аватар" loading="lazy"
                         className="header__account--avatar"/>
                </picture>
                <span className="header__account--name">
                    {userInfo.username || "Unknown"}
                </span>
                <svg width="7" height="5" viewBox="0 0 7 5" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M3.49991 4.75C3.35065 4.75 3.20132 4.69507 3.08757 4.5852L0.170898 1.7727C-0.0569661 1.55298 -0.0569661 1.19702 0.170898 0.977295C0.398763 0.757568 0.767904 0.757568 0.995768 0.977295L3.49991 3.39297L6.0046 0.977734C6.23246 0.758008 6.6016 0.758008 6.82947 0.977734C7.05733 1.19746 7.05733 1.55342 6.82947 1.77314L3.9128 4.58564C3.79887 4.69551 3.64939 4.75 3.49991 4.75Z"
                        fill="#F9F1DF"/>
                </svg>
            </button>
            <div className="header__drop-down--block">
                <div className="header__drop-down--body">
                    <ul className="header__drop-down--list">
                        <li className="header__drop-down--item">
                            <Link to={"/account-main"} className="header__drop-down--link">
                                Профиль
                            </Link>
                        </li>
                        <li className="header__drop-down--item">
                            <NavLink to={"/account-settings"} className="header__drop-down--link">
                                Настройки
                            </NavLink>
                        </li>
                        <li className="header__drop-down--item _line">
                            <button
                                className="header__drop-down--link"
                                onClick={handleLogout}
                            >
                                Выйти
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default HeaderAccount;