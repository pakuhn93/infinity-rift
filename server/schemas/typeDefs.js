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
  
  type Auth {
    token: ID!
    user: User
  }
  type Query {
    me: User
    cardCharacters: [CardCharacter]
    users: [User]
    decks: [Deck]
    deck: Deck
  }
  type Mutation {
    addUser(username: String!, password: String!, email: String!): Auth
    login(username: String!, password: String!): Auth
    createDeck(title: String!, cards: [ID]!): Deck
    deleteDeck(id: ID!): Deck
    addToDeck (deckId: ID!, cardId: ID!): Deck
    removeFromDeck (deckId: ID!, cardId: ID!): Deck
  }
`;

module.exports = typeDefs;
// deleteUser(username: String,): User
