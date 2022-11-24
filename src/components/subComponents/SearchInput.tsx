import React from 'react';

import { styled } from '@mui/system';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import SearchIcon from '@mui/icons-material/Search';

type InputEvent = React.ChangeEvent<HTMLInputElement>;

const SearchInput = () => {
    const [value, setValue] = React.useState('');

    const handleInput = (e: InputEvent) => {
        setValue(e.target.value);
    };

    const clearInput = () => {
        setValue('');
    };

    return (
        <SearchInputWrapper>
            <SearchIconsWrapper className="left">
                <SearchIcon />
            </SearchIconsWrapper>
            <CustomSearch
                placeholder="Search for Keywords..."
                value={value}
                onChange={handleInput}
            />
            <SearchIconsWrapper className="right">
                {value && (
                    <HighlightOffIcon
                        sx={{
                            color: 'lightgray',
                            cursor: 'pointer'
                        }}
                        onClick={clearInput}
                    />
                )}
            </SearchIconsWrapper>
        </SearchInputWrapper>
    );
};

export default SearchInput;

const SearchInputWrapper = styled('div')(() => ({
    position: 'relative'
}));

const CustomSearch = styled('input')(({ theme }) => ({
    width: '100%',
    height: '45px',
    padding: theme.spacing(0, 5),
    border: theme.palette.mode === 'light' ? '1px solid lightgray' : 'none',
    borderRadius: '10px',
    background: 'rgba(255, 255, 255, 0.1)',
    fontSize: '16px',

    '&:focus': {
        outline: 'none'
    }
}));

const SearchIconsWrapper = styled('div')(() => ({
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '40px',
    height: '100%',
    top: 0,

    '&.left': {
        left: 0
    },

    '&.right': {
        right: 0
    }
}));
