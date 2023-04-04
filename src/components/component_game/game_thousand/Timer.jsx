import React, {useEffect, useState} from 'react';

const Timer = () => {
    const [time, setTime] = useState(10)
    useEffect(() => {

        let timer = setInterval(() => {
            setTime(prev => prev > 0 ? prev - 1 : prev)
        }, 1000)

        return () => clearInterval(timer)

    }, [time])

    return time;
};

export default Timer;