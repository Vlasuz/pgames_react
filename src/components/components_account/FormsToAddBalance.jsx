import React, {useState} from 'react';

const FormsToAddBalance = () => {

    const [isOpenVarious, setIsOpenVarious] = useState(false)
    const [isBalanceChips, setIsBalanceChips] = useState(true)


    const handleFastAdd = (e) => {
        let accountBalanceMinBtn = e.target.closest('button');
        const parent = accountBalanceMinBtn.closest('.account-balance__block'),
            input = parent.querySelector('.account-balance__input'),
            value = accountBalanceMinBtn.dataset.value;

        input.value = value;
    }

    return (
        <>
            <form action="#" className={"account-balance__block" + (isBalanceChips ? " _visible" : "")}
                  id="balance-chips">
                <div className="account-balance__block--body">
                    <div className="account-balance__block--header">
                        <button
                            type="button"
                            className={"account-balance__target" + (isOpenVarious ? " _active" : "")}
                            onClick={() => setIsOpenVarious(prev => !prev)}
                        >
                            <svg width="17" height="17" viewBox="0 0 17 17"
                                 fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M14.2783 14.1661C15.8089 12.6105 16.6667 10.5157 16.6667 8.33333C16.6667 6.15101 15.8089 4.05613 14.2783 2.50053C14.2639 2.47799 14.2448 2.45885 14.2222 2.44445C14.2078 2.4219 14.1887 2.40276 14.1661 2.38836C12.6105 0.857792 10.5157 0 8.33333 0C6.15101 0 4.05613 0.857792 2.50053 2.38836C2.47799 2.40276 2.45885 2.4219 2.44445 2.44445C2.4219 2.45885 2.40276 2.47799 2.38836 2.50053C0.857792 4.05613 0 6.15101 0 8.33333C0 10.5157 0.857792 12.6105 2.38836 14.1661L2.44445 14.2222C2.45885 14.2448 2.47799 14.2639 2.50053 14.2783C4.05613 15.8089 6.15101 16.6667 8.33333 16.6667C10.5157 16.6667 12.6105 15.8089 14.1661 14.2783C14.1887 14.2639 14.2078 14.2448 14.2222 14.2222C14.2448 14.2078 14.2639 14.1887 14.2783 14.1661ZM1.31474 8.9743H3.24566C3.36102 9.88625 3.72092 10.75 4.28723 11.4741L2.91716 12.8441C2.00116 11.7476 1.44206 10.3974 1.31474 8.9743V8.9743ZM2.91716 3.82253L4.28723 5.19259C3.72092 5.91665 3.36102 6.78042 3.24566 7.69237H1.31474C1.44206 6.26927 2.00116 4.91904 2.91716 3.82253ZM15.3519 7.69237H13.421C13.3056 6.78042 12.9457 5.91665 12.3794 5.19259L13.7495 3.82253C14.6655 4.91904 15.2246 6.26927 15.3519 7.69237V7.69237ZM11.4741 4.28723C10.75 3.72092 9.88625 3.36102 8.9743 3.24566V1.31474C10.3974 1.44206 11.7476 2.00116 12.8441 2.91716L11.4741 4.28723ZM7.69237 3.24566C6.78042 3.36102 5.91665 3.72092 5.19259 4.28723L3.82253 2.91716C4.91904 2.00116 6.26927 1.44206 7.69237 1.31474V3.24566ZM5.19259 12.3794C5.91665 12.9457 6.78042 13.3056 7.69237 13.421V15.3519C6.26927 15.2246 4.91904 14.6655 3.82253 13.7495L5.19259 12.3794ZM8.9743 13.421C9.88625 13.3056 10.75 12.9457 11.4741 12.3794L12.8441 13.7495C11.7476 14.6655 10.3974 15.2246 8.9743 15.3519V13.421ZM12.3794 11.4741C12.9457 10.75 13.3056 9.88625 13.421 8.9743H15.3519C15.2246 10.3974 14.6655 11.7476 13.7495 12.8441L12.3794 11.4741Z"
                                    fill="#61C8AF"/>
                            </svg>
                            Фишки
                        </button>
                        <div className="account-balance__list">
                            <button type="button"
                                    className="account-balance__list--btn"
                                    onClick={e => {setIsBalanceChips(prev => !prev); setIsOpenVarious(prev => !prev)}}
                            >
                                <svg width="20" height="21" viewBox="0 0 20 21"
                                     fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M10.75 14.9198H11.4C12.05 14.9198 12.59 14.3398 12.59 13.6398C12.59 12.7698 12.28 12.5998 11.77 12.4198L10.76 12.0698V14.9198H10.75Z"
                                        fill="#F9F1DF"/>
                                    <path
                                        d="M9.97007 0.899919C4.45007 0.919919 -0.0199331 5.40992 6.68532e-05 10.9299C0.0200669 16.4499 4.51007 20.9199 10.0301 20.8999C15.5501 20.8799 20.0201 16.3899 20.0001 10.8699C19.9801 5.34992 15.4901 0.889919 9.97007 0.899919ZM12.2601 10.9999C13.0401 11.2699 14.0901 11.8499 14.0901 13.6399C14.0901 15.1799 12.8801 16.4199 11.4001 16.4199H10.7501V16.9999C10.7501 17.4099 10.4101 17.7499 10.0001 17.7499C9.59007 17.7499 9.25007 17.4099 9.25007 16.9999V16.4199H8.89007C7.25007 16.4199 5.92007 15.0399 5.92007 13.3399C5.92007 12.9299 6.26007 12.5899 6.67007 12.5899C7.08007 12.5899 7.42007 12.9299 7.42007 13.3399C7.42007 14.2099 8.08007 14.9199 8.89007 14.9199H9.25007V11.5399L7.74007 10.9999C6.96007 10.7299 5.91007 10.1499 5.91007 8.35992C5.91007 6.81992 7.12007 5.57992 8.60007 5.57992H9.25007V4.99992C9.25007 4.58992 9.59007 4.24992 10.0001 4.24992C10.4101 4.24992 10.7501 4.58992 10.7501 4.99992V5.57992H11.1101C12.7501 5.57992 14.0801 6.95992 14.0801 8.65992C14.0801 9.06992 13.7401 9.40992 13.3301 9.40992C12.9201 9.40992 12.5801 9.06992 12.5801 8.65992C12.5801 7.78992 11.9201 7.07992 11.1101 7.07992H10.7501V10.4599L12.2601 10.9999Z"
                                        fill="#F9F1DF"/>
                                    <path
                                        d="M7.41992 8.37008C7.41992 9.24008 7.72992 9.41008 8.23992 9.59008L9.24992 9.94008V7.08008H8.59992C7.94992 7.08008 7.41992 7.66008 7.41992 8.37008Z"
                                        fill="#F9F1DF"/>
                                </svg>
                                Деньги
                            </button>
                        </div>
                    </div>
                    <label className="account-balance__label form-label">
                        <input type="number" min="1" max="100" name="chips"
                               placeholder="10 фишек"
                               className="account-balance__input form-input"
                               required/>
                        <span
                            className="account-balance__input-placeholder form-input-placeholder">
                                                                    10 фишек
                                                                </span>
                        <span className="account-balance__input--tooltip">
                                                                    <span>Мин. $5, 1 фишка</span>
                                                                    <span>Макс. $5000, 100 фишек</span>
                                                                </span>
                    </label>
                </div>
                <div className="account-balance__btn-list">
                    <button type="button" className="account-balance__min-btn"
                            data-value="10"
                            onClick={handleFastAdd}
                    >
                        10
                    </button>
                    <button type="button" className="account-balance__min-btn"
                            data-value="25"
                            onClick={handleFastAdd}
                    >
                        25
                    </button>
                    <button type="button" className="account-balance__min-btn"
                            data-value="50"
                            onClick={handleFastAdd}
                    >
                        50
                    </button>
                </div>
                <div className="account-balance__promo">
                    <label className="account-balance__promo--label form-label">
                        <input type="text" placeholder="Промо код"
                               className="account-balance__promo--input form-input _add-bg"/>
                        <span
                            className="account-balance__promo--input-placeholder form-input-placeholder">
                                                                    Промо код
                                                                </span>
                    </label>
                </div>
                <button className="account-balance__promo--submit btn _large-2"
                        type="submit">
                    Пополнить баланс
                </button>
            </form>
            <form action="#" className={"account-balance__block" + (!isBalanceChips ? " _visible" : "")}
                  id="balance-money">
                <div className="account-balance__block--body">
                    <div className="account-balance__block--header">
                        <button
                            type="button"
                            className={"account-balance__target" + (isOpenVarious ? " _active" : "")}
                            onClick={() => setIsOpenVarious(prev => !prev)}
                        >
                            <svg width="20" height="21" viewBox="0 0 20 21"
                                 fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M10.75 14.9198H11.4C12.05 14.9198 12.59 14.3398 12.59 13.6398C12.59 12.7698 12.28 12.5998 11.77 12.4198L10.76 12.0698V14.9198H10.75Z"
                                    fill="#F9F1DF"/>
                                <path
                                    d="M9.97007 0.899919C4.45007 0.919919 -0.0199331 5.40992 6.68532e-05 10.9299C0.0200669 16.4499 4.51007 20.9199 10.0301 20.8999C15.5501 20.8799 20.0201 16.3899 20.0001 10.8699C19.9801 5.34992 15.4901 0.889919 9.97007 0.899919ZM12.2601 10.9999C13.0401 11.2699 14.0901 11.8499 14.0901 13.6399C14.0901 15.1799 12.8801 16.4199 11.4001 16.4199H10.7501V16.9999C10.7501 17.4099 10.4101 17.7499 10.0001 17.7499C9.59007 17.7499 9.25007 17.4099 9.25007 16.9999V16.4199H8.89007C7.25007 16.4199 5.92007 15.0399 5.92007 13.3399C5.92007 12.9299 6.26007 12.5899 6.67007 12.5899C7.08007 12.5899 7.42007 12.9299 7.42007 13.3399C7.42007 14.2099 8.08007 14.9199 8.89007 14.9199H9.25007V11.5399L7.74007 10.9999C6.96007 10.7299 5.91007 10.1499 5.91007 8.35992C5.91007 6.81992 7.12007 5.57992 8.60007 5.57992H9.25007V4.99992C9.25007 4.58992 9.59007 4.24992 10.0001 4.24992C10.4101 4.24992 10.7501 4.58992 10.7501 4.99992V5.57992H11.1101C12.7501 5.57992 14.0801 6.95992 14.0801 8.65992C14.0801 9.06992 13.7401 9.40992 13.3301 9.40992C12.9201 9.40992 12.5801 9.06992 12.5801 8.65992C12.5801 7.78992 11.9201 7.07992 11.1101 7.07992H10.7501V10.4599L12.2601 10.9999Z"
                                    fill="#F9F1DF"/>
                                <path
                                    d="M7.41992 8.37008C7.41992 9.24008 7.72992 9.41008 8.23992 9.59008L9.24992 9.94008V7.08008H8.59992C7.94992 7.08008 7.41992 7.66008 7.41992 8.37008Z"
                                    fill="#F9F1DF"/>
                            </svg>
                            Деньги
                        </button>
                        <div className="account-balance__list">
                            <button type="button"
                                    className="account-balance__list--btn"
                                    onClick={e => {setIsBalanceChips(prev => !prev); setIsOpenVarious(prev => !prev)}}
                            >
                                <svg width="17" height="17" viewBox="0 0 17 17"
                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M14.2783 14.1661C15.8089 12.6105 16.6667 10.5157 16.6667 8.33333C16.6667 6.15101 15.8089 4.05613 14.2783 2.50053C14.2639 2.47799 14.2448 2.45885 14.2222 2.44445C14.2078 2.4219 14.1887 2.40276 14.1661 2.38836C12.6105 0.857792 10.5157 0 8.33333 0C6.15101 0 4.05613 0.857792 2.50053 2.38836C2.47799 2.40276 2.45885 2.4219 2.44445 2.44445C2.4219 2.45885 2.40276 2.47799 2.38836 2.50053C0.857792 4.05613 0 6.15101 0 8.33333C0 10.5157 0.857792 12.6105 2.38836 14.1661L2.44445 14.2222C2.45885 14.2448 2.47799 14.2639 2.50053 14.2783C4.05613 15.8089 6.15101 16.6667 8.33333 16.6667C10.5157 16.6667 12.6105 15.8089 14.1661 14.2783C14.1887 14.2639 14.2078 14.2448 14.2222 14.2222C14.2448 14.2078 14.2639 14.1887 14.2783 14.1661ZM1.31474 8.9743H3.24566C3.36102 9.88625 3.72092 10.75 4.28723 11.4741L2.91716 12.8441C2.00116 11.7476 1.44206 10.3974 1.31474 8.9743V8.9743ZM2.91716 3.82253L4.28723 5.19259C3.72092 5.91665 3.36102 6.78042 3.24566 7.69237H1.31474C1.44206 6.26927 2.00116 4.91904 2.91716 3.82253ZM15.3519 7.69237H13.421C13.3056 6.78042 12.9457 5.91665 12.3794 5.19259L13.7495 3.82253C14.6655 4.91904 15.2246 6.26927 15.3519 7.69237V7.69237ZM11.4741 4.28723C10.75 3.72092 9.88625 3.36102 8.9743 3.24566V1.31474C10.3974 1.44206 11.7476 2.00116 12.8441 2.91716L11.4741 4.28723ZM7.69237 3.24566C6.78042 3.36102 5.91665 3.72092 5.19259 4.28723L3.82253 2.91716C4.91904 2.00116 6.26927 1.44206 7.69237 1.31474V3.24566ZM5.19259 12.3794C5.91665 12.9457 6.78042 13.3056 7.69237 13.421V15.3519C6.26927 15.2246 4.91904 14.6655 3.82253 13.7495L5.19259 12.3794ZM8.9743 13.421C9.88625 13.3056 10.75 12.9457 11.4741 12.3794L12.8441 13.7495C11.7476 14.6655 10.3974 15.2246 8.9743 15.3519V13.421ZM12.3794 11.4741C12.9457 10.75 13.3056 9.88625 13.421 8.9743H15.3519C15.2246 10.3974 14.6655 11.7476 13.7495 12.8441L12.3794 11.4741Z"
                                        fill="#61C8AF"/>
                                </svg>
                                Фишки
                            </button>
                        </div>
                    </div>
                    <label className="account-balance__label form-label">
                        <input type="number" min="5" max="5000" name="money"
                               placeholder="5$"
                               className="account-balance__input form-input"
                               required/>
                        <span
                            className="account-balance__input-placeholder form-input-placeholder">
                                                                    5$
                                                                </span>
                        <span className="account-balance__input--tooltip">
                                                                    <span>Мин. $5, 1 фишка</span>
                                                                    <span>Макс. $5000, 100 фишек</span>
                                                                </span>
                    </label>
                </div>
                <div className="account-balance__btn-list">
                    <button type="button" className="account-balance__min-btn"
                            data-value="10"
                            onClick={handleFastAdd}
                    >
                        10
                    </button>
                    <button type="button" className="account-balance__min-btn"
                            data-value="25"
                            onClick={handleFastAdd}
                    >
                        25
                    </button>
                    <button type="button" className="account-balance__min-btn"
                            data-value="50"
                            onClick={handleFastAdd}
                    >
                        50
                    </button>
                </div>
                <div className="account-balance__promo">
                    <label className="account-balance__promo--label form-label">
                        <input type="text" placeholder="Промо код"
                               className="account-balance__promo--input form-input _add-bg"/>
                        <span
                            className="account-balance__promo--input-placeholder form-input-placeholder">
                                                                    Промо код
                                                                </span>
                    </label>
                </div>
                <button className="account-balance__promo--submit btn _large-2"
                        type="submit">
                    Пополнить баланс
                </button>
            </form>
        </>
    );
};

export default FormsToAddBalance;