import { ACCOUNT_SETTINGS_PHOTO } from "../types";

const initialState = {
    photo: ''
}

export const accountPhotoReducer = (state = initialState, action) => {

    switch(action.type) {
        case ACCOUNT_SETTINGS_PHOTO:
            return{
                ...state,
                photo: action.photo
            }
        default: return state
    }

}