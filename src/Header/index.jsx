import Menu from "../components/Menu";
import MenuUser from "../components/MenuUser";
import SearchBar from "../components/SearchBar";
import UserAddress from "../components/UserAddress";
import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.headersearch}>
        <img
          src="https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/5.21.17-beta-2/mercadolibre/logo_mundial_large_plus.png"
          alt="logo"
          className={styles.logo}
        />
        <SearchBar />
        <img
          src="https://http2.mlstatic.com/D_NQ_887100-MLA50801817839_072022-OO.webp"
          alt="disney"
          className={styles.disney}
        />
      </div>
      <div className={styles.menu}>
        <UserAddress />
        <Menu />
        <MenuUser />
      </div>
    </div>
  );
}

export default Header;
