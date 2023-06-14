import {REMOVE_NOTICE, SET_ALL_NOTICES, SET_TIMEOUT_NOTICE} from "../types";

const initialState = {
    notices: [],
    noticesTimeout: ''
}

export const NotificationReducer = (state = initialState, action) => {

    switch(action.type) {
        case SET_ALL_NOTICES:
            return {
                ...state,
                notices: [...state.notices, action.notice]
            }
        case SET_TIMEOUT_NOTICE:
            return {
                ...state,
                notices: state.notices,
                noticesTimeout: {id: action.id, notice: action.notice}
            }
        case REMOVE_NOTICE:

            const newArray = state.notices.filter(notice => notice.id !== action.id)

            return {
                ...state,
                notices: newArray,
            }
        default: return state
    }

}

export function setNotice(notice) {
    return{
        type: SET_ALL_NOTICES,
        notice
    }
}
export function setTimeoutNotice(notice) {

    const id = new Date().getTime();

    return{
        type: SET_TIMEOUT_NOTICE,
        notice,
        id
    }
}
export function removeNotice(id, notice) {
    return{
        type: REMOVE_NOTICE,
        id,
        notice
    }
}
