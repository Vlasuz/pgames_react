import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {reducerSocketResponse} from "../../../redux/game_reducers/reducerSocketResponse";
import {reducerFenTable, setFenLine, setFenTable} from "../../../redux/game_reducers/reducerChessFenTable";
import {logDOM} from "@testing-library/react";
import FIGURE_B from "./FigureSteps/figure_b";
import FIGURE_K from "./FigureSteps/figure_k";
import FIGURE_Q from "./FigureSteps/figure_q";
import FIGURE_R from "./FigureSteps/figure_r";
import FIGURE_P from "./FigureSteps/figure_p";
import FIGURE_N from "./FigureSteps/figure_n";

const ChessTableInner = () => {

    const dispatch = useDispatch()

    const websocket = useSelector(state => state.reducerWebsocket.gameWebsocket)
    const players = useSelector(state => state.gamesListPlayersReducer.players)
    const user = useSelector(state => state.userInfoReducer.data)
    const isYourTurn = useSelector(state => state.reducerPlayerTurn.playerTurn)
    const tableFen = useSelector(state => state.reducerFenTable.fenTable)
    const [playerColor, setPlayerColor] = useState(1)
    const [arrayForTable, setArrayForTable] = useState([])
    const globalColor = ['white', 'black']

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

        if(isYourTurn.player?.id !== user?.id) return null;

        if(selectedFigure && key && e?.target.closest('._accent')) {

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
            FIGURE_P(e, figureIndex, playerColor)
        } else if (figure === figure_n[playerColor-1]) {
            FIGURE_N(e, figureIndex, playerColor)
        } else if (figure === figure_r[playerColor-1]) {
            FIGURE_R(e, figureIndex, playerColor)
        } else if (figure === figure_b[playerColor-1]) {
            FIGURE_B(e, figureIndex, playerColor)
        } else if (figure === figure_k[playerColor-1]) {
            FIGURE_K(e, figureIndex, playerColor)
        } else if (figure === figure_q[playerColor-1]) {
            FIGURE_Q(e, figureIndex, playerColor)
        }

    }

    return (
        <div className="chess__grid--table">

            {
                arrayForTable.map((item, index) => {
                    let color = ''

                    if(item.figure === '') {
                        color = ''
                    } else if(item.figure === item.figure.toUpperCase()) {
                        color = 'white'
                    } else if(item.figure === item.figure.toLowerCase()) {
                        color = 'black'
                    }

                    return (<div key={item.position} data-index={index + 1} data-color={color}
                         data-array={item.arrayPoints[0] + '/' + item.arrayPoints[1]} data-figure={item.figure}
                         onClick={e => handleStep(item.position, item.figure, e, item.arrayPoints[0], item.arrayPoints[1])}
                         data-position={item.position} className="chess__grid--cell">
                        <div className="chess__grid--checker">
                            <div className="chess__grid--checker-body">
                                {chips[item.figure]}
                            </div>
                        </div>
                    </div>)
                })
            }

        </div>
    );
};

export default ChessTableInner;