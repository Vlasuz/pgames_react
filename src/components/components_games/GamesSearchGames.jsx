import React, {useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";

const GamesSearchGames = () => {

    const games = useSelector(state => {
        const {GamesListReducer} = state;
        return GamesListReducer.games;
    })

    const searchText = useSelector(state => {
        const {GamesSearchReducer} = state
        return GamesSearchReducer.text
    })

    const [showItems, setShowItems] = useState(1)
    const count_of_plus = 1

    function countOfGames(length) {
        let text;
        switch (true) {
            case length === 1:
                text = 'игра'
                break;
            case length >= 2 && length <= 4:
                text = "игры"
                break;
            case length >= 5 && length <= 20:
                text = "игр"
                break;
            default:
                text = "игра"
                break;
        }
        return length + " " + text
    }


    return (
        <>
            <div className="online-games__main" data-aos="fade-in" data-aos-delay="400">
                <div className="online-games__search-result">
                    <h3 className="online-games__search-result--title section-title _decor-none">
                        Игра
                    </h3>
                    <span className="online-games__search-result--value">
                        {countOfGames(games.filter(item => item.title.toLowerCase().includes(searchText.toLowerCase())).length)}
                    </span>
                </div>
                <div className="online-games__main--wrapper">
                    <div className="online-games__main--block">

                        <ul className="online-games__list">
                            {
                                games.filter(item => item.title.toLowerCase().includes(searchText.toLowerCase())).map((game, gameNum) => gameNum < showItems ?
                                    <li key={game.id} className="online-games__item">
                                        <NavLink to={'/games/' + game.id}
                                                 className="online-games__link">
                                            <picture>
                                                <img src={game.image} loading="lazy" alt=""
                                                     width="194" height="194"
                                                     className="online-games__link--img"/>
                                            </picture>
                                        </NavLink>
                                    </li> : ""
                                )
                            }
                        </ul>

                    </div>
                </div>
            </div>
            <div className="online-games__footer" data-aos="fade-in" data-aos-delay="400"
                 data-aos-anchor=".online-games__main">
                {
                    showItems < games.filter(item => item.title.toLowerCase().includes(searchText.toLowerCase())).length ?
                        <button onClick={e => setShowItems(prev => prev + count_of_plus)}
                                className="online-games__more-btn btn _large-2 _min-fs">
                            Показать ещё
                        </button> : ""
                }
            </div>
        </>
    );
};

export default GamesSearchGames;