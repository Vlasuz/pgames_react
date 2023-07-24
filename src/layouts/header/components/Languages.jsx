import React, {useState} from 'react';
import ClickOutsideBlock from "../../../hooks/ClickOutsideBlock";

const Languages = () => {

    const { ref, isActive, setIsActive } = ClickOutsideBlock()

    return (
        <div ref={ref} className={"header__nav--language header__language header__drop-down" + (isActive ? " _active" : "")}>
            <button type="button" className="header__language--target header__drop-down--target" onClick={_ => setIsActive(prev => !prev)}>
                Ru
                <svg width="7" height="5" viewBox="0 0 7 5" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M3.49991 4.75C3.35065 4.75 3.20132 4.69507 3.08757 4.5852L0.170898 1.7727C-0.0569661 1.55298 -0.0569661 1.19702 0.170898 0.977295C0.398763 0.757568 0.767904 0.757568 0.995768 0.977295L3.49991 3.39297L6.0046 0.977734C6.23246 0.758008 6.6016 0.758008 6.82947 0.977734C7.05733 1.19746 7.05733 1.55342 6.82947 1.77314L3.9128 4.58564C3.79887 4.69551 3.64939 4.75 3.49991 4.75Z"
                        fill="#F9F1DF"/>
                </svg>
            </button>
            <div className="header__drop-down--block">
                <div className="header__drop-down--body">
                    <ul className="header__drop-down--list">
                        <li className="header__drop-down--item">
                            <a href="#" className="header__drop-down--link">
                                RU
                            </a>
                        </li>
                        <li className="header__drop-down--item">
                            <a href="#" className="header__drop-down--link">
                                EN
                            </a>
                        </li>
                        <li className="header__drop-down--item">
                            <a href="#" className="header__drop-down--link">
                                ES
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Languages;