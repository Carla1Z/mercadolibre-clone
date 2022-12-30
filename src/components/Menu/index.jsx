import React from "react";
import styles from "./Menu.module.css";

function Menu() {
  return (
    <div className={styles.menu}>
      <ul className={styles.list}>
        <li>Categorías</li>
        <li>Ofertas</li>
        <li>Historial</li>
        <li>Supermercado</li>
        <li>Moda</li>
        <li>Vender</li>
        <li>Ayuda</li>
      </ul>
    </div>
  );
}

export default Menu;
