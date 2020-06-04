import React from "react";

const Nav = () => {
  return (
    <>
      <ul style={styles.container}>
        <li>Account</li>
      </ul>
    </>
  );
};

const styles = {
  container: {
    listStyle: "none",
    display: "flex",
    justifyContent: "space-between",
    marginRight: "20px",
  },
};

export default Nav;
