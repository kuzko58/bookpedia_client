import React, { ReactNode, useEffect } from 'react';

import { styled } from '@mui/system';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import CssBaseline from '@mui/material/CssBaseline';

import { useAppSelector, useAppDispatch } from '../redux/hooks';
import { updateState } from '../redux/slice/app.slice.js';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import CustomModal from './CustomModal';

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = (props) => {
    const darkMode = useAppSelector((state) => state.app.darkMode);
    const dispatch = useAppDispatch();
    const darkModeToggled = useAppSelector(
        (state) => state.app.darkModeToggled
    );
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    const theme = React.useMemo(
        () =>
            createTheme({
                palette: {
                    mode: darkMode ? 'dark' : 'light'
                }
            }),
        [darkMode]
    );

    useEffect(() => {
        if (!darkModeToggled) {
            dispatch(updateState({ darkMode: prefersDarkMode }));
        }
    }, [prefersDarkMode]);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <LayoutWrapper>
                <LayoutSide>
                    <Sidebar />
                </LayoutSide>
                <LayoutMain>
                    <LayoutMainNav>
                        <Navbar />
                    </LayoutMainNav>
                    <LayoutMainBody>{props.children}</LayoutMainBody>
                </LayoutMain>
                <CustomModal />
            </LayoutWrapper>
        </ThemeProvider>
    );
};

export default Layout;

const LayoutWrapper = styled('div')({
    width: '100vw',
    height: '100%',
    display: 'flex',
    overflow: 'hidden'
});

const LayoutSide = styled('div')({
    height: '100%',
    width: '30%',
    minWidth: '200px',
    maxWidth: '350px'
});

const LayoutMainNav = styled('div')(({ theme }) => ({
    width: '100%',
    padding: theme.spacing(3, 3, 0)
}));

const LayoutMain = styled('div')(({ theme }) => ({
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',

    '& ::-webkit-scrollbar': {
        width: '6px'
    },

    '& ::-webkit-scrollbar-track': {
        background:
            theme.palette.mode === 'dark'
                ? 'rgba(175, 175, 175, 0.1)'
                : 'rgba(0, 0, 0, 0.1)'
    },

    '& ::-webkit-scrollbar-thumb': {
        background:
            theme.palette.mode === 'dark'
                ? 'rgba(175, 175, 175, 0.2)'
                : 'rgba(0, 0, 0, 0.2)',
        borderRadius: '3px'
    },

    '& ::-webkit-scrollbar-thumb:hover': {
        background:
            theme.palette.mode === 'dark'
                ? 'rgba(175, 175, 175, 0.4)'
                : 'rgba(0, 0, 0, 0.4)'
    }
}));

const LayoutMainBody = styled('div')(({ theme }) => ({
    height: '100%',
    width: '100%',
    overflowY: 'auto',
    overflowX: 'hidden'
}));
