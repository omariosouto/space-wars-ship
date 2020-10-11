import {
  gql,
} from 'apollo-server-micro';
import SHIPS_DB from '../ships/data';
import PILOTS_DB from './data';

const typeDefs = gql`
  type Pilot {
    allianceNames: [AllianceName]
    name: String!
    slug: String 
    description: String
    image: String
    cost: Int 
    expertise: Int 
    ships: [Ship]
    enhancementTypes: [EnhancementType]
  }

  input PilotInput {
    name: String!
  }

  extend type Query {
    pilots(input: PilotInput): [Pilot]!
    pilot(input: PilotInput): Pilot
  }
`; 

const resolvers = {
  Query: {
    pilots(_, { input }, ctx) {
      // TODO: Implement
      return PILOTS_DB;
    },
    pilot(_, { input }, ctx) {
      // TODO: Implement
      return PILOTS_DB[0];
    }
  },
  Pilot: {
    ships(value) {
      const pilotShips = new Set(value.ships);
      return SHIPS_DB.filter((ship) => pilotShips.has(ship.slug));
    }
  }
}

export default {
  typeDefs,
  resolvers,
}