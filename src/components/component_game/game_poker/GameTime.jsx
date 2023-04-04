import React, {useEffect, useState} from 'react';

const GameTime = ({time1}) => {

    const [time, setTime] = useState(10)

    useEffect(() => {

        let timer = setInterval(() => {
            setTime(prev => prev > 0 ? prev - 1 : prev)
        }, 1000)

        return () => clearInterval(timer)

    })

    return time;
};

export default GameTime;