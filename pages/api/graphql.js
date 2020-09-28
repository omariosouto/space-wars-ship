import {
  ApolloServer,
  gql,
  makeExecutableSchema
} from 'apollo-server-micro';
import pilots from '../../datasources/pilots';
import ships from '../../datasources/ships';

const typeDefs = gql`
  type Query {
    greet: String
  }
`;

export const config = {
  api: {
    bodyParser: false
  }
};

const { Pilot } = pilots.resolvers;
const { Ship } = ships.resolvers;

export const schema = makeExecutableSchema({
  typeDefs: [
    ships.typeDefs,
    pilots.typeDefs,
    typeDefs,
  ],
  resolvers: {
    Query: {
      greet: () => 'Welcome do Star Wars X-Wing',
      ...pilots.resolvers.Query,
      ...ships.resolvers.Query,
    },
    Ship,
    Pilot,
  },
});

const server = new ApolloServer({
  schema,
});

export default (req, res) => {
  server.createHandler({
    path: '/api/graphql/',
  })(req,res);
}