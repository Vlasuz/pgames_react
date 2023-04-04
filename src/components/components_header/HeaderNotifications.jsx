import React, {useState} from 'react';
import ActiveDropdown from "../../hooks/ActiveDropdown";

const HeaderNotifications = () => {

    const [isOpen, setIsOpen] = useState(false)
    ActiveDropdown(setIsOpen, ".header__notifications")

    return (
        <div className={"header__user-info--notifications header__notifications" + (isOpen ? " _active": "")}>
            <button
                className="header__notifications--toggle-btn"
                type="button"
                title="Уведомления"
                onClick={() => setIsOpen(prev => !prev)}
            >
                <svg width="15" height="18" viewBox="0 0 15 18" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M8.57166 1.125V1.8C11.0159 2.32137 12.8574 4.59141 12.8574 7.3125V7.97344C12.8574 9.6293 13.4366 11.2219 14.4813 12.4594L14.729 12.7512C15.0103 13.0852 15.0806 13.5563 14.9065 13.9605C14.7324 14.3648 14.3507 14.625 13.9288 14.625H1.07166C0.64979 14.625 0.267122 14.3648 0.0942875 13.9605C-0.0785474 13.5563 -0.00941679 13.0852 0.270906 12.7512L0.519209 12.4594C1.56519 11.2219 2.14309 9.6293 2.14309 7.97344V7.3125C2.14309 4.59141 3.95448 2.32137 6.42881 1.8V1.125C6.42881 0.503789 6.9076 0 7.50024 0C8.09287 0 8.57166 0.503789 8.57166 1.125ZM7.50024 18C6.93104 18 6.38528 17.7645 5.98349 17.3426C5.58171 16.9207 5.35738 16.316 5.35738 15.75H9.64309C9.64309 16.316 9.41876 16.9207 9.01698 17.3426C8.61519 17.7645 8.0393 18 7.50024 18Z"
                        fill="#F9F1DF"/>
                </svg>
            </button>
            <div className="header__notifications--block">
                <div className="header__notifications--body custom-scrollbar">
                    <ul className="header__notifications--list">
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default HeaderNotifications;