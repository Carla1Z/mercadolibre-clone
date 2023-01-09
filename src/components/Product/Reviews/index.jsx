import styles from "./Reviews.module.css";
import ReactStars from "react-stars";
import { AiFillStar } from "react-icons/ai";
import { SlOptionsVertical } from "react-icons/sl";
import { BsHandThumbsUp, BsHandThumbsDown } from "react-icons/bs";

function Reviews() {
  return (
    <div className={styles.reviews}>
      <h2 className={styles.title}>Opiniones del producto</h2>
      <div className={styles.container}>
        <div className={styles.rating}></div>
        <div className={styles.userreview}>
          <div className={styles.order}>
            <select>
              <option hidden>Ordernar</option>
              <option>Mas útiles</option>
              <option>Más recientes</option>
            </select>
            <select>
              <option hidden>Calificación</option>
              <option>Todas</option>
              <option>
                5
                <AiFillStar />
              </option>
              <option>
                4
                <AiFillStar />
              </option>
              <option>
                3<AiFillStar />
              </option>
              <option>
                2
                <AiFillStar />
              </option>
              <option>
                1
                <AiFillStar />
              </option>
            </select>
          </div>
          <div className={styles.reviewsection}>
            <span className={styles.review}>
              <div className={styles.headercomment}>
                <ReactStars
                  count={5}
                  value={3}
                  size={20}
                  char={<AiFillStar />}
                  edit={false}
                  color2={"#3483fa"}
                />
                <p className={styles.date}>06 jul. 2021</p>
              </div>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim
              similique atque quod at architecto, ex totam ut, vero assumenda,
              incidunt quo dolores quam provident. Aut quo fugiat nihil saepe
              in!
              <button>
                Es útil <BsHandThumbsUp /> 8
              </button>
              <button>
                <BsHandThumbsDown />
              </button>
              <button>
                <SlOptionsVertical />
              </button>
            </span>
            <div className={styles.divider} />
            <span className={styles.review}>
              <div className={styles.headercomment}>
                <ReactStars
                  count={5}
                  value={3}
                  size={20}
                  char={<AiFillStar />}
                  edit={false}
                  color2={"#3483fa"}
                />
                <p className={styles.date}>06 jul. 2021</p>
              </div>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim
              similique atque quod at architecto, ex totam ut, vero assumenda,
              incidunt quo dolores quam provident. Aut quo fugiat nihil saepe
              in!
              <button>
                Es útil <BsHandThumbsUp /> 8
              </button>
              <button>
                <BsHandThumbsDown />
              </button>
              <button>
                <SlOptionsVertical />
              </button>
            </span>
            <div className={styles.divider} />
            <span className={styles.review}>
              <div className={styles.headercomment}>
                <ReactStars
                  count={5}
                  value={3}
                  size={20}
                  char={<AiFillStar />}
                  edit={false}
                  color2={"#3483fa"}
                />
                <p className={styles.date}>06 jul. 2021</p>
              </div>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim
              similique atque quod at architecto, ex totam ut, vero assumenda,
              incidunt quo dolores quam provident. Aut quo fugiat nihil saepe
              in!
              <button>
                Es útil <BsHandThumbsUp /> 8
              </button>
              <button>
                <BsHandThumbsDown />
              </button>
              <button>
                <SlOptionsVertical />
              </button>
            </span>
            <p className={styles.more}>Mostrar todas las opiniones</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
