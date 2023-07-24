import {combineReducers, configureStore} from "@reduxjs/toolkit";
import popupReducer from "./reducers/popupReducer";
import userDataReducer from "./reducers/userDataReducer";

const rootReducer = combineReducers({
    popupReducer,
    userDataReducer,
})

export const store = configureStore({
    reducer: rootReducer
})
