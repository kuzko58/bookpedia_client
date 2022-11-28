import React, { ReactNode, useEffect } from 'react';

import { styled } from '@mui/system';
import {
    ThemeProvider,
    createTheme,
    responsiveFontSizes
} from '@mui/material/styles';
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

declare module '@mui/material/styles' {
    interface BreakpointOverrides {
        xxs: true;
        xs: true;
        sm: true;
        md: true;
        lg: true;
        xl: true;
    }
}

const Layout: React.FC<LayoutProps> = (props) => {
    const darkMode = useAppSelector((state) => state.app.darkMode);
    const dispatch = useAppDispatch();
    const darkModeToggled = useAppSelector(
        (state) => state.app.darkModeToggled
    );
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    const fontMd = useMediaQuery('(max-width:800px)');

    const getFontSize = () => {
        if (fontMd) return 20;
        return 16;
    };

    const theme = React.useMemo(
        () =>
            createTheme({
                palette: {
                    mode: darkMode ? 'dark' : 'light'
                },
                breakpoints: {
                    values: {
                        xxs: 0,
                        xs: 360,
                        sm: 600,
                        md: 900,
                        lg: 1200,
                        xl: 1536
                    }
                },
                typography: {
                    htmlFontSize: getFontSize()
                }
            }),
        [darkMode, fontMd]
    );

    useEffect(() => {
        if (!darkModeToggled) {
            dispatch(updateState({ darkMode: prefersDarkMode }));
        }
    }, [prefersDarkMode]);

    return (
        <ThemeProvider theme={responsiveFontSizes(theme)}>
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

const LayoutWrapper = styled('div')(({ theme }) => ({
    width: '100vw',
    height: '100%',
    display: 'flex',
    overflow: 'hidden'
}));

const LayoutSide = styled('div')(({ theme }) => ({
    height: '100%',
    width: '40%',
    minWidth: '200px',
    maxWidth: '350px',
    [theme.breakpoints.down('md')]: {
        display: 'none'
    }
}));

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
