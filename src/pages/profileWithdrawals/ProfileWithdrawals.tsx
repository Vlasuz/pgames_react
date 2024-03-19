import React, {useEffect, useState} from 'react'
import {Aside} from "../../components/aside/Aside";
import {ProfileWithdrawalsForm} from "./components/ProfileWithdrawalsForm";
import icon1 from './../../assets/img/account/icon-1.svg'

interface IProfileWithdrawalsProps {

}

export const ProfileWithdrawals: React.FC<IProfileWithdrawalsProps> = () => {

    return (
        <main className="main">
            <section className="account" style={{paddingTop: "calc(60px + 33px)"}}>
                <div className="account__container container _large">

                    <Aside/>

                    <div className="account__main" data-aos="fade-in" data-aos-delay="400">
                        <div className="account__main--header page-header">
                            <a href="#" className="account__forward-btn page-header__forward-btn" title="Назад">
                                <svg width="5" height="7" viewBox="0 0 5 7" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M0.25 3.49991C0.25 3.35065 0.304932 3.20132 0.414795 3.08757L3.2273 0.170898C3.44702 -0.0569662 3.80298 -0.0569662 4.02271 0.170898C4.24243 0.398763 4.24243 0.767904 4.02271 0.995768L1.60703 3.49991L4.02227 6.0046C4.24199 6.23246 4.24199 6.6016 4.02227 6.82947C3.80254 7.05733 3.44658 7.05733 3.22686 6.82947L0.414356 3.9128C0.304493 3.79887 0.25 3.64939 0.25 3.49991Z"
                                        fill="#F9F1DF"/>
                                </svg>
                            </a>
                            <h2 className="account__title section-title page-header__title _decor-none">
                                Вывод средств
                            </h2>
                            <div className="account__bread-crumbs page-header__bread-crumbs">
                                <ul className="page-header__bread-crumbs--list">
                                    <li className="page-header__bread-crumbs--item">
                                        <a href="index.html" className="page-header__bread-crumbs--link">
                                            Главная
                                        </a>
                                    </li>
                                    <li className="page-header__bread-crumbs--item">
                                        <a href="account.html" className="page-header__bread-crumbs--link">
                                            Личный кабинет
                                        </a>
                                    </li>
                                    <li className="page-header__bread-crumbs--item">
                                        <a className="page-header__bread-crumbs--link">
                                            Вывод средств
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="account__main--wrapper">
                            <div className="account__row">

                                <ProfileWithdrawalsForm/>

                                <div className="account__col">
                                    <div className="account__block" data-aos="fade-in" data-aos-delay="500"
                                         data-aos-anchor=".account__main">
                                        <div className="account__block--body _none-padding _transparent">
                                            <div className="account-withdrawals-history">
                                                <ul className="account-withdrawals-history__list">
                                                    <li className="account-withdrawals-history__item">
                                                        <div className="account-history-element">
                                                            <div className="account-history-element__body">
                                                                <div className="account-history-element__col">
                                                                    <div className="account-history-element__icon">
                                                                        <img src={icon1} width="18"
                                                                             height="18" alt=""
                                                                             className="account-history-element__icon--img"/>
                                                                    </div>
                                                                </div>
                                                                <div className="account-history-element__col">
                                                                    <div className="account-history-element__row">
                                                                        <div
                                                                            className="account-history-element__row--col">
                                                                            <strong
                                                                                className="account-history-element__value">
                                                                                20.00 USD
                                                                            </strong>
                                                                            <span
                                                                                className="account-history-element__name">
                                                                                Вывод — Monobank
                                                                            </span>
                                                                        </div>
                                                                        <div
                                                                            className="account-history-element__row--col">
                                                                            <time
                                                                                className="account-history-element__time"
                                                                                dateTime="2022-07-26 12:45">
                                                                                <span>
                                                                                    <svg width="10" height="12"
                                                                                         viewBox="0 0 10 12" fill="none"
                                                                                         xmlns="http://www.w3.org/2000/svg">
                                                                                        <path
                                                                                            d="M2.14286 0.75C2.14286 0.335859 2.46205 0 2.85714 0C3.25223 0 3.57143 0.335859 3.57143 0.75V1.5H6.42857V0.75C6.42857 0.335859 6.74777 0 7.14286 0C7.53795 0 7.85714 0.335859 7.85714 0.75V1.5H8.92857C9.52009 1.5 10 2.00367 10 2.625V3.75H0V2.625C0 2.00367 0.479688 1.5 1.07143 1.5H2.14286V0.75ZM10 10.875C10 11.4961 9.52009 12 8.92857 12H1.07143C0.479688 12 0 11.4961 0 10.875V4.5H10V10.875Z"
                                                                                            fill="#89857D"/>
                                                                                    </svg>
                                                                                    26.07.2022
                                                                                </span>
                                                                                <span>
                                                                                    <svg width="12" height="12"
                                                                                         viewBox="0 0 12 12" fill="none"
                                                                                         xmlns="http://www.w3.org/2000/svg">
                                                                                        <path
                                                                                            d="M6 12C2.68594 12 0 9.31406 0 6C0 2.68594 2.68594 0 6 0C9.31406 0 12 2.68594 12 6C12 9.31406 9.31406 12 6 12ZM5.4375 6C5.4375 6.1875 5.53125 6.36328 5.68828 6.44766L7.93828 7.94766C8.19609 8.13984 8.54531 8.06953 8.69766 7.81172C8.88984 7.55391 8.81953 7.20469 8.56172 7.03125L6.5625 5.7V2.8125C6.5625 2.50078 6.31172 2.25 5.97891 2.25C5.68828 2.25 5.41641 2.50078 5.41641 2.8125L5.4375 6Z"
                                                                                            fill="#89857D"/>
                                                                                    </svg>
                                                                                    12:45
                                                                                </span>
                                                                            </time>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="account-withdrawals-history__item">
                                                        <div className="account-history-element">
                                                            <div className="account-history-element__body">
                                                                <div className="account-history-element__col">
                                                                    <div className="account-history-element__icon">
                                                                        <img src={icon1} width="18"
                                                                             height="18" alt=""
                                                                             className="account-history-element__icon--img"/>
                                                                    </div>
                                                                </div>
                                                                <div className="account-history-element__col">
                                                                    <div className="account-history-element__row">
                                                                        <div
                                                                            className="account-history-element__row--col">
                                                                            <strong
                                                                                className="account-history-element__value">
                                                                                100.00 USD
                                                                            </strong>
                                                                            <span
                                                                                className="account-history-element__name">
                                                                                Вывод — Monobank
                                                                            </span>
                                                                        </div>
                                                                        <div
                                                                            className="account-history-element__row--col">
                                                                            <time
                                                                                className="account-history-element__time"
                                                                                dateTime="2022-07-26 12:45">
                                                                                <span>
                                                                                    <svg width="10" height="12"
                                                                                         viewBox="0 0 10 12" fill="none"
                                                                                         xmlns="http://www.w3.org/2000/svg">
                                                                                        <path
                                                                                            d="M2.14286 0.75C2.14286 0.335859 2.46205 0 2.85714 0C3.25223 0 3.57143 0.335859 3.57143 0.75V1.5H6.42857V0.75C6.42857 0.335859 6.74777 0 7.14286 0C7.53795 0 7.85714 0.335859 7.85714 0.75V1.5H8.92857C9.52009 1.5 10 2.00367 10 2.625V3.75H0V2.625C0 2.00367 0.479688 1.5 1.07143 1.5H2.14286V0.75ZM10 10.875C10 11.4961 9.52009 12 8.92857 12H1.07143C0.479688 12 0 11.4961 0 10.875V4.5H10V10.875Z"
                                                                                            fill="#89857D"/>
                                                                                    </svg>
                                                                                    26.07.2022
                                                                                </span>
                                                                                <span>
                                                                                    <svg width="12" height="12"
                                                                                         viewBox="0 0 12 12" fill="none"
                                                                                         xmlns="http://www.w3.org/2000/svg">
                                                                                        <path
                                                                                            d="M6 12C2.68594 12 0 9.31406 0 6C0 2.68594 2.68594 0 6 0C9.31406 0 12 2.68594 12 6C12 9.31406 9.31406 12 6 12ZM5.4375 6C5.4375 6.1875 5.53125 6.36328 5.68828 6.44766L7.93828 7.94766C8.19609 8.13984 8.54531 8.06953 8.69766 7.81172C8.88984 7.55391 8.81953 7.20469 8.56172 7.03125L6.5625 5.7V2.8125C6.5625 2.50078 6.31172 2.25 5.97891 2.25C5.68828 2.25 5.41641 2.50078 5.41641 2.8125L5.4375 6Z"
                                                                                            fill="#89857D"/>
                                                                                    </svg>
                                                                                    12:45
                                                                                </span>
                                                                            </time>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="account-withdrawals-history__item">
                                                        <div className="account-history-element">
                                                            <div className="account-history-element__body">
                                                                <div className="account-history-element__col">
                                                                    <div className="account-history-element__icon">
                                                                        <img src={icon1} width="18"
                                                                             height="18" alt=""
                                                                             className="account-history-element__icon--img"/>
                                                                    </div>
                                                                </div>
                                                                <div className="account-history-element__col">
                                                                    <div className="account-history-element__row">
                                                                        <div
                                                                            className="account-history-element__row--col">
                                                                            <strong
                                                                                className="account-history-element__value">
                                                                                25.00 USD
                                                                            </strong>
                                                                            <span
                                                                                className="account-history-element__name">
                                                                                Вывод — Monobank
                                                                            </span>
                                                                        </div>
                                                                        <div
                                                                            className="account-history-element__row--col">
                                                                            <time
                                                                                className="account-history-element__time"
                                                                                dateTime="2022-07-26 12:45">
                                                                                <span>
                                                                                    <svg width="10" height="12"
                                                                                         viewBox="0 0 10 12" fill="none"
                                                                                         xmlns="http://www.w3.org/2000/svg">
                                                                                        <path
                                                                                            d="M2.14286 0.75C2.14286 0.335859 2.46205 0 2.85714 0C3.25223 0 3.57143 0.335859 3.57143 0.75V1.5H6.42857V0.75C6.42857 0.335859 6.74777 0 7.14286 0C7.53795 0 7.85714 0.335859 7.85714 0.75V1.5H8.92857C9.52009 1.5 10 2.00367 10 2.625V3.75H0V2.625C0 2.00367 0.479688 1.5 1.07143 1.5H2.14286V0.75ZM10 10.875C10 11.4961 9.52009 12 8.92857 12H1.07143C0.479688 12 0 11.4961 0 10.875V4.5H10V10.875Z"
                                                                                            fill="#89857D"/>
                                                                                    </svg>
                                                                                    26.07.2022
                                                                                </span>
                                                                                <span>
                                                                                    <svg width="12" height="12"
                                                                                         viewBox="0 0 12 12" fill="none"
                                                                                         xmlns="http://www.w3.org/2000/svg">
                                                                                        <path
                                                                                            d="M6 12C2.68594 12 0 9.31406 0 6C0 2.68594 2.68594 0 6 0C9.31406 0 12 2.68594 12 6C12 9.31406 9.31406 12 6 12ZM5.4375 6C5.4375 6.1875 5.53125 6.36328 5.68828 6.44766L7.93828 7.94766C8.19609 8.13984 8.54531 8.06953 8.69766 7.81172C8.88984 7.55391 8.81953 7.20469 8.56172 7.03125L6.5625 5.7V2.8125C6.5625 2.50078 6.31172 2.25 5.97891 2.25C5.68828 2.25 5.41641 2.50078 5.41641 2.8125L5.4375 6Z"
                                                                                            fill="#89857D"/>
                                                                                    </svg>
                                                                                    12:45
                                                                                </span>
                                                                            </time>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
