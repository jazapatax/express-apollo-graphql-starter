exports.typeDefs = `

type Publication {
  _id: ID
  name: String!
  category: String!
  description: String!
  instructions: String!
  createdDate: String
  likes: Int
  username: String
}

type User {
  _id: ID
  username: String! @unique
  password: String!
  email: String!
  joinDate: String
  favorites: [Recipe]
}

type Query {
  getAllPublications: [Publication]
}

type Token {
  token: String!
}

type Mutation {
  addPublication(name: String!, description: String!, category: String!, instructions: String!, username: String): Publication

  signupUser(username: String!, email: String!, password: String!): Token
}

`;
