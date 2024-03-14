import React, {Dispatch, SetStateAction, useContext, useEffect} from 'react'
import table from "./../../assets/img/game/table.png"
import chip from "./../../assets/img/icons/chip.svg"
import {PokerStyled} from "./Poker.styled";
import {PokerHeader} from "./components/PokerHeader";
import {Player} from "../../components/player/Player";
import {GamesCommunication} from "../../components/gamesCommunication/GamesCommunication";
import {useAllCards} from "../../hooks/AllCards";
import {IUser} from "../../models";
import {useSelector} from 'react-redux';
import {getApiLink} from '../../functions/getApiLink';
// import Nouislider from "nouislider-react";
// import "nouislider/distribute/nouislider.css";

interface IPokerProps {

}

export const Poker: React.FC<IPokerProps> = () => {

    const user: IUser = useSelector((state: any) => state.toolkit.user)

    const {allCards}: any = useAllCards()

    return (
        <PokerStyled className="poker game page-padding-top">
            <div className="poker__container game__container container">

                <PokerHeader/>

                <div className="poker__main">
                    <div className="poker__main--bg poker__bg">
                        <picture>
                            <img src={table} alt="" width="300" className="poker__bg--img"/>
                        </picture>
                    </div>
                    <div className="poker__main--grid poker__grid">
                        <div className="poker__grid--item">
                            <div className="game__bet">
                                <span className="game__bet--value">1500</span>
                                <img src={chip} alt="" className="game__bet--currency"/>
                            </div>
                        </div>
                        <div className="poker__grid--item">
                            <Player isHavePlayer={false} isReady={false} position={4}/>
                        </div>
                        <div className="poker__grid--item">
                            <Player isHavePlayer={false} isReady={false} position={5}/>
                        </div>
                        <div className="poker__grid--item">
                            <Player isHavePlayer={false} isReady={false} position={6}/>
                        </div>
                        <div className="poker__grid--item">
                            <Player isHavePlayer={true} isReady={true} position={3} isDealer={true}/>
                        </div>
                        <div className="poker__grid--item">
                            <Player isHavePlayer={true} isReady={true} position={7}/>
                        </div>
                        <div className="poker__grid--item">
                            <Player isHavePlayer={true} isReady={true} position={2}/>
                        </div>
                        <div className="poker__grid--item">
                            <Player isHavePlayer={true} isReady={false} position={8}/>
                        </div>

                        <div className="poker__grid--item">
                            <div className="poker__user game__user">
                                <div className="game__user--block">
                                </div>
                                <div className="game__user--info">
                                    <div className="game__user--info-body">
                                        <h3 className="game__user--name">
                                            Вы: {user?.username}
                                        </h3>
                                        <progress className="game__user--progress" max="100" value="100"></progress>
                                    </div>
                                </div>
                                <div className="game__user--avatar">
                                    <img src={getApiLink("/" + user.avatar)} alt=""
                                         className="game__user--avatar-img"/>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="poker__main--table poker__table game__table">

                        <div className="poker__table--cards">
                            <div className="poker__table--value">
                                <div className="game__bet">
                                    <span className="game__bet--value">Pot 142</span>
                                    <img src={chip} alt="" className="game__bet--currency"/>
                                </div>
                            </div>
                            <div className="poker__table--cards-row">
                                <div className="poker__table--card-place">
                                    <div className="poker__table--card-body">
                                        <img src={allCards["Diamond" + "3"]} alt="" className="poker__table--card-img"/>
                                    </div>
                                </div>
                                <div className="poker__table--card-place">
                                    <div className="poker__table--card-body">
                                        <img src={allCards["Diamond" + "3"]} alt="" className="poker__table--card-img"/>
                                    </div>
                                </div>
                                <div className="poker__table--card-place">
                                    <div className="poker__table--card-body">
                                        <img src={allCards["Diamond" + "4"]} alt="" className="poker__table--card-img"/>
                                    </div>
                                </div>
                                <div className="poker__table--card-place">
                                    <div className="poker__table--card-body">

                                    </div>
                                </div>
                                <div className="poker__table--card-place">
                                    <div className="poker__table--card-body">

                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*<div className="game__table--content">*/}
                        {/*    <h3 className="game__table--title section-title _center">*/}
                        {/*        Ожидаем готовность комнаты*/}
                        {/*    </h3>*/}
                        {/*    <div className="game__table--text">*/}
                        {/*        Оставайтесь и одержите победу!*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>

                    <div className="poker__main--user-menu game__user-menu">
                        <div className="game__user-menu--col">
                            <GamesCommunication/>
                        </div>
                        <div className="game__user-menu--col">
                            <div className="game__user-menu--timer">
                                Осталось:
                                <b>10 сек</b>
                            </div>
                            <div className="game__user-menu--row _min">
                                <button className="game__user-menu--main-btn btn _large _shadow" type="button">
                                    Фолд
                                </button>
                                <button className="game__user-menu--main-btn btn _large _shadow" type="button">
                                    Чек
                                </button>
                                <button className="game__user-menu--main-btn btn _large _shadow" type="button">
                                    Бет 142
                                </button>
                                <div className="game__user-menu--element">
                                    <div className="input-range-body">
                                        {/*<Nouislider*/}
                                        {/*    connect*/}
                                        {/*    start={[500, 4000]}*/}
                                        {/*    behaviour="tap"*/}
                                        {/*    range={{*/}
                                        {/*        min: [0],*/}
                                        {/*        "10%": [500, 500],*/}
                                        {/*        "50%": [4000, 1000],*/}
                                        {/*        max: [10000]*/}
                                        {/*    }}*/}
                                        {/*    // onSlide={this.onSlide}*/}
                                        {/*/>*/}
                                        {/*{textValue && percent && (*/}
                                        {/*    <div>*/}
                                        {/*        Value: {textValue}, {percent} %*/}
                                        {/*    </div>*/}
                                        {/*)}*/}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*<div className="game__user-menu--col">*/}
                        {/*    <h3 className="game__user-menu--title section-title _decor-none">*/}
                        {/*        Вы готовы?*/}
                        {/*    </h3>*/}
                        {/*    <div className="game__user-menu--timer">*/}
                        {/*        Осталось:*/}
                        {/*        <b>10 сек</b>*/}
                        {/*    </div>*/}
                        {/*    <button className="game__user-menu--main-btn btn _large _shadow" type="button">*/}
                        {/*        Я готов*/}
                        {/*    </button>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
        </PokerStyled>
    )
}
