import React, {useEffect, useState} from 'react';
import PopupPromocode from "./popup_promocode/PopupPromocode";
import PopupRegistration from "./popup_registration/PopupRegistration";
import PopupLogin from "./popup_login/PopupLogin";
import PopupForgotPassword from "./popup_forgot_password/PopupForgotPassword";
import PopupForgotPasswordSent from "./popup_forgot_password/PopupForgotPasswordSent";
import PopupSubscribe from "./popup_subscribe/PopupSubscribe";
import PopupMiniVideo from "./popup_video/PopupMiniVideo";
import CombinationCards from "./popup_combination_cards/CombinationCards";
import PopupWinnerGame from "./PopupWinnerGame";
import {useSelector} from "react-redux";
import PopupGameWinner from "./popup_game_winner/PopupGameWinner";
import PopupDeleteAccount from "./popup_delete_account/PopupDeleteAccount";

const Popups = () => {

    const [popup, setPopup] = useState('')
    const popup_title = useSelector(state => state.popupReducer)
    const all_popup = {
        'login': <PopupLogin/>,
        'registration': <PopupRegistration/>,
        'forgot-password': <PopupForgotPassword/>,
        'forgot-password-send': <PopupForgotPasswordSent/>,
        'winner-game': <PopupWinnerGame/>,
        'promo-code': <PopupPromocode/>,
        'subscribe': <PopupSubscribe/>,
        'game-winner': <PopupGameWinner props={popup_title.props}/>,
        'mini-video': <PopupMiniVideo/>,
        'delete-account': <PopupDeleteAccount props={popup_title.props}/>,
    }

    useEffect(() => {
        const popupElement = document.querySelector('.popup')

        if(popupElement) {
            popupElement?.classList.remove('_active')

            setTimeout(() => {
                setPopup(all_popup[popup_title.popup])
                popupElement?.classList.add('_active')
            }, 300)

        } else {
            setPopup(all_popup[popup_title.popup])
        }

    }, [popup_title])

    useEffect(() => {
        const popupElement = document.querySelector('.popup')

        setTimeout(() => {
            popupElement?.classList.add('_active')
        }, 1)

    }, [popup])

    return popup;

};

export default Popups;