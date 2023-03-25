import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getAllCountries } from "../../Data modiefiers/CountryApi";
import CountryInfo, { CountryState, Filter } from "../../Data modiefiers/dataInterface";

const initialState: CountryState ={
    countryState:[],
    isLoading:false,
    isError:false,
    message:'',
    searchQuery:'',
    filtered:[]
}

const counterSlice = createSlice({
    name:'country',
    initialState:initialState,
    reducers:{
        DrawingDataOnPieChart:(state,action:PayloadAction<string>)=>{
            console.log(action.payload)
            switch(action.payload){
                
                case Filter.population:{
                    const totalPopulation = state.countryState.map(country => country.population).
                                        reduce((preValue,currentValue)=>preValue + currentValue,0)
                    state.filtered = state.countryState.map((country)=>{
                    return {
                            countryName:country.name.common,
                            countryData:Math.floor(country.population/totalPopulation)
                        }
                    })
                    break
                }
                
            }
        }
    },
    extraReducers(builder) {
        builder.addCase(getAllCountries.pending,(state)=>{
            state.isLoading = true
            state.isError = false
        })
        builder.addCase(getAllCountries.fulfilled,(state,action:PayloadAction<CountryInfo[]>)=>{
            state.countryState = action.payload
            const totalArea = action.payload.map(country=> country.area).
                                        reduce((preValue,currentValue) => preValue + currentValue,0)
            console.log(totalArea)
            state.filtered = action.payload.map(country=>{
                return {
                    countryName: country.name.common,
                    countryData :(country.area/totalArea)*100
                }
            })
            state.isLoading = false
            state.isError = false
            state.message = 'Data successfully fetched'
        })
        builder.addCase(getAllCountries.rejected,(state,action)=>{
            state.countryState = []
            state.isError = true 
            state.isLoading = false
            state.message = action.error.message
        })
    },
})

export const { DrawingDataOnPieChart } = counterSlice.actions

export default counterSlice.reducer