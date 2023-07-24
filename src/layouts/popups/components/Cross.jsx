import React from 'react';
import {removePopup} from "../../../store/reducers/popupReducer";
import {useDispatch} from "react-redux";
import handleChangePopup from "../../../features/handleChangePopup";

const Cross = () => {

    const dispatch = useDispatch()

    return (
        <button onClick={_ => handleChangePopup(dispatch, null)} type="button" className="popup-close-btn popup-close"
                title="Закрыть">
            <svg viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.7886 4.23486L4.59619 12.7049" stroke="#F9F1DF"/>
                <path d="M4.59619 4.23486L13.7886 12.7049" stroke="#F9F1DF"/>
            </svg>
        </button>
    );
};

export default Cross;