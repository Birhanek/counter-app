import { Chart ,PieSeries,Title  } from '@devexpress/dx-react-chart-material-ui'
import { FormControl } from '@mui/material'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import { Animation } from '@devexpress/dx-react-chart';
import Select, { SelectChangeEvent } from '@mui/material/Select'
import React, {  useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { Filter } from '../Data modiefiers/dataInterface'
import {  DrawingDataOnPieChart } from '../feature/country/countrySlice'
import { getAllCountries } from '../Data modiefiers/CountryApi';

const Home = () => {
 const dispatch = useAppDispatch()
 const  {filtered} = useAppSelector(state=>state.country)
 console.log(filtered)

 const [filter,setFilter] = useState('')

 const handleFilter = (event:SelectChangeEvent) =>{
    setFilter(event.target.value)
    dispatch(DrawingDataOnPieChart(event.target.value))
 }
const chartData = () =>{
    let chart :JSX.Element
    if(filter === Filter.population){
        chart = <Chart data={filtered}>
            <PieSeries 
            valueField='countryData'
            argumentField='countryName'
            />
            <Title text='Countries by population'/>
            <Animation />
        </Chart>
        return chart
    }
   
}

 useEffect(()=>{
    dispatch(getAllCountries())
 },[])
  return (
    <div className='card'>
        <FormControl >
            <InputLabel>Filter</InputLabel>
            <Select value={filter} onChange={handleFilter}>
                    <MenuItem value ={Filter.population}>{Filter.population}</MenuItem>
                    <MenuItem value ={Filter.area}>{Filter.area}</MenuItem>
                    <MenuItem value ={Filter.carDirection}>{Filter.carDirection}</MenuItem>
            </Select>
        </FormControl>
        
        <Chart data={filtered}>
            <PieSeries 
            valueField='countryData'
            argumentField='countryName'
            />
            <Title text='Countries by population'/>
            <Animation />
        </Chart>
        
    </div>
  )
}

export default Home