import React from 'react';
import PopupCross from "../PopupCross";
import PopupBgd from "../PopupBgd";

const CombinationCards = () => {
    return (
        <div className="poker-combination-popup popup" id="poker-combination-popup">
            <div className="poker-combination-popup__wrapper popup-wrapper">
                <PopupBgd/>
                <div className="poker-combination-popup__body popup-body">
                    <div className="poker-combination-popup__container popup-container">
                        <PopupCross/>
                        <h2 className="poker-combination-popup__title popup-title section-title _center">
                            Комбинации покера
                        </h2>
                        <ul className="poker-combination-popup__list">
                            <li className="poker-combination-popup__item">
                                <div className="poker-combination-popup__item--body">
                                    <div className="poker-combination-popup__item--info">
                                        <h4 className="poker-combination-popup__item--name">
                                            Флеш рояль
                                        </h4>
                                        <div className="poker-combination-popup__item--text">
                                            Стрит флеш <br /> от десятки до туза
                                        </div>
                                    </div>
                                    <div className="poker-combination-popup__item--image">
                                        <img src="images/poker/combination/1.svg" alt=""
                                             className="poker-combination-popup__item--img"/>
                                    </div>
                                </div>
                            </li>
                            <li className="poker-combination-popup__item">
                                <div className="poker-combination-popup__item--body">
                                    <div className="poker-combination-popup__item--info">
                                        <h4 className="poker-combination-popup__item--name">
                                            Стрит флеш
                                        </h4>
                                        <div className="poker-combination-popup__item--text">
                                            Стрит флеш <br /> от десятки до туза
                                        </div>
                                    </div>
                                    <div className="poker-combination-popup__item--image">
                                        <img src="images/poker/combination/2.svg" alt=""
                                             className="poker-combination-popup__item--img"/>
                                    </div>
                                </div>
                            </li>
                            <li className="poker-combination-popup__item">
                                <div className="poker-combination-popup__item--body">
                                    <div className="poker-combination-popup__item--info">
                                        <h4 className="poker-combination-popup__item--name">
                                            Каре
                                        </h4>
                                        <div className="poker-combination-popup__item--text">
                                            Четыре карты <br /> одного достоинства
                                        </div>
                                    </div>
                                    <div className="poker-combination-popup__item--image">
                                        <img src="images/poker/combination/3.svg" alt=""
                                             className="poker-combination-popup__item--img"/>
                                    </div>
                                </div>
                            </li>
                            <li className="poker-combination-popup__item">
                                <div className="poker-combination-popup__item--body">
                                    <div className="poker-combination-popup__item--info">
                                        <h4 className="poker-combination-popup__item--name">
                                            Фул хаус
                                        </h4>
                                        <div className="poker-combination-popup__item--text">
                                            Три карты одного достоинства и <br /> две карты другого
                                        </div>
                                    </div>
                                    <div className="poker-combination-popup__item--image">
                                        <img src="images/poker/combination/4.svg" alt=""
                                             className="poker-combination-popup__item--img"/>
                                    </div>
                                </div>
                            </li>
                            <li className="poker-combination-popup__item">
                                <div className="poker-combination-popup__item--body">
                                    <div className="poker-combination-popup__item--info">
                                        <h4 className="poker-combination-popup__item--name">
                                            Флеш
                                        </h4>
                                        <div className="poker-combination-popup__item--text">
                                            Пять карт <br /> одной масти
                                        </div>
                                    </div>
                                    <div className="poker-combination-popup__item--image">
                                        <img src="images/poker/combination/5.svg" alt=""
                                             className="poker-combination-popup__item--img"/>
                                    </div>
                                </div>
                            </li>
                            <li className="poker-combination-popup__item">
                                <div className="poker-combination-popup__item--body">
                                    <div className="poker-combination-popup__item--info">
                                        <h4 className="poker-combination-popup__item--name">
                                            Стрит
                                        </h4>
                                        <div className="poker-combination-popup__item--text">
                                            Пять последовательно <br /> расположенных карт
                                        </div>
                                    </div>
                                    <div className="poker-combination-popup__item--image">
                                        <img src="images/poker/combination/6.svg" alt=""
                                             className="poker-combination-popup__item--img"/>
                                    </div>
                                </div>
                            </li>
                            <li className="poker-combination-popup__item">
                                <div className="poker-combination-popup__item--body">
                                    <div className="poker-combination-popup__item--info">
                                        <h4 className="poker-combination-popup__item--name">
                                            Сет (тройка)
                                        </h4>
                                        <div className="poker-combination-popup__item--text">
                                            Три карты <br /> одного достоинства
                                        </div>
                                    </div>
                                    <div className="poker-combination-popup__item--image">
                                        <img src="images/poker/combination/7.svg" alt=""
                                             className="poker-combination-popup__item--img"/>
                                    </div>
                                </div>
                            </li>
                            <li className="poker-combination-popup__item">
                                <div className="poker-combination-popup__item--body">
                                    <div className="poker-combination-popup__item--info">
                                        <h4 className="poker-combination-popup__item--name">
                                            Две пары
                                        </h4>
                                        <div className="poker-combination-popup__item--text">
                                            Две пары карт одинакового <br /> достоинства
                                        </div>
                                    </div>
                                    <div className="poker-combination-popup__item--image">
                                        <img src="images/poker/combination/8.svg" alt=""
                                             className="poker-combination-popup__item--img"/>
                                    </div>
                                </div>
                            </li>
                            <li className="poker-combination-popup__item">
                                <div className="poker-combination-popup__item--body">
                                    <div className="poker-combination-popup__item--info">
                                        <h4 className="poker-combination-popup__item--name">
                                            Пара
                                        </h4>
                                        <div className="poker-combination-popup__item--text">
                                            Две карты одинакового <br /> достоинства
                                        </div>
                                    </div>
                                    <div className="poker-combination-popup__item--image">
                                        <img src="images/poker/combination/9.svg" alt=""
                                             className="poker-combination-popup__item--img"/>
                                    </div>
                                </div>
                            </li>
                            <li className="poker-combination-popup__item">
                                <div className="poker-combination-popup__item--body">
                                    <div className="poker-combination-popup__item--info">
                                        <h4 className="poker-combination-popup__item--name">
                                            Старшая карта
                                        </h4>
                                        <div className="poker-combination-popup__item--text">
                                            Разные <br /> пять карт
                                        </div>
                                    </div>
                                    <div className="poker-combination-popup__item--image">
                                        <img src="images/poker/combination/10.svg" alt=""
                                             className="poker-combination-popup__item--img"/>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CombinationCards;