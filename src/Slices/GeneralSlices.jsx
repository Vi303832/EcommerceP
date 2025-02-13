


import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    icon: 0,
}

export const generalSlice = createSlice({
    name: 'userinfo',
    initialState,
    reducers: {

        increment: (state) => {

            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },

        seticon: (state, action) => {
            state.icon += action.payload
        },

    },
})


export const { increment, decrement, seticon } = generalSlice.actions

export default generalSlice.reducer