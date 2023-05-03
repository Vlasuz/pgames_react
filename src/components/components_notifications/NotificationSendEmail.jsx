import React from 'react';

const NotificationSendEmail = ({handleClose}) => {
    return (
        <li id={"notification_send-an-email"} className="notifications__item notification-item">
            <div className="notification-item__body">
                <div className="notification-item__header _message">
                    <img src="images/icons/bell.svg" width="20" height="20" alt=""
                         className="notification-item__icon"/>
                    <h3 className="notification-item__title" title="Бонус!">
                        Обратная связь
                    </h3>
                    <span className="notification-item__time">
                        {/*10 mins ago*/}
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
                        Сообщение успешно отправлено
                    </p>
                </div>
            </div>
        </li>
    );
};

export default NotificationSendEmail;