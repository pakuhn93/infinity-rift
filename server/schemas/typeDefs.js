const typeDefs = `
  type CardCharacter {
    _id: ID!
    name: String!
    element: String!
    tags: String
    health: Int!
    strength: Int!  }

  type Deck {
_id:ID!
title: String!
cards: [CardCharacter]
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
    decks: [Deck]
  }
  type Mutation {
    addUser(username: String!, password: String!, email: String!): User
    login(username: String!, password: String!): Login
    deleteUser(username: String,): User
    createDeck(_id:ID, title: String!,cards: [ID]!,): Deck
  }
`;

module.exports = typeDefs;
