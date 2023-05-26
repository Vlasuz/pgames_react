import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {logDOM} from "@testing-library/react";
import {changeFenCheckers, isKingCheckers} from "../../../redux/game_reducers/reducerChessFenTable";

const CheckersTableInner = () => {

    const websocket = useSelector(state => state.reducerWebsocket.gameWebsocket)
    const user = useSelector(state => state.userInfoReducer.data)
    const players = useSelector(state => state.gamesListPlayersReducer.players)
    const [playerColor, setPlayerColor] = useState(0)
    const tableFen = useSelector(state => state.reducerFenTable.fenTable)
    const [arrayForTable, setArrayForTable] = useState([])
    const dispatch = useDispatch()
    const [switchedPieces, setSwitchedPieces] = useState(0)

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
        const color = ['white', 'black'];

        const arrIndex = e.target.closest('.checkers__grid--cell').getAttribute('data-index-arr');
        const isKing = e.target.closest('.checkers__grid--cell').classList.contains('_king');

        if (e.target.closest('.checkers__grid--cell').querySelector('img') && e.target.closest('.checkers__grid--cell').querySelector('img').getAttribute('src').includes(color[playerColor - 1])) {
            document.querySelectorAll('.checkers__grid--cell').forEach(item => item.classList.remove('_possible-move'))
            document.querySelector(`.checkers__grid--cell[data-index-arr="${+arrIndex - 9}"]`)?.classList.add('_possible-move')
            document.querySelector(`.checkers__grid--cell[data-index-arr="${+arrIndex - 7}"]`)?.classList.add('_possible-move')
        }

        if (isKing) {
            document.querySelector(`.checkers__grid--cell[data-index-arr="${+arrIndex + 9}"]`)?.classList.add('_possible-move')
            document.querySelector(`.checkers__grid--cell[data-index-arr="${+arrIndex + 7}"]`)?.classList.add('_possible-move')

            if (document.querySelector(`.checkers__grid--cell[data-index-arr="${+arrIndex + 9}"] img`)) {
                document.querySelector(`.checkers__grid--cell[data-index-arr="${+arrIndex + 9}"]`)?.classList.remove('_possible-move')
                document.querySelector(`.checkers__grid--cell[data-index-arr="${+arrIndex + 18}"]`)?.classList.add('_possible-move')
            }
            if (document.querySelector(`.checkers__grid--cell[data-index-arr="${+arrIndex + 7}"] img`)) {
                document.querySelector(`.checkers__grid--cell[data-index-arr="${+arrIndex + 7}"]`)?.classList.remove('_possible-move')
                document.querySelector(`.checkers__grid--cell[data-index-arr="${+arrIndex + 14}"]`)?.classList.add('_possible-move')
            }
            if (document.querySelector(`.checkers__grid--cell[data-index-arr="${+arrIndex - 9}"] img`)) {
                document.querySelector(`.checkers__grid--cell[data-index-arr="${+arrIndex - 9}"]`)?.classList.remove('_possible-move')
                document.querySelector(`.checkers__grid--cell[data-index-arr="${+arrIndex - 18}"]`)?.classList.add('_possible-move')
            }
            if (document.querySelector(`.checkers__grid--cell[data-index-arr="${+arrIndex - 7}"] img`)) {
                document.querySelector(`.checkers__grid--cell[data-index-arr="${+arrIndex - 7}"]`)?.classList.remove('_possible-move')
                document.querySelector(`.checkers__grid--cell[data-index-arr="${+arrIndex - 14}"]`)?.classList.add('_possible-move')
            }
        } else {
            if (document.querySelector(`.checkers__grid--cell[data-index-arr="${+arrIndex - 9}"] img`)) {
                document.querySelector(`.checkers__grid--cell[data-index-arr="${+arrIndex - 9}"]`)?.classList.remove('_possible-move')
                document.querySelector(`.checkers__grid--cell[data-index-arr="${+arrIndex - 18}"]`)?.classList.add('_possible-move')
            }
            if (document.querySelector(`.checkers__grid--cell[data-index-arr="${+arrIndex - 7}"] img`)) {
                document.querySelector(`.checkers__grid--cell[data-index-arr="${+arrIndex - 7}"]`)?.classList.remove('_possible-move')
                document.querySelector(`.checkers__grid--cell[data-index-arr="${+arrIndex - 14}"]`)?.classList.add('_possible-move')
            }
        }


        if (switchedPieces && e.target.closest('.checkers__grid--cell').classList.contains('_possible-move')) {

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

                            return (<div key={cell.indexDesc} data-index-desc={cell.indexDesc} data-index={cell.index}
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