const { CardCharacter, User } = require('../models');
const resolvers = {
    Query: {
        cardCharacters: async () => {
            return CardCharacter.find({});
        },
    },
    Mutation: {
        addUser: async (parent, args) => {
            return User.create(args);
        },
    },
};

module.exports = resolvers;
