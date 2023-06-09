import React from 'react';
import ChessTableInner from "./ChessTableInner";

const ChessPreloader = () => {
    return (
        <div className="chess__table">
            <div className="checkers__table--lost checkers__lost checkers__lost_opponent">
                <div className="checkers__lost--list">

                </div>
            </div>
            <div className="chess__table--board">
                <div className="chess__table--board-body">
                    <picture>
                        <img src={`images/chess/table-empty.png`} alt="" width="300"
                             height="300"
                             className="chess__table--img"/>
                    </picture>
                </div>
            </div>
            <div className="checkers__table--lost checkers__lost">
                <div className="checkers__lost--list">


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

export default ChessPreloader;