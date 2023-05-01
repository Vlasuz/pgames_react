import {SET_POPUP_TITLE} from "../types";

const initialState = {
    popup: ''
}

export const popupReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_POPUP_TITLE:
            return {
                ...state,
                popup: action.popup
            }
        default:
            return state
    }

}