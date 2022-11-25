import React from 'react';
import { styled } from '@mui/system';

interface ListCardProps {
    title: string;
    author: string;
    image: string;
}

interface ListCardImageProps {
    background: string;
}

const ListCard: React.FC<ListCardProps> = (props) => {
    return (
        <ListCardWrapper>
            <ListCardImage background={props.image} />
            <ListCardContent>
                <ListCardTitle>{props.title}</ListCardTitle>
                <ListCardAuthor>{props.author}</ListCardAuthor>
            </ListCardContent>
        </ListCardWrapper>
    );
};

export default ListCard;

const ListCardWrapper = styled('div')(({ theme }) => ({
    display: 'flex',
}));

const ListCardImage = styled('div')<ListCardImageProps>(({ background }) => ({
    width: '60px',
    height: '84px',
    backgroundImage: `url(${background})`,
    borderRadius: '10px',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
}));

const ListCardContent = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: theme.spacing(1)
}));

const ListCardTitle = styled('h3')(({ theme }) => ({
    padding: theme.spacing(0),
    margin: 0,
    width: '100%',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    textTransform: 'capitalize'
}));

const ListCardAuthor = styled('p')(({ theme }) => ({
    width: '100%',
    margin: 0,
    color: theme.palette.text.secondary,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    textTransform: 'capitalize'
}));
