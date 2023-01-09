import styles from "./Questions.module.css";

function Questions() {
  return (
    <div className={styles.questions}>
      <h2 className={styles.title}>Preguntas y respuestas</h2>
      <div className={styles.questionsubtitle}>
        <h3 className={styles.subtitle}>¿Qué querés saber?</h3>
        <ul className={styles.list}>
          <li>Costo y tiempo de envío</li>
          <li>Devoluciones gratis</li>
          <li>Medios de pago y promociones</li>
          <li>Garantía</li>
        </ul>
      </div>
      <div className={styles.qa}>
        <p className={styles.makequestion}>Preguntale al vendedor</p>
        <form className={styles.form}>
          <input type="text" placeholder="Escribí tu pregunta..." className={styles.text} />
          <input type="submit" value="Preguntar" className={styles.button} />
        </form>
      </div>
      <div className={styles.container}>
        <h3>Últimas realizadas</h3>
        <span>
          <p style={{ color: "black" }}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit
            voluptates sed in perspiciatis placeat quo laborum, culpa, adipisci
            eius eaque magnam, sunt ullam veniam incidunt quae illo iste iure
            natus?
          </p>
          <p style={{ color: "gray" }}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos ad,
            numquam atque quis maxime dolores adipisci voluptates. Harum
            laboriosam quis, libero dolores cupiditate ipsum, omnis ab maxime
            vel dolor tempore! Facilis distinctio vitae temporibus, dolorum
            quidem explicabo quos sunt ipsam culpa aliquam repudiandae tempore?
            Dolorum, eius minima? Consectetur error, similique eveniet sed
            adipisci, cumque at quibusdam provident officia soluta aut? Non
            optio deserunt numquam eius sequi voluptas reprehenderit quo ab
            possimus atque repudiandae illo ipsum, quia, necessitatibus
            laudantium mollitia accusamus modi vero adipisci architecto earum
            hic consequatur, nesciunt repellat? Sequi.
          </p>
        </span>
        <span>
          <p style={{ color: "black" }}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit
            voluptates sed in perspiciatis placeat quo laborum, culpa, adipisci
            eius eaque magnam, sunt ullam veniam incidunt quae illo iste iure
            natus?
          </p>
          <p style={{ color: "gray" }}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos ad,
            numquam atque quis maxime dolores adipisci voluptates. Harum
            laboriosam quis, libero dolores cupiditate ipsum, omnis ab maxime
            vel dolor tempore! Facilis distinctio vitae temporibus, dolorum
            quidem explicabo quos sunt ipsam culpa aliquam repudiandae tempore?
            Dolorum, eius minima? Consectetur error, similique eveniet sed
            adipisci, cumque at quibusdam provident officia soluta aut? Non
            optio deserunt numquam eius sequi voluptas reprehenderit quo ab
            possimus atque repudiandae illo ipsum, quia, necessitatibus
            laudantium mollitia accusamus modi vero adipisci architecto earum
            hic consequatur, nesciunt repellat? Sequi.
          </p>
        </span>
        <span>
          <p style={{ color: "black" }}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit
            voluptates sed in perspiciatis placeat quo laborum, culpa, adipisci
            eius eaque magnam, sunt ullam veniam incidunt quae illo iste iure
            natus?
          </p>
          <p style={{ color: "gray" }}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos ad,
            numquam atque quis maxime dolores adipisci voluptates. Harum
            laboriosam quis, libero dolores cupiditate ipsum, omnis ab maxime
            vel dolor tempore! Facilis distinctio vitae temporibus, dolorum
            quidem explicabo quos sunt ipsam culpa aliquam repudiandae tempore?
            Dolorum, eius minima? Consectetur error, similique eveniet sed
            adipisci, cumque at quibusdam provident officia soluta aut? Non
            optio deserunt numquam eius sequi voluptas reprehenderit quo ab
            possimus atque repudiandae illo ipsum, quia, necessitatibus
            laudantium mollitia accusamus modi vero adipisci architecto earum
            hic consequatur, nesciunt repellat? Sequi.
          </p>
        </span>
      </div>
    </div>
  );
}

export default Questions;
