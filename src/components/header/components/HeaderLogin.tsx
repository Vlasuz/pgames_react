import React, {Dispatch, SetStateAction, useContext, useEffect, useState} from 'react'
import {PopupContext} from "../../../App";

interface IHeaderLoginProps {

}

export const HeaderLogin: React.FC<IHeaderLoginProps> = () => {

    const setModal: Dispatch<SetStateAction<string>> = useContext(PopupContext)

    const handleOpenLoginModal = () => {
        setModal("login")
    }

    return (
        <button onClick={handleOpenLoginModal} className="link-to-register btn _gradient _shadow">
            Войти
        </button>
    )
}
