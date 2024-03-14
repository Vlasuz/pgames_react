import React, {useEffect} from 'react'
import {Aside} from "../../components/aside/Aside";

interface IProfileHistoryProps {

}

export const ProfileHistory: React.FC<IProfileHistoryProps> = () => {

    return (
        <main className="main">
            <section className="account">
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
                                История пополнений
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
                                            История пополнений
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="account__main--wrapper">
                            <div className="account__row">
                                <div className="account__col _full _border-top" data-aos="fade-in" data-aos-delay="600"
                                     data-aos-anchor=".account__main">
                                    <div className="account-history">
                                        <h3 className="account-history__title account-min-title">
                                            Пополнение баланса
                                        </h3>
                                        <ul className="account-history__list">
                                            <li className="account-history__item">
                                                <div className="account-history-element">
                                                    <div className="account-history-element__body">
                                                        <div className="account-history-element__col">
                                                            <div className="account-history-element__icon ">
                                                                <img src="img/account/icon-1.svg" width="18" height="18"
                                                                     alt=""
                                                                     className="account-history-element__icon--img"/>
                                                            </div>
                                                        </div>
                                                        <div className="account-history-element__col">
                                                            <div className="account-history-element__row">
                                                                <div className="account-history-element__row--col">
                                                                    <strong className="account-history-element__value">
                                                                        20.00 USD
                                                                    </strong>
                                                                    <span className="account-history-element__name">
                            Пополнение баланса
                        </span>
                                                                </div>
                                                                <div className="account-history-element__row--col">
                                                                    <time className="account-history-element__time"
                                                                          dateTime="2022-07-26 12:45">
                            <span>
                                <svg width="10" height="12" viewBox="0 0 10 12" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M2.14286 0.75C2.14286 0.335859 2.46205 0 2.85714 0C3.25223 0 3.57143 0.335859 3.57143 0.75V1.5H6.42857V0.75C6.42857 0.335859 6.74777 0 7.14286 0C7.53795 0 7.85714 0.335859 7.85714 0.75V1.5H8.92857C9.52009 1.5 10 2.00367 10 2.625V3.75H0V2.625C0 2.00367 0.479688 1.5 1.07143 1.5H2.14286V0.75ZM10 10.875C10 11.4961 9.52009 12 8.92857 12H1.07143C0.479688 12 0 11.4961 0 10.875V4.5H10V10.875Z"
                                        fill="#89857D"/>
                                </svg>
                                26.07.2022
                            </span>
                                                                        <span>
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
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
                                            <li className="account-history__item">
                                                <div className="account-history-element">
                                                    <div className="account-history-element__body">
                                                        <div className="account-history-element__col">
                                                            <div className="account-history-element__icon ">
                                                                <img src="img/account/icon-1.svg" width="18" height="18"
                                                                     alt=""
                                                                     className="account-history-element__icon--img"/>
                                                            </div>
                                                        </div>
                                                        <div className="account-history-element__col">
                                                            <div className="account-history-element__row">
                                                                <div className="account-history-element__row--col">
                                                                    <strong className="account-history-element__value">
                                                                        20.00 USD
                                                                    </strong>
                                                                    <span className="account-history-element__name">
                            Пополнение баланса
                        </span>
                                                                </div>
                                                                <div className="account-history-element__row--col">
                                                                    <time className="account-history-element__time"
                                                                          dateTime="2022-07-26 12:45">
                            <span>
                                <svg width="10" height="12" viewBox="0 0 10 12" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M2.14286 0.75C2.14286 0.335859 2.46205 0 2.85714 0C3.25223 0 3.57143 0.335859 3.57143 0.75V1.5H6.42857V0.75C6.42857 0.335859 6.74777 0 7.14286 0C7.53795 0 7.85714 0.335859 7.85714 0.75V1.5H8.92857C9.52009 1.5 10 2.00367 10 2.625V3.75H0V2.625C0 2.00367 0.479688 1.5 1.07143 1.5H2.14286V0.75ZM10 10.875C10 11.4961 9.52009 12 8.92857 12H1.07143C0.479688 12 0 11.4961 0 10.875V4.5H10V10.875Z"
                                        fill="#89857D"/>
                                </svg>
                                26.07.2022
                            </span>
                                                                        <span>
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
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
                                            <li className="account-history__item">
                                                <div className="account-history-element">
                                                    <div className="account-history-element__body">
                                                        <div className="account-history-element__col">
                                                            <div className="account-history-element__icon _accent">
                                                                <img src="img/account/icon-2.svg" width="18" height="18"
                                                                     alt=""
                                                                     className="account-history-element__icon--img"/>
                                                            </div>
                                                        </div>
                                                        <div className="account-history-element__col">
                                                            <div className="account-history-element__row">
                                                                <div className="account-history-element__row--col">
                                                                    <strong className="account-history-element__value">
                                                                        20 фишек
                                                                    </strong>
                                                                    <span className="account-history-element__name">
                            Победа в игре “Дурак”
                        </span>
                                                                </div>
                                                                <div className="account-history-element__row--col">
                                                                    <time className="account-history-element__time"
                                                                          dateTime="2022-07-26 12:45">
                            <span>
                                <svg width="10" height="12" viewBox="0 0 10 12" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M2.14286 0.75C2.14286 0.335859 2.46205 0 2.85714 0C3.25223 0 3.57143 0.335859 3.57143 0.75V1.5H6.42857V0.75C6.42857 0.335859 6.74777 0 7.14286 0C7.53795 0 7.85714 0.335859 7.85714 0.75V1.5H8.92857C9.52009 1.5 10 2.00367 10 2.625V3.75H0V2.625C0 2.00367 0.479688 1.5 1.07143 1.5H2.14286V0.75ZM10 10.875C10 11.4961 9.52009 12 8.92857 12H1.07143C0.479688 12 0 11.4961 0 10.875V4.5H10V10.875Z"
                                        fill="#89857D"/>
                                </svg>
                                26.07.2022
                            </span>
                                                                        <span>
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
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
                                            <li className="account-history__item">
                                                <div className="account-history-element">
                                                    <div className="account-history-element__body">
                                                        <div className="account-history-element__col">
                                                            <div className="account-history-element__icon _accent">
                                                                <img src="img/account/icon-1.svg" width="18" height="18"
                                                                     alt=""
                                                                     className="account-history-element__icon--img"/>
                                                            </div>
                                                        </div>
                                                        <div className="account-history-element__col">
                                                            <div className="account-history-element__row">
                                                                <div className="account-history-element__row--col">
                                                                    <strong className="account-history-element__value">
                                                                        20.00 USD
                                                                    </strong>
                                                                    <span className="account-history-element__name">
                            Победа в игре “Дурак”
                        </span>
                                                                </div>
                                                                <div className="account-history-element__row--col">
                                                                    <time className="account-history-element__time"
                                                                          dateTime="2022-07-26 12:45">
                            <span>
                                <svg width="10" height="12" viewBox="0 0 10 12" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M2.14286 0.75C2.14286 0.335859 2.46205 0 2.85714 0C3.25223 0 3.57143 0.335859 3.57143 0.75V1.5H6.42857V0.75C6.42857 0.335859 6.74777 0 7.14286 0C7.53795 0 7.85714 0.335859 7.85714 0.75V1.5H8.92857C9.52009 1.5 10 2.00367 10 2.625V3.75H0V2.625C0 2.00367 0.479688 1.5 1.07143 1.5H2.14286V0.75ZM10 10.875C10 11.4961 9.52009 12 8.92857 12H1.07143C0.479688 12 0 11.4961 0 10.875V4.5H10V10.875Z"
                                        fill="#89857D"/>
                                </svg>
                                26.07.2022
                            </span>
                                                                        <span>
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
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
                                            <li className="account-history__item">
                                                <div className="account-history-element">
                                                    <div className="account-history-element__body">
                                                        <div className="account-history-element__col">
                                                            <div className="account-history-element__icon _accent">
                                                                <img src="img/account/icon-3.svg" width="18" height="18"
                                                                     alt=""
                                                                     className="account-history-element__icon--img"/>
                                                            </div>
                                                        </div>
                                                        <div className="account-history-element__col">
                                                            <div className="account-history-element__row">
                                                                <div className="account-history-element__row--col">
                                                                    <strong className="account-history-element__value">
                                                                        20 фишек
                                                                    </strong>
                                                                    <span className="account-history-element__name">
                            Победа в игре “Дурак”
                        </span>
                                                                </div>
                                                                <div className="account-history-element__row--col">
                                                                    <time className="account-history-element__time"
                                                                          dateTime="2022-07-26 12:45">
                            <span>
                                <svg width="10" height="12" viewBox="0 0 10 12" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M2.14286 0.75C2.14286 0.335859 2.46205 0 2.85714 0C3.25223 0 3.57143 0.335859 3.57143 0.75V1.5H6.42857V0.75C6.42857 0.335859 6.74777 0 7.14286 0C7.53795 0 7.85714 0.335859 7.85714 0.75V1.5H8.92857C9.52009 1.5 10 2.00367 10 2.625V3.75H0V2.625C0 2.00367 0.479688 1.5 1.07143 1.5H2.14286V0.75ZM10 10.875C10 11.4961 9.52009 12 8.92857 12H1.07143C0.479688 12 0 11.4961 0 10.875V4.5H10V10.875Z"
                                        fill="#89857D"/>
                                </svg>
                                26.07.2022
                            </span>
                                                                        <span>
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
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
                                            <li className="account-history__item">
                                                <div className="account-history-element">
                                                    <div className="account-history-element__body">
                                                        <div className="account-history-element__col">
                                                            <div className="account-history-element__icon ">
                                                                <img src="img/account/icon-2.svg" width="18" height="18"
                                                                     alt=""
                                                                     className="account-history-element__icon--img"/>
                                                            </div>
                                                        </div>
                                                        <div className="account-history-element__col">
                                                            <div className="account-history-element__row">
                                                                <div className="account-history-element__row--col">
                                                                    <strong className="account-history-element__value">
                                                                        20 фишек
                                                                    </strong>
                                                                    <span className="account-history-element__name">
                            Пополнение баланса
                        </span>
                                                                </div>
                                                                <div className="account-history-element__row--col">
                                                                    <time className="account-history-element__time"
                                                                          dateTime="2022-07-26 12:45">
                            <span>
                                <svg width="10" height="12" viewBox="0 0 10 12" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M2.14286 0.75C2.14286 0.335859 2.46205 0 2.85714 0C3.25223 0 3.57143 0.335859 3.57143 0.75V1.5H6.42857V0.75C6.42857 0.335859 6.74777 0 7.14286 0C7.53795 0 7.85714 0.335859 7.85714 0.75V1.5H8.92857C9.52009 1.5 10 2.00367 10 2.625V3.75H0V2.625C0 2.00367 0.479688 1.5 1.07143 1.5H2.14286V0.75ZM10 10.875C10 11.4961 9.52009 12 8.92857 12H1.07143C0.479688 12 0 11.4961 0 10.875V4.5H10V10.875Z"
                                        fill="#89857D"/>
                                </svg>
                                26.07.2022
                            </span>
                                                                        <span>
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
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
                                            <li className="account-history__item">
                                                <div className="account-history-element">
                                                    <div className="account-history-element__body">
                                                        <div className="account-history-element__col">
                                                            <div className="account-history-element__icon ">
                                                                <img src="img/account/icon-1.svg" width="18" height="18"
                                                                     alt=""
                                                                     className="account-history-element__icon--img"/>
                                                            </div>
                                                        </div>
                                                        <div className="account-history-element__col">
                                                            <div className="account-history-element__row">
                                                                <div className="account-history-element__row--col">
                                                                    <strong className="account-history-element__value">
                                                                        20.00 USD
                                                                    </strong>
                                                                    <span className="account-history-element__name">
                            Пополнение баланса
                        </span>
                                                                </div>
                                                                <div className="account-history-element__row--col">
                                                                    <time className="account-history-element__time"
                                                                          dateTime="2022-07-26 12:45">
                            <span>
                                <svg width="10" height="12" viewBox="0 0 10 12" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M2.14286 0.75C2.14286 0.335859 2.46205 0 2.85714 0C3.25223 0 3.57143 0.335859 3.57143 0.75V1.5H6.42857V0.75C6.42857 0.335859 6.74777 0 7.14286 0C7.53795 0 7.85714 0.335859 7.85714 0.75V1.5H8.92857C9.52009 1.5 10 2.00367 10 2.625V3.75H0V2.625C0 2.00367 0.479688 1.5 1.07143 1.5H2.14286V0.75ZM10 10.875C10 11.4961 9.52009 12 8.92857 12H1.07143C0.479688 12 0 11.4961 0 10.875V4.5H10V10.875Z"
                                        fill="#89857D"/>
                                </svg>
                                26.07.2022
                            </span>
                                                                        <span>
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
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
                                            <li className="account-history__item">
                                                <div className="account-history-element">
                                                    <div className="account-history-element__body">
                                                        <div className="account-history-element__col">
                                                            <div className="account-history-element__icon _accent">
                                                                <img src="img/account/icon-2.svg" width="18" height="18"
                                                                     alt=""
                                                                     className="account-history-element__icon--img"/>
                                                            </div>
                                                        </div>
                                                        <div className="account-history-element__col">
                                                            <div className="account-history-element__row">
                                                                <div className="account-history-element__row--col">
                                                                    <strong className="account-history-element__value">
                                                                        20 фишек
                                                                    </strong>
                                                                    <span className="account-history-element__name">
                            Победа в игре “Дурак”
                        </span>
                                                                </div>
                                                                <div className="account-history-element__row--col">
                                                                    <time className="account-history-element__time"
                                                                          dateTime="2022-07-26 12:45">
                            <span>
                                <svg width="10" height="12" viewBox="0 0 10 12" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M2.14286 0.75C2.14286 0.335859 2.46205 0 2.85714 0C3.25223 0 3.57143 0.335859 3.57143 0.75V1.5H6.42857V0.75C6.42857 0.335859 6.74777 0 7.14286 0C7.53795 0 7.85714 0.335859 7.85714 0.75V1.5H8.92857C9.52009 1.5 10 2.00367 10 2.625V3.75H0V2.625C0 2.00367 0.479688 1.5 1.07143 1.5H2.14286V0.75ZM10 10.875C10 11.4961 9.52009 12 8.92857 12H1.07143C0.479688 12 0 11.4961 0 10.875V4.5H10V10.875Z"
                                        fill="#89857D"/>
                                </svg>
                                26.07.2022
                            </span>
                                                                        <span>
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
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
                                            <li className="account-history__item">
                                                <div className="account-history-element">
                                                    <div className="account-history-element__body">
                                                        <div className="account-history-element__col">
                                                            <div className="account-history-element__icon _accent">
                                                                <img src="img/account/icon-1.svg" width="18" height="18"
                                                                     alt=""
                                                                     className="account-history-element__icon--img"/>
                                                            </div>
                                                        </div>
                                                        <div className="account-history-element__col">
                                                            <div className="account-history-element__row">
                                                                <div className="account-history-element__row--col">
                                                                    <strong className="account-history-element__value">
                                                                        20.00 USD
                                                                    </strong>
                                                                    <span className="account-history-element__name">
                            Победа в игре “Дурак”
                        </span>
                                                                </div>
                                                                <div className="account-history-element__row--col">
                                                                    <time className="account-history-element__time"
                                                                          dateTime="2022-07-26 12:45">
                            <span>
                                <svg width="10" height="12" viewBox="0 0 10 12" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M2.14286 0.75C2.14286 0.335859 2.46205 0 2.85714 0C3.25223 0 3.57143 0.335859 3.57143 0.75V1.5H6.42857V0.75C6.42857 0.335859 6.74777 0 7.14286 0C7.53795 0 7.85714 0.335859 7.85714 0.75V1.5H8.92857C9.52009 1.5 10 2.00367 10 2.625V3.75H0V2.625C0 2.00367 0.479688 1.5 1.07143 1.5H2.14286V0.75ZM10 10.875C10 11.4961 9.52009 12 8.92857 12H1.07143C0.479688 12 0 11.4961 0 10.875V4.5H10V10.875Z"
                                        fill="#89857D"/>
                                </svg>
                                26.07.2022
                            </span>
                                                                        <span>
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
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
                                            <li className="account-history__item">
                                                <div className="account-history-element">
                                                    <div className="account-history-element__body">
                                                        <div className="account-history-element__col">
                                                            <div className="account-history-element__icon _accent">
                                                                <img src="img/account/icon-3.svg" width="18" height="18"
                                                                     alt=""
                                                                     className="account-history-element__icon--img"/>
                                                            </div>
                                                        </div>
                                                        <div className="account-history-element__col">
                                                            <div className="account-history-element__row">
                                                                <div className="account-history-element__row--col">
                                                                    <strong className="account-history-element__value">
                                                                        20 фишек
                                                                    </strong>
                                                                    <span className="account-history-element__name">
                            Победа в игре “Дурак”
                        </span>
                                                                </div>
                                                                <div className="account-history-element__row--col">
                                                                    <time className="account-history-element__time"
                                                                          dateTime="2022-07-26 12:45">
                            <span>
                                <svg width="10" height="12" viewBox="0 0 10 12" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M2.14286 0.75C2.14286 0.335859 2.46205 0 2.85714 0C3.25223 0 3.57143 0.335859 3.57143 0.75V1.5H6.42857V0.75C6.42857 0.335859 6.74777 0 7.14286 0C7.53795 0 7.85714 0.335859 7.85714 0.75V1.5H8.92857C9.52009 1.5 10 2.00367 10 2.625V3.75H0V2.625C0 2.00367 0.479688 1.5 1.07143 1.5H2.14286V0.75ZM10 10.875C10 11.4961 9.52009 12 8.92857 12H1.07143C0.479688 12 0 11.4961 0 10.875V4.5H10V10.875Z"
                                        fill="#89857D"/>
                                </svg>
                                26.07.2022
                            </span>
                                                                        <span>
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
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
                                        <div className="account-history__pagination">
                                            <div className="page-pagination">
                                                <div className="page-pagination__wrapper">
                                                    <a href="#" className="page-pagination__btn _prev _disabled">
                                                        <svg width="9" height="12" viewBox="0 0 9 12" fill="none"
                                                             xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M8.16016 1.41L3.58016 6L8.16016 10.59L6.75016 12L0.750156 6L6.75016 0L8.16016 1.41Z"
                                                                fill="#474747"/>
                                                        </svg>
                                                    </a>
                                                    <ul className="page-pagination__list">
                                                        <li className="page-pagination__item">
                                                            <a href="#" className="page-pagination__link _current">
                                                                1
                                                            </a>
                                                        </li>
                                                        <li className="page-pagination__item">
                                                            <a href="#" className="page-pagination__link">
                                                                2
                                                            </a>
                                                        </li>
                                                        <li className="page-pagination__item">
                                                            <a href="#" className="page-pagination__link">
                                                                ...
                                                            </a>
                                                        </li>
                                                        <li className="page-pagination__item">
                                                            <a href="#" className="page-pagination__link">
                                                                9
                                                            </a>
                                                        </li>
                                                        <li className="page-pagination__item">
                                                            <a href="#" className="page-pagination__link">
                                                                10
                                                            </a>
                                                        </li>
                                                    </ul>
                                                    <a href="#" className="page-pagination__btn _next">
                                                        <svg width="9" height="12" viewBox="0 0 9 12" fill="none"
                                                             xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M0.839844 1.41L5.41984 6L0.839844 10.59L2.24984 12L8.24984 6L2.24984 0L0.839844 1.41Z"
                                                                fill="white"/>
                                                        </svg>
                                                    </a>
                                                </div>
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
