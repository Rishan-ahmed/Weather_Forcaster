import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { forcastData } from "./state/ForcastState/Reducer";
import {thunk}  from "redux-thunk";
import { currentData } from "./state/Reducer";
import { DayforcastData } from "./state/DayForcast/Reducer";


const rootReducer = combineReducers({
    current: currentData,
    forcast: forcastData,
    dayforcast: DayforcastData
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))