/* eslint-disable */
import { ChakraProvider } from "@chakra-ui/react"
import React from "react"
import { Toaster } from "react-hot-toast"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { PrivateRoute } from "./components/PrivateRoute"
import { Spinner } from "./components/Spinner"
import { Page404 } from "./components/Page404"
import { Project } from "./components/Project"
import { ROUTES } from "./constants"
import { useUserQuery } from "./queries/graphql"

const SignIn = React.lazy(() => import("./components/SignIn"))
const SignUp = React.lazy(() => import("./components/SignUp"))
const ResetPassword = React.lazy(() => import("./components/ResetPassword"))
const Dashboard = React.lazy(() => import("./components/Dashboard"))
 
// Sentry.init({
//     dsn: "https://c606199dd2104835a53cad78e7ee5d49@o995262.ingest.sentry.io/5954093",
//     integrations: [new Integrations.BrowserTracing()],

//     // Set tracesSampleRate to 1.0 to capture 100%
//     // of transactions for performance monitoring.
//     // We recommend adjusting this value in production
//     tracesSampleRate: 1.0,
// });

export const App: React.FC = () => {
    const { loading, error } = useUserQuery({ fetchPolicy: "network-only" })

    return (
        <ChakraProvider>
            <Toaster />
            <React.Suspense fallback={<Spinner />}>
                <Router>
                    <Switch>
 
                        <Route path={ROUTES.SIGN_UP} component={SignUp} />
                        <Route path={ROUTES.SIGN_IN} component={SignIn} />
                        <Route path={ROUTES.RESET_PASSWORD} component={ResetPassword} />
                        <Route path={ROUTES.PROJECT} component={Project} />
                        <Route path={ROUTES.PROJECT_TEAM} component={Project} />
                        <Route path={ROUTES.HELP} component={Project} />
                        <Route component={Page404}/>
                     </Switch>
                </Router>
            </React.Suspense>
        </ChakraProvider>
    )
}
export default App
