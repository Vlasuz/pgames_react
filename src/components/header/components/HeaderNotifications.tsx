import React, {useEffect, useRef, useState} from 'react'
import {useClickOutside} from "../../../hooks/ClickOutside";
import iconInfo from "../../../assets/img/icons/info.svg";
import iconBell from "../../../assets/img/icons/bell.svg";

interface IHeaderNotificationsProps {

}

export const HeaderNotifications: React.FC<IHeaderNotificationsProps> = () => {

    const [isActive, setIsActive] = useState(false)

    const buttonRef = useRef(null)
    const blockRef = useRef(null)

    const handleOpen = () => {
        setIsActive(prev => !prev)
    }

    useClickOutside({button: buttonRef, block: blockRef, setState: setIsActive})

    return (
        <div className={`header__user-info--notifications header__notifications ${isActive && "_active"}`}>
            <button onClick={handleOpen} ref={buttonRef} className="header__notifications--toggle-btn" type="button" title="Уведомления">
                <svg width="15" height="18" viewBox="0 0 15 18" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M8.57166 1.125V1.8C11.0159 2.32137 12.8574 4.59141 12.8574 7.3125V7.97344C12.8574 9.6293 13.4366 11.2219 14.4813 12.4594L14.729 12.7512C15.0103 13.0852 15.0806 13.5563 14.9065 13.9605C14.7324 14.3648 14.3507 14.625 13.9288 14.625H1.07166C0.64979 14.625 0.267122 14.3648 0.0942875 13.9605C-0.0785474 13.5563 -0.00941679 13.0852 0.270906 12.7512L0.519209 12.4594C1.56519 11.2219 2.14309 9.6293 2.14309 7.97344V7.3125C2.14309 4.59141 3.95448 2.32137 6.42881 1.8V1.125C6.42881 0.503789 6.9076 0 7.50024 0C8.09287 0 8.57166 0.503789 8.57166 1.125ZM7.50024 18C6.93104 18 6.38528 17.7645 5.98349 17.3426C5.58171 16.9207 5.35738 16.316 5.35738 15.75H9.64309C9.64309 16.316 9.41876 16.9207 9.01698 17.3426C8.61519 17.7645 8.0393 18 7.50024 18Z"
                        fill="#F9F1DF"/>
                </svg>
            </button>
            <div ref={blockRef} className="header__notifications--block">
                <div className="header__notifications--body custom-scrollbar">
                    <ul className="header__notifications--list">
                        <li className="header__notifications--item notification-item">
                            <div className="notification-item__body">
                                <div className="notification-item__header">
                                    <img src={iconInfo} width="20" height="20" alt=""
                                         className="notification-item__icon"/>
                                    <h3 className="notification-item__title" title="Идет игра!">
                                        Идет игра!
                                    </h3>
                                    <span className="notification-item__time">

                                                        </span>
                                </div>
                                <div className="notification-item__content">
                                    <p>
                                        У вас незавершенная игра, вернитесь чтобы закончить
                                    </p>
                                    <a href="#" className="notification-item__link">
                                        Вернуться
                                        <svg width="5" height="7" viewBox="0 0 5 7" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M4.75 3.50009C4.75 3.64935 4.69507 3.79868 4.5852 3.91243L1.7727 6.8291C1.55298 7.05697 1.19702 7.05697 0.977295 6.8291C0.757568 6.60124 0.757568 6.2321 0.977295 6.00423L3.39297 3.50009L0.977734 0.995403C0.758007 0.767539 0.758007 0.398398 0.977734 0.170534C1.19746 -0.057331 1.55342 -0.057331 1.77314 0.170534L4.58564 3.0872C4.69551 3.20113 4.75 3.35061 4.75 3.50009Z"
                                                fill="#61C8AF"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </li>
                        <li className="header__notifications--item notification-item">
                            <div className="notification-item__body">
                                <div className="notification-item__header _message">
                                    <img src={iconBell} width="20" height="20" alt=""
                                         className="notification-item__icon"/>
                                    <h3 className="notification-item__title" title="Бонус!">
                                        Бонус!
                                    </h3>
                                    <span className="notification-item__time">
                                                            10 mins ago
                                                        </span>
                                </div>
                                <div className="notification-item__content">
                                    <p>
                                        От сервиса начислено 20 фишек
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li className="header__notifications--item notification-item">
                            <div className="notification-item__body">
                                <div className="notification-item__header _error">
                                    <img src="img/icons/error.svg" width="20" height="20" alt=""
                                         className="notification-item__icon"/>
                                    <h3 className="notification-item__title"
                                        title="Системное сообщение!">
                                        Системное сообщение!
                                    </h3>
                                    <span className="notification-item__time">
                                                            10 mins ago
                                                        </span>
                                </div>
                                <div className="notification-item__content">
                                    <p>
                                        У вас недостаточно средств
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li className="header__notifications--item notification-item">
                            <div className="notification-item__body">
                                <div className="notification-item__header _message">
                                    <img src={iconBell} width="20" height="20" alt=""
                                         className="notification-item__icon"/>
                                    <h3 className="notification-item__title"
                                        title="Личные данные!">
                                        Личные данные!
                                    </h3>
                                    <span className="notification-item__time">
                                                            10 mins ago
                                                        </span>
                                </div>
                                <div className="notification-item__content">
                                    <p>
                                        Пароль успешно изменен
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li className="header__notifications--item notification-item">
                            <div className="notification-item__body">
                                <div className="notification-item__header _message">
                                    <img src={iconBell} width="20" height="20" alt=""
                                         className="notification-item__icon"/>
                                    <h3 className="notification-item__title"
                                        title="Личные данные!">
                                        Личные данные!
                                    </h3>
                                    <span className="notification-item__time">
                                                            10 mins ago
                                                        </span>
                                </div>
                                <div className="notification-item__content">
                                    <p>
                                        Пароль успешно изменен
                                    </p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
