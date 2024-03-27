const { GraphQLError } = require("graphql");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

module.exports = {
  AuthenticationError: new GraphQLError("Could not authenticate user.", {
    extensions: {
      code: "UNAUTHENTICATED",
    },
  }),
  authMiddleware: function ({ req }) {
    let token = req.body.token || req.query.token || req.headers.authorization;

    if (req.headers.authorization) {
      token = token.split(" ").pop().trim();
    }
    
    if (!token) {
      return req;
    }

    try {
      const { data } = jwt.verify(token, process.env.SECRET, { maxAge: process.env.EXPIRATION });
      req.user = data;
    } catch (error) {
      throw new GraphQLError("Invalid token", {
        extensions: {
          code: "UNAUTHENTICATED",
        },
      });
    }
    return req;
  },
  signToken: function ({ email, username, _id }) {
    const payload = { email, username, _id };
    const token= jwt.sign({ data: payload }, process.env.SECRET, { expiresIn: process.env.EXPIRATION });
    return token;
  },
};