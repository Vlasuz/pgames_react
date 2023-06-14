import React from 'react';

const FIGURE_B = (e, figureIndex, playerColor) => {
    const color = ['white', 'black']

    let positionToMove = [];
    const posItem = e.target.closest('.chess__grid--cell').getAttribute('data-array')

    for(let a = 7; a <= (7 - +posItem[2]) * 7; a += 7) {
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
    for(let a = -7; a >= -(+posItem[2] * 7); a -= 7) {
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
    for(let a = 9; a <= +posItem[2] * 9; a += 9) {
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
    for(let a = -9; a >= -((8 - (+posItem[2] > +posItem[0] ? +posItem[2] : +posItem[0])) * 9); a -= 9) {
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
}

export default FIGURE_B;