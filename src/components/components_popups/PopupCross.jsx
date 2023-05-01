import React from 'react';
import ClosePopup from "../../hooks/ClosePopup";
import {useDispatch} from "react-redux";
import {popupTitle} from "../../redux/actions";

const PopupCross = () => {

    const dispatch = useDispatch()
    const handleClosePopup = () => {
        document.querySelector('.popup')?.classList.remove('_active')
        setTimeout(() => {
            dispatch(popupTitle(''))
        }, 300)
    }

    return (
        <button type="button" onClick={handleClosePopup} className="promocode-popup__close-btn popup-close-btn popup-close"
                title="Закрыть">
            <svg viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.7886 4.23486L4.59619 12.7049" stroke="#F9F1DF"/>
                <path d="M4.59619 4.23486L13.7886 12.7049" stroke="#F9F1DF"/>
            </svg>
        </button>
    );
};

export default PopupCross;