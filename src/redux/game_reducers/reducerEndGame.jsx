import {SET_END_GAME} from "../types";

const initialState = {
    endGame: false
}

export const reducerEndGame = (state = initialState, action) => {
    switch(action.type) {
        case SET_END_GAME:
            return {
                ...state,
                endGame: action.endGame
            }
        default: return state
    }
}

export function setEndGame(endGame) {
    return{
        type: SET_END_GAME,
        endGame
    }
}