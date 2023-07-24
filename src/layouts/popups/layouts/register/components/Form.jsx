import React, {useEffect, useState} from 'react';
import handleChangePopup from "../../../../../features/handleChangePopup";
import {useDispatch} from "react-redux";
import AuthViaSocials from "../../../components/AuthViaSocials";
import registration from "../../../../../api/registration";

const Form = () => {

    const dispatch = useDispatch()

    const [emailValue, setEmailValue] = useState("")
    const [checkboxValue, setCheckboxValue] = useState("")
    const [nameValue, setNameValue] = useState("")
    const [passwordValue, setPasswordValue] = useState("")
    const [passwordRepeatValue, setPasswordRepeatValue] = useState("")

    const [isCheck, setIsCheck] = useState(false)

    const handleRegister = (e) => {
        e.preventDefault()
        setIsCheck(true)

        if(checkErrors() === null) {
            setIsCheck(false)

            registration(e, dispatch, emailValue, nameValue, passwordValue, passwordRepeatValue)
        }
    }

    useEffect(() => {
        setIsCheck(false)
    }, [emailValue, checkboxValue, nameValue, passwordValue, passwordRepeatValue])

    const checkErrors = () => {
        if(!emailValue || !nameValue || !passwordValue || !passwordRepeatValue) {
            return "Заполните пустые поля"
        } else if (passwordValue !== passwordRepeatValue) {
            return "Пароли не совпадают"
        } else if (!(/\S+@\S+\.\S+/.test(emailValue))) {
            return "Email введен не верно"
        } else if (!checkboxValue) {
            return "Вы не подтвердили условия"
        } else {
            return null
        }
    }

    return (
        <form onSubmit={handleRegister} className="registration-popup__form popup-form">
            <div className="registration-popup__form--list popup-form-list">
                <label className="registration-popup__label popup-label">
                    <input onChange={e => setEmailValue(e.target.value)} value={emailValue} type="text" name="email" placeholder="Email"
                           className="registration-popup__input popup-input email-valid-input"/>
                    <span
                        className="registration-popup__input-placeholder popup-input-placeholder">Email</span>
                </label>
                <label className="registration-popup__label popup-label">
                    <input onChange={e => setNameValue(e.target.value)} value={nameValue} type="text" name="name" placeholder="Имя пользователя"
                           className="registration-popup__input popup-input"/>
                    <span className="registration-popup__input-placeholder popup-input-placeholder">Имя пользователя</span>
                </label>
                <label className="registration-popup__label popup-label">
                    <input onChange={e => setPasswordValue(e.target.value)} value={passwordValue} type="password" name="password" placeholder="Пароль"
                           className="registration-popup__input popup-input"/>
                    <span
                        className="registration-popup__input-placeholder popup-input-placeholder">Пароль</span>
                </label>
                <label className="registration-popup__label popup-label">
                    <input onChange={e => setPasswordRepeatValue(e.target.value)} value={passwordRepeatValue} type="password" name="password-repeat" placeholder="Повторите пароль"
                           className="registration-popup__input popup-input"/>
                    <span className="registration-popup__input-placeholder popup-input-placeholder">Повторите пароль</span>
                </label>
            </div>
            <div className="registration-popup__checkbox popup-checkbox">
                <label className="popup-checkbox__label">
                    <input onChange={e => setCheckboxValue(e.target.checked)} value={checkboxValue} type="checkbox" name="service-usage-rules" className="popup-checkbox__input"/>
                    <span className="popup-checkbox__element" />
                    <span className="popup-checkbox__text">
                        Я соглашаюсь со всеми <a href="index.html">правилами использования сервиса</a>
                    </span>
                </label>
            </div>
            <span className="feedback__input-name">{isCheck && checkErrors()}</span>
            <button type="submit" className="registration-popup__submit popup-submit btn _large _shadow">
                Зарегистрироваться
            </button>
            <a onClick={_ => handleChangePopup(dispatch, 'login-popup')} className="registration-popup__link popup-link popup-close open-popup">
                У меня уже есть аккаунт
            </a>
            <AuthViaSocials/>
        </form>
    );
};

export default Form;