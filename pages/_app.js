import "../styles/globals.scss";
import { ApolloProvider } from "@apollo/client";
import client from "../apollo-client";
import Sidebar from "../components/sidebar/sidebar.component";

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      {" "}
      <Sidebar>
        <Component {...pageProps} />{" "}
      </Sidebar>
    </ApolloProvider>
  );
}

export default MyApp;
