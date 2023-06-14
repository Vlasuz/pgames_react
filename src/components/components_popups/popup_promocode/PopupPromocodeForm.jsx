import React, {useState} from 'react';
import ClosePopup from "../../../hooks/ClosePopup";
import {useDispatch, useSelector} from "react-redux";
import {accountBalanceReducer} from "../../../redux/reducers/accountBalanceReducer";
import {addBalance, popupTitle} from "../../../redux/actions";
import axios from "axios";
import GetCookies from "../../../hooks/GetCookies";
import {setTimeoutNotice} from "../../../redux/reducers/notificationReducer";

const PopupPromocodeForm = () => {

    const [inputValue, setInputValue] = useState('')

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()

        axios.defaults.headers.post['Authorization'] = `Bearer ${GetCookies('access_token')}`;
        axios.post(`https://board-games.sonisapps.com/api/finance/promo_code/?code=${inputValue}`).then(res => {
            console.log(res.data)
            dispatch(setTimeoutNotice('notification_promocode-success'))
            setInputValue('')
            dispatch(popupTitle(''))
        }).catch(er => {

            if(er.response.status === 404) {
                dispatch(setTimeoutNotice('notification-promo-404'))
            } else if (er.response.status === 409) {
                dispatch(setTimeoutNotice('notification-promo-409'))
            }

        })
    }

    return (
        <form onSubmit={handleSubmit} action="#" className="promocode-popup__form popup-form">
            <div className="promocode-popup__form--list popup-form-list">
                <label className="promocode-popup__label popup-label">
                    <input onChange={e => setInputValue(e.target.value)} value={inputValue} type="text" name="promocode" required placeholder="Промокод"
                           className="promocode-popup__input popup-input"/>
                    <span
                        className="promocode-popup__input-placeholder popup-input-placeholder">Промокод</span>
                </label>
            </div>
            <button type="submit"
                    className="promocode-popup__submit popup-submit btn _large _shadow">
                Применить
            </button>
        </form>
    );
};

export default PopupPromocodeForm;