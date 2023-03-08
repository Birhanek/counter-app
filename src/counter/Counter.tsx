import React from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { Decrement, DecrementByValue, Increment, IncrementByValue, Reset } from '../feature/counter/counterSlice'


const Counter = () => {

    const count = useAppSelector(state=>state.counterR.value)
    const dispatch = useAppDispatch()

    const incrementByOne =()=>{
        dispatch(Increment())
    }
    const decrementByOne =()=>{
        dispatch(Decrement())
    }
    const incrementByValue =(newValue:number)=>{
        dispatch(IncrementByValue(newValue))
    }
    const decrementByValue =(newValue:number)=>{
        dispatch(DecrementByValue(newValue))
    }

    const reset = (newValue:number)=>{
      dispatch(Reset(newValue))
    }

  return (
    <div className='counter'>
      <h2>Count:{count} </h2>
      <div className='action-btn'>
           <div className='action-btn__one'>
                <button onClick={incrementByOne}>Increment +1</button>
                <button onClick={decrementByOne}>Decrement -1</button>
           </div>
           <div className='action-btn__one'>
                <button onClick={()=>incrementByValue(5)}>Increment By5</button>
                <button onClick={()=>decrementByValue(5)}>Decrement By5</button>
           </div>
           <button className='btn-reset' onClick={()=>reset(0)}>Reset to 0</button>
      </div>
    </div>
  )
}

export default Counter
