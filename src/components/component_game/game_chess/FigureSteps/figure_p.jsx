import React from 'react';

const FIGURE_P = (e, figureIndex, playerColor) => {
    const color = ['white', 'black']
    let positionToMove = [8, 16];
    const posItem = e.target.closest('.chess__grid--cell').getAttribute('data-array')[0]

    if(+posItem !== 6) {
        positionToMove = [8]
    }

    if(document.querySelector(`.chess__grid--cell:nth-child(${figureIndex - 8})`).querySelector('img')) {
        positionToMove = [];
    }
    if(document.querySelector(`.chess__grid--cell:nth-child(${figureIndex - 16})`).querySelector('img')) {
        positionToMove = [8];
    }
    if(document.querySelector(`.chess__grid--cell:nth-child(${figureIndex - 7})`).querySelector('img')) {
        positionToMove.push(7)
    }
    if(document.querySelector(`.chess__grid--cell:nth-child(${figureIndex - 9})`).querySelector('img')) {
        positionToMove.push(9)
    }

    positionToMove.map(item => {
        if(document.querySelector(`.chess__grid--cell:nth-child(${figureIndex - item})`)?.getAttribute('data-color') !== color[playerColor-1]){
            document.querySelector(`.chess__grid--cell:nth-child(${figureIndex - item})`)?.classList.add('_accent')
        }
    })
};

export default FIGURE_P;