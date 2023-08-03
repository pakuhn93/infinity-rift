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
        type: Object,
    },
});

const CardCharacter = model(`CardCharacter`, cardCharacterSchema);

module.exports = CardCharacter;
