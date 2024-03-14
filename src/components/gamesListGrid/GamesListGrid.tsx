import React, {useEffect, useState} from 'react'
import {gamesIcon} from "../../constants/GamesIcon";
import {GamesItem} from "../../pages/games/components/GamesItem";
import {IGame, IGames} from "../../models";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {getApiLink} from "../../functions/getApiLink";
import {setGames} from "../../storage/toolkit";

interface IGamesListGridProps {
    searchValue?: string
}

export const GamesListGrid: React.FC<IGamesListGridProps> = ({searchValue}) => {

    const games: IGames[] = useSelector((state: any) => state.toolkit.games)

    const [gamesList, setGamesList] = useState<IGames[]>(games)
    const [activeGamesType, setActiveGamesType] = useState<string>("")
    const [isBlockVisible, setIsBlockVisible] = useState(true)
    const [allGames, setAllGames] = useState<IGame[]>([])

    const concatAllGames = () => {
        games.map(item => {
            console.log(item.game)
            setAllGames(prev => [...prev, ...item.game])
        })
    }

    const dispatch = useDispatch()

    useEffect(() => {
        concatAllGames()
    }, [games])

    useEffect(() => {

        axios.get<IGames[]>(getApiLink(`/api/game/list/`)).then(({data}) => {
            setGamesList(data)
            setActiveGamesType(data[0].slug)
            dispatch(setGames(data))
        }).catch(er => {
            console.log(er)
        })

    }, [])

    const handleChangeType = (gameType: string) => {
        setIsBlockVisible(false)

        setTimeout(() => {
            setIsBlockVisible(true)
            setActiveGamesType(gameType)
        }, 200)
    }

    const gamesForLoop = !searchValue ? gamesList?.filter(item => item.slug === activeGamesType)[0]?.game : allGames?.filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase()) || item.slug.toLowerCase().includes(searchValue.toLowerCase()))

    return (
        <div className="online-games__main _pt tab-wrapper" data-aos1="fade-in" data-aos-delay="400">
            {!searchValue && <div className="online-games__filter">
                <ul className="online-games__filter--list">

                    {
                        gamesList.map(item =>
                            <li key={item.slug} className="online-games__filter--item">
                                <button onClick={_ => handleChangeType(item.slug)}
                                        className={`online-games__filter--btn tab-btn ${activeGamesType === item.slug && "_active"}`}>
                                    <img src={gamesIcon[item.slug]} width="10" height="10" alt=""
                                         className="online-games__filter--icon"/>
                                    {item.name}
                                </button>
                            </li>
                        )
                    }

                </ul>
            </div>}

            <div className="online-games__main--wrapper tab-list">

                <div
                    className={`online-games__main--block tab-block _active ${isBlockVisible && "_visible"}`}>
                    <ul className="online-games__list">
                        {
                            gamesForLoop?.map(item =>
                                <GamesItem key={item.slug} itemData={item}/>
                            )
                        }
                    </ul>
                </div>

            </div>
        </div>
    )
}
