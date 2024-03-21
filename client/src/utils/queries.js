// GraphQL queries for fetching data from the server.
import { gql } from '@apollo/client';

export const QUERY_PRODUCTS =gql `
query allProducts {
    products {
        _id
        name
        description
    }
}
`