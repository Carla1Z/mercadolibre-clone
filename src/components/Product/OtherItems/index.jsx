import styles from "./OtherItems.module.css";

function OtherItems() {
  return (
    <div className={styles.otheritems}>
      <h2 className={styles.title}>Publicaciones del vendedor</h2>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.image}>
            <img src="https://media.istockphoto.com/id/187111148/es/foto/womans-galardonado-con-el-premio-four-diamond-y-anillo-de-boda-de-platino.jpg?s=612x612&w=0&k=20&c=Ie7sSWaRo6duqzRyfD1J8VQEXAX-vJLxtug-bjaQcRQ=" alt="card" />
          </div>
          <div className={styles.info}>
            <h4>$3500</h4>
            <p className={styles.cuotas}>cuotas</p>
            <p className={styles.description}>descripcion</p>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.image}>
            <img src="https://images.pexels.com/photos/6358515/pexels-photo-6358515.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="card" />
          </div>
          <div className={styles.info}>
            <h4>$3500</h4>
            <p className={styles.cuotas}>cuotas</p>
            <p className={styles.description}>descripcion</p>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.image}>
            <img src="https://images.unsplash.com/photo-1602751584581-2e0372975b46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=777&q=80" alt="card" />
          </div>
          <div className={styles.info}>
            <h4>$3500</h4>
            <p className={styles.cuotas}>cuotas</p>
            <p className={styles.description}>descripcion</p>
          </div>
        </div>
      </div>
      <p className={styles.more}>Ver más publicaciones del vendedor</p>
    </div>
  );
}

export default OtherItems;
