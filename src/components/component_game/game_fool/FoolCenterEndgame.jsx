import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";

const FoolCenterEndgame = ({ isWinner, infoRoom }) => {

    const user = useSelector(state => state.userInfoReducer.data)

    return (
        <div className="game__main--table game__table">
            <div className="game__table-popup">
                <h3 className="game__table-popup--title section-title _center">
                    Игра закончена
                </h3>
                <div className="game__table-popup--text">
                    {/*Хотите остаться в комнате и сыграть еще раз?*/}
                    {
                        isWinner.some(item => item.id === user.id) ? "Вы выйграли" : "Вы проиграли"
                    }
                </div>
                <div className="game__table-popup--footer">
                    {/*<a href="#" className="game__table-popup--btn btn _red">*/}
                    {/*    Да*/}
                    {/*</a>*/}
                    <NavLink to={`/games/${infoRoom.game}`} className="game__table-popup--btn alt-btn _min _transparent">
                        Выйти
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default FoolCenterEndgame;