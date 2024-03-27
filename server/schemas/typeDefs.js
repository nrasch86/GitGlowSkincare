const typeDefs = `
type User {
    _id: ID
    username: String
    email: String
    password: String
}

type Product {
    _id: ID
    name: String
    description: String
    image: String
    price: Float
}

type Auth {
    token: ID
    user: User
  }

type Query {
    users: [User]!
    user(_id: ID!): User
    products: [Product]!
}

type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    updateUser(username: String, email: String, password: String): User
    login(email: String!, password: String!): Auth
    addProduct(name: String!, description: String!): Product
}
`;

module.exports = typeDefs;