import React, {useEffect, useState} from 'react'
import axios from "axios";
import {getApiLink} from "../../../functions/getApiLink";
import {getBearer} from "../../../functions/getBearer";
import setCookie from "../../../functions/setCookie";
import {useDispatch} from "react-redux";
import {setNotification, setUser} from "../../../storage/toolkit";
import uniqid from "uniqid";

interface IProfileSettingsPasswordProps {

}

export const ProfileSettingsPassword: React.FC<IProfileSettingsPasswordProps> = () => {

    const [isStartChange, setIsStartChange] = useState(false)

    const [oldPassword, setOldPassword] = useState<string>("12345")
    const [newPassword, setNewPassword] = useState<string>("")
    const [confirmNewPassword, setConfirmNewPassword] = useState<string>("")

    const dispatch = useDispatch()

    const handleSave = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!oldPassword || !newPassword || !confirmNewPassword || !isStartChange) return;

        getBearer("put")
        axios.put(getApiLink(`/api/user/change_password/?old_password=${oldPassword}&password=${newPassword}&confirm_password=${confirmNewPassword}`)).then(({data}) => {
            setCookie("access_token_pg", data.access_token)
            setCookie("refresh_token_pg", data.refresh_token)

            setNewPassword('')
            setConfirmNewPassword('')

            dispatch(setNotification(`change_pass_success|${uniqid()}`))

            setIsStartChange(false)

            dispatch(setUser(data.user))
        }).catch(er => {
            console.log('ChangePassword', er?.response?.data?.detail)
            dispatch(setNotification(`${er?.response?.data?.detail}|${uniqid()}`))
        })

    }

    const handleStartChange = () => {
        setIsStartChange(true)
        setOldPassword("")
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
                        <form onSubmit={handleSave} className="account-settings-element__form">
                            <div className="account-settings-element__form--list form-list">
                                <label className="account-settings-element__label form-label">
                                    <input type="password" name="password"
                                           placeholder="Старый пароль"
                                           disabled={!isStartChange}
                                           className="account-settings-element__input form-input _none-placeholder"
                                           onChange={e => setOldPassword(e.target.value)}
                                           value={oldPassword}
                                           required/>
                                </label>
                                {isStartChange && <label className="account-settings-element__label form-label">
                                    <input type="password" name="password"
                                           placeholder="Новый пароль"
                                           disabled={!isStartChange}
                                           className="account-settings-element__input form-input _none-placeholder"
                                           onChange={e => setNewPassword(e.target.value)}
                                           value={newPassword}
                                           required/>
                                </label>}
                                {isStartChange && <label className="account-settings-element__label form-label">
                                    <input type="password" name="password"
                                           placeholder="Подтвердить новый пароль"
                                           disabled={!isStartChange}
                                           className="account-settings-element__input form-input _none-placeholder"
                                           onChange={e => setConfirmNewPassword(e.target.value)}
                                           value={confirmNewPassword}
                                           required/>
                                </label>}
                            </div>
                            <button
                                className={`account-settings-element__submit btn ${!isStartChange && "_dark"} _large-2`}
                                onClick={!isStartChange ? handleStartChange : () => {
                                }}
                                type={isStartChange ? "submit" : "button"}>
                                Изменить
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
