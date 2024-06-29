import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

import { Navigation } from "./src/navigation";

const client = new ApolloClient({
  uri: "https://fairland-resort-api-c5b3bb10838f.herokuapp.com/graphql",
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Navigation />
    </ApolloProvider>
  );
}
