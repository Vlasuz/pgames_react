import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {accountInformation, accountPhoto} from "../../redux/actions";
import AccountChangePhoto from "./AccountChangePhoto";
import AccountChangeInformation from "./AccountChangeInformation";
import AccountChangePassword from "./AccountChangePassword";
import {setTimeoutNotice} from "../../redux/reducers/notificationReducer";
import InputMask from 'react-input-mask';
// import MaterialInput from '@material-ui/core/Input';

const SettingsInner = () => {

    const userInfo = useSelector(state => state.userInfoReducer.data)
    const dispatch = useDispatch()

    const [addWallet, setAddWallet] = useState(false)


    const handleAddWallet = () => {
        setAddWallet(false)
        dispatch(setTimeoutNotice('notification_is-develop'))
    }

    return (
        <div className="account__main--wrapper">
            <div className="account__row">
                <AccountChangePhoto userInfo={userInfo}/>
                <AccountChangeInformation userInfo={userInfo}/>
                <AccountChangePassword userInfo={userInfo}/>
                <div className="account__col _full _border-top" data-aos="fade-in" data-aos-delay="1000"
                     data-aos-anchor=".account__main">
                    <div className="account-wallets">
                        <h3 className="account-wallets__title min-title">
                            Ввод кошелька
                        </h3>
                        <div className="account-wallets__add">
                            {!addWallet &&
                                <a onClick={_ => setAddWallet(true)} className="account-wallets__add--btn btn _large-2">
                                    Добавить кошелек
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M0 8C0 3.58125 3.58125 0 8 0C12.4187 0 16 3.58125 16 8C16 12.4187 12.4187 16 8 16C3.58125 16 0 12.4187 0 8ZM8 11.5C8.41563 11.5 8.75 11.1656 8.75 10.75V8.75H10.75C11.1656 8.75 11.5 8.41563 11.5 8C11.5 7.58437 11.1656 7.25 10.75 7.25H8.75V5.25C8.75 4.83437 8.41563 4.5 8 4.5C7.58437 4.5 7.25 4.83437 7.25 5.25V7.25H5.25C4.83437 7.25 4.5 7.58437 4.5 8C4.5 8.41563 4.83437 8.75 5.25 8.75H7.25V10.75C7.25 11.1656 7.58437 11.5 8 11.5Z"
                                            fill="#F9F1DF"/>
                                    </svg>
                                </a>}
                        </div>
                        {addWallet && <form action="" onSubmit={handleAddWallet} className={'add-wallet'}>
                            <label className="account-settings-element__label form-label">
                                <InputMask mask="9999 9999 9999 9999"/>
                                <span className="account-settings-element__input-placeholder form-input-placeholder">Номер карты</span>
                            </label>
                            <div className="date-cvv">
                                <label className="account-settings-element__label form-label">
                                    <InputMask mask="99/99"/>
                                    <span className="account-settings-element__input-placeholder form-input-placeholder">Месяц/Год</span>
                                </label>
                                <label className="account-settings-element__label form-label">
                                    <InputMask mask="999"/>
                                    <span className="account-settings-element__input-placeholder form-input-placeholder">CVV</span>
                                </label>
                            </div>
                            <button
                                type={'submit'}
                                className="account-wallets__add--btn btn _large-2">
                                Сохранить
                            </button>
                        </form>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SettingsInner;