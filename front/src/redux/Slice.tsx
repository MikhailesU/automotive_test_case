import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from "./redux";

interface state {
  windowSize: {
        width: number
        height: number
    }
}


const initialState: state = {
    windowSize:{
        width: window.innerWidth,
        height: window.innerHeight
    }
}

const slice = createSlice({
    name: 'slice',
    initialState,
    reducers: {
      setWindowSize(state, action:PayloadAction<{
            width: number
            height: number
        }>){
            state.windowSize=action.payload
        }
    },
    extraReducers: (builder) => {

    }

})
export const redusers = slice.reducer
export const {
  setWindowSize
} = slice.actions

