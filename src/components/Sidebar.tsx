import React from 'react';
import { styled } from '@mui/system';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Chip from '@mui/material/Chip';
import { useAppSelector, useAppDispatch } from '../redux/hooks';
import { updateState } from "../redux/slice/app.slice.js";
import Switcher from './subComponents/Switcher';

interface SidebarProps { }

const Sidebar: React.FC<SidebarProps> = () => {
    const darkMode = useAppSelector((state) => state.app.darkMode);
    const dispatch = useAppDispatch();

    const toggleDarkMode = () => {
        dispatch(updateState({ darkMode: !darkMode, darkModeToggled: true }))
    }

    return (
        <SidebarWrapper>
            <SidebarRow>
                <SidebarRowTitle>Library</SidebarRowTitle>
                <SidebarRowContent className='is_selected'>
                    <>
                        <PlayCircleOutlineIcon sx={{
                            marginRight: (theme) => theme.spacing(1)
                        }} />
                        <SidebarRowContentText>My Books</SidebarRowContentText></>
                    <Chip label="15" sx={{
                        marginLeft: 'auto'
                    }} />
                </SidebarRowContent>
                <SidebarRowContent className='is_not_selected'>
                    <>
                        <ControlPointIcon sx={{
                            marginRight: (theme) => theme.spacing(1)
                        }} />
                        <SidebarRowContentText>Add New Books</SidebarRowContentText></>
                </SidebarRowContent>
            </SidebarRow>
            <SidebarRow>
                <SidebarRowTitle>Settings</SidebarRowTitle>
                <SidebarRowContent className='is_not_selected' onClick={toggleDarkMode}>
                    <>
                        <DarkModeIcon sx={{
                            marginRight: (theme) => theme.spacing(1)
                        }} />
                        <SidebarRowContentText>Dark Mode</SidebarRowContentText></>
                    <Switcher
                        checked={darkMode}
                        sx={{
                            marginLeft: 'auto'
                        }} />
                </SidebarRowContent>
            </SidebarRow>
        </SidebarWrapper>
    )
}

export default Sidebar;

const SidebarWrapper = styled('div')(({ theme }) => ({
    height: '100%',
    width: '100%',
    backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'transparent',
}));


const SidebarRow = styled('div')(({ theme }) => ({
    width: '100%',
    padding: theme.spacing(2),
}));

const SidebarRowTitle = styled('p')(({ theme }) => ({
    width: '100%',
    marginBottom: theme.spacing(2),
    fontWeight: 600,
    color: theme.palette.text.secondary
}));

const SidebarRowContent = styled('div')(({ theme }) => ({
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    margin: theme.spacing(0.3),
    borderRadius: '20px',
    cursor: 'pointer',

    '&.is_selected': {
        backgroundColor: theme.palette.mode === 'dark' ? '#121212' : 'rgba(0, 0, 0, 0.18)',
    },

    '&.is_not_selected': {
        '&:hover': {
            backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.20)' : 'rgba(0, 0, 0, 0.08)'
        }
    }
}));

const SidebarRowContentText = styled('p')(() => ({
    fontSize: '16px',
}));