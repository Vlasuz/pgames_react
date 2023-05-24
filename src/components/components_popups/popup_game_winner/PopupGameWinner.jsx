import React, {useEffect, useState} from 'react';
import PopupBgd from "../PopupBgd";
import PopupCross from "../PopupCross";
import {popupTitle} from "../../../redux/actions";
import {useDispatch} from "react-redux";

const PopupGameWinner = ({props}) => {

    const dispatch = useDispatch()
    const [text, setText] = useState('')
    const handleClosePopup = () => {
        document.querySelector('.popup')?.classList.remove('_active')
        setTimeout(() => {
            dispatch(popupTitle(''))
        }, 300)
    }

    useEffect(() => {
        setText(props.game_result_status)
    }, [props])

    return (
        <div className={"chess-win-popup popup"}>
            <div className="chess-win-popup__wrapper popup-wrapper">
                <PopupBgd/>
                <div className="chess-win-popup__body popup-body">
                    <div className="chess-win-popup__container popup-container">
                        <PopupCross/>
                        <h2 className="chess-win-popup__title popup-title section-title _decor-none">
                            {text}
                        </h2>
                        <div className="chess-win-popup__text popup-text _left">
                            {
                                props.outcome === 'winner' ? "Поздравляем! Вы выиграли" : ""
                            }
                            <br/>
                            <br/>
                            <br/>
                        </div>
                        <button onClick={handleClosePopup} className="chess-win-popup__btn btn popup-btn popup-close _green">
                            Ок
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopupGameWinner;