import {createSlice} from "@reduxjs/toolkit";

const usersSlice = createSlice({
    name: 'usersSlice',
    initialState: {
        users: [],
        inputValue: ''
    },
    reducers: {
        changeInput : (state,action) => {
            state.inputValue = action.payload
        },
        addUser : (state, action) => {
            state.users = [...state.users , action.payload]
        },
        clearInputs : (state, action) => {
            state.inputValue = ''
        },
        deleteAll : (state, action) => {
            state.users = []
            state.inputValue = ''
        }

    }
})

export const {changeInput, addUser, clearInputs,deleteAll} = usersSlice.actions

export default usersSlice.reducer