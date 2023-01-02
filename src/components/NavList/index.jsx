import styles from "./NavList.module.css";

function NavList() {
  return (
    <div className={styles.navlist}>
      <p className={styles.back}>Volver al listado</p>
      <nav>
        <ol className={styles.list}>
          <li>
            <p>Joyas y Relojes</p>
          </li>
          <li>
            <p>Joyas y Bijouterie</p>
          </li>
          <li>
            <p>Anillos</p>
          </li>
        </ol>
      </nav>
    </div>
  );
}

export default NavList;
