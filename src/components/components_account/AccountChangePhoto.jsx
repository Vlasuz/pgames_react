import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import ActiveNotification from "../../hooks/ActiveNotification";
import {accountPhoto} from "../../redux/actions";
import axios from "axios";
import GetCookies from "../../hooks/GetCookies";
import GlobalLink from "../../GlobalLink";
import {setUserInfo} from "../../redux/reducers/userInfoReducer";

const AccountChangePhoto = () => {

    const dispatch = useDispatch();
    const userInfo = useSelector(state => state.userInfoReducer.data)

    const [newPhoto, setNewPhoto] = useState('')
    const handleLoadPhoto = (e) => {
        var preview = document.querySelector('img');
        var file    = e.target.closest('label').querySelector('input').files[0];
        var reader  = new FileReader();

        reader.onloadend = function () {
            setNewPhoto(reader.result)
        }

        if (file) {
            reader.readAsDataURL(file);
        } else {
            preview.src = "";
        }
    }

    const handleChangePhoto = (e) => {
        e.preventDefault()

        var formData = new FormData();
        var imagefile = document.querySelector('.account-settings-element__avatar--input');
        formData.append("image", imagefile.files[0]);
        axios.defaults.headers.post['Authorization'] = `Bearer ${GetCookies('access_token')}`;
        axios.post('https://board-games.sonisapps.com/api/user/avatar/', formData).then(({data}) => {
            dispatch(setUserInfo(data))
            ActiveNotification('#notification_change-account')
            setNewPhoto('')
        })
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
                                    <img src={newPhoto !== "" ? newPhoto : userInfo.avatar ? GlobalLink('/'+userInfo.avatar) : "images/account/avatar-none.svg"} width="116"
                                         height="116"
                                         alt=""
                                         className="account-settings-element__avatar--img" />
                                    <input onChange={handleLoadPhoto} required type="file" name="avatar"
                                           className="account-settings-element__avatar--input" />
                                </div>
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