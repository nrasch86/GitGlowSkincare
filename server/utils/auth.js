const { GraphQLError } = require("graphql");
const jwt = require("jsonwebtoken");


const expiration = process.env.EXPIRATION;

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
      const { data } = jwt.verify(token, process.env.SECRET, { maxAge: expiration });
      req.user = data;
    } catch (error) {
      console.log("Error verifying token:", error);
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
    return jwt.sign({ data: payload }, process.env.SECRET, { expiresIn: expiration });
  },
};