import { RESULT_OF_GAME } from "../types";

const initialState = {
    result: {
        lft: 0,
        rht: 0,
        me: 0,
    }
}

export const gameResultReducer = (state = initialState, action) => {

    switch(action.type) {
        case RESULT_OF_GAME:
            return{
                ...state,
                result: {
                    lft: state.result.lft + action.num[0],
                    rht: state.result.rht + action.num[1],
                    me: state.result.me + action.num[2],
                }
            }
        default: return state
    }

}