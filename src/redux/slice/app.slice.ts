import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    darkMode: false,
    darkModeToggled: false,
    gridMode: true
};

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        updateState: (state, action) => {
            Object.assign(state, action.payload);
        }
    }
});

export const { updateState } = appSlice.actions;

export default appSlice.reducer;
