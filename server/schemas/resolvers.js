const { CardCharacter } = require('../models');
const resolvers = {
    Query: {
        cardCharacters: async () => {
            return CardCharacter.find({});
        },
    },
    // Mutation: {},
};

module.exports = resolvers;
