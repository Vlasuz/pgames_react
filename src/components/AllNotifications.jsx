import React, {useState} from 'react';
import NotificationSendEmail from "./components_notifications/NotificationSendEmail";
import NotificationChangeAccount from "./components_notifications/NotificationChangeAccount";
import NotificationReferralCopied from "./components_notifications/NotificationReferralCopied";
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
import {useDispatch} from "react-redux";
import {removeNotice} from "../redux/reducers/notificationReducer";
import NotificationEmailAlreadyExist from "./components_notifications/NotificationEmailAlreadyExist";

const AllNotifications = ({notice}) => {

    const dispatch = useDispatch()

    const handleClose = (e) => {
        e.target.closest('li').classList.add('_removing')

        setTimeout(() => {
            dispatch(removeNotice(notice.id))
        }, 300)
    }

    const [isActive] = useState(true)

    const noticesItem = {
        "notification_email-already-exist": <NotificationEmailAlreadyExist isActive={isActive} handleClose={handleClose}/>,
        "notification_send-an-email": <NotificationSendEmail handleClose={handleClose} isActive={isActive}/>,
        "notification_change-account": <NotificationChangeAccount handleClose={handleClose} isActive={isActive}/>,
        "notification_referral-copied": <NotificationReferralCopied handleClose={handleClose} isActive={isActive}/>,
        "notification_change-password": <NotificationChangePassword handleClose={handleClose} isActive={isActive}/>,
        "notification_change-password-error": <NotificationChangePasswordError handleClose={handleClose} isActive={isActive}/>,
        "notification_send-an-email-error": <NotificationSendEmailError handleClose={handleClose} isActive={isActive}/>,
        "notification_add-bonus": <NotificationAddBonus handleClose={handleClose} isActive={isActive}/>,
        "notification_no-enough-balance": <NotificationNotEnoughBalance handleClose={handleClose} isActive={isActive}/>,
        "notification_not-auth": <NotificationNotAuth handleClose={handleClose} isActive={isActive}/>,
        "notification_is-develop": <NotificationInDevelop handleClose={handleClose} isActive={isActive}/>,
        "notification-promo-404": <NotificationPromoCode404 handleClose={handleClose} isActive={isActive}/>,
        "notification-promo-409": <NotificationPromoCode409 handleClose={handleClose} isActive={isActive}/>,
        "notification_promocode-success": <NotificationPromoCodeSuccess handleClose={handleClose} isActive={isActive}/>,
        "notification_payment-success": <NotificationSuccessPayment handleClose={handleClose} isActive={isActive}/>,
        "notification_subscribe-success": <NotificationSuccessSubscribe handleClose={handleClose} isActive={isActive}/>,
    }

    return noticesItem[notice.notice];
};

export default AllNotifications;