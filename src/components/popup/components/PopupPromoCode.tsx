import React, {useEffect} from 'react'
import logo from './../../../assets/img/logo.svg'

interface IPopupPromocodeProps {

}

export const PopupPromoCode: React.FC<IPopupPromocodeProps> = () => {

    return (
        <div className="promocode-popup__body popup-body">
            <div className="promocode-popup__container popup-container">
                <button type="button" className="promocode-popup__close-btn popup-close-btn popup-close"
                        title="Закрыть">
                    <svg viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.7886 4.23486L4.59619 12.7049" stroke="#F9F1DF"></path>
                        <path d="M4.59619 4.23486L13.7886 12.7049" stroke="#F9F1DF"></path>
                    </svg>
                </button>
                <div className="promocode-popup__logo popup-logo">
                    <img src={logo} width="100" height="38" alt="" className="popup-logo__img" />
                </div>
                <h2 className="promocode-popup__title popup-title section-title _center">
                    Промокод
                </h2>
                <form action="#" className="promocode-popup__form popup-form">
                    <div className="promocode-popup__form--list popup-form-list">
                        <label className="promocode-popup__label popup-label">
                            <input type="text" name="promocode" required placeholder="Промокод"
                                   className="promocode-popup__input popup-input" />
                                <span
                                    className="promocode-popup__input-placeholder popup-input-placeholder">Промокод</span>
                        </label>
                    </div>
                    <button type="submit" className="promocode-popup__submit popup-submit btn _large _shadow">
                        Применить
                    </button>
                </form>
            </div>
        </div>
    )
}
