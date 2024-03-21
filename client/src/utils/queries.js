// GraphQL queries for fetching data from the server.
import { gql } from '@apollo/client';

export const QUERY_PRODUCTS = gql`
{
    products {
        _id
        name
        image
        description
        price
    }
}
`;

export const QUERY_USER = gql`
{ 
    user {
firstName
lastName
orders {
    _id
    products {
        _id
        name
        description
        price
        quantity
        image
    }
   }
  }
 }
`;