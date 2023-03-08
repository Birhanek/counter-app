import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";


interface CounterState{
    value: number,
}

const initialState:CounterState = {
    value: 0,
}

export const counterSlice = createSlice({
    name:'counter',
    initialState,
    reducers:{
        Increment: (state)=>{
            state.value += 1
        },
        Decrement: (state) => {
            state.value -= 1
        },
        IncrementByValue: (state,action:PayloadAction<number>)=>{
            state.value += action.payload
        },
        DecrementByValue: (state,action:PayloadAction<number>)=>{
            state.value -= action.payload
        },
        Reset:(state,action:PayloadAction<number>)=>{
            state.value = action.payload
        }

    }

})

export const {Increment,Decrement,IncrementByValue,DecrementByValue,Reset} = counterSlice.actions
export const selectCount = (state:RootState) => state.counterR.value
export default counterSlice.reducer