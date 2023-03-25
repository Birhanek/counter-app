import { configureStore } from "@reduxjs/toolkit";

import  counterReducer  from "../feature/counter/counterSlice";
import countryReducer from "../feature/country/countrySlice";


export const store = configureStore({
    reducer:{
        counterR:counterReducer,
        country:countryReducer
    }
})

export type RootState = ReturnType< typeof store.getState>
export type AppDispatch = typeof store.dispatch