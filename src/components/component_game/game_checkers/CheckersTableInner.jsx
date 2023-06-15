import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {logDOM} from "@testing-library/react";
import {changeFenCheckers, isKingCheckers} from "../../../redux/game_reducers/reducerChessFenTable";

const CheckersTableInner = () => {

    const dispatch = useDispatch()

    const websocket = useSelector(state => state.reducerWebsocket.gameWebsocket)
    const user = useSelector(state => state.userInfoReducer.data)
    const isYourTurn = useSelector(state => state.reducerPlayerTurn.playerTurn)
    const players = useSelector(state => state.gamesListPlayersReducer.players)
    const tableFen = useSelector(state => state.reducerFenTable.fenTable)

    const [playerColor, setPlayerColor] = useState(0)
    const [arrayForTable, setArrayForTable] = useState([])
    const [switchedPieces, setSwitchedPieces] = useState(0)

    const color = ['white', 'black'];

    useEffect(() => {
        setPlayerColor(players?.filter(item => item?.id === user?.id)[0]?.position)
    }, [players])

    useEffect(() => {
        if (!playerColor) return;

        setArrayForTable([]);
        const whichColor = [32, 1];
        const alphabetDesc = 'abcdefgh';
        let index = whichColor[playerColor - 1];
        let indexArr = 1;
        let numberDesc = 1;


        for (let row = 1; row <= 8; row++) {
            let letter = 0;
            for (let cell = 0; cell < 8; cell++) {
                if (row % 2 === cell % 2) {
                    const figure = tableFen.filter(figure => figure.position === index)[0]
                    const objectArray = {
                        figure,
                        index: index,
                        indexArr: indexArr++,
                        indexDesc: `${alphabetDesc[letter++] + (9 - row)}`,
                    }

                    setArrayForTable(prevArray => [...prevArray, objectArray]);

                    index = playerColor - 1 ? index + 1 : index - 1
                    numberDesc = numberDesc + 1;
                } else {
                    const objectArray = {
                        cell: null,
                        index: 100 + indexArr,
                        indexArr: indexArr++,
                        indexDesc: `${alphabetDesc[letter++] + (9 - row)}`,
                    }

                    setArrayForTable(prevArray => [...prevArray, objectArray]);
                }
            }
        }

    }, [tableFen, playerColor])

    const handleMove = (e, index) => {
        const thisCell = e.target.closest('.checkers__grid--cell')

        if (!thisCell.classList.contains('_possible-move')) {
            document.querySelectorAll('.checkers__grid--cell').forEach(item => item.classList.remove('_possible-move'))
        }

        if (isYourTurn.player.id !== user.id || !(thisCell.querySelector('img') !== null || e.target.closest('.checkers__grid--cell._possible-move'))) return null;

        const arrIndex = thisCell.getAttribute('data-index-arr');
        const isYour = thisCell.getAttribute('data-color');
        const isKing = thisCell.classList.contains('_king');

        const leftTopCell = document.querySelector(`.checkers__grid--cell[data-index-arr="${+arrIndex - 9}"]`)
        const rightTopCell = document.querySelector(`.checkers__grid--cell[data-index-arr="${+arrIndex - 7}"]`)
        const leftBottomCell = document.querySelector(`.checkers__grid--cell[data-index-arr="${+arrIndex + 9}"]`)
        const rightBottomCell = document.querySelector(`.checkers__grid--cell[data-index-arr="${+arrIndex + 7}"]`)

        const leftTopBeat = document.querySelector(`.checkers__grid--cell[data-index-arr="${+arrIndex - 18}"]`)
        const rightTopBeat = document.querySelector(`.checkers__grid--cell[data-index-arr="${+arrIndex - 14}"]`)
        const leftBottomBeat = document.querySelector(`.checkers__grid--cell[data-index-arr="${+arrIndex + 18}"]`)
        const rightBottomBeat = document.querySelector(`.checkers__grid--cell[data-index-arr="${+arrIndex + 14}"]`)

        if (thisCell.querySelector('img') && thisCell.querySelector('img').getAttribute('src').includes(color[playerColor - 1])) {
            document.querySelectorAll('.checkers__grid--cell').forEach(item => item.classList.remove('_possible-move'))
            leftTopCell?.classList.add('_possible-move')
            rightTopCell?.classList.add('_possible-move')
        }
        if (thisCell.getAttribute('data-index-desc').includes('a')) {
            leftTopCell?.classList.remove('_possible-move')
        }
        if (thisCell.getAttribute('data-index-desc').includes('h')) {
            rightTopCell?.classList.remove('_possible-move')
        }

        if (isYour && isYour !== color[playerColor - 1]) return null;


        if (isKing) {
            leftBottomCell?.classList.add('_possible-move')
            rightBottomCell?.classList.add('_possible-move')

            if (leftBottomCell?.querySelector('img')) {
                leftBottomCell?.classList.remove('_possible-move')
                leftBottomBeat?.classList.add('_possible-move')
            }
            if (rightBottomCell?.querySelector('img')) {
                rightBottomCell?.classList.remove('_possible-move')
                rightBottomBeat?.classList.add('_possible-move')
            }
            if (leftTopCell?.querySelector('img')) {
                leftTopCell?.classList.remove('_possible-move')
                leftTopBeat?.classList.add('_possible-move')
            }
            if (rightTopCell?.querySelector('img')) {
                rightTopCell?.classList.remove('_possible-move')
                rightTopBeat?.classList.add('_possible-move')
            }
        } else {

            if (leftTopCell?.querySelector('img')) {

                leftTopCell?.classList.remove('_possible-move')

                const isEnemyCell = leftTopCell.getAttribute('data-color') !== color[playerColor - 1]
                const isEmptyNextCell = !leftTopBeat?.querySelector('img')

                if (isEnemyCell && isEmptyNextCell) {

                    if (!thisCell.getAttribute('data-index-desc').includes('b')) {
                        rightTopCell?.classList.remove('_possible-move')
                        leftTopBeat?.classList.add('_possible-move')
                    } else {
                        leftTopBeat?.classList.remove('_possible-move')
                    }

                }
            }
            if (rightTopCell?.querySelector('img')) {
                rightTopCell?.classList.remove('_possible-move')

                const isEnemyCell = rightTopCell.getAttribute('data-color') !== color[playerColor - 1]
                const isEmptyNextCell = !rightTopBeat?.querySelector('img')

                if (isEnemyCell && isEmptyNextCell) {

                    if (!thisCell.getAttribute('data-index-desc').includes('g')) {
                        leftTopCell?.classList.remove('_possible-move')
                        rightTopBeat?.classList.add('_possible-move')
                    } else {
                        rightTopBeat?.classList.remove('_possible-move')
                    }

                }
            }
        }


        if (switchedPieces && thisCell.classList.contains('_possible-move')) {

            console.log('MOVE', switchedPieces, index)
            websocket.send(JSON.stringify({
                "command": "play_piece",
                "data": {
                    "move": [switchedPieces, index]
                }
            }))

            document.querySelectorAll('.checkers__grid--cell').forEach(item => item.classList.remove('_possible-move'))
            setSwitchedPieces(0)
            return null;
        }

        setSwitchedPieces(index)
    }

    return (
        <div className="checkers__table--grid checkers__grid">
            <div className="checkers__grid--wrapper">
                <div className="checkers__grid--table">

                    {
                        arrayForTable && arrayForTable?.map(cell => {
                            const isKing = cell.figure?.is_king ? '_king' : "";

                            return (
                                <div key={cell.indexDesc} data-color={cell?.figure?.owner} data-index-desc={cell.indexDesc}
                                     data-index={cell.index}
                                     data-index-arr={cell.indexArr} className={"checkers__grid--cell " + isKing}
                                     onClick={e => handleMove(e, cell.index)}>

                                    {cell.figure?.owner &&
                                        <div className="checkers__grid--checker">
                                            <div className="checkers__grid--checker-body">
                                                <img src={`images/checkers/checker-${cell.figure?.owner + isKing}.svg`}
                                                     alt=""/>
                                            </div>
                                        </div>}

                                </div>)
                        })
                    }

                </div>
            </div>
        </div>
    );
};

export default CheckersTableInner;