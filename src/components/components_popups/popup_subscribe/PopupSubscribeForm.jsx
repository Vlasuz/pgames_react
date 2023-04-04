import React, {useState} from 'react';
import ClosePopup from "../../../hooks/ClosePopup";

const PopupSubscribeForm = () => {

    const [inputValid, setInputValid] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        setInputValid('')
        ClosePopup('#subscribe-popup')
    }

    return (
        <form onSubmit={handleSubmit} action="#" className="subscribe-popup__form popup-form">
            <div className="subscribe-popup__form--list popup-form-list">
                <label className="subscribe-popup__label popup-label">
                    <input value={inputValid} onChange={e => setInputValid(e.target.value)} type="email" name="email" required placeholder="Email"
                           className="subscribe-popup__input popup-input email-valid-input"/>
                    <span
                        className="subscribe-popup__input-placeholder popup-input-placeholder">Email</span>
                </label>
            </div>
            <button type="submit"
                    className={"subscribe-popup__submit popup-submit btn _large _shadow" + ( /\S+@\S+\.\S+/.test(inputValid) ? "" : " _disabled" )}>
                Подписаться
            </button>
            <a className="subscribe-popup__link popup-link popup-close">
                Назад
            </a>
        </form>
    );
};

export default PopupSubscribeForm;