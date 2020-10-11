import {
  gql,
} from 'apollo-server-micro';
import SHIP_DB from './data';
import PILOTS_DB from '../pilots/data';

const typeDefs = gql`
  enum ShipSize {
    LARGE
    MEDIUM
    SMALL
  }

  type Ship {
    allianceNames: [AllianceName]
    slug: String
    name: String
    image: String
    amount: Int
    nickname: String,
    size: ShipSize
    pilots: [Pilot]
    urls: [String]
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
    },
    amount(value) {
      const ship = value;
      return ship.urls.length;
    }
  }
}

export default {
  typeDefs,
  resolvers,
}