//Functions that resolve the various fields in your GraphQL schema.
const {Product, User} = require('../models')
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
    Query: {
        users: async () => {
            return User.find();
        },
      user: async (parent, { username }) => {
        return User.findOne({ _id: username });
      },
      me: async (parent, context) => {
        console.log(context.user)
        if (context.user) {
          return User.findOne({ _id: context.user._id });
        }
        throw AuthenticationError;
      },
    },
  
    Mutation: {
        addUser: async (parent, { username, email, password }) => {
        const user = await User.create({ username, email, password });
        const token = signToken(user);
  
        return { token, user };
      },
      login: async (parent, { email, password }) => {
        console.log ("login:", email,password);
        const user = await User.findOne({ email });
  console.log ("Found user:", user);
        if (!user) {
          throw AuthenticationError
        }
  
        const correctPw = await user.isCorrectPassword(password);
  
        if (!correctPw) {
          throw AuthenticationError
        }
  console.log ("authenticated");
        const token = signToken(user);
  console.log("TOKEN:", token);
        return { token, user };
      },
  
     
    
    },
  };
  
  module.exports = resolvers;
  
