import React, {useState} from 'react';
import ClosePopup from "../../../hooks/ClosePopup";
import {useDispatch} from "react-redux";
import {popupTitle} from "../../../redux/actions";
import ActiveNotification from "../../../hooks/ActiveNotification";

const PopupSubscribeForm = () => {

    const [value, setValue] = useState('')
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()

        setValue('')
        ActiveNotification('#notification_subscribe-success')

        setTimeout(() => {
            dispatch(popupTitle(''))
        }, 1000)
    }

    return (
        <form onSubmit={handleSubmit} action="#" className="subscribe-popup__form popup-form">
            <div className="subscribe-popup__form--list popup-form-list">
                <label className="subscribe-popup__label popup-label">
                    <input value={value} onChange={e => setValue(e.target.value)} type="email" name="email" required placeholder="Email"
                           className="subscribe-popup__input popup-input email-valid-input"/>
                    <span
                        className="subscribe-popup__input-placeholder popup-input-placeholder">Email</span>
                </label>
            </div>
            <button type="submit"
                    className={"subscribe-popup__submit popup-submit btn _large _shadow" + ( /\S+@\S+\.\S+/.test(value) ? "" : " _disabled" )}>
                Подписаться
            </button>
            <a onClick={_ => dispatch(popupTitle(''))} className="subscribe-popup__link popup-link popup-close">
                Назад
            </a>
        </form>
    );
};

export default PopupSubscribeForm;