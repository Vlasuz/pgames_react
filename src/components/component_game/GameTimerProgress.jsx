import React, {useEffect, useState} from 'react';

const GameTimerProgress = ({time}) => {

    const [timer, setTimer] = useState(time)

    useEffect(() => {
        let time = setInterval(() => {
            timer > 0 && setTimer(prev => prev - 1)
        }, 1000)

        return () => clearInterval(time)
    }, [timer])

    return (
        <progress className="game__user--progress" max="100" value={timer ? timer * 100 / 1200 : 0}/>
    );
};

export default GameTimerProgress;