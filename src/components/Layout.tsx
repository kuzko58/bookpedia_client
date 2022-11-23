import React, { ReactNode } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import CssBaseline from '@mui/material/CssBaseline';
import { styled } from '@mui/system';
import Sidebar from './Sidebar';

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = (props) => {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    const theme = React.useMemo(
        () =>
            createTheme({
                palette: {
                    mode: !prefersDarkMode ? 'dark' : 'light',
                },
            }),
        [prefersDarkMode],
    );

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <LayoutWrapper>
                <LayoutSide>
                    <Sidebar />
                </LayoutSide>
                <LayoutMain>
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
    maxWidth: '300px',
});

const LayoutMain = styled('div')({
    height: '100%',
    width: '70%'
});