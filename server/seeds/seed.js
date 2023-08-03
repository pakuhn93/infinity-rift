const db = require('../config/connection');
const { CardCharacter } = require('../models');
const characterSeeds = require('./characterSeeds.json');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
    await CardCharacter.deleteMany({});
    await CardCharacter.insertMany(characterSeeds);
    // for (const characterData of characterSeeds) {
    //     const newCharacter = new CardCharacter(characterData);
    //     await newCharacter.save();
    // }
    console.log('Characters have all been deleted');
    process.exit(0); // exit the current process of deleteing all characters
});
