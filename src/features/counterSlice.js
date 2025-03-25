import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increaseByOne: (state) =>{
        state.value +=1;
    }
    ,
    decreaseByOne: (state)=>{
        state.value -=1;
    }
    ,
    increaseByAmount: (state, action)=>{
        state.value += action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { 
    increaseByAmount,
    decreaseByOne,
    increaseByOne
} = counterSlice.actions

export default counterSlice.reducer