import React, {useEffect, useState} from 'react'
import {Select} from "../../../components/select/Select";

interface IProfileWithdrawalsFormProps {

}

export const ProfileWithdrawalsForm: React.FC<IProfileWithdrawalsFormProps> = () => {

    const [withdrawType, setWithdrawType] = useState("chips")
    const withdrawTypes = [
        {
            title: "Фишки",
            slug: "chips"
        },
        {
            title: "Деньги",
            slug: "money"
        },
    ]

    const [withdrawCard, setWithdrawCard] = useState("mono")
    const withdrawCards = [
        {
            title: "Карта монобанка",
            slug: "chips"
        },
        {
            title: "Карта приватбанка",
            slug: "money"
        },
    ]

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()


    }

    return (
        <div className="account__col">
            <div className="account__block" data-aos="fade-in" data-aos-delay="500"
                 data-aos-anchor=".account__main">
                <div className="account__block--body _none-padding _transparent">
                    <form onSubmit={handleSubmit} className="account-withdrawals">
                        <fieldset className="account-withdrawals__block">
                            <h3 className="account-withdrawals__title account-min-title">
                                Выбор вывода средств
                            </h3>
                            <div className="account-withdrawals__row">
                                <div className="account-withdrawals__row--block">
                                    <Select list={withdrawTypes} setValue={setWithdrawType}/>
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
                            <Select list={withdrawCards} setValue={setWithdrawCard}/>
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
    )
}
