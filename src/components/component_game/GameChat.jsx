import React from 'react';
import ActiveNotification from "../../hooks/ActiveNotification";

const GameChat = () => {

    const openChat = () => {
        ActiveNotification('#notification_is-develop')
    }

    return (
        <>
            <button className="game__communication--btn chat-btn game-btn" title="Чат игры"
                    type="button" onClick={openChat}>
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
                                <img src="images/account/avatar.png" width="24"
                                     height="24"
                                     alt=""/>
                            </div>
                            <div className="game__chat--info">
                                <h3 className="game__chat--name">
                                    Jane456
                                </h3>
                                <div className="game__chat--text">
                                    Aliqua id fugiat nostrud irure ex duisAliqua id fugiat
                                    nostrud
                                    irure ex
                                </div>
                            </div>
                        </li>
                        <li className="game__chat--item">
                            <div className="game__chat--avatar">
                                <img src="images/account/avatar.png" width="24"
                                     height="24"
                                     alt=""/>
                            </div>
                            <div className="game__chat--info">
                                <h3 className="game__chat--name">
                                    Jane456
                                </h3>
                                <div className="game__chat--text">
                                    Aliqua id fugiat nostrud irure ex duisAliqua id fugiat
                                    nostrud
                                    irure ex
                                </div>
                            </div>
                        </li>
                        <li className="game__chat--item">
                            <div className="game__chat--avatar">
                                <img src="images/account/avatar.png" width="24"
                                     height="24"
                                     alt=""/>
                            </div>
                            <div className="game__chat--info">
                                <h3 className="game__chat--name">
                                    Jane456
                                </h3>
                                <div className="game__chat--text">
                                    Aliqua id fugiat nostrud irure ex duisAliqua id fugiat
                                    nostrud
                                    irure ex
                                </div>
                            </div>
                        </li>
                        <li className="game__chat--item">
                            <div className="game__chat--avatar">
                                <img src="images/account/avatar.png" width="24"
                                     height="24"
                                     alt=""/>
                            </div>
                            <div className="game__chat--info">
                                <h3 className="game__chat--name">
                                    Jane456
                                </h3>
                                <div className="game__chat--text">
                                    Aliqua id fugiat nostrud irure ex duisAliqua id fugiat
                                    nostrud
                                    irure ex
                                </div>
                            </div>
                        </li>
                        <li className="game__chat--item">
                            <div className="game__chat--avatar">
                                <img src="images/account/avatar.png" width="24"
                                     height="24"
                                     alt=""/>
                            </div>
                            <div className="game__chat--info">
                                <h3 className="game__chat--name">
                                    Jane456
                                </h3>
                                <div className="game__chat--text">
                                    Aliqua id fugiat nostrud irure ex duisAliqua id fugiat
                                    nostrud
                                    irure ex
                                </div>
                            </div>
                        </li>
                        <li className="game__chat--item">
                            <div className="game__chat--avatar">
                                <img src="images/account/avatar.png" width="24"
                                     height="24"
                                     alt=""/>
                            </div>
                            <div className="game__chat--info">
                                <h3 className="game__chat--name">
                                    Jane456
                                </h3>
                                <div className="game__chat--text">
                                    Aliqua id fugiat nostrud irure ex duisAliqua id fugiat
                                    nostrud
                                    irure ex
                                </div>
                            </div>
                        </li>
                        <li className="game__chat--item">
                            <div className="game__chat--avatar">
                                <img src="images/account/avatar.png" width="24"
                                     height="24"
                                     alt=""/>
                            </div>
                            <div className="game__chat--info">
                                <h3 className="game__chat--name">
                                    Jane456
                                </h3>
                                <div className="game__chat--text">
                                    Aliqua id fugiat nostrud irure ex duisAliqua id fugiat
                                    nostrud
                                    irure ex
                                </div>
                            </div>
                        </li>
                        <li className="game__chat--item">
                            <div className="game__chat--avatar">
                                <img src="images/account/avatar.png" width="24"
                                     height="24"
                                     alt=""/>
                            </div>
                            <div className="game__chat--info">
                                <h3 className="game__chat--name">
                                    Jane456
                                </h3>
                                <div className="game__chat--text">
                                    Aliqua id fugiat nostrud irure ex duisAliqua id fugiat
                                    nostrud
                                    irure ex
                                </div>
                            </div>
                        </li>
                        <li className="game__chat--item">
                            <div className="game__chat--avatar">
                                <img src="images/account/avatar.png" width="24"
                                     height="24"
                                     alt=""/>
                            </div>
                            <div className="game__chat--info">
                                <h3 className="game__chat--name">
                                    Jane456
                                </h3>
                                <div className="game__chat--text">
                                    Aliqua id fugiat nostrud irure ex duisAliqua id fugiat
                                    nostrud
                                    irure ex
                                </div>
                            </div>
                        </li>
                        <li className="game__chat--item">
                            <div className="game__chat--avatar">
                                <img src="images/account/avatar.png" width="24"
                                     height="24"
                                     alt=""/>
                            </div>
                            <div className="game__chat--info">
                                <h3 className="game__chat--name">
                                    Jane456
                                </h3>
                                <div className="game__chat--text">
                                    Aliqua id fugiat nostrud irure ex duisAliqua id fugiat
                                    nostrud
                                    irure ex
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
        </>
    );
};

export default GameChat;