import React, { ReactNode, useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import CssBaseline from '@mui/material/CssBaseline';
import { styled } from '@mui/system';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { useAppSelector, useAppDispatch } from '../redux/hooks';
import { updateState } from "../redux/slice/app.slice.js";

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = (props) => {
    const darkMode = useAppSelector((state) => state.app.darkMode);
    const dispatch = useAppDispatch();
    const darkModeToggled = useAppSelector((state) => state.app.darkModeToggled);
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    const theme = React.useMemo(
        () =>
            createTheme({
                palette: {
                    mode: darkMode ? 'dark' : 'light',
                },
            }),
        [darkMode],
    );

    useEffect(() => {
        if (!darkModeToggled) {
            dispatch(updateState({ darkMode: prefersDarkMode }))
        }
    }, [prefersDarkMode])


    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <LayoutWrapper>
                <LayoutSide>
                    <Sidebar />
                </LayoutSide>
                <LayoutMain>
                    <Navbar />
                    {props.children}
                </LayoutMain>
            </LayoutWrapper>
        </ThemeProvider>

    )
}

export default Layout;

const LayoutWrapper = styled('div')({
    width: '100vw',
    height: '100%',
    display: 'flex',
    overflow: 'hidden',
    border: '1px solid'
});

const LayoutSide = styled('div')({
    height: '100%',
    width: '30%',
    minWidth: '200px',
    maxWidth: '350px',
});

const LayoutMain = styled('div')(({ theme }) => ({
    height: '100%',
    width: '100%',
    padding: theme.spacing(3),
    border: '1px solid red'
}));