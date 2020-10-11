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
    name: AllianceName
    slug: String
    image: String
    pilots: [Pilot]
    ships: [Ship]
  }

  input AllianceInput {
    name: AllianceName!
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
          pilots: getPilotsByAlliance(alliance.name),
          ships: getShipsByAlliance(alliance.name)
        }
      })
    },
    alliance(_, { input }, ctx) {
      // TODO: Implement [input.name]
      return ALLIANCES_DB
        .filter((alliance) => {
          return alliance.name === input.name;
        })
        .map((alliance) => {
          return {
            ...alliance,
            pilots: getPilotsByAlliance(alliance.name),
            ships: getShipsByAlliance(alliance.name)
          }
        })[0];
    }
  },
  Alliance: {
    slug(alliance) {
      return alliance.name.toLowerCase();
    }
  }
}

export default {
  typeDefs,
  resolvers
}