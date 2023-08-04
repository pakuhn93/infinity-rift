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
user: User
  }
  type Query {
    cardCharacters: [CardCharacter]
    users: [User]
    decks: [Deck]
    deck: Deck
  }
  type Mutation {
    addUser(username: String!, password: String!, email: String!): User
    login(username: String!, password: String!): Login
    createDeck(title: String!, cards: [ID]!): Deck
  }
`;

module.exports = typeDefs;
// deleteUser(username: String,): User
