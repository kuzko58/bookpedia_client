export interface BookType {
    title: string;
    author: string;
    genre: string;
    progress: string | number;
    image: string;
    description: string,
    updatedAt?: Date | string;
    createdAt?: Date | string;
}