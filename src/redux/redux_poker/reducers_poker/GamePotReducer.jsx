import {GAME_POT} from "../types_poker";

const initialState = {
    pot: 0
}

export const potReducer = (state = initialState, action) => {

    switch(action.type) {
        case GAME_POT:
            return{
                ...state,
                pot: state.pot + action.pot
            }
        default: return state
    }

}
