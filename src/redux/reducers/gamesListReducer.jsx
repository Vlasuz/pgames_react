import {GAMES_LIST, THREE_CARDS_DEALING} from "../types";

const initialState = {
    list: []
}

export const gamesListReducer = (state = initialState, action) => {
    switch(action.type) {
        case GAMES_LIST:
            return {
                ...state,
                list: action.list
            }
        default: return state
    }
}

export function setGamesList(list) {
    return{
        type: GAMES_LIST,
        list
    }
}