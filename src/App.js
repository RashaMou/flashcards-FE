import React from "react";
import "./App.css";
import Header from "./components/Header";
import FlashCard from "./components/cards/FlashCard";

function App() {
  return (
    <div>
      <Header />
      <div className="page-container" style={styles.container}>
        <FlashCard />
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
