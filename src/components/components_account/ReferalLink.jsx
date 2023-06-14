import React from 'react';
import {useDispatch} from "react-redux";
import {setTimeoutNotice} from "../../redux/reducers/notificationReducer";

const ReferalLink = () => {

    const dispatch = useDispatch()

    const handleCopy = () => {
        // dispatch(setTimeoutNotice('notification_referral-copied'))
        dispatch(setTimeoutNotice('notification_referral-copied'))
    }

    return (
        <div className="account__col">
            <div className="account__block" data-aos="fade-in" data-aos-delay="500"
                 data-aos-anchor=".account__main">
                <div className="account__block--body _none-padding _transparent">
                    <div className="account-referal">
                        <h3 className="account-referal__title account-min-title">
                            Ваша реферальная ссылка
                        </h3>
                        <form action="#" className="account-referal__form">
                            <div className="account-referal__form--list form-list">
                                <label className="account-referal__label form-label">
                                    <input type="text" name="referal-link"
                                           readOnly
                                           value="https://reflink-board-games-id-45-56-mr-jane123123123"
                                           className="account-referal__input form-input _none-placeholder"/>
                                    <input type="hidden" name="referal-link" id="referal-link"
                                           readOnly
                                           value="https://reflink-board-games-id-45-56-mr-jane123123123"
                                           className="account-referal__input form-input _none-placeholder"/>
                                </label>
                            </div>
                            <button onClick={handleCopy} type="button"
                                    className="account-referal__btn btn _large-2 _full _min-fs _mt copy-btn"
                                    data-clipboard-target="#referal-link">
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M9 2.25V0H6.375C5.75367 0 5.25 0.503672 5.25 1.125V7.875C5.25 8.49633 5.75367 9 6.375 9H10.875C11.4963 9 12 8.49633 12 7.875V3H9.77109C9.3375 3 9 2.6625 9 2.25ZM9.75 0V2.25H12L9.75 0ZM4.5 8.25V3H1.125C0.503672 3 0 3.50367 0 4.125V10.875C0 11.4963 0.503672 12 1.125 12H5.625C6.24633 12 6.75 11.4963 6.75 10.875V9.75H6C5.17266 9.75 4.5 9.07734 4.5 8.25Z"
                                        fill="#F9F1DF"/>
                                </svg>
                                Копировать
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReferalLink;