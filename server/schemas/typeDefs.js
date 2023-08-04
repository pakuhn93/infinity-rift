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
  
  type Login {
    _id:ID!
    username: String!
    password: String!
  }
  type Query {
    cardCharacters: [CardCharacter]
    users: [User]
  }
  type Mutation {
    addUser(username: String!, password: String!, email: String!): User
    login(username: String!, password: String!): Login
    deleteUser(username: String,): User
  }
`;

module.exports = typeDefs;
