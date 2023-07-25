import React from 'react';
import Room from "../../../components/Room";

const FindRooms = () => {
    return (
        <div className="online-games__rooms">
            <div className="online-games__rooms--container container hide-blocks-wrapper">
                <div className="online-games__rooms--header">
                    <h3 className="online-games__rooms--title section-title _decor-none">
                        Команты
                    </h3>
                    <span className="online-games__rooms--value">
                                15 комнат
                            </span>
                </div>
                <ul className="online-games__rooms--list hide-blocks-list">
                    <Room
                        title={'Какая то игра'}
                        icon={'cards'}
                        date={'25.04.2023'}
                        currency={'money'}
                        nowPlaying={'1'}
                        maxLength={'4'}
                        access={false}
                    />
                </ul>
                <div className="online-games__footer" data-aos="fade-in">
                    <button
                        className="online-games__rooms--more-btn alt-btn _transparent hide-blocks-btn visible-on-table"
                        type="button">
                        Показать ещё
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FindRooms;