import {SET_WEBSOCKET} from "../types";

const initialState = {
    gameWebsocket: {}
}

export const reducerWebsocket = (state = initialState, action) => {
    switch(action.type) {
        case SET_WEBSOCKET:
            return {
                ...state,
                gameWebsocket: action.gameWebsocket
            }
        default: return state
    }
}

export function setWebsocket(gameWebsocket) {
    return{
        type: SET_WEBSOCKET,
        gameWebsocket
    }
}