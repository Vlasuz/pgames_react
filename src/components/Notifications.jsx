import React, {useEffect} from 'react';
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

const Notifications = () => {

    const handleClose = (e) => {
        let notificationItemCloseBtn = e.target.closest('button')
        if (notificationItemCloseBtn) {
            const item = notificationItemCloseBtn.closest('.notification-item');

            if (!item.classList.contains('_removing')) {

                item.classList.add('_removing');

                setTimeout(() => {
                    item.classList.remove('_removing');
                    item.classList.remove('notification-item_show');
                }, 500)

            }
        }
    }

    return (
        <div className="notifications">
            <div className="notifications__body">
                <ul className="notifications__list">

                    <NotificationSendEmail handleClose={handleClose}/>
                    <NotificationChangeAccount handleClose={handleClose}/>
                    <NotificationChangePassword handleClose={handleClose}/>
                    <NotificationChangePasswordError handleClose={handleClose}/>
                    <NotificationSendEmailError handleClose={handleClose}/>
                    <NotificationAddBonus handleClose={handleClose}/>
                    <NotificationNotEnoughBalance handleClose={handleClose}/>
                    <NotificationNotAuth handleClose={handleClose}/>
                    <NotificationInDevelop handleClose={handleClose}/>
                    <NotificationPromoCode404 handleClose={handleClose}/>
                    <NotificationPromoCode409 handleClose={handleClose}/>
                    <NotificationPromoCodeSuccess handleClose={handleClose}/>
                    <NotificationSuccessPayment handleClose={handleClose}/>
                    <NotificationSuccessSubscribe handleClose={handleClose}/>

                    <li id={"notification_game-is-run"} className="notifications__item notification-item">
                        <div className="notification-item__body">
                            <div className="notification-item__header">
                                <img src="images/icons/info.svg" width="20" height="20" alt=""
                                     className="notification-item__icon"/>
                                <h3 className="notification-item__title" title="Идет игра!">
                                    Идет игра!
                                </h3>
                                <span className="notification-item__time"/>
                                <button onClick={handleClose} className="notification-item__close-btn" type="button"
                                        title="Закрыть">
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
                    <li className="notifications__item notification-item">
                        <div className="notification-item__body">
                            <div className="notification-item__header _error">
                                <img src="images/icons/error.svg" width="20" height="20" alt=""
                                     className="notification-item__icon"/>
                                <h3 className="notification-item__title" title="Системное сообщение!">
                                    Системное сообщение!
                                </h3>
                                <span className="notification-item__time">10 mins ago</span>
                                <button onClick={handleClose} className="notification-item__close-btn" type="button"
                                        title="Закрыть">
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
                                    У вас недостаточно средств
                                </p>
                            </div>
                        </div>
                    </li>
                    <li className="notifications__item notification-item">
                        <div className="notification-item__body">
                            <div className="notification-item__header _message">
                                <img src="images/icons/bell.svg" width="20" height="20" alt=""
                                     className="notification-item__icon"/>
                                <h3 className="notification-item__title" title="Личные данные!">
                                    Личные данные!
                                </h3>
                                <span className="notification-item__time">
                            10 mins ago
                        </span>
                                <button onClick={handleClose} className="notification-item__close-btn" type="button"
                                        title="Закрыть">
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
                                    Пароль успешно изменен
                                </p>
                            </div>
                        </div>
                    </li>
                    <li className="notifications__item notification-item">
                        <div className="notification-item__body">
                            <div className="notification-item__header _message">
                                <img src="images/icons/bell.svg" width="20" height="20" alt=""
                                     className="notification-item__icon"/>
                                <h3 className="notification-item__title" title="Личные данные!">
                                    Личные данные!
                                </h3>
                                <span className="notification-item__time">
                            10 mins ago
                        </span>
                                <button onClick={handleClose} className="notification-item__close-btn" type="button"
                                        title="Закрыть">
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
                                    Пароль успешно изменен
                                </p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Notifications;