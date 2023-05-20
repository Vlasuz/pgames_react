import {SET_IS_READY} from "../types";

const initialState = {
    isReady: false
}

export const reducerIsReady = (state = initialState, action) => {
    switch(action.type) {
        case SET_IS_READY:
            return {
                ...state,
                isReady: action.isReady
            }
        default: return state
    }
}

export function setIsReady(isReady) {
    return{
        type: SET_IS_READY,
        isReady
    }
}