import React, {useState} from 'react';
import openPopup from "../../../hooks/OpenPopup";
import PopupViaSocials from "../PopupViaSocials";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {actionLogout, popupTitle} from "../../../redux/actions";
import ClosePopup from "../../../hooks/ClosePopup";
import axios from "axios";
import {setUserInfo} from "../../../redux/reducers/userInfoReducer";
import GlobalLink from "../../../GlobalLink";

const PopupLoginForm = () => {

    const dispatch = useDispatch()

    const [inputEmail, setInputEmail] = useState('');
    const [inputPassword, setInputPassword] = useState('');
    const [isValidEP, setIsValidEP] = useState(true)
    const [isValidData, setIsValidData] = useState(true)
    const [isValidEmail, setIsValidEmail] = useState(true)
    const [isValidPass, setIsValidPass] = useState(true)

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsValidEP(true)
        setIsValidEmail(true)
        setIsValidPass(true)
        setIsValidData(true)


        if (!inputPassword.length) {
            setIsValidPass(false)
            return null;
        }
        if (!/\S+@\S+\.\S+/.test(inputEmail)) {
            setIsValidEmail(false)
            return null;
        }


        axios.defaults.headers.post['platform'] = `pc`;
        axios.post(GlobalLink(`/api/auth/sign_in/?email=${inputEmail}&password=${inputPassword}`)).then(res => {
            document.cookie = `access_token=${res.data.access_token}`;
            document.cookie = `refresh_token=${res.data.refresh_token}`;

            setTimeout(() => {
                dispatch(setUserInfo(res.data.user))
                dispatch(actionLogout(prev => !prev))
            }, 100)
            document.querySelector('.popup')?.classList.remove('_active')
            setTimeout(() => {
                dispatch(popupTitle(''))
            }, 300)

            setInputEmail('')
            setInputPassword('')
        }).catch(er => {
            console.log(er)

            if (er.response.data.detail === "Incorrect username or password") {
                setIsValidEP(false)
            } else if (er.response.data.detail === "Could not validate credentials") {
                setIsValidData(false)
            }
        })

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
                {!isValidEmail && <li>Пожалуйста, укажите верно почту</li>}
                {!isValidPass && <li>Пожалуйста, заполните все поля</li>}
                {!isValidEP && <li>Неверный пароль</li>}
                {!isValidData && <li>Неверные данные</li>}
            </ul>
            <button type="submit" className="login-popup__submit popup-submit btn _large _shadow">
                Войти
            </button>
            <a onClick={_ => dispatch(popupTitle('registration'))}
               className="login-popup__link popup-link popup-close open-popup">
                Зарегестрироваться
            </a>
            <a onClick={_ => dispatch(popupTitle('forgot-password'))}
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