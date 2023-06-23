import React from 'react';
import CheckersTableInner from "./CheckersTableInner";

const CheckersPreloader = () => {
    return (
        <div className="checkers__table">
            <div className="checkers__table--lost checkers__lost checkers__lost_opponent">

            </div>
            <div className="checkers__table--board">
                <div className="checkers__table--board-body">
                    <picture>
                        <img src="images/checkers/table.png" alt="" width="300" height="300"
                             className="checkers__table--img"/>
                    </picture>
                </div>
            </div>
            <div className="checkers__table--lost checkers__lost">
                <div className="checkers__lost--list" />
            </div>
            <CheckersTableInner/>
        </div>
    );
};

export default CheckersPreloader;