import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api.lens.dev",
  cache: new InMemoryCache(),
});

export default client;
// mumbai - https://api-mumbai.lens.dev/
// polygon playground - https://api-mumbai.lens.dev/playground
// mumbai playground - https://api.lens.dev/playground
