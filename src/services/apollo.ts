import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://fairland-resort-api-c5b3bb10838f.herokuapp.com/graphql",
  cache: new InMemoryCache(),
});
