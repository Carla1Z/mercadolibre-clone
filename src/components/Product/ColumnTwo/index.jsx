import styles from "./ColumnTwo.module.css";
import Buy from "../Buy";
import SellerInfo from "../SellerInfo";
import PurchaseInfo from "../PurchaseInfo";

function ColumnTwo() {
  return (
    <div className={styles.column}>
      <Buy />
      <SellerInfo />
      <PurchaseInfo />
    </div>
  );
}

export default ColumnTwo;
