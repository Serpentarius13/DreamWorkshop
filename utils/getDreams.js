import { gql, useQuery } from "@apollo/client";

const query = gql`
  query Query {
    getAll {
      name
      time
      email
      dreamName
      description
      _id
    }
  }
`;


export default () => useQuery(query);
