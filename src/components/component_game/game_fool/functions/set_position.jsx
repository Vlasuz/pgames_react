import React from 'react';

const setPosition = (num, players, user, maxPlayers) => {
    const yourPosition = players.filter(item => item.user?.id ? item.user?.id === user.id : item.id === user.id)[0]?.position
    if (yourPosition !== 1 && yourPosition !== undefined) {
        return yourPosition - 1 + num > maxPlayers ? (yourPosition - 1 + num) - maxPlayers : yourPosition - 1 + num
    } else {
        return num;
    }
}

export default setPosition;