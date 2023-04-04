import React, {useState} from 'react';
import openPopup from "../../../hooks/OpenPopup";
import PopupViaSocials from "../PopupViaSocials";
import axios from "axios";
import {setUserInfo} from "../../../redux/reducers/userInfoReducer";
import {useDispatch} from "react-redux";
import ClosePopup from "../../../hooks/ClosePopup";
import {actionLogout} from "../../../redux/actions";
import GlobalLink from "../../../GlobalLink";

const PopupRegistrationForm = () => {

    const [inputEmail, setInputEmail] = useState('');
    const [inputName, setInputName] = useState('');
    const [inputPassword, setInputPassword] = useState('');
    const [inputRepeatPassword, setInputRepeatPassword] = useState('');
    const [isValid, setIsValid] = useState(false)
    const [isCheckedCheckbox, setIsCheckedCheckbox] = useState(true)
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()

        axios.defaults.headers.post['platform'] = `pc`;
        axios.post(GlobalLink(`/api/auth/sign_up/?email=${inputEmail}&username=${inputName}&password=${inputPassword}&confirm_password=${inputRepeatPassword}`))
            .then(res => {
                console.log('res.data', res.data)
                dispatch(actionLogout(prev => !prev))
                dispatch(setUserInfo(res.data.user))
                document.cookie = `access_token=${res.data.access_token}`;
                document.cookie = `refresh_token=${res.data.refresh_token}`;

                ClosePopup("#registration-popup")
                setInputEmail('')
                setInputName('')
                setInputPassword('')
                setInputRepeatPassword('')
                setIsValid('')

            })
        setIsValid(true)
    }

    return (
        <form onSubmit={handleSubmit} action="#" className="registration-popup__form popup-form">
            <div className="registration-popup__form--list popup-form-list">
                <label className={"registration-popup__label popup-label"}>
                    <input onChange={e => setInputEmail(e.target.value)} value={inputEmail} type="text" name="email"
                           placeholder="Email"
                           className="registration-popup__input popup-input email-valid-input"/>
                    <span
                        className="registration-popup__input-placeholder popup-input-placeholder">Email</span>
                </label>
                <label className={"registration-popup__label popup-label"}>
                    <input onChange={e => setInputName(e.target.value)} value={inputName} type="text" name="name"
                           placeholder="Имя пользователя"
                           className="registration-popup__input popup-input"/>
                    <span
                        className="registration-popup__input-placeholder popup-input-placeholder">Имя пользователя</span>
                </label>
                <label className={"registration-popup__label popup-label"}>
                    <input onChange={e => setInputPassword(e.target.value)} value={inputPassword} type="password"
                           name="password" placeholder="Пароль"
                           className="registration-popup__input popup-input"/>
                    <span
                        className="registration-popup__input-placeholder popup-input-placeholder">Пароль</span>
                </label>
                <label className={"registration-popup__label popup-label"}>
                    <input onChange={e => setInputRepeatPassword(e.target.value)} value={inputRepeatPassword}
                           type="password" name="password-repeat"
                           placeholder="Повторите пароль"
                           className="registration-popup__input popup-input"/>
                    <span
                        className="registration-popup__input-placeholder popup-input-placeholder">Повторите пароль</span>
                </label>
            </div>
            <div className="registration-popup__checkbox popup-checkbox">
                <label className="popup-checkbox__label">
                    <input type="checkbox" name="service-usage-rules" defaultChecked={isCheckedCheckbox}
                           onChange={e => setIsCheckedCheckbox(e.target.value)}
                           className="popup-checkbox__input"/>
                    <span className="popup-checkbox__element">
                    </span>
                    <span className="popup-checkbox__text">
                        Я соглашаюсь со всеми <a href="index.html">правилами использования сервиса</a>
                    </span>
                </label>
            </div>
            <ul className="errors-form">
                {!isValid || inputEmail.length > 0 && /\S+@\S+\.\S+/.test(inputEmail) ? "" :
                    <li>Пожалуйста, укажите верно почту</li>}
                {!isValid || inputPassword.length > 0 && inputName.length > 0 && inputRepeatPassword.length > 0 ? "" :
                    <li>Пожалуйста, заполните все поля</li>}
                {!isValid || inputPassword === inputRepeatPassword ? "" : <li>Пароли не совпадают</li>}
            </ul>
            <button type="submit"
                    className="registration-popup__submit popup-submit btn _large _shadow">
                Зарегистрироваться
            </button>
            <a href="#login-popup" onClick={openPopup}
               className="registration-popup__link popup-link popup-close open-popup">
                У меня уже есть аккаунт
            </a>
            <div className="registration-popup__via popup-via">
                <div className="popup-via__body">
                    <h3 className="popup-via__title">
                        Зарегестрироваться через
                    </h3>
                    <PopupViaSocials/>
                </div>
            </div>
        </form>
    );
};

export default PopupRegistrationForm;