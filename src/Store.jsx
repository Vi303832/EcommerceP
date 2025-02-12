import { configureStore } from '@reduxjs/toolkit'
import userinfo from "./Slices/UserSlice"

export const store = configureStore({
    reducer: {

        userinfo,

    },
})