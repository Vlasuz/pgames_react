import React from 'react';

const FIGURE_K = (e, figureIndex, playerColor, tableFen) => {
    const color = ['white', 'black']
    let positionToMove = [1, -1, 2, -2, 8, -8, 9, -9, 7, -7];

    if(playerColor === 1 && !tableFen.includes('KQ')) {
        positionToMove = [1, -1, 8, -8, 9, -9, 7, -7]
    } else if(playerColor === 2 && !tableFen.includes('kq')) {
        positionToMove = [1, -1, 8, -8, 9, -9, 7, -7]
    }

    positionToMove.map(item => {
        if(document.querySelector(`.chess__grid--cell:nth-child(${figureIndex - item})`)?.getAttribute('data-color') !== color[playerColor-1]){
            document.querySelector(`.chess__grid--cell:nth-child(${figureIndex - item})`)?.classList.add('_accent')
        }
    })
};

export default FIGURE_K;