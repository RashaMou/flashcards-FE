import React from "react";
import Nav from "../components/nav/Nav";
import AppMenu from "../components/appMenu/AppMenu";

const Header = () => {
  return (
    <>
      <div style={styles.container}>
        <h1 style={styles.header}>
          <span style={styles.header.first}>Dev</span>
          <span style={styles.header.second}>Cards</span>
        </h1>
        <Nav />
      </div>
      <AppMenu />
    </>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "grey",
    alignItems: "baseline",
  },
  header: {
    marginLeft: "20px",
    first: {
      color: "pink",
      fontWeight: "bolder",
    },
    second: {
      color: "yellow",
    },
  },
};

export default Header;
