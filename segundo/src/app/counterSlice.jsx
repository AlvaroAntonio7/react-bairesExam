
import React from 'react'

export  const counterSlice = createSlice({
    name:"counter",

    initialState:{
        value:[]
    },

    reducers:{
        addStock : (state, action)=>{
            state.value = [...state.value, action]
        },
        setStock : (state, action) =>{
            state.value = action.payload;
        },
        
    }
})

export default counterSlice.reducer

