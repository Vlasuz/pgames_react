import React from 'react';

const setPosition = (num, players, user) => {
    const yourPosition = players.filter(item => item.user?.id ? item.user?.id === user.id : item.id === user.id)[0]?.position

    if (yourPosition !== 1 && yourPosition !== undefined) {

        let newPosition = yourPosition - 1 + num;
        return newPosition > 6 ? 7 - num : newPosition;

    } else {
        return num;
    }
}

export default setPosition;