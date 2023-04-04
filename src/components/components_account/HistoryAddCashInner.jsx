import React from 'react';
import Pagination from "../Pagination";

const HistoryAddCashInner = () => {

    const historyList = [
        {
            id: 0,
            type: "adding",
            cash: "20 USD",
            reason: "Пополнение баланса",
            date: ["02.01.2022", "21:48"]
        },
        {
            id: 1,
            type: "chips",
            cash: "20 фишек",
            reason: "Победа в игре “Дурак”",
            date: ["02.02.2022", "14:18"]
        },
        {
            id: 2,
            type: "gift",
            cash: "20 фишек",
            reason: "Победа в игре “Дурак”",
            date: ["02.03.2022", "10:52"]
        },
    ]

    return (
        <div className="account__main--wrapper">
            <div className="account__row">
                <div className="account__col _full _border-top" data-aos="fade-in" data-aos-delay="600"
                     data-aos-anchor=".account__main">
                    <div className="account-history">
                        <h3 className="account-history__title account-min-title">
                            Пополнение баланса
                        </h3>
                        <ul className="account-history__list">

                            {
                                historyList.map(item =>
                                    <li key={item.id} className="account-history__item">
                                        <div className="account-history-element">
                                            <div className="account-history-element__body">
                                                <div className="account-history-element__col">
                                                    <div
                                                        className={"account-history-element__icon" + (item.type !== "adding" ? " _accent" : "")}>
                                                        <img
                                                            src={item.type === "adding" ? "images/account/icon-1.svg" :
                                                                item.type === "chips" ? "images/account/icon-2.svg" : "images/account/icon-3.svg"}
                                                            width="18"
                                                            height="18"
                                                            alt=""
                                                            className="account-history-element__icon--img"/>

                                                    </div>
                                                </div>
                                                <div className="account-history-element__col">
                                                    <div className="account-history-element__row">
                                                        <div
                                                            className="account-history-element__row--col">
                                                            <strong
                                                                className="account-history-element__value">
                                                                {item.cash}
                                                            </strong>
                                                            <span
                                                                className="account-history-element__name">
                                                                {item.reason}
                                                            </span>
                                                        </div>
                                                        <div
                                                            className="account-history-element__row--col">
                                                            <time
                                                                className="account-history-element__time"
                                                                dateTime="2022-07-26 12:45">
                                                                <span>
                                                                    <svg width="10" height="12"
                                                                         viewBox="0 0 10 12"
                                                                         fill="none"
                                                                         xmlns="http://www.w3.org/2000/svg">
                                                                        <path
                                                                            d="M2.14286 0.75C2.14286 0.335859 2.46205 0 2.85714 0C3.25223 0 3.57143 0.335859 3.57143 0.75V1.5H6.42857V0.75C6.42857 0.335859 6.74777 0 7.14286 0C7.53795 0 7.85714 0.335859 7.85714 0.75V1.5H8.92857C9.52009 1.5 10 2.00367 10 2.625V3.75H0V2.625C0 2.00367 0.479688 1.5 1.07143 1.5H2.14286V0.75ZM10 10.875C10 11.4961 9.52009 12 8.92857 12H1.07143C0.479688 12 0 11.4961 0 10.875V4.5H10V10.875Z"
                                                                            fill="#89857D"/>
                                                                    </svg>
                                                                    {item.date[0]}
                                                                </span>
                                                                <span>
                                                                    <svg width="12" height="12"
                                                                         viewBox="0 0 12 12"
                                                                         fill="none"
                                                                         xmlns="http://www.w3.org/2000/svg">
                                                                        <path
                                                                            d="M6 12C2.68594 12 0 9.31406 0 6C0 2.68594 2.68594 0 6 0C9.31406 0 12 2.68594 12 6C12 9.31406 9.31406 12 6 12ZM5.4375 6C5.4375 6.1875 5.53125 6.36328 5.68828 6.44766L7.93828 7.94766C8.19609 8.13984 8.54531 8.06953 8.69766 7.81172C8.88984 7.55391 8.81953 7.20469 8.56172 7.03125L6.5625 5.7V2.8125C6.5625 2.50078 6.31172 2.25 5.97891 2.25C5.68828 2.25 5.41641 2.50078 5.41641 2.8125L5.4375 6Z"
                                                                            fill="#89857D"/>
                                                                    </svg>
                                                                    {item.date[1]}
                                                                </span>
                                                            </time>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                )
                            }

                        </ul>
                        <Pagination/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HistoryAddCashInner;