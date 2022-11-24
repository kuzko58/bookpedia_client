import React from 'react';

import { styled } from '@mui/system';

import { useAppDispatch } from '../../redux/hooks';
import { updateState } from '../../redux/slice/app.slice.js';
import { BookType } from '../../types/book.type';

interface BookCardProps {
    book: BookType;
}

interface BookCardImageContainerProps {
    background: string;
}

const BookCard: React.FC<BookCardProps> = (props) => {
    const dispatch = useAppDispatch();

    const handleCardClick = () => {
        dispatch(updateState({ currentBook: props.book, modalOpen: true }));
    };

    return (
        <BookCardWrapper onClick={handleCardClick}>
            <BookCardImageContainer background={props.book.image}>
                <BookCardProgressBadge>
                    {props.book.progress}%
                </BookCardProgressBadge>
                <BookCardGenreBadge>{props.book.genre}</BookCardGenreBadge>
            </BookCardImageContainer>
            <BookCardTitle>{props.book.title}</BookCardTitle>
            <BookCardAuthor>{props.book.author}</BookCardAuthor>
        </BookCardWrapper>
    );
};

export default BookCard;

const BookCardWrapper = styled('div')(() => ({
    width: '100%',
    cursor: 'pointer'
}));

const BookCardImageContainer = styled('div')<BookCardImageContainerProps>(
    ({ background }) => ({
        position: 'relative',
        width: '100%',
        paddingTop: '140%',
        backgroundImage: `url(${background})`,
        borderRadius: '20px',
        overflow: 'hidden',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    })
);

const BookCardProgressBadge = styled('div')(({ theme }) => ({
    position: 'absolute',
    top: 10,
    left: 10,
    padding: theme.spacing(1, 2),
    backgroundColor: 'rgba(175, 175, 175, 0.3)',
    borderRadius: '10px',
    color: '#fff'
}));

const BookCardGenreBadge = styled('div')(({ theme }) => ({
    position: 'absolute',
    bottom: 10,
    right: 10,
    padding: theme.spacing(1, 2),
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: '10px',
    color: '#fff'
}));

const BookCardTitle = styled('h3')(({ theme }) => ({
    padding: theme.spacing(4, 0, 0),
    margin: 0,
    width: '100%',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    textTransform: 'capitalize'
}));

const BookCardAuthor = styled('p')(({ theme }) => ({
    width: '100%',
    margin: 0,
    color: theme.palette.text.secondary,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    textTransform: 'capitalize'
}));
