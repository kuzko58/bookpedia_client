import React from 'react';
import { styled } from '@mui/system';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import GridViewIcon from '@mui/icons-material/GridView';
import TableRowsIcon from '@mui/icons-material/TableRows';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '@mui/material';

const Navbar = () => {
    return (
        <NavbarWrapper>
            <NavbarTitle>Book Library</NavbarTitle>
            <NavIconWrapper className='more'>
                <MoreHorizIcon fontSize='medium' sx={{
                    color: 'green',
                }} />
            </NavIconWrapper>
            <NavIconWrapper className='is_selected' sx={{
                marginLeft: 'auto',

            }}>
                <GridViewIcon />
            </NavIconWrapper>
            <NavIconWrapper sx={{
                marginLeft: '5px',

            }}>
                <TableRowsIcon />
            </NavIconWrapper>
            <NavIconWrapper className='is_selected' sx={{
                marginLeft: '10px',

            }}>
                <SearchIcon fontSize='medium' />
            </NavIconWrapper>
        </NavbarWrapper>
    )
}

export default Navbar;


const NavbarWrapper = styled('p')(({ theme }) => ({
    width: '100%',
    height: '60px',
    display: 'flex',
    alignItems: 'center',
    borderBottom: `1px solid ${theme.palette.divider}`
}));

const NavbarTitle = styled('h2')(({ theme }) => ({
    fontSize: '1.8rem',
    margin: 0,
}));

const NavIconWrapper = styled(IconButton)(({ theme }) => ({
    height: '45px',
    width: '45px',
    borderRadius: '10px',

    '&.is_selected': {
        backgroundColor: 'rgba(185, 185, 185, 0.1)',
    },

    '&.more': {
        backgroundColor: theme.palette.mode === 'light' ? 'rgba(2, 94, 30, 0.08)' : 'transparent',
        marginLeft: '10px'
    },

    '&:hover': {
        backgroundColor: 'rgba(185, 185, 185, 0.3)'
    }
}));