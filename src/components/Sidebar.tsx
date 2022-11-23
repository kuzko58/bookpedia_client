import React from 'react';
import { styled } from '@mui/system';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Chip from '@mui/material/Chip';
import Switcher from './subComponents/Switcher';

interface SidebarProps { }

const Sidebar: React.FC<SidebarProps> = () => {
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
                <SidebarRowContent className='is_not_selected'>
                    <>
                        <DarkModeIcon sx={{
                            marginRight: (theme) => theme.spacing(1)
                        }} />
                        <SidebarRowContentText>Dark Mode</SidebarRowContentText></>
                    <Switcher sx={{
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
    border: '1px solid white'
}));


const SidebarRow = styled('div')(({ theme }) => ({
    width: '100%',
    padding: theme.spacing(2),
}));

const SidebarRowTitle = styled('p')(({ theme }) => ({
    width: '100%',
    marginBottom: theme.spacing(2),
    fontWeight: 600
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
        backgroundColor: theme.palette.mode === 'dark' ? '#121212' : 'rgba(0, 0, 0, 0.48)',
    },

    '&.is_not_selected': {
        '&:hover': {
            backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.20)' : 'rgba(0, 0, 0, 0.18)'
        }
    }
}));

const SidebarRowContentText = styled('p')(({ theme }) => ({

}));