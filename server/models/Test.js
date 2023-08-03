const { Schema, model } = require('mongoose');

const testSchema = new Schema({
    name: String
});

const Test = model('test', testSchema);

module.exports = Test;