import React from 'react';
import PopupBgd from "./PopupBgd";
import PopupCross from "./PopupCross";
import ClosePopup from "../../hooks/ClosePopup";
import {NavLink, useNavigate} from "react-router-dom";
import {popupTitle} from "../../redux/actions";
import {useDispatch} from "react-redux";

const PopupWinnerGame = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleContinue = () => {
        document.querySelector('.popup')?.classList.remove('_active')
        setTimeout(() => {
            dispatch(popupTitle(''))
        }, 300)
    }

    return (
        <div className="game-exit-popup popup" id="game-exit-popup">
            <div className="game-exit-popup__wrapper popup-wrapper">
                <PopupBgd/>
                <div className="game-exit-popup__body popup-body">
                    <div className="game-exit-popup__container popup-container">
                        <PopupCross/>
                        <h2 className="game-exit-popup__title popup-title section-title _decor-none">
                            Вы выиграли
                        </h2>
                        <div className="game-exit-popup__text popup-text _left">
                            Хотите выйти с комнаты или остаться и продолжить просмотр?
                        </div>
                        <button onClick={handleContinue} className="game-exit-popup__btn btn popup-btn">
                            Остаться
                        </button>
                        <NavLink to={_ => navigate(-1)} className="game-exit-popup__btn btn popup-btn _red">
                            Выйти из игры
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopupWinnerGame;