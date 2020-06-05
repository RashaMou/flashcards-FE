import React from "react";
import { Route } from "react-router";
import LandingPage from "../LandingPage/LandingPage";
import Login from "../components/authentication/Login";
import DeckList from "../components/decks/DeckList";
import CardList from "../components/cards/CardList";
import App from "../App";

const AppRouter = () => {
  return (
    <div>
      <Route exact path="/" component={App} />
      <Route exact path="/home" component={LandingPage} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/decks" component={DeckList} />
      <Route exact path="/cards" component={CardList} />
    </div>
  );
};

export default AppRouter;
