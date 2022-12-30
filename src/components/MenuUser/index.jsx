import React from "react";
import styles from "./MenuUser.module.css";
import { HiOutlineUserCircle } from "react-icons/hi";
import { IoNotificationsOutline } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";

function MenuUser() {
  return (
    <div className={styles.menuuser}>
      <ul className={styles.list}>
        <li className={styles.user}>
          <HiOutlineUserCircle />
          <p>Carla</p>
        </li>
        <li>Mis compras</li>
        <li>Favoritos</li>
        <li>
          <IoNotificationsOutline />
        </li>
        <li>
          <FiShoppingCart />
        </li>
      </ul>
    </div>
  );
}

export default MenuUser;
