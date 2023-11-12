const { gql, ApolloServer } = require("apollo-server");
const typeDefs = gql`
  type Query {
    greeting: String
  }
`;

const resolvers = {
  Query: {
    greeting: () => "Hello word!",
  },
};
const server = new ApolloServer({ typeDefs, resolvers });

server
  .listen({ port: 8000 })
  .then(({ url }) => console.log(`server is running at${url}`));
