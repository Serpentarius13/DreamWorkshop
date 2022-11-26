import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: 'https://dream-workshop.herokuapp.com/',
  cache: new InMemoryCache(),
});

export default client;
