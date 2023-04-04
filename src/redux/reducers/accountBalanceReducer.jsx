import { BALANCE_VALUE } from "../types";

const initialState = {
    balance: {
        money: 0.0,
        chips: 0.0,
    }
}

export const accountBalanceReducer = (state = initialState, action) => {

    switch(action.type) {
        case BALANCE_VALUE:
            return{
                ...state,
                balance: {
                    money: action.balance.money,
                    chips: action.balance.chips,
                }
            }
        default: return state
    }

}