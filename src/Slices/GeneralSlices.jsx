import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    check: 0, // Başlangıç değeri
    side: false,
};

export const generalSlice = createSlice({
    name: 'general',
    initialState,
    reducers: {
        // checker state'ini artıran reducer
        checker: (state) => {
            state.check += 1; // state.checker'ı artır
        },
        setSide: (state, action) => {
            state.side = action.payload
        },

    },
});

export const { checker, setSide } = generalSlice.actions;
export default generalSlice.reducer;