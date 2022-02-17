import React from "react";
import { Switch, Route } from "react-router-dom";
import LoginForm from "./auth/LoginForm";
import SignupForm from "./auth/SignupForm";
import StoryTile from "./StoryTile";
import BusinessPage from "./BusinessPage";
import SciencePage from "./SciencePage";
import SportsPage from "./SportsPage";
import HealthPage from "./HealthPage";
import TechPage from "./TechPage";

/** Site-wide routes.
 *
 * Parts of site should only be visitable when logged in. Those routes are
 * wrapped by <PrivateRoute>, which is an authorization component.
 *
 * Visiting a non-existant route redirects to the homepage.
 */

function Routes({ login, signup }) {
  console.debug(
    "Routes",
    `login=${typeof login}`,
    `register=${typeof register}`
  );

  return (
    <div className="pt-5">
      <Switch>
        <Route exact path="/">
          <StoryTile></StoryTile>
        </Route>

        <Route exact path="/login">
          <LoginForm login={login} />
        </Route>

        <Route exact path="/signup">
          <SignupForm signup={signup} />
        </Route>
        <Route exact path="/">
          <StoryTile></StoryTile>
        </Route>
        <Route exact path="/business">
          <BusinessPage></BusinessPage>
        </Route>
        <Route exact path="/science">
          <SciencePage></SciencePage>
        </Route>
        <Route exact path="/sports">
          <SportsPage></SportsPage>
        </Route>
        <Route exact path="/tech">
          <TechPage></TechPage>
        </Route>
        <Route exact path="/health">
          <HealthPage></HealthPage>
        </Route>
        <Route exact path="/login">
          <LoginForm login={login} />
        </Route>

        <Route exact path="/signup">
          <SignupForm signup={signup} />
        </Route>
      </Switch>
    </div>
  );
}

export default Routes;
