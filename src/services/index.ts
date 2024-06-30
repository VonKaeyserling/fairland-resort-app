import { ApolloClient, InMemoryCache } from "@apollo/client";

import { ApolloAuthService } from "./auth/apollo.service";
import { AuthRepository } from "./auth/types";

export const client = new ApolloClient({
  uri: "https://fairland-resort-api-c5b3bb10838f.herokuapp.com/graphql",
  cache: new InMemoryCache(),
});

export const authService: AuthRepository = new ApolloAuthService(client);
