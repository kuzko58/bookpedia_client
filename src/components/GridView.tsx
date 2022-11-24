import React from 'react';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';

import BookCard from './subComponents/BookCard';
import { useAppSelector } from '../redux/hooks';
import { filterSearch } from '../utils/utils';

const GridView = () => {
    const books = useAppSelector((state) => state.app.books);
    const search = useAppSelector((state) => state.app.search);

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid
                container
                spacing={{ xs: 2, md: 2, lg: 3 }}
                // columns={{ xs: 4, sm: 8, md: 12 }}
            >
                {books?.filter(( (book) => filterSearch(book, search))).map((book, index) => (
                    <Grid xs={12} sm={6} md={4} lg={2} key={index}>
                        <BookCard book={book} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default GridView;
