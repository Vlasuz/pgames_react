import React from 'react';
import {useDispatch} from "react-redux";
import {popupTitle} from "../redux/actions";

const ClosePopup = () => {
    const dispatch = useDispatch()

    document.querySelector('.popup')?.classList.remove('_active')
    dispatch(popupTitle(''))
};

export default ClosePopup;