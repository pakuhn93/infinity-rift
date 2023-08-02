const typeDefs = `
type Test {
    _id: ID!
    name: String
}

type Query {
    tests: [Test]
}
`;

module.exports = typeDefs;
