import {SET_HISTORY_ITEM} from "../types";

const initialState = {
    history: []
}

export const reducerHistory = (state = initialState, action) => {
    switch(action.type) {
        case SET_HISTORY_ITEM:
            return {
                ...state,
                history: [...state.history, action.historyItem].reverse()
            }
        default: return state
    }
}

export function setHistoryItem(historyItem) {
    return{
        type: SET_HISTORY_ITEM,
        historyItem
    }
}