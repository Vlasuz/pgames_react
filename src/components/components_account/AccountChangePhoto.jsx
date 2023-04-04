import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import ActiveNotification from "../../hooks/ActiveNotification";
import {accountPhoto} from "../../redux/actions";

const AccountChangePhoto = () => {

    const dispatch = useDispatch();

    const photo = useSelector(state => {
        const { accountPhotoReducer } = state;
        return accountPhotoReducer.photo;
    })
    const [newPhoto, setNewPhoto] = useState('')
    const handleLoadPhoto = (e) => {
        setNewPhoto(e.target.value)
    }
    const handleChangePhoto = (e) => {
        e.preventDefault()
        ActiveNotification('#notification_change-account')
        dispatch(accountPhoto({photo: newPhoto}))
        setNewPhoto('')
    }

    return (
        <div className="account__col _min">
            <div className="account__block" data-aos="fade-in" data-aos-delay="500"
                 data-aos-anchor=".account__main">
                <div className="account__block--body _none-padding _transparent">
                    <div className="account-settings-element">
                        <h3 className="account-settings-element__title">
                            Фото
                        </h3>
                        <form action="#" className="account-settings-element__avatar">
                            <label className="account-settings-element__avatar--body">
                                <div className="account-settings-element__avatar--label">
                                    <img src={photo || photo !== newPhoto ? photo : "images/account/avatar-none.svg"} width="116"
                                         height="116"
                                         alt=""
                                         className="account-settings-element__avatar--img" />
                                    <input onChange={handleLoadPhoto} required type="file" name="avatar"
                                           className="account-settings-element__avatar--input" />
                                </div>
                                {/*<div type={"button"} className="account-settings-element__avatar--add btn _dark _large-2">*/}
                                {/*    Добавить*/}
                                {/*</div>*/}
                                <div
                                    className={"account-settings-element__avatar--add btn _dark _large-2" + (newPhoto ? " _hidden" : "")}
                                >
                                    Добавить
                                </div>
                                <div
                                    className={"account-settings-element__avatar--add btn _accent _large-2" + (newPhoto ? "" : " _hidden")}
                                    onClick={handleChangePhoto}
                                >
                                    Сохранить
                                </div>
                            </label>
                            <div className="account-settings-element__avatar--text">
                                Ваше фото будут видеть все игроки во время игры
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccountChangePhoto;