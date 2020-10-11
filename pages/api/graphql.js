import {
  ApolloServer,
  gql,
  makeExecutableSchema
} from 'apollo-server-micro';
import pilots from '../../datasources/entities/pilots';
import ships from '../../datasources/entities/ships';
import enhancements from '../../datasources/entities/enhancements';
import aliances from '../../datasources/entities/aliances';

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
const { Enhancement } = enhancements.resolvers;

export const schema = makeExecutableSchema({
  typeDefs: [
    ships.typeDefs,
    ships.typeDefs,
    pilots.typeDefs,
    enhancements.typeDefs,
    aliances.typeDefs,
    typeDefs,
  ],
  resolvers: {
    Query: {
      greet: () => 'Welcome do Star Wars X-Wing',
      ...pilots.resolvers.Query,
      ...ships.resolvers.Query,
      ...enhancements.resolvers.Query,
      ...aliances.resolvers.Query,
    },
    Ship,
    Pilot,
    Enhancement,
  },
});

const server = new ApolloServer({
  schema,
  introspection: true,
  playground: true,
});

export default (req, res) => {
  server.createHandler({
    path: '/api/graphql/',
  })(req,res);
}