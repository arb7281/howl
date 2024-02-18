import { combineReducers } from "@reduxjs/toolkit";

import sectionReducer from "../slices/sectionSlice";

const rootReducer = combineReducers({
    section2: sectionReducer
})


export default rootReducer