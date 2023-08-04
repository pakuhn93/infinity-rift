const { CardCharacter, User } = require('../models');
const { signToken, authenticationError } = require('../utils/auth');
const bcrypt = require('bcrypt');
const resolvers = {
    Query: {
        cardCharacters: async () => {
            return CardCharacter.find({});
        },
        users: async () => {
            return User.find({});
        },
    },
    Mutation: {
        addUser: async (parent, { email, username, password }) => {
            // return User.create(args);
            // If no user with email create a new user
            const hashedPassword = await bcrypt.hash(password, 10);
            const newUser = await User.create({
                email,
                username,
                password: hashedPassword,
            });
            return newUser;
        },
        login: async (parent, { username, password }) => {
            const user = await User.findOne({ username });

            if (!user) {
                throw authenticationError;
            }
            const correctPw = await user.isCorrectPassword(password);
            if (!correctPw) {
                throw authenticationError;
            }

            return user;
            // const token = signToken(user);
            // return { token, user };
        },
        deleteUser: async () => {
            return User.deleteOne({ req });
        },
    },
};

module.exports = resolvers;
