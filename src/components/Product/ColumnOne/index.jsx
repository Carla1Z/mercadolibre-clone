import Gallery from "../Gallery"
import OtherItems from "../OtherItems"
import Characteristics from "../Characteristics"
import Description from "../Description"
import Questions from "../Questions"
import Reviews from "../Reviews"
import styles from "./ColumnOne.module.css"

function ColumnOne() {
  return (
    <div className={styles.column}>
      <Gallery />
      <hr/>
      <OtherItems /> 
      <hr/>
      <Characteristics />
      <hr/>
      <Description />
      <hr/>
      <Questions />
      <hr/>
      <Reviews />
      </div>
  )
}

export default ColumnOne