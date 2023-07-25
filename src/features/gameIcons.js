import cards from './../assets/img/icons/cards.svg';
import chess from './../assets/img/icons/chess.svg';
import hot from './../assets/img/icons/hot.svg';
import dominoes from './../assets/img/icons/domino.svg';

export default function GameIcons(type) {

    const iconType = {
        cards,
        chess,
        hot,
        dominoes,
    }

    return iconType[type];
}