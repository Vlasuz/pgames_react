import React from 'react';

const GamePlayer = () => {
    return (
        <div className="game__player">
            <div className="game__player--body">
                <div className="game__player--avatar">
                    <img src="../images/account/avatar.png" width="76" height="76" alt=""
                         className="game__player--avatar-img"/>
                </div>
                <div className="game__player--info">
                    <h3 className="game__player--name">
                        Снова Игорь
                    </h3>
                </div>
                <div className="game__player--block">
                    <div className="game__player--status">
                        Готов
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M0 6C0 2.68594 2.68594 0 6 0C9.31406 0 12 2.68594 12 6C12 9.31406 9.31406 12 6 12C2.68594 12 0 9.31406 0 6ZM8.71406 4.96406C8.96953 4.70859 8.96953 4.29141 8.71406 4.03594C8.45859 3.78047 8.04141 3.78047 7.78594 4.03594L5.25 6.57187L4.21406 5.53594C3.95859 5.28047 3.54141 5.28047 3.28594 5.53594C3.03047 5.79141 3.03047 6.20859 3.28594 6.46406L4.78594 7.96406C5.04141 8.21953 5.45859 8.21953 5.71406 7.96406L8.71406 4.96406Z"
                                fill="#61C8AF"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GamePlayer;