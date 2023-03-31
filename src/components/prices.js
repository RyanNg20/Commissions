import styles from "../styles/Prices.module.css"
import Image from "next/image"
import { inria } from "./fonts"
import { useState } from "react"

const Prices = ({pageN}) => {

  const bustImages = [
    {src:"/4.webp", height: 320, width: 320, alt:"picture of orange-haired girl"},
    {src:"/3.webp", height:320, width:356, alt:"picture of Ryo Yamada"},
    {src:"/5.webp", height:320, width:320, alt:"picture of blue-haired girl"},
    {src:"/6.webp", height:320, width:320, alt:"picture of neko girl"},
  ]

  const thighImages = [
    {src:"/1.webp", height: 500, width: 320, alt:"picture of girl in cape"},
    {src:"/2.webp", height: 500, width: 320, alt:"picture of girl in sweater"},
  ]

  return (
    <div className={styles.pricesWrapper} style={{height: pageN == 1?500:0, opacity: pageN == 1?1:0}}>
      <h3 className={`${inria.className}`} style={{padding: '20px 0px'}}>Busts: $30</h3>
      <div className={styles.bustWrapper}>
        {bustImages.map(({src, height, width, alt}, index) => {
          return (
            <div className={styles.imageWrapper} key={src}>
              <Image
                src={src}
                height={height}
                width={100}
                alt={alt}
                style={{objectFit: 'cover', padding: '0px 10px 0px 0px'}}
                className={styles.bustImage}
                quality={60}
                sizes={height}
                blurDataURL="/blur4.png"
              />
            </div>
            // <div className={styles.bustImage} style={{backgroundImage: `url(/4.webp)`}}/>
          )
        })}
      </div>
      <h3 className={`${inria.className}`} style={{padding: '20px 0px'}}>Thigh-Up: $40</h3>
      <div className={`${styles.thighWrapper}`}>
        {thighImages.map(({src, height, width, alt}, index) => {
          return (
            <div className={styles.imageWrapper} key={src}>
              <Image
                src={src}
                height={height}
                width={100}
                alt={alt}
                style={{objectFit: 'cover', padding: '0px 10px 0px 0px'}}
                className={styles.bustImage}
                quality={75}
                sizes={height}
              />
            </div>
            // <div className={styles.bustImage} style={{backgroundImage: `url(/4.webp)`}}/>
          )
        })}
      </div>
    </div>
  )
}

export default Prices