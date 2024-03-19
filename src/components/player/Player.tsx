import React, {useContext, useEffect, useState} from 'react'
import {PlayerStyled} from "./Player.styled";
import dealer from './../../assets/img/game/dealer.svg'
import {IPlayer, IPlayerUser, IUser} from "../../models";
import {useAllCards} from "../../hooks/AllCards";
import {UserTurnRef, WSMessage} from "../../pagesGames/fool/Fool";
import {getApiLink} from "../../functions/getApiLink";

interface IPlayerProps {
    isHavePlayer: boolean
    playerInfo?: IPlayerUser
    isReady: boolean
    position: number
    isDealer?: boolean
    isPlayerMin?: boolean
    gameSlug?: string
    isWaitingGame?: boolean
    userTurn?: any
    playerNewCards?: any
    userEvent?: any
}

export const Player: React.FC<IPlayerProps> = ({isHavePlayer, playerInfo, isReady, position, isDealer, isPlayerMin, gameSlug, isWaitingGame, userTurn, playerNewCards, userEvent}) => {

    const playerWaiting = <>
        <svg width="10" height="11" viewBox="0 0 10 11" fill="none"
             xmlns="http://www.w3.org/2000/svg">
            <path
                d="M5 5.50032C6.57812 5.50032 7.85714 4.26898 7.85714 2.75016C7.85714 1.23134 6.57812 0 5 0C3.42188 0 2.14286 1.23134 2.14286 2.75016C2.14286 4.26898 3.42188 5.50032 5 5.50032ZM6.1317 6.53163H3.8683C1.73237 6.53163 0 8.19892 0 10.2551C0 10.6663 0.346429 11 0.773661 11H9.22679C9.65402 11.0006 10 10.6676 10 10.2551C10 8.19892 8.26786 6.53163 6.1317 6.53163Z"
                fill="#2D6B67"/>
        </svg>
        Ожидание...
    </>

    const ws: any = useContext(WSMessage)
    const userRef: any = useContext(UserTurnRef)

    const {allCards}: any = useAllCards()

    const [cardsList, setCardsList] = useState(6)
    const [timer, setTimer] = useState(0)

    isHavePlayer = ws?.users?.filter((user: IPlayer) => user.position === position)[0]
    playerInfo = ws?.users?.filter((user: IPlayer) => user.position === position)[0]

    useEffect(() => {
        playerNewCards.length && playerNewCards?.map((player: any) => {
            const allAmount = player.cards_count
            const addCards = player?.player?.new_cards_count

            if(player?.player?.id === playerInfo?.id || player?.id === playerInfo?.id) {
                if(!!allAmount) {
                    setCardsList(allAmount)
                } else if(!!addCards) {
                    setCardsList(prev => prev + addCards)
                }
            }

        })
    }, [playerNewCards])

    useEffect(() => {
        if(!userEvent?.id) return

        if(userEvent.id === playerInfo?.id && cardsList && cardsList > 0)
             setCardsList(prev => prev - 1)

    }, [userEvent])

    useEffect(() => {
        if (!events[ws.event]) return;

        events[ws.event]();
    }, [ws]);

    const handleNewPlayer = (data: any) => {
        playerInfo = data;
    }

    useEffect(() => {
        if(!userTurn?.timeout) return;

        const timer = 70 - userTurn.timeout
        setTimer(timer === 0 ? 70 : timer)

    }, [userTurn])

    const events: { [key: string]: any } = {
        "new_player": () => handleNewPlayer(ws.data)
    }

    const isPlayerTurn = userTurn?.player?.id === playerInfo?.id ?? 0

    useEffect(() => {
        if(timer < 0) return;

        const interval = setInterval(() => {
            setTimer(prev => prev - 1)
        }, 1000)

        return () => clearInterval(interval)
    }, [timer])

    return (
        <PlayerStyled className={isWaitingGame ? (!isHavePlayer ? "game__player-waiting" : `game__player ${isPlayerMin && "_min"}`) : ""}>

            {!isHavePlayer ? (isWaitingGame ? playerWaiting : "") :
                <div className="game__player--body">
                    <div className="game__player--avatar">
                        <img src={getApiLink("/" + playerInfo?.avatar)} width="76" height="76" alt=""
                             className="game__player--avatar-img"/>
                    </div>
                    {isDealer && <div className="game__player--dealer">
                        <img src={dealer} alt="" className="game__player--dealer-img"/>
                    </div>}
                    <div className="game__player--info" ref={userEvent.id === playerInfo?.id ? userRef : null}>
                        <h3 className="game__player--name">
                            {playerInfo?.name ?? playerInfo?.username}
                        </h3>
                        {isPlayerTurn && <progress className="game__player--progress" max="100" value={timer * 100 / 70}></progress>}
                    </div>

                    <div className="game__player--block">

                        {!isWaitingGame && <div className="game__player--cards">
                            <ul className="game__player--cards-list">
                                {
                                    Array(cardsList).fill(1).map((item, index) =>
                                        <li key={index} className="game__player--cards-item">
                                            <div className="game__player--cards-item-body">
                                                <img src={allCards.back} alt="" className="game__player--cards-img"/>
                                            </div>
                                        </li>
                                    )
                                }
                            </ul>
                        </div>}

                        <div className="game__player--min-column">
                            {isWaitingGame && gameSlug !== "fool" && isReady && <div className="game__player--min-message">
                                Готов
                            </div>}

                            {
                                isWaitingGame && gameSlug === "fool" && playerInfo?.ready && <div className="game__player--status">
                                    Готов
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M0 6C0 2.68594 2.68594 0 6 0C9.31406 0 12 2.68594 12 6C12 9.31406 9.31406 12 6 12C2.68594 12 0 9.31406 0 6ZM8.71406 4.96406C8.96953 4.70859 8.96953 4.29141 8.71406 4.03594C8.45859 3.78047 8.04141 3.78047 7.78594 4.03594L5.25 6.57187L4.21406 5.53594C3.95859 5.28047 3.54141 5.28047 3.28594 5.53594C3.03047 5.79141 3.03047 6.20859 3.28594 6.46406L4.78594 7.96406C5.04141 8.21953 5.45859 8.21953 5.71406 7.96406L8.71406 4.96406Z"
                                            fill="#61C8AF"></path>
                                    </svg>
                                </div>
                            }

                            {/*<div className="game__player--min-message">*/}
                            {/*    240*/}
                            {/*    <img src={chip} alt="" />*/}
                            {/*</div>*/}
                            {/*<div className="game__player--min-message">*/}
                            {/*    бет +140*/}
                            {/*</div>*/}
                        </div>
                    </div>
                    {!!cardsList && <div
                        className={`game__player--cards poker-player-cards ${(position === 7 || position === 8) && "_to-left"}`}>
                        <ul className="poker-player-cards__list">
                            {/*{*/}
                            {/*    Array(cardsList).fill(6).map(item =>*/}
                            {/*        <li className="poker-player-cards__card">*/}
                            {/*            <div className="poker-player-cards__card--body">*/}
                            {/*                <img src={allCards.back} alt="" className="poker-player-cards__card--back"/>*/}
                            {/*                <img src={allCards["Diamond" + "3"]} alt=""*/}
                            {/*                     className="poker-player-cards__card--front"/>*/}
                            {/*            </div>*/}
                            {/*        </li>*/}
                            {/*    )*/}
                            {/*}*/}
                        </ul>
                    </div>}
                </div>}
        </PlayerStyled>
    )
}
