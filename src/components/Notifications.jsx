import React, {useEffect, useState} from 'react';
import NotificationSendEmail from "./components_notifications/NotificationSendEmail";
import NotificationChangeAccount from "./components_notifications/NotificationChangeAccount";
import NotificationChangePassword from "./components_notifications/NotificationChangePassword";
import NotificationChangePasswordError from "./components_notifications/NotificationChangePasswordError";
import NotificationSendEmailError from "./components_notifications/NotificationSendEmailError";
import NotificationAddBonus from "./components_notifications/NotificationAddBonus";
import NotificationNotEnoughBalance from "./components_notifications/NotificationNotEnoughBalance";
import NotificationNotAuth from "./components_notifications/NotificationNotAuth";
import NotificationInDevelop from "./components_notifications/NotificationInDevelop";
import NotificationPromoCode404 from "./components_notifications/NotificationPromoCode404";
import NotificationPromoCode409 from "./components_notifications/NotificationPromoCode409";
import NotificationPromoCodeSuccess from "./components_notifications/NotificationPromoCodeSuccess";
import NotificationSuccessPayment from "./components_notifications/NotificationSuccessPayment";
import NotificationSuccessSubscribe from "./components_notifications/NotificationSuccessSubscribe";
import NotificationReferralCopied from "./components_notifications/NotificationReferralCopied";
import {useDispatch, useSelector} from "react-redux";
import {NotificationReducer, setNotice, setTimeoutNotice} from "../redux/reducers/notificationReducer";

const Notifications = () => {

    const notice = useSelector(state => state.NotificationReducer.noticesTimeout)
    const [isActive, setIsActive] = useState(false)
    const dispatch = useDispatch()

    useEffect(() => {
        if (isActive !== !notice.notice) return;

        setIsActive(true)

        setTimeout(() => {
            setIsActive(false)
            dispatch(setNotice(notice))

            setTimeout(() => {
                dispatch(setTimeoutNotice(''))
            }, 300)
        }, 2000)
    }, [notice])

    const handleClose = () => {
        setIsActive(false)
        dispatch(setNotice(notice))

        setTimeout(() => {
            dispatch(setTimeoutNotice(''))
        }, 300)
    }

    const notices = {
        "notification_send-an-email": <NotificationSendEmail isActive={isActive} handleClose={handleClose}/>,
        "notification_change-account": <NotificationChangeAccount isActive={isActive} handleClose={handleClose}/>,
        "notification_referral-copied": <NotificationReferralCopied isActive={isActive} handleClose={handleClose}/>,
        "notification_change-password": <NotificationChangePassword isActive={isActive} handleClose={handleClose}/>,
        "notification_change-password-error": <NotificationChangePasswordError isActive={isActive} handleClose={handleClose}/>,
        "notification_send-an-email-error": <NotificationSendEmailError isActive={isActive} handleClose={handleClose}/>,
        "notification_add-bonus": <NotificationAddBonus isActive={isActive} handleClose={handleClose}/>,
        "notification_no-enough-balance": <NotificationNotEnoughBalance isActive={isActive} handleClose={handleClose}/>,
        "notification_not-auth": <NotificationNotAuth isActive={isActive} handleClose={handleClose}/>,
        "notification_is-develop": <NotificationInDevelop isActive={isActive} handleClose={handleClose}/>,
        "notification-promo-404": <NotificationPromoCode404 isActive={isActive} handleClose={handleClose}/>,
        "notification-promo-409": <NotificationPromoCode409 isActive={isActive} handleClose={handleClose}/>,
        "notification_promocode-success": <NotificationPromoCodeSuccess isActive={isActive} handleClose={handleClose}/>,
        "notification_payment-success": <NotificationSuccessPayment isActive={isActive} handleClose={handleClose}/>,
        "notification_subscribe-success": <NotificationSuccessSubscribe isActive={isActive} handleClose={handleClose}/>,
    }

    return (
        <div className="notifications">
            <div className="notifications__body">
                <ul className="notifications__list">
                    {
                        notices[notice.notice]
                    }
                </ul>
            </div>
        </div>
    )
};

export default Notifications;