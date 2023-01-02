import styles from "./NavList.module.css"

function NavList() {
  return (
    <div className={styles.navlist}>
      <p className={styles.back}>Volver al listado</p>
<nav>
  <ol>
    <li>Joyas y Relojes</li>
    <li>Joyas y Bijouterie</li>
    <li>Anillos</li>
  </ol>
</nav>
    </div>
  )
}

export default NavList