import styles from "../styles/Prices.module.css"
import Image from "next/image"
import { inria } from "./fonts"

const Prices = ({pageN}) => {


  return (
    <div className={styles.pricesWrapper} style={{height: pageN == 1?700:0, opacity: pageN == 1?1:0, width: pageN == 1?700:0}}>
      <h3 className={`${inria.className}`}>Busts: $30</h3>
      <div className={styles.bustWrapper}>
        <Image src="/4.png" height={320} width={320}/>
        <Image src="/3.png" height={320} width={356}/>
        <Image src="/5.png" height={320} width={320}/>
        <Image src="/6.png" height={320} width={320}/>
      </div>
      <h3 className={`${inria.className}`}>Thigh-Up: $40</h3>
      <div className={`${styles.thighWrapper}`}>

      </div>
    </div>
  )
}

export default Prices