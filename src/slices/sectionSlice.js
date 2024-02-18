import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentId : 1,
}

const sectionSlice = createSlice({
    name:"section2",
    initialState:initialState,
    reducers: {
        setCurrentId(state, value){
            state.currentId = value.payload
        }
    }
})

export const {setCurrentId} = sectionSlice.actions

export default sectionSlice.reducer