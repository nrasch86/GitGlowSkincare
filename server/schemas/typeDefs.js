//GraphQL type definitions for your data models.
const typeDefs = `
type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    orders: [Order]
}

type Order {
    _id: ID
    purchaseDate: String
    products: [Product]
  }

type Product {
    _id: ID
    name: String
    description: String
    image: String
  price: Float
    Reviews: [Review]
}

type Review {
    _id: ID
    rating: Int!
    author: User!
    reviewText: String!
}

type Checkout {
    session: ID
  }

type Auth {
    token: ID
    user: User
  }

type Query {
    user: User
    products: [Product]!
    product(productID: ID!): Product
    reviews(productID: ID!): [Review]! 
    order(_id: ID!): Order
    checkout(products: [ID]!): Checkout
}

type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addOrder(products: [ID]!): Order
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    login(email: String!, password: String!): Auth
    // ----------------------------------------------------------------- //
    addProduct(name: String!, description: String!): Product
    addReview(productID: ID!, rating: Int!, reviewText: String!): Product
    updateProduct(_id: ID!, quantity: Int!): Product
    removeProduct(productID: ID!): Product
    removeReview(productID: ID!, reviewID: ID!): Product
}

`