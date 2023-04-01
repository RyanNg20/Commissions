import styles from "../styles/Prices.module.css"
import Image from "next/image"
import { inria } from "./fonts"
import { useState } from "react"

const Prices = ({pageN, windowWidth}) => {

  const bustImages = [
    {src:"/4.webp", alt:"picture of orange-haired girl"},
    {src:"/3.webp", alt:"picture of Ryo Yamada"},
    {src:"/5.webp", alt:"picture of blue-haired girl"},
    {src:"/6.webp", alt:"picture of neko girl"},
    {src:"/10.webp", alt:"picture of girl in ocean"},
    {src:"/11.webp", alt:"picture of hatsune"},
    {src:"/13.webp", alt:"picture of brown-haired girl"},
  ]

  const thighImages = [
    {src:"/1.webp", alt:"picture of girl in cape"},
    {src:"/2.webp", alt:"picture of girl in sweater"},
    {src:"/7.webp", alt:"picture of girl in bikini"},
    {src:"/12.webp", alt:"picture of girl in bikini"},
  ]

  return (
    <div className={styles.pricesWrapper} style={{height: pageN == 1?'calc(100vh - 380px - 3rem)':0, opacity: pageN == 1?1:0}}>
      <h5>Note: these are base prices and may change</h5>
      <h3 className={`${inria.className}`} style={{padding: '20px 0px'}}>Busts: $30</h3>
      <div className={styles.bustWrapper}>
        {bustImages.map(({src, alt}) => {
          return (
            <div className={styles.imageWrapper} key={src}>
              <Image
                src={src}
                height={windowWidth >= 500?320:200}
                width={windowWidth >= 500?320:200}
                alt={alt}
                style={{objectFit: 'cover'}}
                className={styles.priceImage}
                quality={60}
                sizes={320}
                blurDataURL="/blur4.png"
                loading="eager"
              />
            </div>
            // <div className={styles.bustImage} style={{backgroundImage: `url(/4.webp)`}}/>
          )
        })}
      </div>
      <h3 className={`${inria.className}`} style={{padding: '20px 0px'}}>Thigh-Up: $40</h3>
      <div className={`${styles.thighWrapper}`}>
        {thighImages.map(({src, alt}) => {
          return (
            <div className={styles.imageWrapper} key={src}>
              <Image
                src={src}
                height={windowWidth >= 500?500:280}
                width={windowWidth >= 500?320:200}
                alt={alt}
                style={{objectFit: 'cover'}}
                className={styles.priceImage}
                quality={75}
                sizes={500}
                loading="eager"
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