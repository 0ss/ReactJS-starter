import {
  ApolloClient,
  InMemoryCache
} from "@apollo/client"
import { REACT_APP_GRAPHQL_URL } from "../constants"
import { useAuthToken } from "../hooks/useAuthToken"

const [authToken, setAuthToken] = useAuthToken()

export const client = new ApolloClient({
    uri: REACT_APP_GRAPHQL_URL,
    cache: new InMemoryCache(),
    credentials:'include',
    headers :{
      Authorization: `Bearer ${authToken}`,
    },
})
