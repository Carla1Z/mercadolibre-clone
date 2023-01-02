import React from "react";
import NavList from "../components/NavList";
import Header from "../Header";
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
