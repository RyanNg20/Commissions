import styles from "../styles/Prices.module.css"
import Image from "next/image"
import { inria } from "./fonts"
import bg from "../../public/4.png"

const Prices = ({pageN}) => {

  const bustImages = [
    {src:"/4.png", height: 320, width: 320, alt:"picture of orange-haired girl"},
    {src:"/3.png", height:320, width:356, alt:"picture of Ryo Yamada"},
    {src:"/5.png", height:320, width:320, alt:"picture of blue-haired girl"},
    {src:"/6.png", height:320, width:320, alt:"picture of neko girl"},
  ]

  return (
    <div className={styles.pricesWrapper} style={{height: pageN == 1?500:0, opacity: pageN == 1?1:0}}>
      <h3 className={`${inria.className}`}>Busts: $30</h3>
      <div className={styles.bustWrapper}>
        {bustImages.map(({src, height, width, alt}) => {
          return (
            <Image
              src={src}
              height={height}
              width={100}
              alt={alt}
              style={{objectFit: 'cover', margin: '0px 10px 0px 0px'}}
              className={styles.bustImage}
              quality={75}
              key={src}
            />
            // <div className={styles.bustImage} style={{backgroundImage: `url(/4.png)`}}/>
          )
        })}
      </div>
      <h3 className={`${inria.className}`}>Thigh-Up: $40</h3>
      <div className={`${styles.thighWrapper}`}>
        {/* <Image src="/1.png" height={320} width={320} alt="picture of girl in red"/>
        <Image src="/2.png" height={320} width={356} alt="picture of picture of girl in sweater"/> */}
      </div>
    </div>
  )
}

export default Prices