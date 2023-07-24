import {createAction, createReducer} from "@reduxjs/toolkit";

const initialState = {
    popup: "",
    change: ""
}

export const setPopup = createAction('SET_POPUP')
export const changePopup = createAction('CHANGE_POPUP')

export default createReducer(initialState, {
    [setPopup]: (state, action) => {
        state.popup = action.payload
    },
    [changePopup]: (state, action) => {
        state.change = action.payload
    }
})