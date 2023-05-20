import {SET_IS_GAME_START} from "../types";

const initialState = {
    isGameStart: false
}

export const reducerIsGameStart = (state = initialState, action) => {
    switch(action.type) {
        case SET_IS_GAME_START:
            return {
                ...state,
                isGameStart: action.isGameStart
            }
        default: return state
    }
}

export function setIsGameStart(isGameStart) {
    return{
        type: SET_IS_GAME_START,
        isGameStart
    }
}