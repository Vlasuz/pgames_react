import {ACCOUNT_SETTINGS_PHOTO, SET_USER_INFORMATION} from "../types";

const initialState = {
    data: {},
}

export const userInfoReducer = (state = initialState, action) => {

    switch(action.type) {
        case SET_USER_INFORMATION:
            return{
                ...state,
                data: action.data
            }
        default: return state
    }

}

export function setUserInfo(data) {
    return{
        type: SET_USER_INFORMATION,
        data
    }
}