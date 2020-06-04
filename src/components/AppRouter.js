import React from "react";
import { Route } from "react-router";
import LandingPage from "../LandingPage/LandingPage";
import Login from "../components/authentication/Login";
import App from "../App";

const AppRouter = () => {
  return (
    <div>
      <Route exact path="/" component={App} />
      <Route exact path="/home" component={LandingPage} />
      <Route path="/login" component={Login} />
    </div>
  );
};

export default AppRouter;
