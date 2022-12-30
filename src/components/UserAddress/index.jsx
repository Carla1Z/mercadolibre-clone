import React from "react";
import { FiMapPin } from "react-icons/fi";
import styles from "./UserAddress.module.css";

function UserAddress() {
  return (
    <div className={styles.useraddress}>
      <FiMapPin className={styles.icon} />
      <span>
        <p className={styles.user}>Enviar a Carla</p>
        <p className={styles.address}>Av Siempreviva</p>
      </span>
    </div>
  );
}

export default UserAddress;
