import React, {useEffect, useState} from 'react';
import ActiveNotification from "../../hooks/ActiveNotification";
import axios from "axios";
import GetCookies from "../../hooks/GetCookies";
import GlobalLink from "../../GlobalLink";

const AccountChangePassword = ({userInfo}) => {

    const [isActiveChange, setIsActiveChange] = useState(false)

    const [password, setPassword] = useState('123456789')
    const [oldPassword, setOldPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [repeatNewPassword, setRepeatNewPassword] = useState('')

    const handleChangePassword = (e) => {
        e.preventDefault()

        console.log(`/api/user/change_password/?old_password=${oldPassword}&password=${newPassword}&confirm_password=${repeatNewPassword}`)

        axios.defaults.headers.put['Authorization'] = `Bearer ${GetCookies('access_token')}`;
        axios.put(GlobalLink(`/api/user/change_password/?old_password=${oldPassword}&password=${newPassword}&confirm_password=${repeatNewPassword}`)).then(res => {
            console.log('success', res.data)

            ActiveNotification('#notification_change-password')
            setIsActiveChange(false)

            setPassword(newPassword)
            setOldPassword('')
            setNewPassword('')
            setRepeatNewPassword('')
        }).catch(error => {
            console.log(error)
            ActiveNotification('#notification_change-password-error')
        })

    }
    return (
        <div className="account__col _auto _full-on-mob">
            <div className="account__block" data-aos="fade-in" data-aos-delay="800"
                 data-aos-anchor=".account__main">
                <div className="account__block--body _none-padding _transparent">
                    <div className="account-settings-element">
                        <h3 className="account-settings-element__title">
                            Пароль
                        </h3>
                        {
                            isActiveChange ?
                                <form className="account-settings-element__form account-settings-element__form_password">
                                    {/*(password === oldPassword ? "" : " _error")*/}
                                    <div
                                        className={"account-settings-element__form--list form-list"}>
                                        <label className="account-settings-element__label form-label">
                                            <input type="password" name="password"
                                                   placeholder="Введите старый пароль"
                                                   className="account-settings-element__input form-input _none-placeholder"
                                                   required
                                                   onChange={e => setOldPassword(e.target.value)}
                                                   value={oldPassword}
                                            />
                                        </label>
                                    </div>
                                    <div
                                        className={"account-settings-element__form--list form-list" + (newPassword === repeatNewPassword ? "" : " _error")}>
                                        <label className="account-settings-element__label form-label">
                                            <input type="password" name="password"
                                                   placeholder="Введите новый пароль"
                                                   className="account-settings-element__input form-input _none-placeholder"
                                                   required
                                                   onChange={e => setNewPassword(e.target.value)}
                                                   value={newPassword}
                                            />
                                        </label>
                                    </div>
                                    <div
                                        className={"account-settings-element__form--list form-list" + (newPassword === repeatNewPassword ? "" : " _error")}>
                                        <label className="account-settings-element__label form-label">
                                            <input type="password" name="password"
                                                   placeholder="Введите новый пароль еще раз"
                                                   className="account-settings-element__input form-input _none-placeholder"
                                                   required
                                                   onChange={e => setRepeatNewPassword(e.target.value)}
                                                   value={repeatNewPassword}
                                            />
                                        </label>
                                    </div>
                                    <button
                                        onClick={handleChangePassword}
                                        className="account-settings-element__submit btn _dark _large-2">
                                        Изменить
                                    </button>
                                </form>
                                :
                                <>
                                    <div className="account-settings-element__form--list form-list">
                                        <label className="account-settings-element__label form-label">
                                            <input type="password" name="password" value={password} disabled
                                                   placeholder="Пароль"
                                                   className="account-settings-element__input form-input _none-placeholder"
                                                   required/>
                                        </label>
                                    </div>
                                    <button
                                        className="account-settings-element__submit btn _dark _large-2"
                                        type="submit"
                                        onClick={() => setIsActiveChange(true)}
                                    >
                                        Изменить
                                    </button>
                                </>
                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccountChangePassword;