import { ACCOUNT_SETTINGS_DATA } from "../types";

const initialState = {
    info: {
        name: '',
        email: '',
    },
}

export const accountInformationReducer = (state = initialState, action) => {

    switch(action.type) {
        case ACCOUNT_SETTINGS_DATA:
            return{
                ...state,
                info: {
                    name: action.info.name,
                    email: action.info.email,
                }
            }
        default: return state
    }

}