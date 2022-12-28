import React from "react";
import Header from "../Header";
import NavList from "../NavList";
import Product from "../Product";
import styles from "./Layout.module.css";

function Layout() {
  return (
    <div>
      <div className={styles.container}>
        <Header />
      </div>
      <div className={styles.wrapper}>
        <NavList />
        <Product />
      </div>
    </div>
  );
}

export default Layout;
