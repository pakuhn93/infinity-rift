const { CardCharacter, User, Deck } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');
const bcrypt = require('bcrypt');
const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id });
                return userData;
            }
            throw AuthenticationError;
        },

        cardCharacters: async (parent, args) => {
            return await CardCharacter.find({});
        },
        decks: async () => {
            return Deck.find({}).populate('cards');
        },
        users: async () => {
            return User.find({});
        },
    },
    Mutation: {
        // getSingleDeck: async (parent, { id }) => {
        //     // const data = this.deck;
        //     return Deck.findById(id).populate('cards');
        // },

        register: async (parent, args) => {
            // const hashedPassword = await bcrypt.hash(password, 10);
            const user = await User.create(args);
            const token = signToken(user);
            console.log(user);
            return { token, user };
        },
        createDeck: async (parent, { title, cards }, context) => {
            if (context.user) {
                console.log(title, cards, 'title and cards');
                let newDeck = await Deck.create({ title, cards });
                newDeck = await newDeck.populate('cards');
                return newDeck;
            }
            throw AuthenticationError;
        },
        deleteDeck: async (parent, { id }, context) => {
            if (context.user) {
                const deletedDeck = await Deck.findByIdAndDelete(id, {
                    new: true,
                });
                return deletedDeck;
            }
            throw AuthenticationError;
        },
        addToDeck: async (parent, args, context) => {
            if (context.user) {
                const updatedDeck = await Deck.findByIdAndUpdate(
                    args.deckId,
                    {
                        $push: {
                            cards: args.cardId,
                        },
                    },
                    { new: true }
                );

                return updatedDeck;
            }
            throw AuthenticationError;
        },
        // removeFromDeck: async (parent, args, context) => {
        //     if (context.user) {
        //         const updatedDeck = await Deck.findByIdAndUpdate(
        //             args.deckId,
        //             {
        //                 $pull: {
        //                     cards: args.cardId,
        //                 },
        //             },
        //             { new: true }
        //         );

        //         return updatedDeck;
        //     }
        //     throw AuthenticationError;
        // },
        // updateDeck: async (parent{title, cards}, context) => {
        //     if (context.user) {
        //         let newdeck = await Deck.findOneAndUpdate({})
        //     }
        // }

        // deleteDecks:

        // createCardCharacter:
        login: async (parent, { username, password }) => {
            const user = await User.findOne({ username });

            if (!user) {
                throw AuthenticationError;
            }
            const correctPw = await user.isCorrectPassword(password);
            if (!correctPw) {
                throw AuthenticationError;
            }

            const token = signToken(user);

            return { token, user };
        },
        // getSingleUser: async (parent, args, context) => {
        //     const desiredUser = await User.findById({ _id: context.user._id });
        // },
        // deleteUser: async () => {
        //     return User.deleteOne({ req });
        //     console.log('deleted user');
        // },
    },
};

module.exports = resolvers;
