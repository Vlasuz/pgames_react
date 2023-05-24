import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {logDOM} from "@testing-library/react";

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

        const whichColor = [32, 1];
        setArrayForTable([]);
        let index = whichColor[playerColor - 1];
        let indexNull = 1;

        const alphabetDesc = 'abcdefgh';
        let numberDesc = 1;



        for (let row = 1; row <= 8; row++) {
            let a = 0;
            for (let cell = 0; cell < 8; cell++) {
                if (row % 2 === cell % 2) {
                    setArrayForTable(prevArray => [...prevArray, {
                        cell,
                        index: playerColor - 1 ? index++ : index--,
                        indexArr: indexNull++,
                        indexDesc: `${alphabetDesc[a++] + (9 - row)}`,
                    }]);
                    numberDesc++;
                } else {
                    setArrayForTable(prevArray => [...prevArray, {
                        cell: null,
                        index: 100 + indexNull,
                        indexArr: indexNull++,
                        indexDesc: `${alphabetDesc[a++] + (9 - row)}`,
                    }]);
                }

            }
        }


    }, [tableFen, playerColor])

    useEffect(() => {
        console.log('tableFen', tableFen)
    }, [tableFen])

    const handleMove = (e, index) => {
        const color = ['white', 'black'];

        const arrIndex = e.target.closest('.checkers__grid--cell').getAttribute('data-index-arr');

        if (e.target.closest('.checkers__grid--cell').querySelector('img') && e.target.closest('.checkers__grid--cell').querySelector('img').getAttribute('src').includes(color[playerColor - 1])) {
            document.querySelectorAll('.checkers__grid--cell').forEach(item => item.classList.remove('_possible-move'))
            document.querySelector(`.checkers__grid--cell:nth-child(${arrIndex - 9})`).classList.add('_possible-move')
            document.querySelector(`.checkers__grid--cell:nth-child(${arrIndex - 7})`).classList.add('_possible-move')
        }

        if (document.querySelector(`.checkers__grid--cell:nth-child(${arrIndex - 9}) img`)) {
            document.querySelector(`.checkers__grid--cell:nth-child(${arrIndex - 9})`)?.classList.remove('_possible-move')
            document.querySelector(`.checkers__grid--cell:nth-child(${arrIndex - 18})`)?.classList.add('_possible-move')
        }
        if (document.querySelector(`.checkers__grid--cell:nth-child(${arrIndex - 7}) img`)) {
            document.querySelector(`.checkers__grid--cell:nth-child(${arrIndex - 7})`)?.classList.remove('_possible-move')
            document.querySelector(`.checkers__grid--cell:nth-child(${arrIndex - 14})`)?.classList.add('_possible-move')
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
                        arrayForTable?.map((item, index) => {
                            if (item.cell !== null) {
                                return (
                                    <div key={item.index} data-index-desc={item.indexDesc} data-index={item.index} data-index-arr={item.indexArr}
                                         className="checkers__grid--cell" onClick={e => handleMove(e, item.index)}>
                                        {
                                            tableFen?.some(pieces => pieces.position === item.index) ?
                                                <div className="checkers__grid--checker">
                                                    <div className="checkers__grid--checker-body">
                                                        {
                                                            tableFen?.filter(pieces => pieces.position === item.index)[0].owner === 'white' ?
                                                                <img src="images/checkers/checker-white.svg" alt=""/> :
                                                                <img src="images/checkers/checker-black.svg" alt=""/>
                                                        }
                                                    </div>
                                                </div>
                                                : ""
                                        }

                                    </div>
                                )
                            } else {
                                return <div key={item.index} data-index={item.index} data-index-arr={item.indexArr}
                                            className="checkers__grid--cell"/>
                            }
                        })
                    }

                </div>
            </div>
        </div>
    );
};

export default CheckersTableInner;