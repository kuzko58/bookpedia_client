import { createSlice } from '@reduxjs/toolkit';
import books from '../../data/books.json';

const initialState = {
    darkMode: false,
    darkModeToggled: false,
    gridMode: true,
    books,
    search: '',
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
