import React, {useEffect} from 'react'

interface IProfileSettingsPasswordProps {

}

export const ProfileSettingsPassword: React.FC<IProfileSettingsPasswordProps> = () => {

    return (
        <div className="account__col _auto _full-on-mob">
            <div className="account__block" data-aos="fade-in" data-aos-delay="800"
                 data-aos-anchor=".account__main">
                <div className="account__block--body _none-padding _transparent">
                    <div className="account-settings-element">
                        <h3 className="account-settings-element__title">
                            Пароль
                        </h3>
                        <form action="#" className="account-settings-element__form">
                            <div className="account-settings-element__form--list form-list">
                                <label className="account-settings-element__label form-label">
                                    <input type="password" name="password" value="123123123"
                                           placeholder="Пароль"
                                           className="account-settings-element__input form-input _none-placeholder"
                                           required/>
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
