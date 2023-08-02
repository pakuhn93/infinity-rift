const Test = require('../models');

const resolvers = {
  Query: {
    tests: async () => {
      return Test.find({});
    }

  },
  // Mutation: {
  // },
};

module.exports = resolvers;
