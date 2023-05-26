import {SET_CARDS_COUNT} from "../types";

const initialState = {
    users: []
}

export const reducerFoolUsersCards = (state = initialState, action) => {
    switch(action.type) {
        case SET_CARDS_COUNT:
            return {
                ...state,
                users: action.users
            }
        default: return state
    }
}

export function setUsersCards(users) {
    return{
        type: SET_CARDS_COUNT,
        users
    }
}