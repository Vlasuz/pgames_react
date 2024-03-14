import React, {useEffect} from 'react'

interface IRoomCreateProps {

}

export const RoomCreate: React.FC<IRoomCreateProps> = () => {

    return (
        <main className="main">
            <section className="page-rooms page-padding">
                <div className="page-rooms__container container">
                    <div className="page-rooms__header page-header" data-aos="fade-in" data-aos-delay="200">
                        <a href="#" className="page-rooms__forward-btn page-header__forward-btn" title="Назад">
                            <svg width="5" height="7" viewBox="0 0 5 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M0.25 3.49991C0.25 3.35065 0.304932 3.20132 0.414795 3.08757L3.2273 0.170898C3.44702 -0.0569662 3.80298 -0.0569662 4.02271 0.170898C4.24243 0.398763 4.24243 0.767904 4.02271 0.995768L1.60703 3.49991L4.02227 6.0046C4.24199 6.23246 4.24199 6.6016 4.02227 6.82947C3.80254 7.05733 3.44658 7.05733 3.22686 6.82947L0.414356 3.9128C0.304493 3.79887 0.25 3.64939 0.25 3.49991Z"
                                    fill="#F9F1DF"/>
                            </svg>
                        </a>
                        <h2 className="page-rooms__section-title section-title page-header__title _decor-none">
                            Комнаты
                        </h2>
                        <div className="page-rooms__bread-crumbs page-header__bread-crumbs">
                            <ul className="page-header__bread-crumbs--list">
                                <li className="page-header__bread-crumbs--item">
                                    <a href="index.html" className="page-header__bread-crumbs--link">
                                        Главная
                                    </a>
                                </li>
                                <li className="page-header__bread-crumbs--item">
                                    <a href="rooms.html" className="page-header__bread-crumbs--link">
                                        Комнаты
                                    </a>
                                </li>
                                <li className="page-header__bread-crumbs--item">
                                    <a className="page-header__bread-crumbs--link">
                                        Создание игры
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="page-rooms__main" data-aos="fade-in" data-aos-delay="400">
                        <form action="#" className="page-rooms__create">
                            <fieldset className="page-rooms__create--fieldset">
                                <legend className="page-rooms__create--legend">
                                    Игра
                                </legend>
                                <select name="game" className="page-rooms__select custom-select">
                                    <option value="durak" data-image="img/icons/cards.svg">
                                        Дурак
                                    </option>
                                    <option value="chess" data-image="img/icons/chess.svg">
                                        Шахматы
                                    </option>
                                    <option value="domino" data-image="img/icons/domino.svg">
                                        Домино
                                    </option>
                                </select>
                            </fieldset>
                            <fieldset className="page-rooms__create--fieldset">
                                <legend className="page-rooms__create--legend">
                                    Создание комнаты
                                </legend>
                                <div className="page-rooms__create--row">
                                    <div className="page-rooms__create--col">
                                        <div className="page-rooms__select-wrapper">
                                            <select name="currency" className="page-rooms__select custom-select">
                                                <option value="chips" data-image="img/icons/chip.svg">
                                                    Фишки
                                                </option>
                                                <option value="money" data-image="img/icons/dollar-circle.svg">
                                                    Деньги
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="page-rooms__create--col">
                                        <label className="page-rooms__label form-label">
                                            <input type="number" name="sum" required placeholder="Сумма"
                                                   className="page-rooms__input form-input _add-bg"/>
                                        <span className="page-rooms__input-placeholder form-input-placeholder">
                                                Сумма
                                            </span>
                                        </label>
                                    </div>
                                    <div className="page-rooms__create--col">
                                        <div className="page-rooms__select-wrapper">
                                            <select name="players-length" className="page-rooms__select custom-select">
                                                <option value="2">
                                                    2 Игрока
                                                </option>
                                                <option value="3">
                                                    3 Игрока
                                                </option>
                                                <option value="4">
                                                    4 Игрока
                                                </option>
                                                <option value="5">
                                                    5 Игроков
                                                </option>
                                                <option value="6">
                                                    6 Игроков
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="page-rooms__create--col">
                                        <div className="page-rooms__select-wrapper">
                                            <select name="status-game" className="page-rooms__select custom-select">
                                                <option value="open">
                                                    Открытая игра
                                                </option>
                                                <option value="lock">
                                                    Закрытая игра
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="page-rooms__create--col">
                                        <div className="page-rooms__select-wrapper">
                                            <select name="mode-game" className="page-rooms__select custom-select">
                                                <option value="type-1">
                                                    Переводной
                                                </option>
                                                <option value="type-2">
                                                    Другой режим
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                            </fieldset>
                            <fieldset className="page-rooms__create--fieldset">
                                <legend className="page-rooms__create--legend">
                                    Игроки
                                </legend>
                                <div className="page-rooms__select-wrapper">
                                    <select name="players" multiple
                                            className="page-rooms__select custom-multiple-select"
                                            data-placeholder="Добавить игрока">
                                        <option value="player-1">
                                            Jane_3245
                                        </option>
                                        <option value="player-2">
                                            Player 2
                                        </option>
                                        <option value="player-3">
                                            Player 3
                                        </option>
                                    </select>
                                </div>
                                <div className="page-rooms__create--text">
                                    После создания игры пользователям будет отправлено предложение войти в игру
                                </div>
                            </fieldset>
                            <button className="page-rooms__create--submit btn _large" type="submit">
                                Создать и присоедениться
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    )
}
