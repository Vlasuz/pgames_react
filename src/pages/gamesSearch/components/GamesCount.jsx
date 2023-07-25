import React from 'react';

const GamesCount = ({ games }) => {

    const gamesLength = games.length
    let returnText = String(gamesLength)

    if(gamesLength % 10 === 1 && gamesLength !== 11) {
        returnText += " игра";
    } else if (gamesLength >= 11 && gamesLength <= 14) {
        returnText += " игр";
    } else if (gamesLength % 10 >= 2 && gamesLength % 10 <= 4) {
        returnText += " игры";
    } else if (gamesLength % 10 >= 5 && gamesLength % 10 <= 20) {
        returnText += " игр";
    } else {
        returnText += " игр";
    }

    return returnText

};

export default GamesCount;