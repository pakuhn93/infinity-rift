const typeDefs = `
  type CardCharacter {
    _id: ID!
    name: String!
    element: String!
    tags: String
    health: Int!
    strength: Int!  }

    type Friend {
      username: String!
    }

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
    friends: [Friend]
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
  }
  type Mutation {
    register(username: String!, password: String!, email: String!): Auth
    login(username: String!, password: String!): Auth
    createDeck(title: String!, cards: [ID]!): Deck
    deleteDeck(id: ID!): Deck
    addToDeck (deckId: ID!, cardId: ID!): Deck
    removeFromDeck (deckId: ID!, cardId: ID!): Deck
  }
`;

module.exports = typeDefs;
// deleteUser(username: String,): User
