import React from 'react';
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";

const FooterHot = () => {

    const games = useSelector(state => {
        const {GamesListReducer} = state;
        return GamesListReducer.games
    })

    return (
        <div className="footer__hot">
            <h2 className="footer__hot--title">
                Горячие предложения!
            </h2>
            <ul className="footer__hot--list">

                {games.filter(item => item.catalog_id.includes('0')).map((item, itemNum) => itemNum < 3 ?
                    <li key={item.id} className="footer__hot--item">
                        <NavLink to={"/games/"+item.id} className="footer__hot--link" title="Название игры">
                            <img src={"../" + item.image} loading="lazy" alt={item.title_of_game} loading="lazy" width="300"
                                 className="footer__hot--img"/>
                        </NavLink>
                    </li> : ""
                )}

            </ul>
        </div>
    );
};

export default FooterHot;