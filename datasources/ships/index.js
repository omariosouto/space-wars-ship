import {
  gql,
} from 'apollo-server-micro';
import SHIP_DB from './data';
import PILOTS_DB from '../pilots/data';

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
      const ship = value;
      return PILOTS_DB.filter((pilot) => {
        const pilotShips = new Set(pilot.ships);
        return pilotShips.has(ship.slug);
      });
    }
  }
}

export default {
  typeDefs,
  resolvers,
}