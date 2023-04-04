import React from 'react';

const WithdrawalsForm = () => {
    return (
        <div className="account__col">
            <div className="account__block" data-aos="fade-in" data-aos-delay="500"
                 data-aos-anchor=".account__main">
                <div className="account__block--body _none-padding _transparent">
                    <form action="#" className="account-withdrawals">
                        <fieldset className="account-withdrawals__block">
                            <h3 className="account-withdrawals__title account-min-title">
                                Выбор вывода средств
                            </h3>
                            <div className="account-withdrawals__row">
                                <div className="account-withdrawals__row--block">
                                    <select name="withdrawals-type"
                                            className="account-withdrawals__select custom-select">
                                        <option value="chips" defaultValue
                                                data-image="images/icons/chip.svg">
                                            Фишки
                                        </option>
                                        <option value="money"
                                                data-image="images/icons/dollar-circle.svg">
                                            Деньги
                                        </option>
                                    </select>
                                </div>
                                <div className="account-withdrawals__row--block">
                                    <label className="account-withdrawals__label form-label">
                                        <input type="number" name="sum" required
                                               placeholder="Сумма"
                                               className="account-withdrawals__input form-input _add-bg"/>
                                        <span
                                            className="account-withdrawals__input-placeholder form-input-placeholder">
                                                                    Сумма
                                                                </span>
                                    </label>
                                </div>
                            </div>
                        </fieldset>
                        <fieldset className="account-withdrawals__block">
                            <h3 className="account-withdrawals__title account-min-title">
                                Выбор вывода средств
                            </h3>
                            <select name="withdrawals-type"
                                    className="account-withdrawals__type--select custom-select">
                                <option value="card-1" defaultValue>
                                    Карта монобанка
                                </option>
                                <option value="card-2">
                                    Карта 2
                                </option>
                                <option value="card-3">
                                    Карта 3
                                </option>
                            </select>
                        </fieldset>
                        <fieldset className="account-withdrawals__block">
                            <h3 className="account-withdrawals__title account-min-title">
                                История реферальной системы
                            </h3>
                            <div className="account-withdrawals__result">
                                                        <span className="account-withdrawals__result--name">
                                                            Будет зачислено:
                                                        </span>
                                <span className="account-withdrawals__result--value">
                                                            $ 54.00
                                                        </span>
                            </div>
                        </fieldset>
                        <button className="account-withdrawals__submit btn _large-2 _full"
                                type="submit">
                            Вывести
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default WithdrawalsForm;