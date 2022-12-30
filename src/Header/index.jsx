import SearchBar from "../components/SearchBar"
import styles from "./Header.module.css"

function Header() {
  return (
    <div className={styles.header}>
      <img src="https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/5.21.17-beta-2/mercadolibre/logo_mundial_large_plus.png" alt="logo" className={styles.logo} />
      <SearchBar />
      <img src="https://http2.mlstatic.com/D_NQ_887100-MLA50801817839_072022-OO.webp" alt="disney" className={styles.disney} />
    </div>
  )
}

export default Header