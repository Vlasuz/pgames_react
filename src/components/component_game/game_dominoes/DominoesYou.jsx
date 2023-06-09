import React, {createElement, useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setSelectDominoes} from "../../../redux/game_reducers/reducerChessFenTable";
import {reducerFoolUsersCards} from "../../../redux/game_reducers/reducerFoolUsersCards";
import GlobalLink from "../../../GlobalLink";

const DominoesYou = () => {

    const dispatch = useDispatch();
    const [yourCards, setYourCards] = useState([])
    const table = useSelector(state => state.reducerFenTable.fenTable)
    const userCards = useSelector(state => state.reducerFoolUsersCards.myCards)
    const user = useSelector(state => state.userInfoReducer.data)
    const playerTurn = useSelector(state => state.reducerPlayerTurn.playerTurn)
    const [timer, setTimer] = useState(0)

    const cardSelect = (first, second, e) => {

        if(playerTurn.player !== user.id) return null;

        document.querySelector('.game__domino-block--item._accent')?.classList.remove('_accent')
        e.target.closest('.game__domino-block--item').classList.add('_accent')

        if(table === undefined || table.length === 0) {
            dispatch(setSelectDominoes([first, second], null))
            return null;
        }

        let clearTable = [];
        table?.filter(item => {
            if(item !== null && item.length < 3) {
                clearTable = [...clearTable, item]
            }
        })

        if(!clearTable[0]) {
            dispatch(setSelectDominoes([first, second], null))
            return null;
        }

        const left = +clearTable[0][0]
        const right = +clearTable[clearTable.length - 1][1]

        if (first === left && first === right) {
            dispatch(setSelectDominoes([second, first], [first, second]))
        } else if (second === left && second === right) {
            dispatch(setSelectDominoes([first, second], [second, first]))
        } else if (first === left && second === right) {
            dispatch(setSelectDominoes([second, first], [second, first]))
        } else if (second === left && first === right) {
            dispatch(setSelectDominoes([first, second], [first, second]))
        } else if (first === right) {
            dispatch(setSelectDominoes(null, [first, second]))
        } else if (second === right) {
            dispatch(setSelectDominoes(null, [second, first]))
        } else if (first === left) {
            dispatch(setSelectDominoes([second, first], null))
        } else if (second === left) {
            dispatch(setSelectDominoes([first, second], null))
        } else {
            dispatch(setSelectDominoes(null, null))
        }

    }

    useEffect(() => {
        setTimer(playerTurn.time_remaining)
    }, [playerTurn])

    useEffect(() => {
        let time = setInterval(() => {
            timer > 0 && setTimer(prev => prev - 1)
        }, 1000)
        return () => clearInterval(time)
    }, [timer])

    useEffect(() => {

        setYourCards(userCards)
    }, [userCards])

    return (
        <div className="domino__grid--item">
            <div className="domino__user game__user">
                <div className="game__user--block">
                    <div className="game__user--domino-block game__domino-block">
                        <ul className="game__domino-block--list">

                            {
                                yourCards && yourCards.map((card, index) => {
                                    return (<li key={index} data-first={card?.first_side} data-second={card?.second_side} onClick={e => cardSelect(card.first_side, card.second_side, e)}
                                        className="game__domino-block--item">
                                        <div className="game__domino-block--item-body">
                                            <img
                                                src={`images/domino/figures/${card?.first_side}-${card?.second_side}.svg`}
                                                alt=""
                                                className="game__domino-block--img"/>
                                        </div>
                                    </li>)
                                })
                            }

                        </ul>
                    </div>
                </div>
                <div className="game__user--info">
                    <div className="game__user--info-body">
                        <h3 className="game__user--name">
                            Вы: {user.username}
                        </h3>
                        {playerTurn?.player === user?.id ? <progress className="game__player--progress" max="100" value={!isNaN(timer) && (timer * 100 / 60)}/> : ""}
                    </div>
                </div>
                <div className="game__user--avatar">
                    <img src={user.avatar ? GlobalLink('/'+user.avatar) : "images/account/avatar-none.svg"} alt="" className="game__user--avatar-img"/>
                </div>
            </div>
        </div>
    );
};

export default DominoesYou;