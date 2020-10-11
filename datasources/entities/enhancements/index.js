import {
  gql,
} from 'apollo-server-micro';
import ENHANCEMENTS_DB from './data';
import SHIPS_DB from '../ships/data';

const typeDefs = gql`
  enum EnhancementType {
    ELITE_TALENT
    ASTROMECH
    TORPEDO
    MODIFICATION
    MISSILE
    CREW
    TITLE
  }

  enum EnhancementSides {
    FRONT,
    BACK,
  }

  type EnhancementSide {
    type: EnhancementSides
    nickname: String
    description: String!
  }

  type EnhancementShipRestriction {
    sizes: [ShipSize]
  }

  type EnhancementRestrictions {
    ships: EnhancementShipRestriction
  }

  type Enhancement {
    allianceNames: [AllianceName]
    ships: [Ship]
    slug: String
    name: String
    cost: String
    type: EnhancementType
    sides: [EnhancementSide]
    restrictions: EnhancementRestrictions
  }

  input EnhancementInput {
    name: String!
  }

  extend type Query {
    enhancements(input: EnhancementInput): [Enhancement]!
    enhancement(input: EnhancementInput): Enhancement
  }
`;

function checkShipEnhancementRestrictions(enhancementShipRestrictions, ship) {
  const shipRestrictionKeys = Object.keys(enhancementShipRestrictions);
  return shipRestrictionKeys.reduce((_, shipRestrictionKey) => {
    const shipRestrictionSet = new Set(enhancementShipRestrictions[shipRestrictionKey]);
    const currentShipRestrictionValue = ship[shipRestrictionKey];
    return shipRestrictionSet.has(currentShipRestrictionValue);
  }, true);
}

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
      const hasEnhancementShipsAssociated = Boolean(enhancement.ships.length); 
      const hasRestrictions = Boolean(enhancement.restrictions);
      
      if(!hasEnhancementShipsAssociated) {
        return SHIPS_DB.filter((ship) => {
          if(hasRestrictions) {
            if(enhancement.restrictions.ships) {
              return checkShipEnhancementRestrictions(
                enhancement.restrictions.ships,
                ship
              )
            }
          }

          return true;
        });
      }

      return SHIPS_DB.filter(function associatedShips(ship) {
        const enhancementShips = new Set(enhancement.ships);

        if(enhancementShips.has(ship.slug)) {
          return true;
        }
        return false;
      });
    }
  },
}

export default {
  typeDefs,
  resolvers,
}