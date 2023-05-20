import {SET_USER_READY_STATE} from "../types";

const initialState = {
    usersReadyState: []
}

export const reducerUserReadyState = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER_READY_STATE:
            return {
                ...state,
                usersReadyState: [...state.usersReadyState, action.usersReadyState]
            }
        default: return state
    }
}

export function setUserReadyState(usersReadyState) {
    return{
        type: SET_USER_READY_STATE,
        usersReadyState
    }
}