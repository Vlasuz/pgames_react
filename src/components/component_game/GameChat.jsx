import React from 'react';

const GameChat = () => {
    return (
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
                            <img src="../images/account/avatar.png" width="24"
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
                            <img src="../images/account/avatar.png" width="24"
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
                            <img src="../images/account/avatar.png" width="24"
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
                            <img src="../images/account/avatar.png" width="24"
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
                            <img src="../images/account/avatar.png" width="24"
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
                            <img src="../images/account/avatar.png" width="24"
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
                            <img src="../images/account/avatar.png" width="24"
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
                            <img src="../images/account/avatar.png" width="24"
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
                            <img src="../images/account/avatar.png" width="24"
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
                            <img src="../images/account/avatar.png" width="24"
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
    );
};

export default GameChat;