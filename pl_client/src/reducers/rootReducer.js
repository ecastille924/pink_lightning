import { combineReducers } from "redux"
import { showsReducer } from "./showsReducer"
import { superfansReducer } from "./superfansReducer"

export const rootReducer = combineReducers({
    shows: showsReducer,
    superfans: superfansReducer
})