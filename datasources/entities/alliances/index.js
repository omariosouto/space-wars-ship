import {
  gql,
} from 'apollo-server-micro';
import ALLIANCES_DB from './data';
import PILOTS_DB from '../pilots/data';
import SHIPS_DB from '../ships/data';

function getPilotsByAlliance(alianceType) {
  return PILOTS_DB.filter((pilot) => {
    return pilot.allianceNames.includes(alianceType);
  })
}

function getShipsByAlliance(alianceType) {
  return SHIPS_DB.filter((ship) => {
    return ship.allianceNames.includes(alianceType);
  })
}

const typeDefs = gql`
  enum AllianceName {
    REBELS
    EMPIRE
    SCUM
  }

  type Alliance {
    type: AllianceName
    name: String
    slug: String
    image: String
    pilots: [Pilot]
    ships: [Ship]
  }

  input AllianceInput {
    type: AllianceName!
  }

  extend type Query {
    alliances(input: AllianceInput): [Alliance]!
    alliance(input: AllianceInput): Alliance
  }
`;


const resolvers = {
  Query: {
    alliances(_, { input }, ctx) {
      return ALLIANCES_DB.map((alliance) => {
        return {
          ...alliance,
          pilots: getPilotsByAlliance(alliance.type),
          ships: getShipsByAlliance(alliance.type)
        }
      })
    },
    alliance(_, { input }, ctx) {
      // TODO: Implement [input.type]
      return ALLIANCES_DB
        .filter((alliance) => {
          return alliance.type === input.type;
        })
        .map((alliance) => {
          return {
            ...alliance,
            pilots: getPilotsByAlliance(alliance.type),
            ships: getShipsByAlliance(alliance.type)
          }
        })[0];
    }
  },
  Alliance: {
    slug(alliance) {
      return alliance.type.toLowerCase();
    }
  }
}

export default {
  typeDefs,
  resolvers
}