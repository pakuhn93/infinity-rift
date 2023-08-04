const typeDefs = `
  type CardCharacter {
    _id: ID!
    name: String!
    element: String!
  }
  type Query {
    cardCharacters: [CardCharacter]
  }
`;

module.exports = typeDefs;
