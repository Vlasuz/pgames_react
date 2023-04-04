import React from 'react';

const GamePlayerWaiting = () => {
    return (
        <div className="game__player-waiting">
            <svg width="10" height="11" viewBox="0 0 10 11" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M5 5.50032C6.57812 5.50032 7.85714 4.26898 7.85714 2.75016C7.85714 1.23134 6.57812 0 5 0C3.42188 0 2.14286 1.23134 2.14286 2.75016C2.14286 4.26898 3.42188 5.50032 5 5.50032ZM6.1317 6.53163H3.8683C1.73237 6.53163 0 8.19892 0 10.2551C0 10.6663 0.346429 11 0.773661 11H9.22679C9.65402 11.0006 10 10.6676 10 10.2551C10 8.19892 8.26786 6.53163 6.1317 6.53163Z"
                    fill="#2D6B67"/>
            </svg>
            Ожидание...
        </div>
    );
};

export default GamePlayerWaiting;