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
                    fontSize="large"
                    sx={{
                        color: 'lightgray',
                        cursor: 'pointer',
                        marginLeft: 'auto'
                    }}
                    onClick={closeModal}
                />
                <ModalMainContent>
                    <CustomModalImage background={currentBook?.image || ''} />
                    <BookTitle variant="h4">{currentBook?.title}</BookTitle>
                    <BookAuthor>{currentBook?.author}</BookAuthor>
                    <BookDescription>
                        {currentBook?.description}
                    </BookDescription>
                </ModalMainContent>
                <CallToActionRow>
                    <SecondaryButton onClick={closeModal}>
                        <Typography>Close</Typography>
                    </SecondaryButton>
                    <PrimaryButton>
                        <Typography>Continue Reading</Typography>
                    </PrimaryButton>
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
    width: '90%',
    minHeight: '300px',
    maxWidth: '640px',
    minWidth: '320px',
    padding: theme.spacing(3),
    borderRadius: '40px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: 'none',
    outline: 'none'
}));

const ModalMainContent = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    overflowY: 'auto',
    marginBottom: '20px'
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

const BookTitle = styled(Typography)(({ theme }) => ({
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

const BookAuthor = styled(Typography)(({ theme }) => ({
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
    maxHeight: '14.4rem',
    lineHeight: '1.6rem',
    overflowY: 'auto'
}));

const CallToActionRow = styled('div')(({ theme }) => ({
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 'auto'
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
    color: theme.palette.text.secondary
}));
