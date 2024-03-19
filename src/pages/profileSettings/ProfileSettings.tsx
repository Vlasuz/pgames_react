import React from 'react'
import {Aside} from "../../components/aside/Aside";
import {ProfileSettingsStyled} from "./ProfileSettings.styled";
import {ProfileSettingsPhoto} from "./components/ProfileSettingsPhoto";
import {ProfileSettingsInformation} from "./components/ProfileSettingsInformation";
import {ProfileSettingsPassword} from "./components/ProfileSettingsPassword";

interface IProfileSettingsProps {

}

export const ProfileSettings: React.FC<IProfileSettingsProps> = () => {


    return (
        <ProfileSettingsStyled className="main">
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
                                Настройки
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
                                            Настройки
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="account__main--wrapper">
                            <div className="account__row">

                                <ProfileSettingsPhoto/>

                                <ProfileSettingsInformation/>

                                <ProfileSettingsPassword/>

                                <div className="account__col _full _border-top" data-aos="fade-in" data-aos-delay="1000"
                                     data-aos-anchor=".account__main">
                                    <div className="account-wallets">
                                        <h3 className="account-wallets__title min-title">
                                            Ввод кошелька
                                        </h3>
                                        <div className="account-wallets__add">
                                            <a href="#" className="account-wallets__add--btn btn _large-2">
                                                Добавить кошелек
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M0 8C0 3.58125 3.58125 0 8 0C12.4187 0 16 3.58125 16 8C16 12.4187 12.4187 16 8 16C3.58125 16 0 12.4187 0 8ZM8 11.5C8.41563 11.5 8.75 11.1656 8.75 10.75V8.75H10.75C11.1656 8.75 11.5 8.41563 11.5 8C11.5 7.58437 11.1656 7.25 10.75 7.25H8.75V5.25C8.75 4.83437 8.41563 4.5 8 4.5C7.58437 4.5 7.25 4.83437 7.25 5.25V7.25H5.25C4.83437 7.25 4.5 7.58437 4.5 8C4.5 8.41563 4.83437 8.75 5.25 8.75H7.25V10.75C7.25 11.1656 7.58437 11.5 8 11.5Z"
                                                        fill="#F9F1DF"/>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </ProfileSettingsStyled>
    )
}
