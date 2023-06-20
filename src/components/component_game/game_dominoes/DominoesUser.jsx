import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import GameReadyBlock from "../GameReadyBlock";
import GlobalLink from "../../../GlobalLink";
import {reducerPlayerMadeMove} from "../../../redux/game_reducers/reducerPlayerMadeMove";

const DominoesUser = ({player, position, isEndRound}) => {

    const playerTurn = useSelector(state => state.reducerPlayerTurn.playerTurn)
    const usersCards = useSelector(state => state.reducerFoolUsersCards.users)
    const userCards = useSelector(state => state.reducerFoolUsersCards.myCards)
    const isGameStart = useSelector(state => state.reducerIsGameStart.isGameStart)
    const usersReady = useSelector(state => state.reducerUserReadyState.usersReadyState)
    const table = useSelector(state => state.reducerFenTable)
    const playerMadeMove = useSelector(state => state.reducerPlayerMadeMove.playerMadeMove)
    const user = useSelector(state => state.userInfoReducer.data)
    const [isShowAnimBone, setIsShowAnimBone] = useState(false)
    const [isTwinsAnimBone, setIsTwinsAnimBone] = useState(false)
    const [whichSideRotate, setWhichSideRotate] = useState('')
    const [timer, setTimer] = useState(0)
    const [animationStyle, setAnimationStyle] = useState({})
    const [dominoes, setDominoes] = useState([])
    const [isThisUser, setIsThisUser] = useState(playerTurn.player === player.id)

    useEffect(() => {
        let arr = [];

        console.log(usersCards?.players, playerMadeMove.player === player.id)
        console.log(usersCards)

        if(playerMadeMove?.player_hand_count && playerMadeMove.player === player.id) {
            console.log(1)
            arr = new Array(playerMadeMove?.player_hand_count).fill()
            setDominoes(arr)
        } else if (usersCards && usersCards?.player === player.id) {
            console.log(2.5)
            arr = new Array(usersCards?.player_hand_count).fill()
            setDominoes(arr)
        } else if (usersCards?.players && usersCards?.players?.some(item => item.id === player.id)) {
            console.log(2)
            arr = new Array(usersCards?.players?.filter(item => item.id === player.id)[0].hand).fill()
            setDominoes(arr)
        } else if((!usersCards?.players && !dominoes.length) || isEndRound) {
            console.log(3)
            arr = new Array(userCards.length).fill()
            setDominoes(arr)
        }

    }, [usersCards, playerMadeMove])

    useEffect(() => {
        setTimer(playerTurn.time_remaining)
    }, [playerTurn])

    useEffect(() => {
        let time = setInterval(() => {
            timer > 0 && setTimer(prev => prev - 1)
        }, 1000)

        return () => clearInterval(time)
    }, [timer])

    useEffect(() => {

        if (playerTurn.player !== user.id && table?.selectArray?.length) {
            setIsShowAnimBone(true)

            setIsThisUser(playerTurn.player === player.id)

            setTimeout(() => {
                setIsShowAnimBone(false)
            }, 600)
        }

    }, [table.fenTable])

    useEffect(() => {
        let leftSide, topSide;

        if (!isShowAnimBone) return;

        if (table.selectArray?.length) {

            if (table?.selectArray[0] === table?.selectArray[1]) {
                setIsTwinsAnimBone(true)
            }

            if (table?.selectArray[2] && document.querySelector('.domino__table--element')) {
                document.querySelector('.domino__table--element:first-child').style.opacity = '0'
                leftSide = document.querySelector('.domino__table--element:first-child')?.getBoundingClientRect().left
                topSide = document.querySelector('.domino__table--element:first-child')?.getBoundingClientRect().top
            } else if (!table?.selectArray[2] && document.querySelector('.domino__table--element')) {
                document.querySelector('.domino__table--element:last-child').style.opacity = '0'
                leftSide = document.querySelector('.domino__table--element:last-child')?.getBoundingClientRect().left
                topSide = document.querySelector('.domino__table--element:last-child')?.getBoundingClientRect().top
            }
        }

        setTimeout(() => {
            setAnimationStyle({
                left: leftSide + 'px',
                top: topSide + 'px',
            })

            setTimeout(() => {
                setTimeout(() => {
                    setAnimationStyle({})
                    setIsTwinsAnimBone(false)
                    setWhichSideRotate('')
                }, 100)

                if (!document.querySelector('.domino__table--element')) return;
                document.querySelector('.domino__table--element:first-child').style.opacity = '1'
                document.querySelector('.domino__table--element:last-child').style.opacity = '1'
            }, 500)

            if (document.querySelector('.domino__main--table.domino__table.game__table').classList.contains('game__table_small') && !isTwinsAnimBone) {
                setAnimationStyle({
                    left: leftSide + 'px',
                    top: topSide + 'px',
                    width: '48px',
                    height: '40px'
                })
            } else if (document.querySelector('.domino__main--table.domino__table.game__table').classList.contains('game__table_small') && isTwinsAnimBone) {
                setAnimationStyle({
                    left: leftSide + 'px',
                    top: topSide + 'px',
                    width: '48px',
                    height: '78px'
                })
            }


            if (table?.selectArray[2] && document.querySelector('.domino__table--element:first-child').classList.contains('go-from-line-left')) {
                setWhichSideRotate('left')
                setAnimationStyle({
                    left: leftSide + 'px',
                    top: topSide + 'px',
                    width: '48px',
                    height: '78px'
                })
            } else if (!table?.selectArray[2] && document.querySelector('.domino__table--element:last-child').classList.contains('go-from-line-right')) {
                setWhichSideRotate('right')
                setAnimationStyle({
                    left: leftSide + 'px',
                    top: topSide + 'px',
                    width: '48px',
                    height: '78px'
                })
            }

        }, 50)

    }, [isShowAnimBone])

    return (
        <>
            <div className="domino__player game__player _min">
                <div className="game__player--body">
                    <div className="game__player--avatar">
                        <img src={player.avatar ? GlobalLink('/' + player.avatar) : "images/account/avatar-none.svg"}
                             width="76" height="76" alt=""
                             className="game__player--avatar-img"/>
                    </div>
                    <div className="game__player--info">
                        <h3 className="game__player--name">
                            {player.name ? player.name : player.username}
                        </h3>
                        {playerTurn?.player === player?.id ? <progress className="game__player--progress" max="100"
                                                                       value={!isNaN(timer) && (timer * 100 / 60)}/> : ""}
                    </div>
                    <div className="game__player--block">
                        {
                            !isGameStart && usersReady.some(item => item === player.id) && <GameReadyBlock/>
                        }
                        <div className="game__player--cards _min _message-active">
                            <ul className="game__player--cards-list">
                                {dominoes && dominoes.map((_, index) => {
                                    return (
                                        <li key={index} className="game__player--cards-item">
                                            <div className="game__player--cards-item-body">
                                                <img src="images/domino/figures/back.svg" alt=""
                                                     className="game__player--cards-img"/>
                                            </div>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
            <div data-first="0" data-second="5" style={animationStyle}
                 className={`game__domino-block--item game__domino-block--item-animation anim-from-${position}` + (whichSideRotate === 'left' ? ' _rotate' : whichSideRotate === 'right' ? ' _rotate-reverse' : "") + (isTwinsAnimBone ? " _rotate" : "") + (isShowAnimBone && isThisUser ? " _active" : "")}>
                <div className="game__domino-block--item-body">
                    <img
                        src={`images/domino/figures/${table?.selectArray?.length && table.selectArray[1]}-${table?.selectArray?.length && table.selectArray[0]}.svg`}
                        alt="" className="game__domino-block--img"/>
                </div>
            </div>
        </>
    );
};

export default DominoesUser;