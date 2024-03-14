import React, {createContext, Dispatch, SetStateAction, useContext, useEffect, useState} from 'react'
import {PopupsStyled} from "./Popups.styled";
import {PopupContext} from "../../App";
import {PopupLogin} from "./components/PopupLogin";
import {PopupRegistration} from "./components/PopupRegistration";
import {PopupPokerCombination} from "./components/PopupPokerCombination";
import {PopupWinnerGame} from "./components/PopupWinnerGame";

interface IPopupsProps {
    modal: string
}

export const IsActiveModalContext: any = createContext(null);
export const IsHiddenModalContext: any = createContext(null);

export const Popups: React.FC<IPopupsProps> = ({modal}) => {

    const [oldModal, setOldModal] = useState("")
    const [localModal, setLocalModal] = useState(modal)
    const [isModalActive, setIsModalActive] = useState(false)
    const [isHiddenModal, setIsHiddenModal] = useState(true)

    const setModal: Dispatch<SetStateAction<string>> = useContext(PopupContext)

    const handleCloseModal = () => {
        setIsModalActive(false)

        setTimeout(() => {
            setIsHiddenModal(true)
            setModal("")
            setLocalModal("")
            setOldModal("")
        }, 300)
    }

    const handleOpenModal = () => {
        setIsHiddenModal(false)

        setOldModal(modal)

        setTimeout(() => {
            setIsModalActive(true)
        }, 10)
    }

    useEffect(() => {
        if (!modal) return;

        if(oldModal !== modal) {
            setIsModalActive(false)
        }

        setTimeout(() => {
            handleOpenModal()
            setLocalModal(modal)
        }, oldModal ? 150 : 0)
    }, [modal])

    const popupList: { [key: string]: React.ReactNode } = {
        'login': <PopupLogin/>,
        'registration': <PopupRegistration/>,
        'poker-combination': <PopupPokerCombination/>,
        'game-winner': <PopupWinnerGame/>,
    }

    return (
        <IsHiddenModalContext.Provider value={setIsHiddenModal}>
            <IsActiveModalContext.Provider value={setIsModalActive}>
                <PopupsStyled className={`${localModal}-popup popup ${isModalActive && "_active"}`}
                              style={{display: isHiddenModal ? "none" : "block", opacity: isModalActive ? 1 : 0}}>
                    <div className="popup__wrapper popup-wrapper">
                        <div className="popup__bg popup-bg popup-close" onClick={handleCloseModal}></div>
                        {
                            popupList[localModal]
                        }
                    </div>
                </PopupsStyled>
            </IsActiveModalContext.Provider>
        </IsHiddenModalContext.Provider>
    )
}
