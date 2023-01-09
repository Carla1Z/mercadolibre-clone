import styles from "./Characteristics.module.css";

function Characteristics() {
  return (
    <div className={styles.characteristics}>
      <h2 className={styles.title}>Características principales</h2>
      <table>
        <tr>
          <th>Fabricante</th>
          <td>Carla</td>
        </tr>
        <tr>
          <th>Fabricante</th>
          <td>Carla</td>
        </tr>
        <tr>
          <th>Fabricante</th>
          <td>Carla</td>
        </tr>
        <tr>
          <th>Fabricante</th>
          <td>Carla</td>
        </tr>
      </table>
      <h3 className={styles.subtitle}>Otras características</h3>
      <ul>
        <li>aaa</li>
        <li>bbb</li>
      </ul>
      <ul>
        <li>aaa</li>
        <li>bbb</li>
      </ul>
      <ul>
        <li>aaa</li>
        <li>bbb</li>
      </ul>
    </div>
  );
}

export default Characteristics;
