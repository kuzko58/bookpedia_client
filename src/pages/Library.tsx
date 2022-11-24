import React from 'react';

import { styled } from '@mui/system';

import GridView from '../components/GridView';

const Library = () => {
    return (
        <LibraryWrapper>
            <GridView />
        </LibraryWrapper>
    );
};

export default Library;

const LibraryWrapper = styled('div')(({ theme }) => ({
    height: '100%',
    width: '100%',
    paddingTop: theme.spacing(3),
    boxSizing: 'border-box',
    overflowY: 'scroll',
    overflowX: 'hidden'
}));
