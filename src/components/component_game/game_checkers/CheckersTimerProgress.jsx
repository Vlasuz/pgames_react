import React, {useEffect, useState} from 'react';

const CheckersTimerProgress = ({time}) => {

    const [timer, setTimer] = useState(time)

    useEffect(() => {
        let time = setInterval(() => {
            timer > 0 && setTimer(prev => prev - 1)
        }, 1000)

        return () => clearInterval(time)
    }, [timer])

    return (
        <progress className="game__user--progress" max="100" value={timer ? timer * 100 / 60 : 0}/>
    );
};

export default CheckersTimerProgress;