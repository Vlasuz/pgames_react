import React, {useEffect} from 'react'

interface ICheckersHeaderProps {

}

export const CheckersHeader: React.FC<ICheckersHeaderProps> = () => {

    return (
        <div className="game__header">
            <div className="game__header--col">
                <h2 className="game__header--name section-title _decor-none">
                    Шашки
                </h2>
            </div>
            <div className="game__header--col">
                <div className="game__header--block">
                    <a href="#game-exit-popup" className="game__header--btn btn _dark open-popup">
                        Выйти
                    </a>
                    <a href="#game-invite-popup" className="game__header--btn btn _red open-popup">
                        Пригласить +
                    </a>
                </div>
            </div>
        </div>
    )
}
