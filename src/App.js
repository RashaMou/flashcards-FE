import React from "react";
import "./App.css";
import Header from "./components/Header";
import Card from "./components/cards/Card";

function App() {
  return (
    <div>
      <Header />
      <div className="page-container">
        <Card />
      </div>
    </div>
  );
}

export default App;
