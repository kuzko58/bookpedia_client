import { styled } from '@mui/system';

import { useAppSelector } from '../redux/hooks';
import GridView from '../components/GridView';
import ListView from '../components/ListView';

const Library = () => {
    const gridMode = useAppSelector((state) => state.app.gridMode);

    return (
        <LibraryWrapper>
            {gridMode ? <GridView /> : <ListView />}
        </LibraryWrapper>
    );
};

export default Library;

const LibraryWrapper = styled('div')(({ theme }) => ({
    height: '100%',
    width: '100%',
    padding: theme.spacing(3)
}));
