import React, {useEffect} from 'react'
import {getApiLink} from "../../../functions/getApiLink";
import {IGame} from "../../../models";
import {NavLink} from "react-router-dom";

interface IGamesItemProps {
    itemData: IGame
}

export const GamesItem: React.FC<IGamesItemProps> = ({itemData}) => {

    return (
        <li className="online-games__item">
            <NavLink to={`/games/${itemData.slug}`} className="online-games__link">
                <picture>
                    <img src={getApiLink("/" + itemData?.image)} loading="lazy" alt=""
                         width="194" height="194"
                         className="online-games__link--img"/>
                </picture>
            </NavLink>
        </li>
    )
}
