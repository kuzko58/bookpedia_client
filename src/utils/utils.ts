import { BookType } from "../types/book.type";

export const filterSearch = (book: BookType, keyword: string) => {
    if (keyword === '') return true;

    const regex = new RegExp(`\\b${keyword.toLocaleLowerCase()}`, 'gi')

    if (book.title.match(regex) || book.author.match(regex)) return true;

    return false;
}