import React from 'react';
import {Link, NavLink, useNavigate} from "react-router-dom";
import OpenPopup from "../../hooks/OpenPopup";
import {useDispatch, useSelector} from "react-redux";
import {logoutReducer} from "../../redux/reducers/logoutReducer";
import {actionLogout, popupTitle} from "../../redux/actions";

const AccountAside = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()


    const handleExit = (e) => {
        e.preventDefault()
        dispatch(actionLogout(prev => !prev))
        navigate('/')
    }

    return (
        <aside className="account__aside account-aside">
            <div className="account-aside__body">
                <ul className="account-aside__list">
                    <li className="account-aside__item">
                        <NavLink to={"/account-main"} className={({isActive}) => isActive ? "account-aside__link _active" : "account-aside__link" }>
                            <svg width="11" height="12" viewBox="0 0 11 12" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M5.5 6.00035C7.23594 6.00035 8.64286 4.65707 8.64286 3.00018C8.64286 1.34328 7.23594 0 5.5 0C3.76406 0 2.35714 1.34328 2.35714 3.00018C2.35714 4.65707 3.76406 6.00035 5.5 6.00035ZM6.74487 7.12542H4.25513C1.9056 7.12542 0 8.94427 0 11.1874C0 11.636 0.381071 12 0.851027 12H10.1495C10.6194 12.0007 11 11.6374 11 11.1874C11 8.94427 9.09464 7.12542 6.74487 7.12542Z"
                                    fill="#61C8AF"/>
                            </svg>
                            Личный кабинет
                        </NavLink>
                    </li>
                    <li className="account-aside__item">
                        <NavLink to={"/account-settings"} className={({isActive}) => isActive ? "account-aside__link _active" : "account-aside__link" }>
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M13.5601 4.55547C13.6503 4.79063 13.5738 5.05586 13.3878 5.22812L12.2039 6.30547C12.2339 6.53242 12.2503 6.76484 12.2503 7C12.2503 7.23516 12.2339 7.46758 12.2039 7.69453L13.3878 8.77187C13.5738 8.94414 13.6503 9.20937 13.5601 9.44453C13.4398 9.76992 13.2949 10.0844 13.1308 10.3824L13.0023 10.6039C12.8218 10.9047 12.6195 11.1891 12.398 11.4598C12.2339 11.6539 11.9687 11.7223 11.7281 11.6457L10.205 11.159C9.83862 11.4406 9.40932 11.6758 9.0019 11.8563L8.6601 13.4176C8.60542 13.6637 8.41401 13.8387 8.16245 13.9043C7.7851 13.9672 7.39682 14 6.97573 14C6.60385 14 6.21557 13.9672 5.83823 13.9043C5.58667 13.8387 5.39526 13.6637 5.34057 13.4176L4.99878 11.8563C4.56674 11.6758 4.16206 11.4406 3.79565 11.159L2.2737 11.6457C2.03198 11.7223 1.76538 11.6539 1.6035 11.4598C1.38174 11.1891 1.1794 10.9047 0.998932 10.6039L0.870963 10.3824C0.704987 10.0844 0.560612 9.76992 0.439479 9.44453C0.350885 9.20937 0.425533 8.94414 0.613112 8.77187L1.796 7.69453C1.76592 7.46758 1.75034 7.23516 1.75034 7C1.75034 6.76484 1.76592 6.53242 1.796 6.30547L0.613112 5.22812C0.425533 5.05586 0.350885 4.79336 0.439479 4.55547C0.560612 4.23008 0.70526 3.91563 0.870963 3.61758L0.998658 3.39609C1.1794 3.09531 1.38174 2.81094 1.6035 2.5416C1.76538 2.34609 2.03198 2.27828 2.2737 2.35539L3.79565 2.84102C4.16206 2.55828 4.56674 2.32313 4.99878 2.14457L5.34057 0.583242C5.39526 0.334961 5.58667 0.137812 5.83823 0.0959766C6.21557 0.0328398 6.60385 0 7.00034 0C7.39682 0 7.7851 0.0328398 8.16245 0.0959766C8.41401 0.137812 8.60542 0.334961 8.6601 0.583242L9.0019 2.14457C9.40932 2.32313 9.83862 2.55828 10.205 2.84102L11.7281 2.35539C11.9687 2.27828 12.2339 2.34609 12.398 2.5416C12.6195 2.81094 12.8218 3.09531 13.0023 3.39609L13.1308 3.61758C13.2949 3.91563 13.4398 4.23008 13.5601 4.55547ZM7.00034 9.1875C8.20893 9.1875 9.18784 8.20859 9.18784 6.97539C9.18784 5.79141 8.20893 4.78789 7.00034 4.78789C5.79174 4.78789 4.81284 5.79141 4.81284 6.97539C4.81284 8.20859 5.79174 9.1875 7.00034 9.1875Z"
                                    fill="#F9F1DF"/>
                            </svg>
                            Настройки
                        </NavLink>
                    </li>
                    <li className="account-aside__item">
                        <NavLink to={"/account-history"} className={({isActive}) => isActive ? "account-aside__link _active" : "account-aside__link" }>
                            <svg width="13" height="13" viewBox="0 0 13 13" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M6.5 0C10.0902 0 13 2.90977 13 6.5C13 10.0902 10.0902 13 6.5 13C5.12129 13 3.83906 12.5684 2.78535 11.8346C2.41719 11.5553 2.3268 11.0703 2.58477 10.7021C2.84121 10.334 3.34648 10.2451 3.71465 10.5016C4.5043 11.0525 5.46406 11.375 6.5 11.375C9.19141 11.375 11.375 9.19141 11.375 6.5C11.375 3.78574 9.19141 1.625 6.5 1.625C5.13145 1.625 3.93555 2.16988 3.05195 3.05195L3.83398 3.83398C4.21738 4.21738 3.9457 4.875 3.40488 4.875H0.609375C0.272949 4.875 0 4.60332 0 4.26562V1.47113C0 0.928281 0.656348 0.656348 1.04025 1.04025L1.90379 1.90379C3.07988 0.728457 4.70488 0 6.47715 0H6.5ZM6.5 3.25C6.8377 3.25 7.10938 3.52168 7.10938 3.85938V6.24863L8.73691 7.89648C8.9959 8.13516 8.9959 8.52109 8.73691 8.73691C8.52109 8.9959 8.13516 8.9959 7.89648 8.73691L6.06836 6.90879C5.9541 6.81738 5.89062 6.6625 5.89062 6.5V3.85938C5.89062 3.52168 6.1623 3.25 6.5 3.25Z"
                                    fill="#F9F1DF"/>
                            </svg>
                            История пополнений
                        </NavLink>
                    </li>
                    <li className="account-aside__item">
                        <NavLink to={"/account-referal"} className={({isActive}) => isActive ? "account-aside__link _active" : "account-aside__link" }>
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M8.75 2.625H5.25L3.95391 0.680312C3.75977 0.389375 3.96758 0 4.31758 0H9.68242C10.0324 0 10.2402 0.389375 10.0461 0.680312L8.75 2.625ZM5.25 3.5H8.75C8.85391 3.56836 8.97148 3.64492 9.08086 3.72969C10.6559 4.72227 14 6.86055 14 11.375C14 12.8242 12.8242 14 11.375 14H2.625C1.17523 14 0 12.8242 0 11.375C0 6.86055 3.34414 4.72227 4.89453 3.72969C5.02852 3.64492 5.14609 3.56836 5.25 3.5ZM7.54961 6.125C7.54961 5.82148 7.30352 5.57539 6.97539 5.57539C6.69648 5.57539 6.45039 5.82148 6.45039 6.125V6.28906C6.29727 6.32188 6.12773 6.36836 6.01562 6.42852C5.6082 6.61445 5.25273 6.95898 5.16523 7.45937C5.11602 7.73828 5.14336 8.00898 5.2582 8.25234C5.37305 8.49297 5.55078 8.6625 5.73125 8.78555C6.04844 9.00156 6.4668 9.12734 6.78672 9.22305L6.84687 9.23945C7.22969 9.35703 7.48672 9.4418 7.64805 9.55937C7.71641 9.60859 7.74102 9.64688 7.74922 9.67148C7.76016 9.69336 7.77656 9.74258 7.75742 9.85195C7.74102 9.94766 7.68906 10.0297 7.53867 10.0926C7.37188 10.1637 7.10117 10.1992 6.75117 10.1445C6.58711 10.1172 6.29453 10.0188 6.03477 9.93125C5.97461 9.90938 5.91445 9.89023 5.85977 9.87109C5.57266 9.77539 5.26367 9.93125 5.16797 10.2184C5.07227 10.5055 5.22813 10.8145 5.51523 10.8855C5.54805 10.9211 5.58906 10.9348 5.63555 10.9512C5.82695 11.025 6.19062 11.1398 6.45039 11.2V11.375C6.45039 11.6785 6.69648 11.9246 6.97539 11.9246C7.30352 11.9246 7.54961 11.6785 7.54961 11.375V11.2246C7.69453 11.1973 7.83672 11.1316 7.96797 11.0988C8.4 10.9156 8.74453 10.5602 8.83477 10.0406C8.88398 9.75625 8.86211 9.48281 8.75273 9.23398C8.64609 8.98789 8.47383 8.80742 8.29063 8.67617C7.95977 8.43281 7.5168 8.30156 7.18594 8.20039L7.13945 8.19492C6.77578 8.07734 6.51328 7.99531 6.34648 7.88047C6.27539 7.83125 6.25352 7.79844 6.24805 7.78477C6.24258 7.77383 6.22617 7.74102 6.24258 7.64805C6.25352 7.59336 6.29453 7.50313 6.4668 7.42656C6.61992 7.34727 6.91523 7.30352 7.24883 7.33086C7.36914 7.37461 7.73828 7.4457 7.84492 7.47305C8.13477 7.55234 8.43555 7.37734 8.51211 7.08477C8.59141 6.79492 8.41641 6.49414 8.12383 6.41758C8.00352 6.38477 7.73008 6.33008 7.54961 6.29727V6.125Z"
                                    fill="#F9F1DF"/>
                            </svg>
                            Реферальная система
                        </NavLink>
                    </li>
                    <li className="account-aside__item">
                        <NavLink to={"/account-withdrawals"} className={({isActive}) => isActive ? "account-aside__link _active" : "account-aside__link" }>
                            <svg width="14" height="12" viewBox="0 0 14 12" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M12.4444 0.75C13.3024 0.75 14 1.42148 14 2.25V3H0V2.25C0 1.42148 0.696354 0.75 1.55556 0.75H12.4444ZM14 9.75C14 10.5773 13.3024 11.25 12.4444 11.25H1.55556C0.696354 11.25 0 10.5773 0 9.75V5.25H14V9.75ZM2.72222 8.25C2.50833 8.25 2.33333 8.41875 2.33333 8.625C2.33333 8.83125 2.50833 9 2.72222 9H4.27778C4.49167 9 4.66667 8.83125 4.66667 8.625C4.66667 8.41875 4.49167 8.25 4.27778 8.25H2.72222ZM5.83333 9H8.94444C9.15833 9 9.33333 8.83125 9.33333 8.625C9.33333 8.41875 9.15833 8.25 8.94444 8.25H5.83333C5.61944 8.25 5.44444 8.41875 5.44444 8.625C5.44444 8.83125 5.61944 9 5.83333 9Z"
                                    fill="#F9F1DF"/>
                            </svg>
                            Вывод средств
                        </NavLink>
                    </li>
                    <li className="account-aside__item _border">
                        <button onClick={_ => dispatch(popupTitle('promo-code'))} className="account-aside__link _accent open-popup">
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M4.15625 0H4.21641C5.08867 0 5.89805 0.462383 6.34102 1.21543L7 2.3368L7.65898 1.21543C8.10195 0.462383 8.91133 0 9.78359 0H9.84375C11.1727 0 12.25 1.07734 12.25 2.40625C12.25 2.8 12.1543 3.14727 11.9875 3.5H13.125C13.609 3.5 14 3.89102 14 4.375V6.125C14 6.60898 13.609 7 13.125 7H0.875C0.391836 7 0 6.60898 0 6.125V4.375C0 3.89102 0.391836 3.5 0.875 3.5H2.0125C1.84461 3.14727 1.75 2.8 1.75 2.40625C1.75 1.07734 2.82734 0 4.15625 0ZM5.20898 1.8807C5.00117 1.52879 4.62383 1.3125 4.21641 1.3125H4.15625C3.55195 1.3125 3.0625 1.80223 3.0625 2.40625C3.0625 3.01055 3.55195 3.5 4.15625 3.5H6.16055L5.20898 1.8807ZM9.84375 1.3125H9.78359C9.37617 1.3125 8.99883 1.52879 8.79102 1.8807L7.83945 3.5H9.84375C10.448 3.5 10.9375 3.01055 10.9375 2.40625C10.9375 1.80223 10.448 1.3125 9.84375 1.3125ZM0.875 7.875H6.125V14H2.1875C1.46262 14 0.875 13.4121 0.875 12.6875V7.875ZM7.875 14V7.875H13.125V12.6875C13.125 13.4121 12.5371 14 11.8125 14H7.875Z"
                                    fill="#61C8AF"/>
                            </svg>
                            Промокод
                        </button>
                    </li>
                    <li className="account-aside__item">
                        <a onClick={_ => dispatch(popupTitle('promo-code'))} className="account-aside__link open-popup">
                            <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.7887 5.20202L8.32012 9.24972C7.92963 9.60601 7.31241 9.3179 7.31241 8.76325V6.4316C3.37426 6.49053 1.67723 7.52188 2.82838 11.4062C2.95612 11.8372 2.46252 12.1713 2.11596 11.905C1.00517 11.0526 0 9.42385 0 7.77637C0 3.69919 3.23462 2.83661 7.31216 2.78571V0.643186C7.31216 0.0894718 7.92862 -0.199574 8.31987 0.15671L12.7884 4.20442C13.0705 4.48409 13.0705 4.94485 12.7887 5.20202Z" fill="#F9F1DF"></path>
                            </svg>
                            Подписаться
                        </a>
                    </li>
                    <li className="account-aside__item">
                        <button onClick={handleExit} className="account-aside__link">
                            <svg width="14" height="12" viewBox="0 0 14 12" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M2.625 12H4.375C4.85898 12 5.25 11.617 5.25 11.1429C5.25 10.6687 4.85898 10.2857 4.375 10.2857H2.625C2.14184 10.2857 1.75 9.90188 1.75 9.42857V2.57143C1.75 2.09812 2.14184 1.71429 2.625 1.71429H4.375C4.85898 1.71429 5.25 1.33045 5.25 0.857143C5.25 0.383839 4.85898 0 4.375 0H2.625C1.17523 0 0 1.15125 0 2.57143V9.42857C0 10.8482 1.17523 12 2.625 12ZM13.8031 5.53125L9.86289 1.88839C9.67217 1.7122 9.39258 1.66406 9.15195 1.76534C8.91125 1.86704 8.7552 2.09936 8.7552 2.35596L8.75269 4.28454L5.25269 4.28451C4.76897 4.28451 4.37714 4.66835 4.37714 5.14165V6.85594C4.37714 7.32924 4.76925 7.71308 5.25269 7.71308L8.75269 7.71311L8.7552 9.61757C8.7552 9.87413 8.91125 10.1064 9.15195 10.2082C9.39266 10.3095 9.67231 10.2613 9.86289 10.0851L13.8031 6.44229C14.0656 6.225 14.0656 5.775 13.8031 5.53125Z"
                                    fill="#F9F1DF"/>
                            </svg>
                            Выйти
                        </button>
                    </li>
                </ul>
            </div>
        </aside>
    );
};

export default AccountAside;