import {ALL_CARDS, CARDS_PLAYER_1, CARDS_PLAYER_2, CARDS_PLAYER_ME, GAME_POT, WHICH_MY_STEP} from "./types_poker";

export function allCards(cards) {

    return{
        type: ALL_CARDS,
        cards
    }
}
export function cardsPlayer_1(cards) {

    return{
        type: CARDS_PLAYER_1,
        cards
    }
}
export function cardsPlayer_2(cards) {

    return{
        type: CARDS_PLAYER_2,
        cards
    }
}
export function cardsPlayer_me(cards) {

    return{
        type: CARDS_PLAYER_ME,
        cards
    }
}
export function GamePot(pot) {

    return{
        type: GAME_POT,
        pot
    }
}
export function GameMyStep(step) {

    return{
        type: WHICH_MY_STEP,
        step
    }
}