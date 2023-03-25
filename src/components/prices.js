import styles from "../styles/Prices.module.css"
import Image from "next/image"
import { inria } from "./fonts"

const Prices = ({pageN}) => {


  return (
    <div className={styles.pricesWrapper} style={{height: pageN == 1?700:0, opacity: pageN == 1?1:0, width: pageN == 1?700:0}}>
      <h3 className={`${inria.className}`}>Busts: $30</h3>
      <div className={styles.bustWrapper}>
        <Image src="/4.png" height={320} width={320} alt="picture of a orange-haired girl"/>
        <Image src="/3.png" height={320} width={356} alt="picture of ryo yamada"/>
        <Image src="/5.png" height={320} width={320} alt="picture of a cat girl"/>
        <Image src="/6.png" height={320} width={320} alt="picture of a idk"/>
      </div>
      <h3 className={`${inria.className}`}>Thigh-Up: $40</h3>
      <div className={`${styles.thighWrapper}`}>

      </div>
    </div>
  )
}

export default Prices