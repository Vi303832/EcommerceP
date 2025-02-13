import { configureStore } from '@reduxjs/toolkit'
import userinfo from "./Slices/UserSlice"
import general from "./Slices/GeneralSlices"

export const store = configureStore({
    reducer: {

        userinfo,
        general,
    },
})