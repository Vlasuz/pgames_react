import React from 'react';
import {setPopup} from "../../../store/reducers/popupReducer";
import {useDispatch} from "react-redux";

const Login = () => {

    const dispatch = useDispatch()

    return (
        <a onClick={_ => dispatch(setPopup('login-popup'))} className={'header__auth btn _gradient _shadow'}>Войти</a>
    );
};

export default Login;