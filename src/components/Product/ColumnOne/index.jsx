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
      <br/>
      <OtherItems /> 
      <br/>
      <Characteristics />
      <br/>
      <Description />
      <br/>
      <Questions />
      <br/>
      <Reviews />
      </div>
  )
}

export default ColumnOne