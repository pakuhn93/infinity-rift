const typeDefs = `
  type CardCharacter {
    _id: ID!
    name: String!
    element: String!
  }
  type User {
    _id: ID!
    username: String!
    password: String!
    email: String!
  }
  type Query {
    cardCharacters: [CardCharacter]
    users: [User]
  }
  type Mutation {
    addUser(username: String!, password: String!, email: String!): User
  }
`;

module.exports = typeDefs;
