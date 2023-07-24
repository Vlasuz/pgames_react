import cards from './../assets/img/icons/cards.svg';
import chess from './../assets/img/icons/chess.svg';
import hot from './../assets/img/icons/hot.svg';
import domino from './../assets/img/icons/domino.svg';

export default function GameIcons(type) {

    const iconType = {
        cards,
        chess,
        hot,
        domino,
    }

    return iconType[type];
}