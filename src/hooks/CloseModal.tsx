import {Dispatch, SetStateAction, useContext} from "react";
import {IsActiveModalContext, IsHiddenModalContext} from "../components/popup/Popups";
import {PopupContext} from "../App";

export const useCloseModal = () => {
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

    return handleCloseModal
}