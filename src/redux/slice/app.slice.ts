import { createSlice } from '@reduxjs/toolkit';
import books from '../../data/books.json';
import { BookType } from '../../types/book.type';

interface StateType {
    darkMode: boolean;
    darkModeToggled: boolean;
    gridMode: boolean;
    books: BookType[];
    search: string;
    modalOpen: boolean;
    currentBook: BookType | null
}

const initialState: StateType = {
    darkMode: false,
    darkModeToggled: false,
    gridMode: true,
    books,
    search: '',
    modalOpen: false,
    currentBook: null,
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
