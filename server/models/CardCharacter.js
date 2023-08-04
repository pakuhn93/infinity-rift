const { Schema, model } = require('mongoose');

const cardCharacterSchema = new Schema({
    tags: {
        type: String,
    },
    name: {
        type: String,
        // required: true,
    },
    element: {
        type: String,
        // required: true,
    },
    strength: {
        type: Number,
        // required: true,
    },
    health: {
        type: Number,
        // required: true,
    },
});

const CardCharacter = model(`CardCharacter`, cardCharacterSchema);

module.exports = CardCharacter;
