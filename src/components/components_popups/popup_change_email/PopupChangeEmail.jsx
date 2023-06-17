import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {popupTitle} from "../../../redux/actions";
import axios from "axios";
import GetCookies from "../../../hooks/GetCookies";
import {setUserInfo} from "../../../redux/reducers/userInfoReducer";
import PopupBgd from "../PopupBgd";
import PopupCross from "../PopupCross";
import GlobalLink from "../../../GlobalLink";
import {setTimeoutNotice} from "../../../redux/reducers/notificationReducer";

const PopupChangeEmail = ({props}) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [code, setCode] = useState('')

    const handleClosePopup = () => {
        document.querySelector('.popup')?.classList.remove('_active')
        setTimeout(() => {
            dispatch(popupTitle(''))
        }, 300)
    }

    const handleDelete = () => {

        axios.defaults.headers.put['platform'] = `pc`;
        axios.defaults.headers.put['Authorization'] = `Bearer ${GetCookies('access_token')}`;
        axios.put(GlobalLink(`/api/user/confirm_email_change/?email=${props.inputEmail}&code=${code}`)).then((res) => {
            console.log('change email', res)

            if (res.status === 200) {
                document.querySelector('.popup')?.classList.remove('_active')
                setTimeout(() => {
                    dispatch(popupTitle(''))
                }, 300)

                document.cookie = 'access_token=' + res.data.access_token + ';expires=;';
                document.cookie = 'refresh_token=' + res.data.refresh_token + ';expires=;';
                dispatch(setUserInfo(res.data.user))

                dispatch(setTimeoutNotice('notification_change-account'))

            }
        })
    }

    return (
        <div className="promocode-popup popup" id="promocode-popup">
            <div className="promocode-popup__wrapper popup-wrapper">
                <PopupBgd/>
                <div className="promocode-popup__body popup-body">
                    <div className="promocode-popup__container popup-container">
                        <PopupCross/>
                        <div className="promocode-popup__logo popup-logo">
                            <img src="images/logo.svg" width="100" height="38" alt="" className="popup-logo__img"/>
                        </div>
                        <h2 className="promocode-popup__title popup-title section-title _center">
                            Изменение Email
                        </h2>
                        <div className="promocode-popup__form--list popup-form-list"><label
                            className="promocode-popup__label popup-label">
                            <input onChange={e => setCode(e.target.value)} value={code} type="text" name="promocode" required="" placeholder="Код из смс" className="promocode-popup__input popup-input"/>
                            <span className="promocode-popup__input-placeholder popup-input-placeholder">Код из смс</span></label>
                        </div>
                        <div className="promocode-popup__form popup-form">
                            <button onClick={handleDelete}
                                    className="promocode-popup__submit popup-submit btn _red _large _shadow">
                                Изменить Email
                            </button>
                            <button onClick={handleClosePopup}
                                    className="promocode-popup__submit popup-submit btn _large _shadow">
                                Отменить
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopupChangeEmail;