import { ChakraProvider } from "@chakra-ui/react";
import * as Integrations from "@sentry/integrations";
import * as Sentry from "@sentry/react";
import React, { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { lazily } from "react-lazily";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Page404 } from "./components/Page404";
import { Project } from "./components/Project";
import { Spinner } from "./components/Spinner";
import { EVENTS, ROUTES } from "./constants";
import { useProjectStore } from "./hooks/useStore";
import { UserDocument, UserQuery, useUserQuery } from "./queries/graphql";
import { apolloClient } from "./utils/apollo";
/**
 * Lazy Route
 */
const SignIn = React.lazy(() => import("./components/SignIn"));
const SignUp = React.lazy(() => import("./components/SignUp"));
const ResetPassword = React.lazy(() => import("./components/ResetPassword"));
const ConfirmResetPassword = React.lazy(
  () => import("./components/ConfirmResetPassword")
);
const { Team } = lazily(() => import("./components/Team"));
const Dashboard = React.lazy(() => import("./components/Dashboard"));

/**
 * Third parties API's
 */
Sentry.init({
  dsn: process.env.REACT_APP_SENTRY_DSN,
  integrations: [new Integrations.ReportingObserver()],
  tracesSampleRate: 1.0,
});

/**
 * App
 */
export const App: React.FC = () => {
  const projectTimeRange = useProjectStore((state) => state.projectTimeRange);
  const projectFeedbackType = useProjectStore(
    (state) => state.projectFeedbackType
  );
  console.log("APP");

  return (
    <ChakraProvider>
      <Toaster />
      <React.Suspense fallback={<Spinner />}>
        <Router>
          <Switch>
            <Route exact path={ROUTES.SIGN_UP} component={SignUp} />
            <Route exact path={ROUTES.SIGN_IN} component={SignIn} />
            <Route
              exact
              path={ROUTES.RESET_PASSWORD}
              component={ResetPassword}
            />
            <Route
              path={ROUTES.CONFIRM_RESET_PASSWORD}
              component={ConfirmResetPassword}
            />
            <Route exact path={ROUTES.PROJECT} component={Project} />
            <Route exact path={ROUTES.PROJECT_TEAM} component={Team} />
            <Route exact path={ROUTES.HELP} component={Project} />
            <Route component={Page404} />
          </Switch>
        </Router>
      </React.Suspense>
    </ChakraProvider>
  );
};
export default App;
