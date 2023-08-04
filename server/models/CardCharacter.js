const { Schema, model } = require('mongoose');

const cardCharacterSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    element: {
        type: String,
        required: true,
    },
    tags: {
        type: String,
    },
    health: {
        type: Number,
        required: true,
    },
    strength: {
        type: Number,
        required: true,
    },

    // stats: {
    //     health: {
    //         type: String,
    //         required: true,
    //     },
    //     strength: {
    //         type: String,
    //         required: true,
    //     },
    // },
});

const CardCharacter = model(`CardCharacter`, cardCharacterSchema);

module.exports = CardCharacter;
