import React from 'react';
import ChessTableInner from "./ChessTableInner";

const ChessTable = ({isWhite}) => {
    return (
        <div className="chess__table">
            <div className="chess__table--board">
                <div className="chess__table--board-body">
                    <picture>
                        <img src={`images/chess/table${isWhite === 2 ? '-reverse' : ""}.png`} alt="" width="300"
                             height="300"
                             className="chess__table--img"/>
                    </picture>
                </div>
            </div>
            <div className="chess__table--grid chess__grid">
                <div className="chess__grid--wrapper">
                    <ChessTableInner/>
                </div>
            </div>
            <div className="chess__table--lost chess__lost">
                <div className="chess__lost--list">
                </div>
            </div>
        </div>
    );
};

export default ChessTable;