import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import ActiveNotification from "../../hooks/ActiveNotification";
import {accountInformation} from "../../redux/actions";

const AccountChangeInformation = ({ userInfo }) => {

    const [inputEmail, setInputEmail] = useState('')
    const [inputName, setInputName] = useState('')
    const [isActiveInputsForInformation, setIsActiveInputsForInformation] = useState(false)

    useEffect(() => {
        setInputEmail(userInfo?.email ? userInfo?.email : "")
        setInputName(userInfo?.username ? userInfo?.username : "")
    }, [userInfo])

    const dispatch = useDispatch();

    const handleChangeInformation = (e) => {
        e.preventDefault()
        setIsActiveInputsForInformation(false)
        e.target.closest('form').querySelectorAll('input').forEach(input => input.disabled = true);

        ActiveNotification('#notification_change-account')
    }

    return (
        <div className="account__col _auto _full-on-mob">
            <div className="account__block" data-aos="fade-in" data-aos-delay="700"
                 data-aos-anchor=".account__main">
                <div className="account__block--body _none-padding _transparent">
                    <div className="account-settings-element">
                        <h3 className="account-settings-element__title">
                            Информация
                        </h3>
                        <form action="#" onSubmit={e => handleChangeInformation(e)} className="account-settings-element__form">
                            <div className="account-settings-element__form--list form-list">
                                <label className="account-settings-element__label form-label">
                                    <input type="email" name="email"
                                           placeholder="Email"
                                           className="account-settings-element__input form-input"
                                           required
                                           disabled={!isActiveInputsForInformation}
                                           value={inputEmail}
                                           onChange={e => setInputEmail(e.target.value)}
                                    />
                                    <span className="account-settings-element__input-placeholder form-input-placeholder">
                                                Email
                                            </span>
                                </label>
                                <label className="account-settings-element__label form-label">
                                    <input type="text" name="name" value="Jane_006"
                                           placeholder="Имя пользователя"
                                           className="account-settings-element__input form-input"
                                           required
                                           disabled={!isActiveInputsForInformation}
                                           value={inputName}
                                           onChange={e => setInputName(e.target.value)}
                                    />
                                    <span className="account-settings-element__input-placeholder form-input-placeholder">
                                                Имя пользователя
                                            </span>
                                </label>
                            </div>
                            <button
                                className={"account-settings-element__submit btn _accent _large-2" + (isActiveInputsForInformation ? "" : " _hidden")}
                            >
                                Сохранить
                            </button>
                            <div
                                className={"account-settings-element__submit btn _dark _large-2" + (isActiveInputsForInformation ? " _hidden" : "")}
                                onClick={() => setIsActiveInputsForInformation(true)}
                            >
                                Изменить
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccountChangeInformation;