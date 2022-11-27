import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

export const endpoint = 'https://dream-workshop.herokuapp.com/'

const client = new ApolloClient({
  uri: endpoint,
  cache: new InMemoryCache(),
});

export default client;
