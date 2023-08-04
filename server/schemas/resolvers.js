const { CardCharacter, User, Deck } = require('../models');
const { signToken, authenticationError } = require('../utils/auth');
const bcrypt = require('bcrypt');
const resolvers = {
    Query: {
        cardCharacters: async (parent, args) => {
            return await CardCharacter.find({});
        },
        users: async () => {
            return User.find({});
        },
        decks: async () => {
            return Deck.find({}).populate('cards');
        },
        // deck: async (parent, { _id }) => {
        //     return Deck.findById({ _id }).populate('CardCharacter');
        // },
    },
    Mutation: {
        addUser: async (parent, { email, username, password }) => {
            const hashedPassword = await bcrypt.hash(password, 10);
            const newUser = await User.create({
                email,
                username,
                password: hashedPassword,
            });
            return newUser;
        },
        createDeck: async (parent, { title, cards }) => {
            console.log(title, cards, 'title and cards');
            let newDeck = await Deck.create({ title, cards });
            newDeck = await newDeck.populate('cards');
            return newDeck;
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
        // deleteUser: async () => {
        //     return User.deleteOne({ req });
        //     console.log('deleted user');
        // },
    },
};

module.exports = resolvers;
