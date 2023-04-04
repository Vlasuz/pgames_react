import {
    LOGOUT,
    ACCOUNT_SETTINGS_DATA,
    ACCOUNT_SETTINGS_PHOTO,
    ADD_ROOM_FOR_GAME,
    INPUT_SEARCH_GAMES,
    BALANCE_VALUE,
    CARDS_VALUE,
    THREE_CARDS_DEALING,
    CARDS_DELETE_VALUE, RESULT_OF_GAME, CARDS_VALUE_LFT, CARDS_VALUE_RHT
} from "./types";

export function actionLogout() {
    return{
        type: LOGOUT
    }
}
export function accountInformation(info) {
    return{
        type: ACCOUNT_SETTINGS_DATA,
        info
    }
}
export function accountPhoto(photo) {
    return{
        type: ACCOUNT_SETTINGS_PHOTO,
        photo
    }
}
export function addRoomAction(data) {
    return{
        type: ADD_ROOM_FOR_GAME,
        data
    }
}
export function searchGames(text) {
    return{
        type: INPUT_SEARCH_GAMES,
        text
    }
}
export function addBalance(balance) {

    return{
        type: BALANCE_VALUE,
        balance
    }
}
export function gameCards(cards) {

    return{
        type: CARDS_VALUE,
        cards
    }
}
export function gameCardsLft(cards) {

    return{
        type: CARDS_VALUE_LFT,
        cards
    }
}
export function gameCardsRht(cards) {

    return{
        type: CARDS_VALUE_RHT,
        cards
    }
}
export function gameCardsDelete(id) {

    return{
        type: CARDS_DELETE_VALUE,
        id
    }
}
export function gameCardsDealing(cards) {

    return{
        type: THREE_CARDS_DEALING,
        cards
    }
}


export function resultOfGame(num) {

    return{
        type: RESULT_OF_GAME,
        num
    }
}