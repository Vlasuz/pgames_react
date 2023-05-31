import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {reducerSocketResponse} from "../../../redux/game_reducers/reducerSocketResponse";
import {reducerFenTable, setFenLine, setFenTable} from "../../../redux/game_reducers/reducerChessFenTable";
import {logDOM} from "@testing-library/react";

const ChessTableInner = () => {

    const dispatch = useDispatch()

    const websocket = useSelector(state => state.reducerWebsocket.gameWebsocket)
    const players = useSelector(state => state.gamesListPlayersReducer.players)
    const user = useSelector(state => state.userInfoReducer.data)
    const tableFen = useSelector(state => state.reducerFenTable.fenTable)
    const [playerColor, setPlayerColor] = useState(1)
    const [arrayForTable, setArrayForTable] = useState([])

    // useEffect(() => {
    //     if(tableFen.fenTable && !tableFen.fenTable.length && !Object.keys(tableFen.fenTable).length) {
    //
    //     }
    // }, [tableFen])

    useEffect(() => {
        dispatch(setFenTable('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1'))
    }, [])


    const arrayLines = tableFen && Object.keys(tableFen).length && tableFen.slice(0, tableFen.indexOf(" ")).split('/').map(item => {
        return item.split('').map(item2 => {
            if (!+item2) return item2

            const array = new Array(+item2)
            return array.join(' ').split(' ');
        }).flat(1)
    })

    const chips = {
        'R': <img src="images/chess/figures/white-r.svg" alt=""/>,
        'N': <img src="images/chess/figures/white-n.svg" alt=""/>,
        'B': <img src="images/chess/figures/white-b.svg" alt=""/>,
        'Q': <img src="images/chess/figures/white-q.svg" alt=""/>,
        'K': <img src="images/chess/figures/white-k.svg" alt=""/>,
        'P': <img src="images/chess/figures/white-p.svg" alt=""/>,

        'r': <img src="images/chess/figures/black-r.svg" alt=""/>,
        'n': <img src="images/chess/figures/black-n.svg" alt=""/>,
        'b': <img src="images/chess/figures/black-b.svg" alt=""/>,
        'q': <img src="images/chess/figures/black-q.svg" alt=""/>,
        'k': <img src="images/chess/figures/black-k.svg" alt=""/>,
        'p': <img src="images/chess/figures/black-p.svg" alt=""/>,
    }
    const alphabet = 'abcdefgh';
    const [selectedFigure, setSelectedFigure] = useState("")
    const [selectStep, setSelectStep] = useState(null)
    const [arrayPoints, setArrayPoints] = useState('')


    useEffect(() => {
        setPlayerColor(players?.filter(item => item?.id === user?.id)[0]?.position)
    }, [ players.filter(item => item?.id === user?.id).length ])

    useEffect(() => {
        if(!playerColor) return;

        setArrayForTable([]);
        const maxLength = 7

        for (let row = 0; row < arrayLines?.length; row++) {
            const color = [row, Math.abs(row - maxLength)];

            const colorIndex = color[playerColor - 1];
            const line = arrayLines[colorIndex];

            for (let cell = 0; cell < line.length; cell++) {
                const color = [cell, Math.abs(cell - maxLength)];

                const position = alphabet[color[playerColor - 1]] + Math.abs(colorIndex - 8);
                const figure = line[color[playerColor - 1]];
                setArrayForTable(prevArray => [...prevArray, { position, figure, arrayPoints: [row, cell] }]);
            }
        }

    }, [tableFen, playerColor])

    const handleStep = (key, figure, e, arr1, arr2) => {
        const figure_p = ["P", "p"]
        const figure_n = ["N", "n"]
        const figure_r = ["R", "r"]
        const figure_b = ["B", "b"]
        const figure_k = ["K", "k"]
        const figure_q = ["Q", "q"]

        if(selectedFigure && key && e?.target.closest('._accent')) {

            console.log('send socket "play_piece":', selectedFigure + key)

            websocket.send(JSON.stringify({
                "command": "play_piece",
                "data": {
                    "uci": selectedFigure + key
                }
            }))

            setSelectStep(null)
            setSelectedFigure('')
        } else {
            setSelectStep(e);
            setSelectedFigure(key)
            setArrayPoints({arr1, arr2})
        }



        document.querySelectorAll('.chess__grid--cell._accent')?.forEach(item => item.classList.remove('_accent'))
        const figureIndex = e.target.closest('.chess__grid--cell').getAttribute('data-index')

        if (figure === figure_p[playerColor-1]) {
            let positionToMove = [];
            const posItem = e.target.closest('.chess__grid--cell').getAttribute('data-array')[0]

            for(let a = 8; a < 24; a+= 8) {
                console.log(document.querySelector(`.chess__grid--cell:nth-child(${figureIndex - a})`)?.querySelector('img'))
                // if(document.querySelector(`.chess__grid--cell:nth-child(${figureIndex - a})`)?.querySelector('img')) break;
                positionToMove.push(a)
            }

            if(+posItem !== 6) {
                positionToMove = [8]
            }

            if(document.querySelector(`.chess__grid--cell:nth-child(${figureIndex - 7})`).querySelector('img')) {
                positionToMove.push(7)
            }
            if(document.querySelector(`.chess__grid--cell:nth-child(${figureIndex - 9})`).querySelector('img')) {
                positionToMove.push(9)
            }

            positionToMove.map(item => {
                document.querySelector(`.chess__grid--cell:nth-child(${figureIndex - item})`)?.classList.add('_accent')
            })
        } else if (figure === figure_n[playerColor-1]) {
            let positionToMove = [15, 6, 17, 10, -10, -17, -6, -15];
            const posItem = e.target.closest('.chess__grid--cell').getAttribute('data-array')[2]

            if (+posItem === 1) {
                positionToMove = [15, 6, -10, -17, 17, -15]
            } else if (+posItem === 6) {
                positionToMove = [-15, -6, 10, 17, -17, 15]
            } else if (+posItem === 0) {
                positionToMove = [15, 6, -10, -17]
            } else if (+posItem === 7) {
                positionToMove = [-15, -6, 10, 17]
            }

            positionToMove.map(item => {
                document.querySelector(`.chess__grid--cell:nth-child(${figureIndex - item})`)?.classList.add('_accent')
            })
        } else if (figure === figure_r[playerColor-1]) {
            let positionToMove = [];
            const posItem = e.target.closest('.chess__grid--cell').getAttribute('data-array')

            for(let a = 8; a <= posItem[0] * 8; a+=8) {
                positionToMove.push(a)
            }
            for(let a = -8; a >= -((7 - posItem[0]) * 8); a-=8) {
                positionToMove.push(a)
            }
            for(let a = 1; a <= posItem[2]; a++) {
                positionToMove.push(a)
            }
            for(let a = -1; a >= -(7 - posItem[2]); a--) {
                positionToMove.push(a)
            }


            positionToMove.map(item => {
                document.querySelector(`.chess__grid--cell:nth-child(${figureIndex - item})`)?.classList.add('_accent')
            })
        } else if (figure === figure_b[playerColor-1]) {
            let positionToMove = [];
            const posItem = e.target.closest('.chess__grid--cell').getAttribute('data-array')

            for(let a = 7; a <= (7 - +posItem[2]) * 7; a += 7) {
                positionToMove.push(a)
            }
            for(let a = -7; a >= -(+posItem[2] * 7); a -= 7) {
                positionToMove.push(a)
            }
            for(let a = 9; a <= +posItem[2] * 9; a += 9) {
                positionToMove.push(a)
            }
            for(let a = -9; a >= -((8 - (+posItem[2] > +posItem[0] ? +posItem[2] : +posItem[0])) * 9); a -= 9) {
                positionToMove.push(a)
            }

            positionToMove.map(item => {
                document.querySelector(`.chess__grid--cell:nth-child(${figureIndex - item})`)?.classList.add('_accent')
            })
        } else if (figure === figure_k[playerColor-1]) {
            let positionToMove = [1, -1, 8, -8, 9, -9, 7, -7];

            positionToMove.map(item => {
                document.querySelector(`.chess__grid--cell:nth-child(${figureIndex - item})`)?.classList.add('_accent')
            })
        } else if (figure === figure_q[playerColor-1]) {
            let positionToMove = [];
            const posItem = e.target.closest('.chess__grid--cell').getAttribute('data-array')

            for(let a = 7; a <= (7 - +posItem[2]) * 7; a += 7) {
                positionToMove.push(a)
            }
            for(let a = -7; a >= -(+posItem[2] * 7); a -= 7) {
                positionToMove.push(a)
            }
            for(let a = 9; a <= +posItem[2] * 9; a += 9) {
                positionToMove.push(a)
            }
            for(let a = -9; a >= -((8 - (+posItem[2] > +posItem[0] ? +posItem[2] : +posItem[0])) * 9); a -= 9) {
                positionToMove.push(a)
            }

            for(let a = 8; a <= posItem[0] * 8; a+=8) {
                positionToMove.push(a)
            }
            for(let a = -8; a >= -((7 - posItem[0]) * 8); a-=8) {
                positionToMove.push(a)
            }
            for(let a = 1; a <= posItem[2]; a++) {
                positionToMove.push(a)
            }
            for(let a = -1; a >= -(7 - posItem[2]); a--) {
                positionToMove.push(a)
            }

            positionToMove.map(item => {
                document.querySelector(`.chess__grid--cell:nth-child(${figureIndex - item})`)?.classList.add('_accent')
            })
        }

    }

    return (
        <div className="chess__grid--table">

            {
                arrayForTable.map((item, index) =>
                    <div key={item.position} data-index={index + 1} data-array={item.arrayPoints[0] + '/' + item.arrayPoints[1]} onClick={e => handleStep(item.position, item.figure, e, item.arrayPoints[0], item.arrayPoints[1])} data-position={item.position} className="chess__grid--cell">
                        <div className="chess__grid--checker">
                            <div className="chess__grid--checker-body">
                                {chips[item.figure]}
                            </div>
                        </div>
                    </div>
                )
            }

        </div>
    );
};

export default ChessTableInner;