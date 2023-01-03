import styles from "./Gallery.module.css";

function Gallery() {
  return (
    <div className={styles.gallery}>
      <div className={styles.container}>
        <div className={styles.small}></div>
        <div className={styles.small}></div>
        <div className={styles.small}></div>
        <div className={styles.small}></div>
        <div className={styles.small}></div>
        <div className={styles.small}></div>
        <div className={styles.small}></div>
        <div className={styles.small}></div>
      </div>
      <div className={styles.image}></div>
    </div>
  );
}

export default Gallery;
