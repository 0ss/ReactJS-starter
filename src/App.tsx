import { ChakraProvider } from "@chakra-ui/react"
import * as Integrations from "@sentry/integrations"
import * as Sentry from "@sentry/react"
import React from "react"
import { Toaster } from "react-hot-toast"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { Page404 } from "./components/Page404"
import { Project } from "./components/Project"
import { Spinner } from "./components/Spinner"
import { ROUTES } from "./constants"
import { useTrackEvent } from "./hooks/useTrackEvents"
import { useUserQuery } from "./queries/graphql"
import { amplitude } from "./utils/amplitude"
/**
 * Lazy Route
 */
const SignIn = React.lazy(() => import("./components/SignIn"))
const SignUp = React.lazy(() => import("./components/SignUp"))
const ResetPassword = React.lazy(() => import("./components/ResetPassword"))
const Dashboard = React.lazy(() => import("./components/Dashboard"))

/**
 * Third parties API's
 */
Sentry.init({
    dsn: process.env.REACT_APP_SENTRY_DSN,
    integrations: [new Integrations.ReportingObserver()],
    tracesSampleRate: 1.0,
})

/**
 * App
 */
export const App: React.FC = () => {
    const { data, loading, error } = useUserQuery({
        fetchPolicy: "network-only",
    })
    if (data?.user?.email && data?.user?.id) {
        Sentry.setUser({ id: data.user.id, email: data.user.email })
    }
    useTrackEvent()
    return (
        <ChakraProvider>
            <Toaster />
            <React.Suspense fallback={<Spinner />}>
                <Router>
                    <Switch>
                        <Route exact path={ROUTES.SIGN_UP} component={SignUp} />
                        <Route exact path={ROUTES.SIGN_IN} component={SignIn} />
                        <Route
                            path={ROUTES.RESET_PASSWORD}
                            component={ResetPassword}
                        />
                        <Route path={ROUTES.PROJECT} component={Project} />
                        <Route
                            exact
                            path={ROUTES.PROJECT_TEAM}
                            component={Project}
                        />
                        <Route path={ROUTES.HELP} component={Project} />
                        <Route component={Page404} />
                    </Switch>
                </Router>
            </React.Suspense>
        </ChakraProvider>
    )
}
export default App
