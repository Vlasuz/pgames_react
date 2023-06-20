import React, {useEffect, useState} from 'react';
import PopupBgd from "../PopupBgd";
import PopupCross from "../PopupCross";
import {popupTitle} from "../../../redux/actions";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

const PopupGameWinner = ({props}) => {


    const dispatch = useDispatch()
    const [text, setText] = useState('')
    const user = useSelector(state => state.userInfoReducer.data)
    const players = useSelector(state => state.gamesListPlayersReducer.players)
    const navigate = useNavigate()

    const handleClosePopup = () => {
        document.querySelector('.popup')?.classList.remove('_active')
        setTimeout(() => {
            dispatch(popupTitle(''))
        }, 300)
    }

    useEffect(() => {
        setText(props?.game_result_status)
    }, [props])

    const translatedText = {
        'STALEMATE': 'Пат',
        'INSUFFICIENT_MATERIAL': 'недостаточный выигрышный материал',
        'FIVEFOLD_REPETITION': 'Пятикратное повторение позиции',
        'SEVENTYFIVE_MOVES': 'Правило 75 ходов',
        'FIFTY_MOVES': 'Правило 50 ходов',
        'THREEFOLD_REPETITION': 'Троекратное повторение позиции',
        'white': 'Победили белые',
        'black': 'Победили черные',
        'draw': 'Ничья',
    }
    const colors = ['white', 'black']

    let isYouWinner = false

    if(props?.game_result_status) {
        isYouWinner = props?.game_result_status === colors[players.filter(item => item.id === user.id)[0].position - 1] ? "Поздравляем! Вы выиграли" : "К сожалению, вы проиграли"
    } else if (props?.winner_id) {
        isYouWinner = props?.winner_id === user.id ? "Поздравляем! Вы выиграли" : "К сожалению, вы проиграли"
    }

    if(!props) return null;

    return (
        <div className={"chess-win-popup popup"}>
            <div className="chess-win-popup__wrapper popup-wrapper">
                <PopupBgd/>
                <div className="chess-win-popup__body popup-body">
                    <div className="chess-win-popup__container popup-container">
                        <PopupCross/>
                        <h2 className="chess-win-popup__title popup-title section-title _decor-none">
                            {props?.outcome === 'winner' ? translatedText[text] : translatedText[props.outcome]}
                            {
                                props?.winner_id ? isYouWinner : ""
                            }
                        </h2>
                        <div className="chess-win-popup__text popup-text _left">
                            {props?.game_result_status && props?.outcome === 'winner' ? isYouWinner : translatedText[text]}
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