import React from 'react';

import { styled } from '@mui/system';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import GridViewIcon from '@mui/icons-material/GridView';
import TableRowsIcon from '@mui/icons-material/TableRows';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '@mui/material';
import ClickAwayListener from '@mui/base/ClickAwayListener';
import Typography from '@mui/material/Typography';

import { useAppSelector, useAppDispatch } from '../redux/hooks';
import { updateState } from '../redux/slice/app.slice.js';
import SearchInput from './subComponents/SearchInput';

const Navbar = () => {
    const [showSearch, setShowSearch] = React.useState(false);
    const gridMode = useAppSelector((state) => state.app.gridMode);
    const dispatch = useAppDispatch();

    const setGridView = () => {
        dispatch(updateState({ gridMode: true }));
    };

    const setListView = () => {
        dispatch(updateState({ gridMode: false }));
    };

    return (
        <NavbarWrapper>
            <NavbarMain>
                <NavbarTitle variant="h4">Book Library</NavbarTitle>
                <NavIconWrapper className="more">
                    <MoreHorizIcon
                        fontSize="medium"
                        sx={{
                            color: 'green'
                        }}
                    />
                </NavIconWrapper>
                <NavIconWrapper
                    className={gridMode ? 'is_selected' : ''}
                    sx={{
                        marginLeft: 'auto'
                    }}
                    onClick={setGridView}
                >
                    <GridViewIcon />
                </NavIconWrapper>
                <NavIconWrapper
                    className={!gridMode ? 'is_selected' : ''}
                    sx={{
                        marginLeft: '5px'
                    }}
                    onClick={setListView}
                >
                    <TableRowsIcon />
                </NavIconWrapper>
                <>
                    {showSearch ? (
                        <ClickAwayListener
                            onClickAway={() => setShowSearch(false)}
                        >
                            <SearchInputBox className="large">
                                <SearchInput />
                            </SearchInputBox>
                        </ClickAwayListener>
                    ) : (
                        <NavIconWrapper
                            className="is_selected search_icon"
                            sx={{
                                marginLeft: '10px'
                            }}
                            onClick={() => setShowSearch(true)}
                        >
                            <SearchIcon fontSize="medium" />
                        </NavIconWrapper>
                    )}
                </>
            </NavbarMain>
            <SearchInputBox className="small">
                <SearchInput />
            </SearchInputBox>
        </NavbarWrapper>
    );
};

export default Navbar;

const NavbarWrapper = styled('div')(({ theme }) => ({
    width: '100%'
}));

const NavbarMain = styled('div')(({ theme }) => ({
    width: '100%',
    height: '70px',
    display: 'flex',
    alignItems: 'center',
    borderBottom: `1px solid ${theme.palette.divider}`
}));

const NavbarTitle = styled(Typography)(() => ({
    margin: 0,
    whiteSpace: 'nowrap'
}));

const NavIconWrapper = styled(IconButton)(({ theme }) => ({
    height: '45px',
    width: '45px',
    borderRadius: '10px',

    '&.is_selected': {
        backgroundColor: 'rgba(185, 185, 185, 0.1)'
    },

    '&.more': {
        backgroundColor:
            theme.palette.mode === 'light'
                ? 'rgba(2, 94, 30, 0.08)'
                : 'transparent',
        marginLeft: '10px'
    },

    '&:hover': {
        backgroundColor: 'rgba(185, 185, 185, 0.3)'
    },

    '&.search_icon': {
        [theme.breakpoints.down('md')]: {
            display: 'none'
        }
    }
}));

const SearchInputBox = styled('div')(({ theme }) => ({
    width: '100%',
    '&.small': {
        display: 'block',
        margin: theme.spacing(2, 0, 1),
        [theme.breakpoints.up('md')]: {
            display: 'none'
        }
    },
    '&.large': {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'block',
            maxWidth: '400px',
            marginLeft: '10px'
        }
    }
}));
