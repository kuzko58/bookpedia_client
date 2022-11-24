import React from 'react';
import _debounce from 'lodash/debounce';

import { styled } from '@mui/system';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import SearchIcon from '@mui/icons-material/Search';

import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { updateState } from '../../redux/slice/app.slice.js';

type InputEvent = React.ChangeEvent<HTMLInputElement>;

const SearchInput = () => {
    const search = useAppSelector((state) => state.app.search);
    const dispatch = useAppDispatch();

    const [value, setValue] = React.useState(search);

    const debounceFn = React.useCallback(
        _debounce(
            (inputValue: string) =>
                dispatch(updateState({ search: inputValue })),
            500
        ),
        []
    );

    const handleInput = (e: InputEvent) => {
        setValue(e.target.value);
        debounceFn(e.target.value);
    };

    const clearInput = () => {
        setValue('');
        if (value) {
            dispatch(updateState({ search: '' }));
        }
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
    color: theme.palette.text.primary,

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
