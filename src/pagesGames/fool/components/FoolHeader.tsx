import React, {useEffect} from 'react'
import {NavLink} from "react-router-dom";

interface IFoolHeaderProps {

}

export const FoolHeader: React.FC<IFoolHeaderProps> = () => {

    return (
        <div className="game__header">
            <div className="game__header--col">
                <h2 className="game__header--name section-title _decor-none">
                    Дурак
                </h2>
            </div>
            <div className="game__header--col">
                <div className="game__header--block">
                    <NavLink to={"/games/"} className="game__header--btn btn _dark open-popup">
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
