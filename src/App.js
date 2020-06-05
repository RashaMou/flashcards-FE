import React from "react";
import { Switch } from "react-router";
import "./App.css";
import DeckList from "./components/decks/DeckList";
import CardList from "./components/cards/CardList";

function App() {
  return (
    <div>
      <div className="page-container" style={styles.container}>
        <Switch>
          <CardList />
          <DeckList />
        </Switch>
      </div>
    </div>
  );
}

export default App;

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
  },
};
