import React from 'react';
import PopupPromocode from "./popup_promocode/PopupPromocode";
import PopupRegistration from "./popup_registration/PopupRegistration";
import PopupLogin from "./popup_login/PopupLogin";
import PopupForgotPassword from "./popup_forgot_password/PopupForgotPassword";
import PopupForgotPasswordSent from "./popup_forgot_password/PopupForgotPasswordSent";
import PopupSubscribe from "./popup_subscribe/PopupSubscribe";
import PopupMiniVideo from "./popup_video/PopupMiniVideo";
import CombinationCards from "./popup_combination_cards/CombinationCards";

const Popups = () => {


    return (
        <>

            <PopupPromocode />

            <PopupRegistration/>
            <PopupLogin/>
            <PopupForgotPassword/>
            <PopupForgotPasswordSent />

            <PopupSubscribe />

            <PopupMiniVideo/>

            <CombinationCards/>
            
            {/*<div className="game-exit-popup popup" id="game-exit-popup" style="display: none;">*/}
            {/*    <div className="game-exit-popup__wrapper popup-wrapper">*/}
            {/*        <div className="game-exit-popup__bg popup-bg popup-close">*/}
            
            {/*        </div>*/}
            {/*        <div className="game-exit-popup__body popup-body">*/}
            {/*            <div className="game-exit-popup__container popup-container">*/}
            {/*                <button type="button" className="promocode-popup__close-btn popup-close-btn popup-close"*/}
            {/*                        title="Закрыть">*/}
            {/*                    <svg viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
            {/*                        <path d="M13.7886 4.23486L4.59619 12.7049" stroke="#F9F1DF"/>*/}
            {/*                        <path d="M4.59619 4.23486L13.7886 12.7049" stroke="#F9F1DF"/>*/}
            {/*                    </svg>*/}
            {/*                </button>*/}
            {/*                <h2 className="game-exit-popup__title popup-title section-title _decor-none">*/}
            {/*                    Выход из игры*/}
            {/*                </h2>*/}
            {/*                <div className="game-exit-popup__text popup-text _left">*/}
            {/*                    Если вы выйдете из игры то вам автоматически будет засчитан проигрышь и снята сумма*/}
            {/*                    ставки*/}
            {/*                    команты*/}
            {/*                </div>*/}
            {/*                <a href="#" className="game-exit-popup__btn btn popup-btn _red">*/}
            {/*                    Выйти из игры*/}
            {/*                </a>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            
            {/*<div className="game-invite-popup popup" id="game-invite-popup" style="display: none;">*/}
            {/*    <div className="game-exit-popup__wrapper popup-wrapper">*/}
            {/*        <div className="game-exit-popup__bg popup-bg popup-close">*/}
            
            {/*        </div>*/}
            {/*        <div className="game-exit-popup__body popup-body">*/}
            {/*            <div className="game-exit-popup__container popup-container">*/}
            {/*                <button type="button" className="promocode-popup__close-btn popup-close-btn popup-close"*/}
            {/*                        title="Закрыть">*/}
            {/*                    <svg viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
            {/*                        <path d="M13.7886 4.23486L4.59619 12.7049" stroke="#F9F1DF"/>*/}
            {/*                        <path d="M4.59619 4.23486L13.7886 12.7049" stroke="#F9F1DF"/>*/}
            {/*                    </svg>*/}
            {/*                </button>*/}
            {/*                <h2 className="game-exit-popup__title popup-title section-title _decor-none">*/}
            {/*                    Выход из игры*/}
            {/*                </h2>*/}
            {/*                <div className="game-exit-popup__text popup-text _left">*/}
            {/*                    Если вы выйдете из игры то вам автоматически будет засчитан проигрышь и снята сумма*/}
            {/*                    ставки*/}
            {/*                    команты*/}
            {/*                </div>*/}
            {/*                <form action="#" className="game-invite-popup__form popup-form">*/}
            {/*                    <div className="game-invite-popup__form--list popup-form-list">*/}
            {/*                        <label className="game-invite-popup__label popup-label">*/}
            {/*                            <input type="email" name="email" required placeholder="Email"*/}
            {/*                                   className="game-invite-popup__input popup-input email-valid-input"/>*/}
            {/*                                <span*/}
            {/*                                    className="game-invite-popup__input-placeholder popup-input-placeholder">Email</span>*/}
            {/*                        </label>*/}
            {/*                    </div>*/}
            {/*                    <button type="submit"*/}
            {/*                            className="game-invite-popup__submit popup-submit btn _large _shadow _disabled">*/}
            {/*                        Отправить*/}
            {/*                    </button>*/}
            {/*                </form>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}

        </>
    );
};

export default Popups;