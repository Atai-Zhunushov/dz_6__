import {createSlice} from "@reduxjs/toolkit";

const mathSlice = createSlice({
    name: 'mathSlice',
    initialState: {
        count: 0,


    },
    reducers:  {
        changeCount: (state, action) =>  {
            state.count = action.payload
        }
    }
})

export const {changeCount} = mathSlice.actions

export default mathSlice.reducer