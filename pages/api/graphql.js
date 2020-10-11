import {
  ApolloServer,
  gql,
  makeExecutableSchema
} from 'apollo-server-micro';
import pilots from '../../datasources/entities/pilots';
import ships from '../../datasources/entities/ships';
import enhancements from '../../datasources/entities/enhancements';
import alliances from '../../datasources/entities/alliances';

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
const { Alliance } = alliances.resolvers;

export const schema = makeExecutableSchema({
  typeDefs: [
    ships.typeDefs,
    ships.typeDefs,
    pilots.typeDefs,
    enhancements.typeDefs,
    alliances.typeDefs,
    typeDefs,
  ],
  resolvers: {
    Query: {
      greet: () => 'Welcome do Star Wars X-Wing',
      ...pilots.resolvers.Query,
      ...ships.resolvers.Query,
      ...enhancements.resolvers.Query,
      ...alliances.resolvers.Query,
    },
    Ship,
    Pilot,
    Enhancement,
    Alliance,
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