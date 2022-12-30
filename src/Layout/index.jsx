import React from "react";
import NavList from "../components/NavList";
import Product from "../components/Product";
import Header from "../Header";
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
