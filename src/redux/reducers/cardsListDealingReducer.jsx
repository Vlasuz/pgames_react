import { THREE_CARDS_DEALING } from "../types";

const initialState = {
    cards: [

    ]
}

export const cardsListDealingReducer = (state = initialState, action) => {

    switch(action.type) {
        case THREE_CARDS_DEALING:
            return{
                ...state,
                cards: []
            }
        default: return state
    }

}