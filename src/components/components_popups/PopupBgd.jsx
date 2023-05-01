import React from 'react';
import ClosePopup from "../../hooks/ClosePopup";
import {useDispatch} from "react-redux";
import {popupTitle} from "../../redux/actions";

const PopupBgd = () => {

    const dispatch = useDispatch()
    const handleClosePopup = () => {
        document.querySelector('.popup')?.classList.remove('_active')
        setTimeout(() => {
            dispatch(popupTitle(''))
        }, 300)
    }

    return (
        <div onClick={handleClosePopup} className="popup-bg popup-close" />
    );
};

export default PopupBgd;