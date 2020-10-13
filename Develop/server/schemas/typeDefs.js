// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
  type Query {
    me: user
  }

  type Mutation {
    loginUser(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(description: String!, title: String!, bookId: ID!, image; Image!, link: URL!): [Book]
    removeBook(bookId: ID!): User
  }

  type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    saveBooks: [Book]
  }

  type Book {
    bookId: ID
    authors: [String]
    discription: String
    title: String
    image: image
    link: URL
  }

  type Auth {
    token: ID
    user: User
  }
`;

// export the typeDefs
module.exports = typeDefs;