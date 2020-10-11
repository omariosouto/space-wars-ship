import {
  gql,
} from 'apollo-server-micro';
import ALIANCES_DB from './data';
import PILOTS_DB from '../pilots/data';
import SHIPS_DB from '../ships/data';

function getPilotsByAliance(alianceType) {
  return PILOTS_DB.filter((pilot) => {
    return pilot.alianceNames.includes(alianceType);
  })
}

function getShipsByAliance(alianceType) {
  return SHIPS_DB.filter((ship) => {
    return ship.alianceNames.includes(alianceType);
  })
}

const typeDefs = gql`
  enum AlianceName {
    REBELS
    EMPIRE
    SCUM
  }

  type Aliance {
    name: AlianceName
    pilots: [Pilot]
    ships: [Ship]
  }

  input AlianceInput {
    name: String!
  }

  extend type Query {
    aliances(input: AlianceInput): [Aliance]!
    aliance(input: AlianceInput): Aliance
  }
`;


const resolvers = {
  Query: {
    aliances(_, { input }, ctx) {
      // TODO: Implement [input.name]

      return ALIANCES_DB.map((aliance) => {
        return {
          ...aliance,
          pilots: getPilotsByAliance(aliance.name),
          ships: getShipsByAliance(aliance.name)
        }
      })
    },
    aliance(_, { input }, ctx) {
      // TODO: Implement [input.name]
      return ALIANCES_DB[0];
    }
  },
}

export default {
  typeDefs,
  resolvers
}