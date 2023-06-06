import React, {useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import axios from "axios";
import {gamesSearchReducer} from "../../redux/reducers/gamesSearchReducer";
import GlobalLink from "../../GlobalLink";

const GamesSearchGames = () => {

    const searchValue = useSelector(state => state.GamesSearchReducer.text)
    const [games, setGames] = useState([])

    useEffect(() => {
        axios.get(`https://board-games.sonisapps.com/api/game/search/?query=${searchValue}`).then(({data}) => {
            setGames(data)
        })
    }, [searchValue])

    return (
        <>
            <div className="online-games__main" data-aos="fade-in" data-aos-delay="400">
                <div className="online-games__search-result">
                    <h3 className="online-games__search-result--title section-title _decor-none">
                        Игра
                    </h3>
                    <span className="online-games__search-result--value">
                        {games.length} Игр
                    </span>
                </div>
                <div className="online-games__main--wrapper">
                    <div className="online-games__main--block">

                        <ul className="online-games__list">
                            {
                                games.map(game =>
                                    <li key={game.slug} className="online-games__item">
                                        <NavLink to={'/games/' + game.slug}
                                                 className="online-games__link">
                                            <picture>
                                                <img src={GlobalLink(`/${game?.image}`)} loading="lazy" alt=""
                                                     width="194" height="194"
                                                     className="online-games__link--img"/>
                                            </picture>
                                        </NavLink>
                                    </li>
                                )
                            }
                        </ul>

                    </div>
                </div>
            </div>
            <div className="online-games__footer" data-aos="fade-in" data-aos-delay="400"
                 data-aos-anchor=".online-games__main">
                {/*{*/}
                {/*    showItems < games.filter(item => item.title.toLowerCase().includes(searchText.toLowerCase())).length ?*/}
                {/*        <button onClick={e => setShowItems(prev => prev + count_of_plus)}*/}
                {/*                className="online-games__more-btn btn _large-2 _min-fs">*/}
                {/*            Показать ещё*/}
                {/*        </button> : ""*/}
                {/*}*/}
            </div>
        </>
    );
};

export default GamesSearchGames;