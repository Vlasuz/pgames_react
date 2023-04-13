import React, {useState} from 'react';
import openPopup from "../../../hooks/OpenPopup";
import PopupViaSocials from "../PopupViaSocials";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {actionLogout} from "../../../redux/actions";
import ClosePopup from "../../../hooks/ClosePopup";
import axios from "axios";
import {setUserInfo} from "../../../redux/reducers/userInfoReducer";
import GlobalLink from "../../../GlobalLink";

const PopupLoginForm = () => {

    const dispatch = useDispatch()

    const [inputEmail, setInputEmail] = useState('');
    const [inputPassword, setInputPassword] = useState('');
    const [isValid, setIsValid] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()

        setIsValid(true)

        if (inputEmail && /\S+@\S+\.\S+/.test(inputEmail) && inputPassword) {

            axios.defaults.headers.post['platform'] = `pc`;
            axios.post(GlobalLink(`/api/auth/sign_in/?email=${inputEmail}&password=${inputPassword}`)).then(res => {
                console.log(res.data)
                dispatch(setUserInfo(res.data.user))
                dispatch(actionLogout(prev => !prev))
                document.cookie = `access_token=${res.data.access_token}`;
                document.cookie = `refresh_token=${res.data.refresh_token}`;
                ClosePopup("#login-popup")
                setInputEmail('')
                setInputPassword('')
            }).catch(er => {
                console.log(er)
            })

        }
    }

    return (
        <form onSubmit={handleSubmit} action="#" className="login-popup__form popup-form">
            <div className="login-popup__form--list popup-form-list">
                <label className={"login-popup__label popup-label"}>
                    <input onChange={e => setInputEmail(e.target.value)} value={inputEmail} type="text" name="email"
                           placeholder="Email"
                           className="login-popup__input popup-input email-valid-input"/>
                    <span className="login-popup__input-placeholder popup-input-placeholder">Email</span>
                </label>
                <label className={"login-popup__label popup-label"}>
                    <input onChange={e => setInputPassword(e.target.value)} value={inputPassword} type="password"
                           name="password" placeholder="Пароль"
                           className="login-popup__input popup-input"/>
                    <span className="login-popup__input-placeholder popup-input-placeholder">Пароль</span>
                </label>
            </div>
            <ul className="errors-form">
                {!isValid || inputEmail.length > 0 && /\S+@\S+\.\S+/.test(inputEmail) ? "" :
                    <li>Пожалуйста, укажите верно почту</li>}
                {!isValid || inputPassword.length > 0 ? "" : <li>Пожалуйста, заполните все поля</li>}
            </ul>
            <button type="submit" className="login-popup__submit popup-submit btn _large _shadow">
                Войти
            </button>
            <a href="#registration-popup" onClick={openPopup}
               className="login-popup__link popup-link popup-close open-popup">
                Зарегестрироваться
            </a>
            <a href="#forgot-password-popup" onClick={openPopup}
               className="login-popup__link popup-link popup-close open-popup">
                Забыли пароль?
            </a>
            <div className="login-popup__via popup-via">
                <div className="popup-via__body">
                    <h3 className="popup-via__title">
                        Войти через
                    </h3>
                    <PopupViaSocials/>
                </div>
            </div>
        </form>
    );
};

export default PopupLoginForm;