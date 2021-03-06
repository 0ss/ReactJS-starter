import { ApolloClient, from, HttpLink, InMemoryCache } from "@apollo/client";
import { REACT_APP_GRAPHQL_URL } from "../constants";
import { AUTH_TOKEN, useAuthToken } from "../hooks/useAuthToken";
import { onError } from "@apollo/client/link/error";
import { setContext } from '@apollo/client/link/context';

 
const httpLink = new HttpLink({
  uri: "http://192.168.100.3:3000/api/graphql",
  credentials: "include",
});
const setAuthorizationLink = setContext((_, { headers }) => ({
  headers: {
    headers,
    authorization: `Bearer ${ localStorage.getItem('auth_token') }`
  }
}));
const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );

  if (networkError) console.log(`[Network error]: ${networkError}`);
});

export const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: from([setAuthorizationLink, errorLink, httpLink]),
});
