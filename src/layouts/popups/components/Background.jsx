import React from 'react';
import {useDispatch} from "react-redux";
import {removePopup} from "../../../store/reducers/popupReducer";

const Background = (props) => {
    return (
        <div {...props} className="popup-bg popup-close" />
    );
};

export default Background;