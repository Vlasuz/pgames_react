import React, {useState} from 'react';
import OpenPopup from "../../../hooks/OpenPopup";
import {useDispatch} from "react-redux";
import {popupTitle} from "../../../redux/actions";

const PopupForgotPasswordForm = () => {

    const [valueInput, setValueInput] = useState('')
    const dispatch = useDispatch()

    const handleSend = (e) => {
        e.preventDefault()

        dispatch(popupTitle('forgot-password-send'))
    }

    return (
        <form onSubmit={handleSend} action="#" className="forgot-password-popup__form popup-form">
            <div className="forgot-password-popup__form--list popup-form-list">
                <label className="forgot-password-popup__label popup-label">
                    <input type="email" name="email" required placeholder="Email" value={valueInput} onChange={e => setValueInput(e.target.value)}
                           className="forgot-password-popup__input popup-input email-valid-input"/>
                    <span
                        className="forgot-password-popup__input-placeholder popup-input-placeholder">Email</span>
                </label>
            </div>
            <button type="submit"
                    className={"forgot-password-popup__submit popup-submit btn _large _shadow" + (/\S+@\S+\.\S+/.test(valueInput) ? "" : " _disabled")}>
                Отправить
            </button>
            <a onClick={_ => dispatch(popupTitle('login'))}
               className="forgot-password-popup__link popup-link popup-close open-popup">
                Назад
            </a>
        </form>
    );
};

export default PopupForgotPasswordForm;