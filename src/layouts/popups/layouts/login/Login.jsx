import React from 'react';
import logo from "../../../../assets/img/logo.svg"
import Decor from "../../components/Decor";
import Form from "./components/Form";
import Cross from "../../components/Cross";

const Login = () => {
    return (
        <div className="login-popup__body popup-body">
            <Decor/>
            <div className="login-popup__container popup-container">
                <Cross/>
                <div className="login-popup__logo popup-logo">
                    <img src={logo} width="100" height="38" alt="" className="popup-logo__img"/>
                </div>
                <h2 className="login-popup__title popup-title section-title _center">
                    Вход
                </h2>
                <Form/>
            </div>
        </div>
    );
};

export default Login;