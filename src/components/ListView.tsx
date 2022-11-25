import React from 'react';
import moment from 'moment';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { TableSortLabel } from '@mui/material';
import { visuallyHidden } from '@mui/utils';

import ListCard from './subComponents/ListCard';
import { useAppSelector, useAppDispatch } from '../redux/hooks';
import { updateState } from '../redux/slice/app.slice.js';
import { BookType } from '../types/book.type';
import { stableSort, getComparator, filterSearch } from '../utils/utils';
import headCells from '../data/listview_table_head.json';

type Order = 'asc' | 'desc';

interface ListViewTableHeadProps {
    onRequestSort: (
        event: React.MouseEvent<unknown>,
        property: keyof BookType
    ) => void;
    order: Order;
    orderBy: string;
}

function ListViewTableHead(props: ListViewTableHeadProps) {
    const { order, orderBy, onRequestSort } = props;
    const createSortHandler =
        (property: keyof BookType) => (event: React.MouseEvent<unknown>) => {
            onRequestSort(event, property);
        };

    return (
        <TableHead>
            <TableRow>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        sortDirection={orderBy === headCell.id ? order : false}
                        sx={(theme) => ({
                            fontWeight: 600,
                            color: '#b2b4b8'
                        })}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(
                                headCell.id as keyof BookType
                            )}
                        >
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <Box component="span" sx={visuallyHidden}>
                                    {order === 'desc'
                                        ? 'sorted descending'
                                        : 'sorted ascending'}
                                </Box>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

const ListView = () => {
    const books = useAppSelector((state) => state.app.books);
    const search = useAppSelector((state) => state.app.search);
    const dispatch = useAppDispatch();

    const [order, setOrder] = React.useState<Order>('asc');
    const [orderBy, setOrderBy] = React.useState<keyof BookType>('title');

    const handleRequestSort = (
        event: React.MouseEvent<unknown>,
        property: keyof BookType
    ) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleRowClick = (book: BookType) => {
        dispatch(updateState({ currentBook: book, modalOpen: true }));
    };

    return (
        <TableContainer sx={{ borderRadius: '16px' }}>
            <Table
                sx={{
                    [`& .${tableCellClasses.root}`]: {
                        borderBottom: 'none'
                    }
                }}
            >
                <ListViewTableHead
                    order={order}
                    orderBy={orderBy}
                    onRequestSort={handleRequestSort}
                />
                <TableBody>
                    {stableSort(
                        books.filter((book) => filterSearch(book, search)),
                        getComparator(order, orderBy)
                    ).map((book, index) => (
                        <TableRow
                            key={index}
                            sx={{
                              cursor: 'pointer',
                                '&:last-child td, &:last-child th': {
                                    border: 0
                                }
                            }}
                            onClick={() => handleRowClick(book)}
                        >
                            <TableCell><ListCard title={book.title} author={book.author} image={book.image} /></TableCell>
                            <TableCell>{book.genre}</TableCell>
                            <TableCell>{book.progress}%</TableCell>
                            <TableCell>
                                {book.updatedAt
                                    ? moment(book.updatedAt).fromNow()
                                    : ''}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default ListView;
