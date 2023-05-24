import React from 'react';
import CheckersTableInner from "./CheckersTableInner";

const CheckersTable = () => {
    return (
        <div className="checkers__table">
            <div className="checkers__table--board">
                <div className="checkers__table--board-body">
                    <picture>
                        <img src="images/checkers/table.png" alt="" width="300" height="300"
                             className="checkers__table--img"/>
                    </picture>
                </div>
            </div>
            <CheckersTableInner/>
        </div>
    );
};

export default CheckersTable;