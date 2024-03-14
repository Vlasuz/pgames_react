import React, {useEffect} from 'react'
import {IUser} from "../../../models";
import {useSelector} from "react-redux";

interface IProfileSettingsInformationProps {

}

export const ProfileSettingsInformation: React.FC<IProfileSettingsInformationProps> = () => {

    const user: IUser = useSelector((state: any) => state.toolkit.user)

    return (
        <div className="account__col _auto _full-on-mob">
            <div className="account__block" data-aos="fade-in" data-aos-delay="700"
                 data-aos-anchor=".account__main">
                <div className="account__block--body _none-padding _transparent">
                    <div className="account-settings-element">
                        <h3 className="account-settings-element__title">
                            Информация
                        </h3>
                        <form action="#" className="account-settings-element__form">
                            <div className="account-settings-element__form--list form-list">
                                <label className="account-settings-element__label form-label">
                                    <input type="email" name="email"
                                           value={user.email}
                                           placeholder="Email"
                                           className="account-settings-element__input form-input"
                                           required/>
                                    <span
                                        className="account-settings-element__input-placeholder form-input-placeholder">
                                                                Email
                                                            </span>
                                </label>
                                <label className="account-settings-element__label form-label">
                                    <input type="text" name="name" value={user.username}
                                           placeholder="Имя пользователя"
                                           className="account-settings-element__input form-input"
                                           required/>
                                    <span
                                        className="account-settings-element__input-placeholder form-input-placeholder">
                                                                Имя пользователя
                                                            </span>
                                </label>
                            </div>
                            <button
                                className="account-settings-element__submit btn _dark _large-2"
                                type="submit">
                                Изменить
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
