const { gql, ApolloServer } = require("apollo-server");

// Define the User type
const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    email: String!
  }

  type Query {
    greeting: String
  }

  type Mutation {
    registerUser(username: String!, email: String!): User!
  }
`;

// Define the resolvers for the User type and createUser mutation
const resolvers = {
  Query: {
    greeting: () => "Hello world!",
  },
  Mutation: {
    registerUser: (parent, args) => {
      // Here you would typically create a new user in your database
      // and return the newly created user object
      const newUser = {
        id: "1",
        username: args.username,
        email: args.email,
      };
      return newUser;
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server
  .listen({ port: 8000 })
  .then(({ url }) => console.log(`server is running at ${url}`));
