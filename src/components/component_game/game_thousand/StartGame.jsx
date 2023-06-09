import React, {useEffect, useState} from 'react';

const StartGame = ({setStepOfGame}) => {

    const [time, setTime] = useState(10)
    useEffect(() => {

        let timer = setInterval(() => {
            setTime(prev => prev > 0 ? prev - 1 : prev)
        }, 1000)

        return () => clearInterval(timer)

    }, [time])

    const [isLeftStart, setIsLeftStart] = useState(false)
    const [isRightStart, setIsRightStart] = useState(false)
    const [isMeStart, setIsMeStart] = useState(false)

    setTimeout(() => {
        setIsLeftStart(true)
    }, 1500)
    setTimeout(() => {
        setIsRightStart(true)
    }, 2500)


    useEffect(() => {
        if (isLeftStart && isRightStart && isMeStart) {
            setStepOfGame(2)
        }
    })


    return (
        <main className="main">
            <section className="one-thousand game page-padding-top">
                <div className="one-thousand__container game__container container">
                    <div className="game__header">
                        <div className="game__header--col">
                            <h2 className="game__header--name section-title _decor-none">
                                Тысяча
                            </h2>
                        </div>
                        <div className="game__header--col">
                            <div className="game__header--block">
                                <a href="#game-exit-popup" className="game__header--btn btn _dark open-popup">
                                    Выйти
                                </a>
                                <a href="#game-invite-popup" className="game__header--btn btn _red open-popup">
                                    Пригласить +
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="one-thousand__main">
                        <div className="one-thousand__main--bg one-thousand__bg">
                            <picture>
                                <img src="images/game/table.png" alt="" width="300"
                                     className="one-thousand__bg--img"/>
                            </picture>
                        </div>
                        <div className="one-thousand__main--grid one-thousand__grid">
                            <div className="one-thousand__grid--item">
                                <div className="game__bet">
                                    <span className="game__bet--value">1500</span>
                                    <img src="images/icons/chip.svg" alt="" className="game__bet--currency"/>
                                </div>
                            </div>
                            <div className="one-thousand__grid--item">

                            </div>
                            <div className="one-thousand__grid--item">
                                <div className="game__player">
                                    <div className="game__player--body">
                                        <div className="game__player--avatar">
                                            <img src="images/account/avatar.png" width="76" height="76" alt=""
                                                 className="game__player--avatar-img"/>
                                        </div>
                                        <div className="game__player--info">
                                            <h3 className="game__player--name">
                                                Игорь
                                            </h3>
                                        </div>
                                        <div className="game__player--block">
                                            <div className="game__player--min-message">
                                                {isLeftStart ? "Готов" : "Не готов"}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="one-thousand__grid--item">
                                <div className="game__player">
                                    <div className="game__player--body">
                                        <div className="game__player--avatar">
                                            <img src="images/account/avatar.png" width="76" height="76" alt=""
                                                 className="game__player--avatar-img"/>
                                        </div>
                                        <div className="game__player--info">
                                            <h3 className="game__player--name">
                                                Снова Игорь
                                            </h3>
                                        </div>
                                        <div className="game__player--block">
                                            <div className="game__player--min-message">
                                                {isRightStart ? "Готов" : "Не готов"}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="one-thousand__grid--item">
                                <div className="game__user">
                                    <div className="game__user--block">
                                    </div>
                                    <div className="game__user--info">
                                        <div className="game__user--info-body">
                                            <h3 className="game__user--name">
                                                Вы: Евгений
                                            </h3>
                                            {!isMeStart ? <progress className="game__user--progress" max="100"
                                                                    value={time * 10}></progress> : ""}
                                        </div>
                                    </div>
                                    <div className="game__user--avatar">
                                        <img src="images/account/avatar.png" alt=""
                                             className="game__user--avatar-img"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="one-thousand__main--table one-thousand__table game__table">
                            <div className="one-thousand__table--content game__table--content">
                                <h3 className="game__table--title section-title _center">
                                    Ожидаем готовность комнаты
                                </h3>
                                <div className="game__table--text">
                                    Оставайтесь и одержите победу!
                                </div>
                            </div>
                            <div className="one-thousand__table--maryazhi one-thousand__maryazhi">
                                <h3 className="one-thousand__maryazhi--title section-title _center">
                                    Марьяжи
                                </h3>
                                <ul className="one-thousand__maryazhi--list">
                                    <li className="one-thousand__maryazhi--item">
                                        4T +200
                                    </li>
                                    <li className="one-thousand__maryazhi--item">
                                        <svg width="30" height="28" viewBox="0 0 30 28" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M21.9857 0.455078C20.5444 0.479204 19.136 0.889556 17.9073 1.64337C16.6786 2.39718 15.6746 3.46684 15 4.74079C14.3361 3.46725 13.3405 2.3967 12.1184 1.64232C10.8963 0.887939 9.49317 0.477751 8.05716 0.455078C5.92028 0.455078 3.87098 1.30397 2.35997 2.81498C0.848961 4.32599 0 6.37536 0 8.51224C0 17.3837 12.6429 22.1408 15 27.798C17.3571 22.1408 30 17.3837 30 8.51224C30 6.38276 29.1571 4.33987 27.6553 2.83009C26.1536 1.32031 24.1152 0.466405 21.9857 0.455078Z"
                                                fill="white"/>
                                        </svg>
                                        +100
                                    </li>
                                    <li className="one-thousand__maryazhi--item">
                                        <svg width="30" height="31" viewBox="0 0 30 31" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M15 30.127C11.1406 24.1034 6.0235 18.9864 0 15.127C6.0235 11.2675 11.1406 6.15046 15 0.126953C18.871 6.14115 23.9858 11.256 30 15.127C23.9858 18.9979 18.871 24.1128 15 30.127Z"
                                                fill="white"/>
                                        </svg>
                                        +80
                                    </li>
                                    <li className="one-thousand__maryazhi--item">
                                        <svg width="30" height="32" viewBox="0 0 30 32" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M28.1431 14.0884C26.9303 12.893 25.2958 12.2229 23.5929 12.2229C21.89 12.2229 20.2556 12.893 19.0428 14.0884L16.2957 16.8785C16.8838 14.9526 18.0169 13.2382 19.558 11.9421C20.4549 11.0442 21.0663 9.90138 21.3156 8.65709C21.565 7.41281 21.4412 6.12257 20.9596 4.94847C20.478 3.77436 19.6602 2.76873 18.609 2.05791C17.5577 1.34709 16.3198 0.962775 15.0508 0.953233C13.7745 0.945826 12.5248 1.3179 11.4604 2.02221C10.396 2.72651 9.56495 3.73126 9.07275 4.90886C8.58055 6.08647 8.44938 7.38378 8.696 8.63605C8.94262 9.88833 9.55583 11.0391 10.4578 11.9421C12.0261 13.2221 13.177 14.9408 13.7631 16.8785L10.973 14.0884C10.0704 13.1932 8.92295 12.5852 7.6754 12.341C6.42785 12.0968 5.136 12.2274 3.96254 12.7163C2.78908 13.2052 1.78655 14.0305 1.08138 15.0882C0.376214 16.1459 0 17.3887 0 18.6599C0 19.9311 0.376214 21.1739 1.08138 22.2316C1.78655 23.2893 2.78908 24.1146 3.96254 24.6035C5.136 25.0924 6.42785 25.223 7.6754 24.9788C8.92295 24.7346 10.0704 24.1266 10.973 23.2314L14.1494 20.012C14.2759 21.8669 14.0338 23.7285 13.4371 25.4894C12.8403 27.2502 11.9007 28.8754 10.6725 30.2712V31.3014H19.2575V30.2712C18.0423 28.8773 17.1135 27.2576 16.5243 25.5047C15.9351 23.7517 15.6969 21.8999 15.8234 20.055V19.7974L19 23.0168C19.6003 23.6143 20.3125 24.0878 21.0958 24.4101C21.8791 24.7324 22.7182 24.8972 23.5653 24.8952C24.4123 24.8932 25.2505 24.7244 26.0323 24.3984C26.8141 24.0725 27.5241 23.5957 28.1216 22.9953C28.7191 22.395 29.1925 21.6828 29.5148 20.8995C29.8371 20.1162 30.002 19.2771 30 18.4301C29.998 17.5831 29.8292 16.7447 29.5032 15.963C29.1773 15.1812 28.7005 14.4713 28.1001 13.8737L28.1431 14.0884Z"
                                                fill="white"/>
                                        </svg>
                                        +60
                                    </li>
                                    <li className="one-thousand__maryazhi--item">
                                        <svg width="30" height="34" viewBox="0 0 30 34" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M15.069 0.342773C12.5652 6.69493 0 9.0596 0 18.8892C0.0122513 21.0331 0.872658 23.0851 2.39301 24.5968C3.91337 26.1085 5.97009 26.9569 8.11406 26.9569C9.23554 26.9557 10.3449 26.7247 11.3736 26.2781C12.4023 25.8315 13.3287 25.1789 14.0953 24.3604C13.8668 27.5073 12.5751 30.483 10.4324 32.799V33.9118H19.7056V32.799C17.5798 30.4765 16.3048 27.5015 16.089 24.3604C17.2046 25.5 18.6313 26.2856 20.1908 26.6191C21.7503 26.9526 23.3735 26.8191 24.8575 26.2354C26.3416 25.6516 27.6206 24.6434 28.5351 23.3369C29.4495 22.0304 29.9586 20.4834 29.9989 18.8892C30.138 9.0596 17.5727 6.69493 15.069 0.342773Z"
                                                fill="white"/>
                                        </svg>
                                        +40
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="game__main--user-menu game__user-menu">
                            <div className="game__user-menu--col">
                                <div className="game__user-menu--communication game__communication">
                                    <button className="game__communication--btn micro-btn game-btn" type="button"
                                            title="Выключить микрофон" data-title-off="Выключить микрофон"
                                            data-title-on="Включить микрофон">
                                        <svg width="30" height="24" viewBox="0 0 30 24" fill="none"
                                             xmlns="http://www.w3.org/2000/svg" className="status-off">
                                            <path
                                                d="M17.958 21.75L16.1252 21.75V20.167C17.0908 20.0347 17.9997 19.7263 18.8294 19.2895L16.8016 17.7C16.1144 17.918 15.3822 18.0365 14.6134 17.988C11.5173 17.7937 8.95797 14.8641 8.95797 11.7609V11.5839L6.70797 9.82031L6.70798 11.6302C6.70798 15.8325 9.70657 19.5802 13.7908 20.1473V21.7481L11.9158 21.7481C11.0875 21.7481 10.458 22.4198 10.458 23.2059C10.458 23.6625 10.8377 24 11.208 24H18.6658C19.0801 24 19.3736 23.6642 19.3736 23.2922C19.458 22.4203 18.8298 21.75 17.958 21.75ZM29.5689 21.9891L22.1017 16.1344C22.8222 14.9184 23.2516 13.5136 23.2516 11.9995V10.125C23.2516 9.50391 22.7477 9 22.1688 9C21.5477 9 21.0438 9.50391 21.0438 10.125L21.0438 11.9578C21.0438 12.9478 20.7833 13.8689 20.3514 14.6878L19.1453 13.7428C19.3907 13.1953 19.5434 12.5981 19.5434 11.9578L16.8683 11.9578L15.2534 10.6922C15.39 10.549 15.5801 10.4579 15.7934 10.4579H19.5012V9H15.708C15.2938 9 15.0002 8.66419 15.0002 8.29219C15.0002 7.92019 15.336 7.54219 15.708 7.54219L19.4158 7.54225V6L15.708 5.99993C15.2938 5.99993 15.0002 5.66412 15.0002 5.29212C15.0002 4.92012 15.336 4.5843 15.708 4.5843L19.458 4.58429C19.458 2.05304 17.3692 0.0106969 14.8206 0.0866344C12.3986 0.0756562 10.458 2.22422 10.458 4.6875L10.458 7.04203L1.81938 0.239578C1.61313 0.0784219 1.36844 0 1.12657 0C0.792818 0 0.461412 0.148031 0.240209 0.430734C-0.143604 0.920156 -0.0583851 1.6275 0.430896 2.01047L28.1387 23.7183C28.6309 24.1028 29.3373 24.0149 29.7179 23.5271C30.1455 23.0812 30.0564 22.3734 29.5689 21.9891Z"
                                                fill="#54534F"/>
                                        </svg>
                                        <svg width="18" height="24" viewBox="0 0 18 24" fill="none"
                                             xmlns="http://www.w3.org/2000/svg" className="status-on">
                                            <path
                                                d="M9 16.5C11.4858 16.5 13.5 14.4858 13.5 12H9.75C9.3375 12 9 11.6625 9 11.25C9 10.8375 9.3375 10.5 9.75 10.5H13.5V9H9.75C9.3375 9 9 8.6625 9 8.25C9 7.8375 9.3375 7.5 9.75 7.5H13.5V5.95781H9.75C9.33581 5.95781 9 5.622 9 5.20781C9 4.79362 9.33581 4.45781 9.75 4.45781L13.5 4.5C13.5 2.01422 11.4858 0 9 0C6.51422 0 4.5 2.01422 4.5 4.5V12C4.5 14.4844 6.47344 16.5 9 16.5ZM16.125 9C15.5016 9 15 9.50156 15 10.0828V12C15 15.4373 12.0952 18.2063 8.61094 17.9859C5.51344 17.7905 3 14.8645 3 11.7609V10.0828C3 9.50156 2.49609 9 1.875 9C1.25391 9 0.75 9.50156 0.75 10.0828V11.5898C0.75 15.7927 3.74859 19.5398 7.875 20.107V21.75H6C5.14734 21.75 4.46062 22.4616 4.50187 23.3236C4.52016 23.7094 4.86562 24 5.25 24H12.75C13.1354 24 13.4798 23.7086 13.4981 23.3236C13.5375 22.4625 12.8531 21.75 12 21.75H10.125V20.167C14.1422 19.6172 17.25 16.1672 17.25 12V10.0828C17.25 9.50156 16.7484 9 16.125 9Z"
                                                fill="#88F6DC"/>
                                        </svg>
                                    </button>
                                    <button className="game__communication--btn chat-btn game-btn" title="Чат игры"
                                            type="button">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M16.4704 14.83L16.8604 17.99C16.9604 18.82 16.0704 19.4 15.3604 18.97L11.9004 16.91C11.6604 16.77 11.6004 16.47 11.7304 16.23C12.2304 15.31 12.5004 14.27 12.5004 13.23C12.5004 9.57 9.36038 6.59 5.50038 6.59C4.71038 6.59 3.94038 6.71 3.22038 6.95C2.85038 7.07 2.49038 6.73 2.58038 6.35C3.49038 2.71 6.99038 0 11.1704 0C16.0504 0 20.0004 3.69 20.0004 8.24C20.0004 10.94 18.6104 13.33 16.4704 14.83Z"
                                                fill="#88F7DC"/>
                                            <path
                                                d="M11 13.2301C11 14.4201 10.56 15.5201 9.82 16.3901C8.83 17.5901 7.26 18.3601 5.5 18.3601L2.89 19.9101C2.45 20.1801 1.89 19.8101 1.95 19.3001L2.2 17.3301C0.86 16.4001 0 14.9101 0 13.2301C0 11.4701 0.94 9.92009 2.38 9.00009C3.27 8.42009 4.34 8.09009 5.5 8.09009C8.54 8.09009 11 10.3901 11 13.2301Z"
                                                fill="#88F7DC"/>
                                        </svg>
                                        Чат
                                    </button>
                                    <div className="game__communication--chat game__chat" style={{display: "none"}}>
                                        <div className="game__chat--body">
                                            <div className="game__chat--header">
                                                <button className="game__chat--close-btn" type="button"
                                                        title="Закрыть чат">
                                                    <svg width="11" height="10" viewBox="0 0 11 10" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M9.78906 1L1.0019 9.47" stroke="#6A6A6A"/>
                                                        <path d="M1 1L9.78716 9.47" stroke="#6A6A6A"/>
                                                    </svg>
                                                </button>
                                            </div>
                                            <ul className="game__chat--list">
                                                <li className="game__chat--item">
                                                    <div className="game__chat--avatar">
                                                        <img src="images/account/avatar.png" width="24" height="24"
                                                             alt=""/>
                                                    </div>
                                                    <div className="game__chat--info">
                                                        <h3 className="game__chat--name">
                                                            Jane456
                                                        </h3>
                                                        <div className="game__chat--text">
                                                            Aliqua id fugiat nostrud irure ex duisAliqua id fugiat
                                                            nostrud irure ex
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="game__chat--item">
                                                    <div className="game__chat--avatar">
                                                        <img src="images/account/avatar.png" width="24" height="24"
                                                             alt=""/>
                                                    </div>
                                                    <div className="game__chat--info">
                                                        <h3 className="game__chat--name">
                                                            Jane456
                                                        </h3>
                                                        <div className="game__chat--text">
                                                            Aliqua id fugiat nostrud irure ex duisAliqua id fugiat
                                                            nostrud irure ex
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="game__chat--item">
                                                    <div className="game__chat--avatar">
                                                        <img src="images/account/avatar.png" width="24" height="24"
                                                             alt=""/>
                                                    </div>
                                                    <div className="game__chat--info">
                                                        <h3 className="game__chat--name">
                                                            Jane456
                                                        </h3>
                                                        <div className="game__chat--text">
                                                            Aliqua id fugiat nostrud irure ex duisAliqua id fugiat
                                                            nostrud irure ex
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="game__chat--item">
                                                    <div className="game__chat--avatar">
                                                        <img src="images/account/avatar.png" width="24" height="24"
                                                             alt=""/>
                                                    </div>
                                                    <div className="game__chat--info">
                                                        <h3 className="game__chat--name">
                                                            Jane456
                                                        </h3>
                                                        <div className="game__chat--text">
                                                            Aliqua id fugiat nostrud irure ex duisAliqua id fugiat
                                                            nostrud irure ex
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="game__chat--item">
                                                    <div className="game__chat--avatar">
                                                        <img src="images/account/avatar.png" width="24" height="24"
                                                             alt=""/>
                                                    </div>
                                                    <div className="game__chat--info">
                                                        <h3 className="game__chat--name">
                                                            Jane456
                                                        </h3>
                                                        <div className="game__chat--text">
                                                            Aliqua id fugiat nostrud irure ex duisAliqua id fugiat
                                                            nostrud irure ex
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="game__chat--item">
                                                    <div className="game__chat--avatar">
                                                        <img src="images/account/avatar.png" width="24" height="24"
                                                             alt=""/>
                                                    </div>
                                                    <div className="game__chat--info">
                                                        <h3 className="game__chat--name">
                                                            Jane456
                                                        </h3>
                                                        <div className="game__chat--text">
                                                            Aliqua id fugiat nostrud irure ex duisAliqua id fugiat
                                                            nostrud irure ex
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="game__chat--item">
                                                    <div className="game__chat--avatar">
                                                        <img src="images/account/avatar.png" width="24" height="24"
                                                             alt=""/>
                                                    </div>
                                                    <div className="game__chat--info">
                                                        <h3 className="game__chat--name">
                                                            Jane456
                                                        </h3>
                                                        <div className="game__chat--text">
                                                            Aliqua id fugiat nostrud irure ex duisAliqua id fugiat
                                                            nostrud irure ex
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="game__chat--item">
                                                    <div className="game__chat--avatar">
                                                        <img src="images/account/avatar.png" width="24" height="24"
                                                             alt=""/>
                                                    </div>
                                                    <div className="game__chat--info">
                                                        <h3 className="game__chat--name">
                                                            Jane456
                                                        </h3>
                                                        <div className="game__chat--text">
                                                            Aliqua id fugiat nostrud irure ex duisAliqua id fugiat
                                                            nostrud irure ex
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="game__chat--item">
                                                    <div className="game__chat--avatar">
                                                        <img src="images/account/avatar.png" width="24" height="24"
                                                             alt=""/>
                                                    </div>
                                                    <div className="game__chat--info">
                                                        <h3 className="game__chat--name">
                                                            Jane456
                                                        </h3>
                                                        <div className="game__chat--text">
                                                            Aliqua id fugiat nostrud irure ex duisAliqua id fugiat
                                                            nostrud irure ex
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="game__chat--item">
                                                    <div className="game__chat--avatar">
                                                        <img src="images/account/avatar.png" width="24" height="24"
                                                             alt=""/>
                                                    </div>
                                                    <div className="game__chat--info">
                                                        <h3 className="game__chat--name">
                                                            Jane456
                                                        </h3>
                                                        <div className="game__chat--text">
                                                            Aliqua id fugiat nostrud irure ex duisAliqua id fugiat
                                                            nostrud irure ex
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                            <form action="#" className="game__chat--message">
                                                <label className="game__chat--message-label">
                                                    <input type="text" name="chat-message" required
                                                           placeholder="Введите сообщение..."
                                                           className="game__chat--message-input"/>
                                                </label>
                                                <button className="game__chat--message-submit" type="submit"
                                                        title="Отправить сообщение в чат">
                                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M13.71 6.54567L0.710318 0.545813C0.503323 0.451815 0.256329 0.507814 0.112332 0.685809C-0.0326641 0.863805 -0.037664 1.1168 0.100333 1.29979L4.37523 6.99965L0.100333 12.6995C-0.037664 12.8825 -0.0326641 13.1365 0.111332 13.3135C0.20833 13.4345 0.353326 13.4995 0.500323 13.4995C0.571321 13.4995 0.642319 13.4845 0.709318 13.4535L13.709 7.45364C13.887 7.37165 14 7.19465 14 6.99965C14 6.80466 13.887 6.62766 13.71 6.54567Z"
                                                            fill="#61C8AF"/>
                                                    </svg>
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="game__user-menu--col">
                                <h3 className="game__user-menu--title section-title _decor-none">
                                    Вы готовы?
                                </h3>
                                <div className="game__user-menu--timer">
                                    Осталось:
                                    <b>{time} сек</b>
                                </div>
                                <button onClick={e => setIsMeStart(prev => !prev)}
                                        className="game__user-menu--main-btn btn _large _shadow" type="button">
                                    {isMeStart ? "Я не готов" : "Я готов"}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default StartGame;