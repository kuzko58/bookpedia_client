import React from 'react';

import { styled } from '@mui/system';
import { Modal, Box, Typography } from '@mui/material';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

import { useAppSelector, useAppDispatch } from '../redux/hooks';
import { updateState } from '../redux/slice/app.slice.js';

interface CustomModalImageProps {
    background: string;
}

const CustomModal = () => {
    const modalOpen = useAppSelector((state) => state.app.modalOpen);
    const currentBook = useAppSelector((state) => state.app.currentBook);
    const dispatch = useAppDispatch();

    const closeModal = () => {
        dispatch(updateState({ modalOpen: false }));
    };

    return (
        <Modal open={modalOpen} onClose={closeModal}>
            <CustomModalBox
                sx={{
                    bgcolor: 'background.paper'
                }}
            >
                <HighlightOffIcon
                    sx={{
                        color: 'lightgray',
                        cursor: 'pointer',
                        marginLeft: 'auto'
                    }}
                    onClick={closeModal}
                />
                <CustomModalImage background={currentBook?.image || ''} />
                <BookTitle>{currentBook?.title}</BookTitle>
                <BookAuthor>{currentBook?.author}</BookAuthor>
                <BookDescription>{currentBook?.description}</BookDescription>
                <CallToActionRow>
                    <SecondaryButton onClick={closeModal}>
                        Close
                    </SecondaryButton>
                    <PrimaryButton>Continue Reading</PrimaryButton>
                </CallToActionRow>
            </CustomModalBox>
        </Modal>
    );
};

export default CustomModal;

const CustomModalBox = styled(Box)(({ theme }) => ({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    height: '80%',
    minHeight: '300px',
    maxHeight: '800px',
    maxWidth: '700px',
    minWidth: '320px',
    padding: theme.spacing(3),
    borderRadius: '40px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
}));

const CustomModalImage = styled('div')<CustomModalImageProps>(
    ({ background }) => ({
        width: '40%',
        paddingTop: '56%',
        backgroundImage: `url(${background})`,
        borderRadius: '20px',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    })
);

const BookTitle = styled('h3')(({ theme }) => ({
    padding: theme.spacing(4, 0, 0),
    margin: 0,
    marginTop: '20px',
    width: '100%',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    textTransform: 'capitalize',
    textAlign: 'center',
    fontSize: '1.8rem'
}));

const BookAuthor = styled('p')(({ theme }) => ({
    width: '100%',
    margin: 0,
    marginTop: '5px',
    color: theme.palette.text.secondary,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    textTransform: 'capitalize',
    textAlign: 'center',
    fontSize: '1.2rem'
}));

const BookDescription = styled(Typography)(({ theme }) => ({
    width: '100%',
    marginTop: '15px',
    textAlign: 'center',
    textOverflow: 'ellipsis',
    wordWrap: 'break-word',
    overflow: 'hidden',
    maxHeight: '12.6rem',
    lineHeight: '1.4rem'
}));

const CallToActionRow = styled('div')(({ theme }) => ({
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '20px'
}));

const PrimaryButton = styled('button')(({ theme }) => ({
    padding: theme.spacing(1.5),
    width: '60%',
    maxWidth: '250px',
    marginLeft: '20px',
    borderRadius: '10px',
    backgroundColor: '#3386f2',
    fontSize: '1.04rem',
    color: '#fff'
}));
const SecondaryButton = styled('button')(({ theme }) => ({
    padding: theme.spacing(1.5),
    width: '40%',
    maxWidth: '80px',
    borderRadius: '10px',
    backgroundColor: 'rgba(175, 175, 175, 0.1)',
    fontSize: '1.04rem',
    color: 'darkslategray'
}));
