import React, {useEffect, useState} from 'react'
import { useSelector } from 'react-redux';
import checkersBlack from "../../../assets/img/checkers/checker-black.svg";
import checkersWhite from "../../../assets/img/checkers/checker-white.svg";
import {CheckersInit} from "../../../constants/CheckersInit";
import {IChecker, IPlayerUser, IUser} from "../../../models";

interface ICheckersTableProps {
    opponent: IPlayerUser
    checkersPieces: IChecker[]
}

export const CheckersTable: React.FC<ICheckersTableProps> = ({opponent, checkersPieces}) => {

    const [gridArray, setGridArray] = useState<any>([])

    const user: IUser = useSelector((state: any) => state.toolkit.user)

    useEffect(() => {

        if(!opponent?.id) return;

        const isMainPlayer = opponent?.id !== user.id && opponent?.position === 1

        let num = isMainPlayer ? 33 : 0
        let array = []

        for (let row = 0; row < 8; row++) {
            for (let col = 1; col <= 8; col++) {
                if (!((col + row) % 2)) {
                    num = isMainPlayer ? num - 1 : num + 1
                    array.push(num)
                } else array.push(null)
            }
        }

        setGridArray(array)

    }, [opponent])

    const checkersImage: any = {
        'black': checkersBlack,
        'white': checkersWhite
    }

    const checkersList = checkersPieces.length ? checkersPieces : CheckersInit

    return (
        <div className="checkers__table--grid checkers__grid">
            <div className="checkers__grid--wrapper">
                <div className="checkers__grid--table">

                    {
                        gridArray.map((cell: any, index: number) => {
                            if (cell === null) {
                                return <div key={`${cell} - ${index}`} className="checkers__grid--cell"/>
                            } else {
                                return (
                                    <div key={cell} data-cell={cell} className="checkers__grid--cell">

                                        {
                                            checkersList.some(item => item.position === cell) &&
                                            <div className="checkers__grid--checker">
                                                <div className="checkers__grid--checker-body">
                                                    <img src={checkersImage[CheckersInit.filter(item => item.position === cell)[0].owner]} alt=""/>
                                                </div>
                                            </div>
                                        }

                                    </div>
                                )
                            }
                        })
                    }

                </div>
            </div>
        </div>
    )
}
