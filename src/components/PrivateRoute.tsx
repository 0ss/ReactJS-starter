import React, { Component } from "react"
import {
    Redirect,
    Route,
    RouteComponentProps,
    RouteProps,
} from "react-router-dom"
import { ROUTES } from "../constants"
import { useUserQuery } from "../queries/graphql"
import { Spinner } from "./Spinner"

type PrivateRouteProps = RouteProps & {
    component: React.FC<RouteComponentProps>
}

export const PrivateRoute: React.FC<PrivateRouteProps> = ({
    component: Component, // Aliasing a Variable, check comments bellow ;)
    ...rest
}) => {
    const { data, loading } = useUserQuery()

    if (loading) return <Spinner />
    return (
        <Route
            {...rest}
            render={(props) =>
                !!data?.user ? (
                    <Component {...props} />
                ) : (
                    <Redirect to={ROUTES.SIGN_IN} />
                )
            }
        />
    )
}

/**
 * let obj = {
  a: 'thing A',
  b: 'thing B'
}

let { a: newVariable } = obj
console.log(newVariable) // outputs: "thing A"
 */
