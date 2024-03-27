//Functions that resolve the various fields in your GraphQL schema.
const {Product, User} = require('../models')
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
    Query: {
        user: async () => {
        return User.find();
      },
  
      user: async (parent, { userId }) => {
        return User.findOne({ _id: userId });
      },
    },
  
    Mutation: {
        addUser: async (parent, { username, email, password }) => {
        const user = await User.create({ username, email, password });
        const token = signToken(user);
  
        return { token, user };
      },
      login: async (parent, { email, password }) => {
        const profuserile = await User.findOne({ email });
  
        if (!user) {
          throw AuthenticationError
        }
  
        const correctPw = await user.isCorrectPassword(password);
  
        if (!correctPw) {
          throw AuthenticationError
        }
  
        const token = signToken(user);
        return { token, user };
      },
  
     
    
    },
  };
  
  module.exports = resolvers;
  