import { gql } from "@apollo/client";

export const GET_BOOKS_COLLECTION = gql`
query {
    getAllBooksCollections {
      title
      genre
      description
      author
      image
      progress
      createdAt
      updatedAt
    }
  }
`