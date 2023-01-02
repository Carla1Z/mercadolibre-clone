import ColumnOne from "../components/Product/ColumnOne";
import ColumnTwo from "../components/Product/ColumnTwo";
import styles from "./Product.module.css";

function Product() {
  return (
    <div className={styles.product}>
      <ColumnOne />
      <ColumnTwo />
    </div>
  );
}

export default Product;
