import React, {Dispatch, SetStateAction, useContext, useEffect} from 'react'
import {IsActiveModalContext, IsHiddenModalContext} from '../Popups'
import {PopupContext} from "../../../App";

interface IClosePopupProps {

}

export const ClosePopup: React.FC<IClosePopupProps> = () => {

    const setIsModalActive: Dispatch<SetStateAction<boolean>> = useContext(IsActiveModalContext)
    const setIsHiddenModal: Dispatch<SetStateAction<boolean>> = useContext(IsHiddenModalContext)
    const setModal: Dispatch<SetStateAction<string>> = useContext(PopupContext)

    const handleCloseModal = () => {
        setIsModalActive(false)

        setTimeout(() => {
            setIsHiddenModal(true)
            setModal("")
        }, 300)
    }

    return (
        <button type="button" className="popup__close-btn popup-close-btn popup-close" title="Закрыть" onClick={handleCloseModal}>
            <svg viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.7886 4.23486L4.59619 12.7049" stroke="#F9F1DF"/>
                <path d="M4.59619 4.23486L13.7886 12.7049" stroke="#F9F1DF"/>
            </svg>
        </button>
    )
}
