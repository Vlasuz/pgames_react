import React, {useEffect, useState} from 'react';
import handleChangeTypeGames from "../features/HandleChangeTypeGames";
import GameIcons from "../../../../../features/gameIcons";
import gameClassName from "../features/GameClassName";
import Game from "../../../../../components/Game";
import image1 from '../../../../../assets/img/main-page/games/image-1.webp'

const GamesBlock = () => {
    const typeGames = [
        {
            title: 'Популярное',
            slug: 'hot'
        },
        {
            title: 'Карточные',
            slug: 'cards'
        }
    ]
    const games = [
        {
            type: 'hot',
            games: [
                'cards'
            ]
        },
        {
            type: 'cards',
            games: [
                'cards',
                'cards'
            ]
        },
    ]

    const [activeGame, setActiveGame] = useState('hot')

    useEffect(() => {
        setActiveGame(`${typeGames[0].slug}`)
    }, [])

    return (
        <div className="games__body tab-wrapper" data-aos="fade-in" data-aos-delay="300">
            <div className="games__filter hide-on-table">
                <ul className="games__filter--list">

                    {
                        typeGames.map((type, index) =>
                            <li key={index} className="games__filter--item">
                                <button onClick={_ => handleChangeTypeGames(`${type.slug}`, setActiveGame)} className={"games__filter--btn tab-btn" + (activeGame === `${type.slug}` ? " _active" : "")}>
                                    <img src={GameIcons(type.slug)} width="13" height="13" alt=""
                                         className="games__filter--icon"/>
                                    {type.title}
                                </button>
                            </li>
                        )
                    }

                </ul>
            </div>
            <div className="games__wrapper tab-list">

                {
                    games.map((gamesType, index) => {
                        return (
                            <div key={index} className={"games__wrapper--block tab-block" + (gameClassName(activeGame, gamesType.type))} id={gamesType.type}>
                                <ul className="games__list">
                                    {
                                        gamesType.games.map((game, index) =>
                                            <Game
                                                key={index}
                                                title={'Игра какая-то'}
                                                link={'/fool'}
                                                image={image1}
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