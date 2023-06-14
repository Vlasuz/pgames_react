import React from 'react';

const FIGURE_N = (e, figureIndex, playerColor) => {
    const color = ['white', 'black']
    let positionToMove = [15, 6, 17, 10, -10, -17, -6, -15];
    const posItem = e.target.closest('.chess__grid--cell').getAttribute('data-array')[2]

    if (+posItem === 1) {
        positionToMove = [15, 6, -10, -17, 17, -15]
    } else if (+posItem === 6) {
        positionToMove = [-15, -6, 10, 17, -17, 15]
    } else if (+posItem === 0) {
        positionToMove = [15, 6, -10, -17]
    } else if (+posItem === 7) {
        positionToMove = [-15, -6, 10, 17]
    }

    positionToMove.map(item => {
        if(document.querySelector(`.chess__grid--cell:nth-child(${figureIndex - item})`)?.getAttribute('data-color') !== color[playerColor-1]){
            document.querySelector(`.chess__grid--cell:nth-child(${figureIndex - item})`)?.classList.add('_accent')
        }
    })
};

export default FIGURE_N;