import {
  gql,
} from 'apollo-server-micro';
import ENHANCEMENTS_DB from './data';
import SHIPS_DB from '../ships/data';

const typeDefs = gql`
  enum EnhancementType {
    ELITE_TALENT
    MODIFICATION
    MISSILE
    CREW
    TITLE
  }

  enum EnhancementSide {
    FRONT,
    BACK,
  }

  type EnhancementSide {
    type: EnhancementSide
    nickname: String
    description: String!
  }

  type Enhancement {
    aliances: [Aliance]
    ships: [Ship]
    slug: String
    name: String
    cost: String
    type: EnhancementType
    sides: [EnhancementSide]
  }

  input EnhancementInput {
    name: String!
  }

  extend type Query {
    enhancements(input: EnhancementInput): [Enhancement]!
    enhancement(input: EnhancementInput): Enhancement
  }
`;


const resolvers = {
  Query: {
    enhancements(_, { input }, ctx) {
      // TODO: Implement
      return ENHANCEMENTS_DB;
    },
    enhancement(_, { input }, ctx) {
      // TODO: Implement
      if(input.name) {
        return ENHANCEMENTS_DB.find((enhancement) => {
          const normalizedInputName = input.name.toLowerCase();
          const normalizedShipName = enhancement.name.toLowerCase();
          return normalizedShipName.includes(normalizedInputName)
        })
      }
      return ENHANCEMENTS_DB[0];
    }
  },
  Enhancement: {
    ships(value) {
      const enhancement = value;
      const hasEnhancementShips = Boolean(enhancement.ships.length); 

      if(!hasEnhancementShips) {
        return SHIPS_DB;
      }

      return SHIPS_DB.filter((ship) => {
        const enhancementShips = new Set(enhancement.ships);

        if(enhancementShips.has(ship.slug)) {
          return true;
        }
        return false;
      });
    }
  }
}

export default {
  typeDefs,
  resolvers,
}