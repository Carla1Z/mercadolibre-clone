import { AiFillHeart, AiFillStar, AiOutlineHeart } from "react-icons/ai";
import ReactStars from "react-stars";
import styles from "./Buy.module.css";

function Buy() {
  return (
    <div className={styles.buy}>
      <div className={styles.header}>
        <p className={styles.headerInfo}>Nuevo | 920 vendidos</p>
        <div className={styles.title}>
          <h1>Anillo Plata 925 Y Oro Con Piedra Muy Elegantes Delicados</h1>
          <button>
            <AiOutlineHeart />
          </button>
          {/* <button><AiFillHeart /></button> */}
        </div>
        <span className={styles.rating}>
          <ReactStars
            count={5}
            value={3}
            size={20}
            char={<AiFillStar />}
            edit={false}
            color2={"#3483fa"}
          />
          <p>(63)</p>
        </span>
      </div>
      <div className={styles.highlights}>
        <p>MÁS VENDIDO</p>
        <p>19° en Anillos</p>
      </div>
      <div className={styles.price}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={styles.shippingsummary}></div>
      <div className={styles.returnssummary}></div>
      <div className={styles.variations}></div>
      <div className={styles.stockinformation}></div>
      <div className={styles.availablequantity}></div>
      <div className={styles.mainactions}></div>
      <div className={styles.buybenefits}></div>
    </div>
  );
}

export default Buy;
