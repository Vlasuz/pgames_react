import {CARDS_PLAYER_2} from "../../types_poker";

const initialState = {
    cards: []
}

export const cardsForPlayer2Reducer = (state = initialState, action) => {

    switch(action.type) {
        case CARDS_PLAYER_2:
            return{
                ...state,
                cards: [...state.cards, action.cards]
            }
        default: return state
    }

}
