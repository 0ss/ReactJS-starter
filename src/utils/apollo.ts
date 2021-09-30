import { ApolloClient, from, HttpLink, InMemoryCache } from "@apollo/client"
import { REACT_APP_GRAPHQL_URL } from "../constants"
import { AUTH_TOKEN, useAuthToken } from "../hooks/useAuthToken"
import { onError } from "@apollo/client/link/error"


const httpLink = new HttpLink({
    uri: REACT_APP_GRAPHQL_URL,
    credentials: "include",
    headers: {
        Authorization: `Bearer ${localStorage.getItem(AUTH_TOKEN)}`,
    },
})
const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
        graphQLErrors.forEach(({ message, locations, path }) =>
            console.log(
                `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
            )
        )

    if (networkError) console.log(`[Network error]: ${networkError}`)
})
export const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: from([errorLink, httpLink]),
})
