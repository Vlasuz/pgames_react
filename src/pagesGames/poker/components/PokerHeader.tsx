import React, {Dispatch, SetStateAction, useContext, useEffect} from 'react'
import {NavLink} from "react-router-dom";
import {PopupContext} from "../../../App";

interface IPokerHeaderProps {

}

export const PokerHeader: React.FC<IPokerHeaderProps> = () => {

    const setModal: Dispatch<SetStateAction<string>> = useContext(PopupContext)

    const handleOpenCombination = () => {
        setModal('poker-combination')
    }

    return (
        <div className="game__header">
            <div className="game__header--col">
                <h2 className="game__header--name section-title _decor-none">
                    Holdem
                </h2>
                <button onClick={handleOpenCombination} className="game__header--large-btn btn _large _border open-popup">
                    Комбинации карт
                </button>
            </div>
            <div className="game__header--col">
                <div className="game__header--block">
                    <NavLink to={"/games"} className="game__header--btn btn _dark open-popup">
                        Выйти
                    </NavLink>
                    {/*<a href="#game-invite-popup" className="game__header--btn btn _red open-popup">*/}
                    {/*    Пригласить +*/}
                    {/*</a>*/}
                </div>
            </div>
        </div>
    )
}
