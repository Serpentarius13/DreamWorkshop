import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: process.env.serverUrl || "http://localhost:4000",
  cache: new InMemoryCache(),
});

export default client;
