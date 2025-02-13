import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    name: "",
    email: "",
    uid: "",
    isAuth: false,
}

export const userSlice = createSlice({
    name: 'userinfo',
    initialState,
    reducers: {

        setemail: (state, action) => {
            state.email += action.payload
        },
        setuid: (state, action) => {
            state.uid += action.payload
        },
        setAuth: (state, action) => {
            state.isAuth == action.payload
        },
        setname: (state, action) => {
            state.name += action.payload
        },
    },
})


export const { setemail, setuid, setAuth, setname } = userSlice.actions

export default userSlice.reducer