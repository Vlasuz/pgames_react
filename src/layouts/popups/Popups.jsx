import React, {useEffect, useState} from 'react';
import Login from "./layouts/login/Login";
import "./style.scss";
import {useDispatch, useSelector} from "react-redux";
import Background from "./components/Background";
import Cross from "./components/Cross";
import Register from "./layouts/register/Register";
import ForgotPassword from "./layouts/ForgotPassword";
import PasswordSent from "./layouts/PasswordSent";
import handleChangePopup from "../../features/handleChangePopup";

const Popups = () => {

    const popup = useSelector(state => state.popupReducer.popup)
    const changePopup = useSelector(state => state.popupReducer.change)
    const dispatch = useDispatch()
    const [isActive, setIsActive] = useState(false)

    const popupList = {
        'null': null,
        'login-popup': <Login/>,
        'register-popup': <Register/>,
        'forgot-password-popup': <ForgotPassword/>,
        'password-sent-popup': <PasswordSent/>,
    }

    useEffect(() => {
        if (!popup) return;

        if(changePopup === "HANDLE_CHANGE") {
            setIsActive(false)
        } else if (popup) {
            setIsActive(true)
        }

    }, [popup, changePopup])

    return (
        <div className="popup" style={{opacity: isActive ? "1" : "0", visibility: isActive ? "visible" : "hidden"}}>
            <div className="popup-wrapper">
                <Background onClick={_ => handleChangePopup(dispatch, null)}/>
                {popupList[popup]}
            </div>
        </div>
    )

};

export default Popups;