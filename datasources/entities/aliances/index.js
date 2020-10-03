import {
  gql,
} from 'apollo-server-micro';

const typeDefs = gql`
  enum Aliance {
    REBELS
    EMPIRE
    SCUM
  }
`;

export default {
  typeDefs,
}