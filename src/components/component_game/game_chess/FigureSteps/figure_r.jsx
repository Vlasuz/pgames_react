import React from 'react';

const FIGURE_R = (e, figureIndex, playerColor) => {
    const color = ['white', 'black']
    let positionToMove = [];
    const posItem = e.target.closest('.chess__grid--cell').getAttribute('data-array')

    for(let a = 8; a <= posItem[0] * 8; a+=8) {
        const thisColor = document.querySelector(`.chess__grid--cell:nth-child(${figureIndex - a})`)?.getAttribute('data-color')
        if (thisColor === '') {
            positionToMove.push(a)
        } else if(thisColor !== color[playerColor-1]) {
            positionToMove.push(a)
            break;
        } else if(thisColor === color[playerColor-1]) {
            break;
        }
    }
    for(let a = -8; a >= -((7 - posItem[0]) * 8); a-=8) {
        const thisColor = document.querySelector(`.chess__grid--cell:nth-child(${figureIndex - a})`)?.getAttribute('data-color')
        if (thisColor === '') {
            positionToMove.push(a)
        } else if(thisColor !== color[playerColor-1]) {
            positionToMove.push(a)
            break;
        } else if(thisColor === color[playerColor-1]) {
            break;
        }
    }
    for(let a = 1; a <= posItem[2]; a++) {
        const thisColor = document.querySelector(`.chess__grid--cell:nth-child(${figureIndex - a})`)?.getAttribute('data-color')
        if (thisColor === '') {
            positionToMove.push(a)
        } else if(thisColor !== color[playerColor-1]) {
            positionToMove.push(a)
            break;
        } else if(thisColor === color[playerColor-1]) {
            break;
        }
    }
    for(let a = -1; a >= -(7 - posItem[2]); a--) {
        const thisColor = document.querySelector(`.chess__grid--cell:nth-child(${figureIndex - a})`)?.getAttribute('data-color')
        if (thisColor === '') {
            positionToMove.push(a)
        } else if(thisColor !== color[playerColor-1]) {
            positionToMove.push(a)
            break;
        } else if(thisColor === color[playerColor-1]) {
            break;
        }
    }

    positionToMove.map(item => {
        document.querySelector(`.chess__grid--cell:nth-child(${figureIndex - item})`)?.classList.add('_accent')
    })
};

export default FIGURE_R;