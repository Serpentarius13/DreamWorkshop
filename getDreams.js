import client from "./apollo-client";
import { gql } from "@apollo/client";

export async function getDreams() {
  const { data } = await client.query({
    query: gql`
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
    `,
  });

  return data.getAll;
}
