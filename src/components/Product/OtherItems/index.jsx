import styles from "./OtherItems.module.css";

function OtherItems() {
  return (
    <div className={styles.otheritems}>
      <h2 className={styles.title}>Publicaciones del vendedor</h2>
      <div className={styles.container}>
        <div className={styles.card}>
          <img src="" alt="card" />
        </div>
        <div className={styles.card}>
          <img src="" alt="card" />
        </div>
        <div className={styles.card}>
          <img src="" alt="card" />
        </div>
      </div>
      <p className={styles.more}>Ver más publicaciones del vendedor</p>
    </div>
  );
}

export default OtherItems;
