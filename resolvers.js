const jwt = require("jsonwebtoken");

const createToken = (user, secret, expiresIn) => {
  const { username, email } = user;
  return jwt.sign({ username, email }, secret, { expiresIn });
};

exports.resolvers = {
  Query: {
    getAllPublications: async (root, args, { Publication }) => {
      const allPublications = await Publication.find();
      return allPublications;
    }
  },
  Mutation: {
    addPublication: async (
      root,
      { name, description, category, instructions, username },
      { Publication }
    ) => {
      const newPublication = await new Publication({
        name,
        description,
        category,
        instructions,
        username
      }).save();
      return newPublication;
    },

    signupUser: async (root, { username, email, password }, { User }) => {
      const user = await User.findOne({ username });
      if (user) {
        throw new Error("User already exists");
      }
      const newUser = await new User({
        username,
        email,
        password
      }).save();
      return { token: createToken(newUser, process.env.SECRET, "1hr") };
    }
  }
};
