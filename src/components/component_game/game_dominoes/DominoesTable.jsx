import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

const DominoesTable = ({isGameStart}) => {

    const dispatch = useDispatch()
    const [isLoad, setIsLoad] = useState(false)
    const [tableParse, setTableParse] = useState([])
    const [isWidthBig, setIsWidthBig] = useState(false)
    const websocket = useSelector(state => state.reducerWebsocket.gameWebsocket)
    const table = useSelector(state => state.reducerFenTable)
    const [leftWithoutRotate, setLeftWithoutRotate] = useState(false)
    const [rightWithoutRotate, setRightWithoutRotate] = useState(false)

    useEffect(() => {
        if (isLoad) return;
        setIsLoad(true)
    }, [isLoad])

    useEffect(() => {
        if (table?.fenTable?.length >= 2) {
            setTimeout(() => {
                if (!isWidthBig) {
                    setIsWidthBig(document.querySelector('.domino__main--table')?.clientWidth / 1.8 <= document.querySelector('.domino__table--place')?.clientWidth)
                }
            }, 600)
        } else {
            setIsWidthBig(false)
        }
        setTableParse(table.fenTable)

        setTimeout(() => {
            truePositionVerticalBones()
        }, 400)

    }, [table.fenTable])


    useEffect(() => {
        if (!isLoad || table?.selectArray === undefined) return;

        const left = table?.selectArray[0] !== null ? table?.selectArray[0] : []
        const right = table?.selectArray[1] !== null ? table?.selectArray[1] : []

        if (table?.length === 0) {
            setTableParse(table.fenTable)
            setTableParse(prev => [left, ...prev, right])
        }

        setTableParse(table?.fenTable)
        setTableParse(prev => [left, ...prev, right])

        truePositionVerticalBones()

    }, [table.selectArray])


    const truePositionVerticalBones = () => {
        const countVerticalLeft = document.querySelectorAll('.go-from-line-left').length
        if (!document.querySelector(`.domino__table--element:nth-child(${countVerticalLeft}) + .domino__table--element`)?.classList.contains('non-rotate')) {
            setLeftWithoutRotate(true)
        } else {
            setLeftWithoutRotate(false)
        }

        const countVerticalRight = document.querySelectorAll('.go-from-line-right').length
        if (!document.querySelector(`.domino__table--element:nth-last-child(${countVerticalRight + 2}) + .domino__table--element`)?.classList.contains('non-rotate')) {
            setRightWithoutRotate(true)
        } else {
            setRightWithoutRotate(false)
        }
    }

    const handleMove = (first, second, index) => {

        console.log({
            "command": "make_move",
            "data": {
                "domino": [first, second],
                "left_side": index < 1
            }
        })

        websocket.send(JSON.stringify({
            "command": "make_move",
            "data": {
                "domino": [first, second],
                "left_side": index < 1
            }
        }))

    }

    const forLeftSide = Math.ceil((tableParse.length - 10) / 2)
    const forRightsSide = tableParse.length - Math.floor((tableParse.length - 10) / 2)

    return (
        <div className={"domino__main--table domino__table game__table" + (isWidthBig ? " game__table_small" : "")}>
            <div className="domino__table--place">

                {
                    typeof tableParse === 'object' && tableParse.map((item, index) => {

                        if (!item || !item.length) return null;

                        const tableLength = tableParse.length - 1

                        const isTrue = tableLength > 5
                        const isLeftItem = forLeftSide > index
                        const isRightItem = forRightsSide < index
                        const moreItemsLeft = isTrue && isLeftItem ? " go-from-line-left" : ""
                        const moreItemsRight = isTrue && isRightItem ? " go-from-line-right" : ""

                        const styleForLeft = {
                            left: 0,
                            top: isLeftItem ? -(index - forLeftSide) * 104 - (leftWithoutRotate ? 25 : 0) + 'px' : 0,
                            position: "absolute"
                        }
                        const styleForRight = {
                            right: 0,
                            top: isRightItem ? (index - forRightsSide) * 104 - (rightWithoutRotate ? 25 : 0) + 'px' : 0,
                            position: "absolute"
                        }

                        return (
                            <div data-first={item[0]} data-second={item[1]}
                                 onClick={_ => handleMove(item[0], item[1], index)}
                                 className={"domino__table--element" + (moreItemsLeft + moreItemsRight) + (typeof item[0] === 'number' ? " _accent" : "") + (item[0] === item[1] ? " non-rotate" : "")}
                                 key={index} style={isLeftItem ? styleForLeft : isRightItem ? styleForRight : {}}>
                                <div className="rotation-wrapper-outer">
                                    <div className="rotation-wrapper-inner">
                                        <div className="domino__table--element-body">
                                            <img src={`images/domino/figures/${item[1]}-${item[0]}.svg`} alt=""
                                                 className="domino__table--element-img"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

            </div>


            {!isGameStart && <div className="game__table--content">
                <h3 className="game__table--title section-title _center">
                    Ожидаем готовность комнаты
                </h3>
                <div className="game__table--text">
                    Оставайтесь и одержите победу!
                </div>
            </div>}
        </div>
    );
};

export default DominoesTable;