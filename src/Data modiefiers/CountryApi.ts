import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import CountryInfo from "./dataInterface";

const countryApi = 'https://restcountries.com'
export const getAllCountries = createAsyncThunk(
    'country/getAllCountries',async(_,thunkApi) => {
        const response = await axios.get(`${countryApi}/v3.1/all`)
        const data:CountryInfo[] = await response.data
        return data
    }
)