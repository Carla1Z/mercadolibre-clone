import styles from "./SearchBar.module.css";
import { TfiSearch } from "react-icons/tfi";

function SearchBar() {
  return (
    <div className={styles.searchbar}>
      <form action="" className={styles.form}>
        <input type="text" className={styles.input} />
        <button className={styles.search}>
          <TfiSearch />
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
