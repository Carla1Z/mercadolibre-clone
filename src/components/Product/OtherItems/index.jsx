import styles from "./OtherItems.module.css";

function OtherItems() {
  return (
    <div className={styles.otheritems}>
      <h2 className={styles.title}>Publicaciones del vendedor</h2>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.image}>
            <img
              src="https://media.istockphoto.com/id/187111148/es/foto/womans-galardonado-con-el-premio-four-diamond-y-anillo-de-boda-de-platino.jpg?s=612x612&w=0&k=20&c=Ie7sSWaRo6duqzRyfD1J8VQEXAX-vJLxtug-bjaQcRQ="
              alt="card"
            />
          </div>
          <div className={styles.info}>
            <h4>$3.500</h4>
            <p className={styles.cuotas}>
              Mismo precio en 3 cuotas de $1.166.67
            </p>
            <p className={styles.description}>Anillo Solitario Plata 925</p>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.image}>
            <img
              src="https://media.istockphoto.com/id/1397240229/es/foto/boda.jpg?s=612x612&w=0&k=20&c=FJ11MwNSqeWGo7Vw4I80BKZADL0ZuuBdS-VEKXY1Hto="
              alt="card"
            />
          </div>
          <div className={styles.info}>
            <h4>$3.500</h4>
            <p className={styles.cuotas}>
              Mismo precio en 3 cuotas de $1.166.67
            </p>
            <p className={styles.description}>
              Alianzas Oro 18k Casamiento Compromiso
            </p>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.image}>
            <img
              src="https://media.istockphoto.com/id/686175324/es/vector/de-anillo.jpg?s=612x612&w=0&k=20&c=zU8yDYSux924gKm3jpX2lc6DLeBZtPZShYy1u10E3OQ="
              alt="card"
            />
          </div>
          <div className={styles.info}>
            <h4>$4.500</h4>
            {/* <p className={styles.cuotas}>cuotas</p> */}
            <p className={styles.description}>Anillo Solitario Oro 18 K</p>
          </div>
        </div>
      </div>
      <p className={styles.more}>Ver más publicaciones del vendedor</p>
    </div>
  );
}

export default OtherItems;
