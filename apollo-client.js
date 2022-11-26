import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const link = new HttpLink({
  uri: "http://localhost:400",
  credentials: "same-origin",
});

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

export default client;
