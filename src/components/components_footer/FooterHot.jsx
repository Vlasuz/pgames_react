import React from 'react';
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import GlobalLink from "../../GlobalLink";

const FooterHot = () => {

    const games = useSelector(state => state.gamesListReducer.list)

    return (
        <div className="footer__hot">
            <h2 className="footer__hot--title">
                Горячие предложения!
            </h2>
            <ul className="footer__hot--list">

                {
                    games.map(item => {
                        return item.game.map((game, index) =>
                            <li key={index} className="footer__hot--item">
                                <NavLink to={"/games/"+game.slug} className="footer__hot--link" title={game.name}>
                                    <img src={GlobalLink('/' + game.image)} loading="lazy" alt={game.name} loading="lazy" width="300"
                                         className="footer__hot--img"/>
                                </NavLink>
                            </li>
                        )
                    })
                }

            </ul>
        </div>
    );
};

export default FooterHot;