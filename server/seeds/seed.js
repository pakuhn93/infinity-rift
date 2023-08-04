const db = require('../config/connection');
const { CardCharacter, User, Deck } = require('../models');
const characterSeeds = require('./characterSeeds.json');
const deckseeds = require('./deckSeeds.json');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
    await CardCharacter.deleteMany({});
    await CardCharacter.insertMany(characterSeeds);
    console.log('Characters have all been deleted');

    await Deck.deleteMany({});
    await Deck.insertMany(deckseeds);
    console.log('Decks have all been deleted');
    process.exit(0); // exit the current process of deleteing all characters
});
