import "../styles/globals.css";
import { ApolloProvider } from "@apollo/client/react";
import client from "../apollo-client";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}

export default MyApp;
