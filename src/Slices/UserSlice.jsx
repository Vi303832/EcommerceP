import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    email: "",
    uid: "",
}

export const userSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {

        setthing: (state, action) => {
            state.value += action.payload
        },
    },
})


export const { setthing } = userSlice.actions

export default userSlice.reducer