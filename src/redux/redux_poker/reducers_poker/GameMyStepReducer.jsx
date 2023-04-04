import {WHICH_MY_STEP} from "../types_poker";

const initialState = {
    step: 'step'
}

export const myStepReducer = (state = initialState, action) => {

    console.log(action.step)

    switch(action.type) {
        case WHICH_MY_STEP:
            return{
                ...state,
                step: action.step
            }
        default: return state
    }

}
