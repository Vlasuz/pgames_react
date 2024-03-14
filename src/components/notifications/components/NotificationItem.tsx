import HTMLReactParser from 'html-react-parser';
import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector } from 'react-redux';
import { notifications, notificationTypes } from '../../../constants/Notifications';
import { removeNotification } from '../../../storage/toolkit';

interface INotificationItemProps {
    itemData: string
}

export const NotificationItem: React.FC<INotificationItemProps> = ({itemData}) => {

    const [isRemoveItem, setIsRemoveItem] = useState(false)

    const dispatch = useDispatch()

    useEffect(() => {
        setTimeout(() => {
            setIsRemoveItem(true)

            setTimeout(() => {
                dispatch(removeNotification())
            }, 500)
        }, 2000)
    }, [])

    const removingStyle = {
        transitionProperty: "height, margin, padding",
        transitionDuration: "500ms",
        height: "0px",
        overflow: "hidden",
        paddingTop: "0px",
        paddingBottom: "0px",
        marginTop: "0px",
        marginBottom: "0px"
    }

    return (
        <li className={`notifications__item notification-item ${isRemoveItem && "_removing"}`} style={isRemoveItem ? removingStyle : {}}>
            <div className="notification-item__body">
                <div className={`notification-item__header ${notificationTypes[notifications[itemData]?.type]?.className}`}>
                    <img src={notificationTypes[notifications[itemData]?.type]?.icon} width="20" height="20" alt=""
                         className="notification-item__icon"/>
                    <h3 className="notification-item__title" title="Бонус!">
                        {
                            notifications[itemData]?.title
                        }
                    </h3>
                    {/*<span className="notification-item__time">*/}
                    {/*    10 mins ago*/}
                    {/*</span>*/}
                    <button className="notification-item__close-btn" type="button" title="Закрыть">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L12.5 12.5" stroke="#F9F1DF" strokeWidth="1.5"
                                  strokeLinecap="round"/>
                            <path d="M12.5 1L1 12.5" stroke="#F9F1DF" strokeWidth="1.5"
                                  strokeLinecap="round"/>
                        </svg>
                    </button>
                </div>
                <div className="notification-item__content">
                    <p>
                        {
                            HTMLReactParser(notifications[itemData]?.body)
                        }
                    </p>
                </div>
            </div>
        </li>
    )
}
