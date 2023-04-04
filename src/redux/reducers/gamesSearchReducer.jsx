import { INPUT_SEARCH_GAMES } from "../types";

const initialState = {
    text: ''
}

export const GamesSearchReducer = (state = initialState, action) => {

    switch(action.type) {
        case INPUT_SEARCH_GAMES:
            return {
                ...state,
                text: action.text
            }
        default: return state
    }

}