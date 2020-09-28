import {
  gql,
} from 'apollo-server-micro';
import SHIP_DB from './ships';
import PILOTS_DB from '../pilots/pilots';

const typeDefs = gql`
  type Ship {
    slug: String
    name: String
    nickname: String,
    pilots: [Pilot]
  }

  input ShipInput {
    name: String!
  }

  extend type Query {
    ships(input: ShipInput): [Ship]!
    ship(input: ShipInput): Ship
  }
`; 

const resolvers = {
  Query: {
    ships(_, { input, ...args }, ctx) {
      console.log(_, args, ctx, input);
      // TODO: Implement
      return SHIP_DB;
    },
    ship(_, { input }, ctx) {
      // TODO: Implement
      return SHIP_DB[0];
    }
  },
  Ship: {
    pilots(value) {
      const shipPilots = new Set(value.pilots);
      return PILOTS_DB.filter((pilot) => shipPilots.has(pilot.slug));
    }
  }
}

export default {
  typeDefs,
  resolvers,
}