import React, {useState} from 'react';
import ClosePopup from "../../../hooks/ClosePopup";
import ActiveNotification from "../../../hooks/ActiveNotification";
import {useDispatch, useSelector} from "react-redux";
import {accountBalanceReducer} from "../../../redux/reducers/accountBalanceReducer";
import {addBalance} from "../../../redux/actions";

const PopupPromocodeForm = () => {

    const [inputValue, setInputValue] = useState('')

    const balance = useSelector(state => {
        const { accountBalanceReducer } = state
        return accountBalanceReducer.balance
    })

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        if(inputValue.toLowerCase() === 'хочубонус!'){
            ActiveNotification('#notification_add-bonus')
            dispatch(addBalance({
                chips: balance.chips + 20,
                money: balance.money
            }))
            ClosePopup(e, "#promocode-popup")
        }
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