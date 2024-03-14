import React, {useEffect} from 'react'
import combination1 from "./../../../assets/img/poker/combination/1.svg"
import combination2 from "./../../../assets/img/poker/combination/2.svg"
import combination3 from "./../../../assets/img/poker/combination/3.svg"
import combination4 from "./../../../assets/img/poker/combination/4.svg"
import combination5 from "./../../../assets/img/poker/combination/5.svg"
import combination6 from "./../../../assets/img/poker/combination/6.svg"
import combination7 from "./../../../assets/img/poker/combination/7.svg"
import combination8 from "./../../../assets/img/poker/combination/8.svg"
import combination9 from "./../../../assets/img/poker/combination/9.svg"
import combination10 from "./../../../assets/img/poker/combination/10.svg"

interface IPopupPokerCombinationProps {

}

export const PopupPokerCombination: React.FC<IPopupPokerCombinationProps> = () => {

    return (
        <div className="poker-combination-popup__body popup-body">
            <div className="poker-combination-popup__container popup-container">
                <button type="button" className="popup-close-btn popup-close" title="Закрыть">
                    <svg viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.7886 4.23486L4.59619 12.7049" stroke="#F9F1DF"/>
                        <path d="M4.59619 4.23486L13.7886 12.7049" stroke="#F9F1DF"/>
                    </svg>
                </button>
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
                                <img src={combination1} alt=""
                                     className="poker-combination-popup__item--img" />
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
                                <img src={combination2} alt=""
                                     className="poker-combination-popup__item--img" />
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
                                <img src={combination3} alt=""
                                     className="poker-combination-popup__item--img" />
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
                                <img src={combination4} alt=""
                                     className="poker-combination-popup__item--img" />
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
                                <img src={combination5} alt=""
                                     className="poker-combination-popup__item--img" />
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
                                <img src={combination6} alt=""
                                     className="poker-combination-popup__item--img" />
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
                                <img src={combination7} alt=""
                                     className="poker-combination-popup__item--img" />
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
                                <img src={combination8} alt=""
                                     className="poker-combination-popup__item--img" />
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
                                <img src={combination9} alt=""
                                     className="poker-combination-popup__item--img" />
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
                                <img src={combination10} alt=""
                                     className="poker-combination-popup__item--img" />
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}
