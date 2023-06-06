import {NavLink, useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";

const FoolCenterEndgame = ({ isWinner, infoRoom }) => {

    const user = useSelector(state => state.userInfoReducer.data)
    const navigate = useNavigate()

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
                    <button onClick={_ => navigate(-1)} className="game__table-popup--btn alt-btn _min _transparent">
                        Выйти
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FoolCenterEndgame;