import {SET_SOCKET_RESPONSE} from "../types";

const initialState = {
    socketResponse: {}
}

export const reducerSocketResponse = (state = initialState, action) => {
    switch(action.type) {
        case SET_SOCKET_RESPONSE:
            return {
                ...state,
                socketResponse: action.socketResponse
            }
        default: return state
    }
}

export function setSocketResponse(socketResponse) {
    return{
        type: SET_SOCKET_RESPONSE,
        socketResponse
    }
}