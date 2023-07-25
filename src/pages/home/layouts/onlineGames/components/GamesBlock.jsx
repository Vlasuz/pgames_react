import React, {useEffect, useState} from 'react';
import handleChangeTypeGames from "../features/HandleChangeTypeGames";
import GameIcons from "../../../../../features/gameIcons";
import gameClassName from "../features/GameClassName";
import Game from "../../../../../components/Game";
import image1 from '../../../../../assets/img/main-page/games/image-1.webp'
import axios from "axios";
import ApiLink from "../../../../../constants/ApiLink";

const GamesBlock = () => {

    const [games, setGames] = useState([])
    const [activeGame, setActiveGame] = useState('hot')

    useEffect(() => {
        axios.get(ApiLink(`api/game/list/`)).then(({data}) => {
            setGames(data)
        }).catch(error => {
            console.log("api/game/list/", error)
        })
    }, [])

    useEffect(() => {
        !!games.length && setActiveGame(`${games[0].slug}`)
    }, [games])

    return (
        <div className="games__body tab-wrapper" data-aos="fade-in" data-aos-delay="300">
            <div className="games__filter hide-on-table">
                <ul className="games__filter--list">

                    {
                        !!games.length && games?.map((game, index) =>
                            <li key={index} className="games__filter--item">
                                <button onClick={_ => handleChangeTypeGames(`${game.slug}`, setActiveGame)}
                                        className={"games__filter--btn tab-btn" + (activeGame === `${game.slug}` ? " _active" : "")}>
                                    <img src={GameIcons(game.slug)} width="13" height="13" alt=""
                                         className="games__filter--icon"/>
                                    {game.name}
                                </button>
                            </li>
                        )
                    }

                </ul>
            </div>
            <div className="games__wrapper tab-list">

                {
                    !!games.length && games?.map((allGames, index) => {
                        return (
                            <div key={index}
                                 className={"games__wrapper--block tab-block" + (gameClassName(activeGame, allGames.slug))}
                                 id={allGames.slug}>
                                <ul className="games__list">
                                    {
                                        games.filter(item => activeGame.includes(item.slug))[0]?.game.map((game, index) =>
                                            <Game
                                                key={index}
                                                title={'Игра какая-то'}
                                                link={'/fool'}
                                                image={game.image}
                                            />
                                        )
                                    }
                                </ul>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    );
};

export default GamesBlock;