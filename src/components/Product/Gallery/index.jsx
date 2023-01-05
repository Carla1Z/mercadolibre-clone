import styles from "./Gallery.module.css";

function Gallery() {
  return (
    <div className={styles.gallery}>
      <div className={styles.container}>
        <div className={styles.small}>
          <img
            src="https://images.unsplash.com/photo-1589674781759-c21c37956a44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="articulo"
          />
        </div>
        <div className={styles.small}>
          <img
            src="https://images.unsplash.com/photo-1603561591411-07134e71a2a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
            alt="articulo"
          />
        </div>
        <div className={styles.small}>
          <img
            src="https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="articulo"
          />
        </div>
        <div className={styles.small}>
          <img
            src="https://images.unsplash.com/photo-1598560917807-1bae44bd2be8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
            alt="articulo"
          />
        </div>
        <div className={styles.small}>
          <img
            src="https://images.unsplash.com/photo-1586104237516-5b7075e00d45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="articulo"
          />
        </div>
        <div className={styles.small}>
          <img
            src="https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=786&q=80"
            alt="articulo"
          />
        </div>
        <div className={styles.small}>
          <img
            src="https://images.unsplash.com/photo-1603561589155-91da49cfa8d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
            alt="articulo"
          />
        </div>
        <div className={styles.small}>
          <img
            src="https://images.unsplash.com/photo-1589674574101-bb9ebf36ffc5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="articulo"
          />
        </div>
      </div>
      <div className={styles.image}>
        <img
          src="https://images.unsplash.com/photo-1589674781759-c21c37956a44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt="articulo"
        />
      </div>
    </div>
  );
}

export default Gallery;
