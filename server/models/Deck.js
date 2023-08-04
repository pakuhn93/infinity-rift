const { Schema, model } = require('mongoose');

const deckSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    cards: [
        {
            type: Schema.Types.Mixed,
            ref: 'CardCharacter',
        },
    ],
});

const Deck = model('Deck', deckSchema);

module.exports = Deck;
