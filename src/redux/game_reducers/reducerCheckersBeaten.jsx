import {SET_BEATEN} from "../types";

const initialState = {
    your: [],
    opponent: [],
}

export const reducerCheckersBeaten = (state = initialState, action) => {
    switch(action.type) {
        case SET_BEATEN:
            return {
                ...state,
                your: action.your !== null ? [...state.your, action.your] : state.your,
                opponent: action.opponent !== null ? [...state.opponent, action.opponent] : state.opponent,
            }
        default: return state
    }
}

export function setBeaten(your, opponent) {
    return{
        type: SET_BEATEN,
        your,
        opponent
    }
}