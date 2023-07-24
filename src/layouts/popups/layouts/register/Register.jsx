import React from 'react';
import handleChangePopup from "../../../../features/handleChangePopup";
import {useDispatch} from "react-redux";
import logo from "../../../../assets/img/logo.svg"
import Decor from "../../components/Decor";
import Cross from "../../components/Cross";
import Form from "./components/Form";

const Register = () => {
    return (
        <div className="registration-popup__body popup-body">
            <Decor/>
            <div className="registration-popup__container popup-container">
                <Cross/>
                <div className="registration-popup__logo popup-logo">
                    <img src={logo} width="100" height="38" alt="" className="popup-logo__img"/>
                </div>
                <h2 className="registration-popup__title popup-title section-title _center">
                    Регистрация
                </h2>
                <Form/>
            </div>
        </div>
    );
};

export default Register;