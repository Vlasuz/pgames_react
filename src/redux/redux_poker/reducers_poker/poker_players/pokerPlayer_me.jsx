import {CARDS_PLAYER_1} from "../../types_poker";

const initialState = {
    cards: []
}

export const cardsForPlayerMeReducer = (state = initialState, action) => {

    switch(action.type) {
        case CARDS_PLAYER_1:
            return{
                ...state,
                cards: [...state.cards, action.cards]
            }
        default: return state
    }

}
