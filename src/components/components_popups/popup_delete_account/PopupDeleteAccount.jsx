import React, {useState} from 'react';
import PopupBgd from "../PopupBgd";
import PopupCross from "../PopupCross";
import {useDispatch} from "react-redux";
import {popupTitle} from "../../../redux/actions";
import axios from "axios";
import GetCookies from "../../../hooks/GetCookies";
import {useNavigate} from "react-router-dom";
import {setUserInfo} from "../../../redux/reducers/userInfoReducer";

const PopupDeleteAccount = () => {

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
        axios.defaults.headers.delete['Authorization'] = `Bearer ${GetCookies('access_token')}`;
        axios.delete(`https://board-games.sonisapps.com/api/user/confirm_delete_account/?delete_code=${code}`).then((res) => {
            console.log('delete', res)
            if (res.data.status) {
                document.querySelector('.popup')?.classList.remove('_active')
                setTimeout(() => {
                    dispatch(popupTitle(''))
                }, 300)

                dispatch(setUserInfo({}))
                document.cookie = "access_token=; expires=Thu, 18 Dec 2013 12:00:00 UTC";
                GetCookies('access_token')

                navigate('/')
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
                            Удаление аккаунта
                        </h2>
                        <div className="promocode-popup__form--list popup-form-list"><label
                            className="promocode-popup__label popup-label">
                            <input onChange={e => setCode(e.target.value)} value={code} type="text" name="promocode" required="" placeholder="Код из смс" className="promocode-popup__input popup-input"/>
                            <span className="promocode-popup__input-placeholder popup-input-placeholder">Код из смс</span></label>
                        </div>
                        <div className="promocode-popup__form popup-form">
                            <button onClick={handleDelete}
                                    className="promocode-popup__submit popup-submit btn _red _large _shadow">
                                Удалить аккаунт
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

export default PopupDeleteAccount;