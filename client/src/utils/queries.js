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

export const QUERY_SINGLE_PRODUCT = gql`
query singleProduct($productId: ID!) {
    product(productId: $productId) {
      _id
      name
      image
      description
      price
    }
  }
`;

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
    }
  }
`;