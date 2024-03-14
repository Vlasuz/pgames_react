import React, {Dispatch, SetStateAction, useContext, useEffect} from 'react'
import {IsActiveModalContext, IsHiddenModalContext} from "../Popups";
import {PopupContext} from "../../../App";

interface IPopupWinnerGameProps {

}

export const PopupWinnerGame: React.FC<IPopupWinnerGameProps> = () => {

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
        <div className="popup__body popup-body">
            <div className="popup__container popup-container">
                <button type="button" className="popup-close-btn popup-close" title="Закрыть">
                    <svg viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.7886 4.23486L4.59619 12.7049" stroke="#F9F1DF"></path>
                        <path d="M4.59619 4.23486L13.7886 12.7049" stroke="#F9F1DF"></path>
                    </svg>
                </button>
                <h2 className="popup__title popup-title section-title _decor-none">
                    Вы выграли
                </h2>
                <div className="popup__text popup-text _left">
                    Поздравляем!
                    <br/>
                    <br/>
                    <br/>
                </div>
                <button onClick={handleCloseModal} className="popup__btn btn popup-btn _green">
                    Ок
                </button>
            </div>
        </div>
    )
}
