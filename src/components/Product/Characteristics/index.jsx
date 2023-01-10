import styles from "./Characteristics.module.css";

function Characteristics() {
  return (
    <div className={styles.characteristics}>
      <h2 className={styles.title}>Características principales</h2>
      <table className={styles.table}>
        <tr>
          <th>Fabricante</th>
          <td>Carla</td>
        </tr>
        <tr>
          <th>Marca</th>
          <td>Carla</td>
        </tr>
        <tr>
          <th>Modelo</th>
          <td>Anillo con oro y plata</td>
        </tr>
        <tr>
          <th>Material</th>
          <td>Oro y plata</td>
        </tr>
      </table>
      <h3 className={styles.subtitle}>Otras características</h3>
      <div className={styles.othercharacteristics}>
        <ul>
          <li>
            <span className={styles.negrita}>Tipo de anillo:</span> Solitario
          </li>
          <li>
            <span className={styles.negrita}>Estilos:</span> solitario+,con oro
          </li>
        </ul>
        <ul>
          <li>
            <span className={styles.negrita}>Con piedra:</span> Sí
          </li>
          <li>
            <span className={styles.negrita}>Tipos de piedras:</span> cubic
          </li>
        </ul>
        <ul>
          <li>
            <span className={styles.negrita}>Pureza del metal:</span> 925
          </li>
          <li>
            <span className={styles.negrita}>Edad:</span> Adultos
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Characteristics;
