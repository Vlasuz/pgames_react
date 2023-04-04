import React from 'react';

const FoolCenterEndgame = ({ isWinner, userId }) => {
    return (
        <div className="game__main--table game__table">
            <div className="game__table-popup">
                <h3 className="game__table-popup--title section-title _center">

                    {
                        isWinner.some(item => item.id === userId) ? "Вы выйграли" : "Вы проиграли"
                    }

                </h3>
                <div className="game__table-popup--text">
                    Хотите остаться в комнате и сыграть еще раз?
                </div>
                <div className="game__table-popup--footer">
                    <a href="#" className="game__table-popup--btn btn _red">
                        Да
                    </a>
                    <a href="#" className="game__table-popup--btn alt-btn _min _transparent">
                        Выйти
                    </a>
                </div>
            </div>
        </div>
    );
};

export default FoolCenterEndgame;